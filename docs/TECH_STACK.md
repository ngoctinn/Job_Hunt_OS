# Báo cáo Kiến trúc & Quyết định Công nghệ

* **Dự án:** Job Hunt OS
* **Mã tài liệu:** `TECH-EVAL-001`
* **Trạng thái:** Đã phê duyệt
* **Phiên bản:** `2.1.0`

---

## 1. Bối cảnh và Ràng buộc kỹ thuật

Tài liệu này đánh giá và lựa chọn công nghệ dựa trên đặc thù thực tế của Job Hunt OS, kiên quyết loại bỏ các quyết định chạy theo phong trào hoặc khuyến nghị của vendor nếu không giải quyết được bài toán cụ thể.

### 1.1. Mục tiêu và Môi trường
* Xây dựng một MVP hoàn chỉnh trong vòng 2 đến 3 tuần gồm 2 thành phần:
  1. **Desktop Web App (kèm PWA/Mobile Responsive):** Bảng điều khiển quản lý pipeline, Kanban, timeline, xem JD snapshot và quản lý phiên bản CV.
  2. **Browser Extension (Chromium MV3):** Tiện ích nạp nhanh 1-click trực tiếp tại các trang tuyển dụng (TopCV, ITviec, LinkedIn, website công ty).
* Phải giảm tối đa thao tác nhập liệu để triệt tiêu nguyên nhân gây Tracking Fatigue.

### 1.2. Ràng buộc cố định
* **Solo Developer:** Duy nhất một kỹ sư thiết kế, lập trình và vận hành. Cấu hình hạ tầng tự động, tối giản hóa bảo trì.
* **Chi phí 0 USD & Tự chủ dữ liệu 100%:** Tự host backend trên phần cứng cá nhân (Mac Mini 2014 tại nhà), không tốn phí thuê VPS, không lo database bị pause như các gói Cloud Free Tier.
* **Kết nối an toàn từ xa:** Định tuyến qua Cloudflare Tunnel (`cloudflared`), không cần mở port modem, không cần IP tĩnh, tự động cấp SSL/TLS.
* **Manifest V3:** Extension bắt buộc chạy trên chuẩn Manifest V3 của Chromium. Service Worker có vòng đời ngắn (~30s), không có `window`, không có `localStorage`.
* **Row Level Security (RLS):** Dữ liệu ứng tuyển và file CV là thông tin nhạy cảm, bắt buộc phải phân quyền ở cấp độ cơ sở dữ liệu PostgreSQL.

---

## 2. Kiến trúc tổng thể

```text
               ┌────────────────────────────────────────────────────────┐
               │              JOB HUNT OS MONOREPO                      │
               │            (pnpm workspaces + Turborepo)               │
               └──────────────────────────┬─────────────────────────────┘
                                          │
        ┌─────────────────────────────────┴─────────────────────────────────┐
        ▼                                                                   ▼
┌──────────────────────────────┐                         ┌──────────────────────────────────────┐
│          apps/web            │                         │            apps/extension            │
│  Next.js (Client-first)      │                         │        WXT (Vite + React)            │
│  Tailwind CSS + shadcn/ui    │                         │  Manifest V3 Content Script          │
│  TanStack Query + Zustand    │                         │  Shadow DOM Isolation                │
└──────────────┬───────────────┘                         └──────────────────┬───────────────────┘
               │                                                            │
               │        ┌───────────────────────────────────────┐           │
               └───────►│            packages/shared            │◄──────────┘
                        │    Zod Schemas + TypeScript Types     │
                        └──────────────────┬────────────────────┘
                                           │
                                           ▼
                        ┌───────────────────────────────────────┐
                        │               BACKEND                 │
                        │    Self-Hosted Supabase on Mac Mini   │
                        │      (Docker Compose + Tunnel)        │
                        │  - PostgreSQL (Relational Data + RLS) │
                        │  - GoTrue Auth (Auto-confirm/Locked)  │
                        │  - Supabase Storage (Local SSD Volume)│
                        │  - Kong API Gateway (Port 8000)       │
                        └───────────────────────────────────────┘
```

---

## 3. Phân tích chi tiết từng thành phần

### 3.1. Quản lý Workspace: `pnpm` + `Turborepo`
* **Vấn đề giải quyết:** Tránh Schema Drift giữa Web App và Extension. Cả hai ứng dụng dùng chung các định dạng dữ liệu (Opportunity, Application, JDSnapshot, CVVersion) thông qua package nội bộ `packages/shared`. Mọi thay đổi schema đều được TypeScript kiểm tra ngay lúc compile ở cả 2 ứng dụng.
* **Trade-off:** Cần hiểu cơ chế workspace symlink của pnpm và cấu hình Turborepo pipeline ban đầu.
* **Anti-pattern tránh dùng:** Không dùng Nx hay Lerna vì sinh ra quá nhiều file cấu hình thừa thãi cho quy mô solo dev.

### 3.2. Browser Extension: `WXT` trên nền Manifest V3
* **Vấn đề giải quyết:** 
  1. Google Chrome đã ngừng hỗ trợ Manifest V2, bắt buộc dùng Manifest V3.
  2. Tự động bọc Shadow DOM cho UI inject vào trang tuyển dụng, tránh việc CSS của LinkedIn hay TopCV phá vỡ giao diện extension.
  3. Duy trì kết nối HMR ổn định khi phát triển, không bị đứt kết nối khi Service Worker rơi vào trạng thái ngủ.
* **So sánh:** Vượt trội hơn Plasmo (hiện ít được cập nhật và dùng Parcel hay lỗi ngầm) và CRXJS (chậm cập nhật khi Vite đổi major version). WXT dùng Vite chuẩn, cộng đồng duy trì rất tích cực.
* **Anti-pattern tránh dùng:** Không dùng `localStorage` trong Service Worker của Manifest V3 vì API này không tồn tại trong worker context.

### 3.3. Web App: `Next.js` theo hướng Client-First tối giản
* **Vấn đề giải quyết:**
  * Bảng điều khiển Job Hunt OS là một Dashboard riêng tư sau đăng nhập, hoàn toàn không cần SEO và không cần SSR phức tạp.
  * Toàn bộ UI Dashboard dùng Client Components kết hợp TanStack Query để quản lý cache bộ nhớ và thực hiện Optimistic Updates (kéo thả Kanban mượt mà 0ms).
  * Next.js cung cấp Route Handlers (`app/api/*`) làm API trung gian cho Extension gửi dữ liệu về, giúp solo dev không phải dựng thêm một backend server riêng biệt.
* **Anti-pattern tránh dùng:** Không ép buộc đưa Kanban board vào Server Components và lạm dụng `revalidatePath` sau mỗi lần kéo thả, gây giật lag giao diện.

### 3.4. Backend và Cơ sở dữ liệu: `Self-Hosted Supabase` (Mac Mini 2014)
* **Vấn đề giải quyết:**
  1. **Tự chủ dữ liệu & Chi phí 0 USD:** Tận dụng máy chủ cá nhân Mac Mini 2014 (Core i5, 8GB RAM, SSD 112GB + HDD 1TB) chạy Docker Compose. Không chịu rủi ro bị pause database sau 7 ngày không hoạt động như Supabase Cloud Free Tier.
  2. **Bảo mật RLS & Mô hình quan hệ:** PostgreSQL Row Level Security thực thi phân quyền trực tiếp tại nhân database. Giữ nguyên 100% độ tương thích với `@supabase/supabase-js`.
  3. **Auth tinh giản không cần SMTP:** Sử dụng `GOTRUE_MAILER_AUTOCONFIRM=true` để tự động kích hoạt tài khoản chính chủ, sau đó khóa đăng ký mới bằng `GOTRUE_DISABLE_SIGNUP=true` để biến instance thành Private Single-Tenant an toàn tuyệt đối.
  4. **Lưu trữ tệp PDF:** Sử dụng local volume của Storage API gắn trực tiếp trên SSD Mac Mini, sao lưu định kỳ qua n8n/cronjob lên HDD và Cloudflare R2.
* **Trade-off & Vận hành:**
  * Cần duy trì máy Mac Mini hoạt động 24/7 và ghim chặt (pin) tag version trong `docker-compose.yml` để tránh lỗi vỡ schema khi cập nhật.
* **Hạ tầng mạng:** Kết nối qua Cloudflare Tunnel (`cloudflared`), tự động có HTTPS/SSL, không cần mở port modem, hỗ trợ WebSockets cho Realtime.

### 3.5. Đồng bộ Xác thực giữa Web và Extension: Cookie Sharing Bridge
* **Vấn đề giải quyết:** Tránh bắt người dùng phải đăng nhập 2 lần (trên web và trên popup extension), đồng thời tránh lỗi popup extension tự đóng làm đứt luồng OAuth redirect.
* **Giải pháp:** Người dùng đăng nhập bình thường trên Web App. Extension đọc token phiên làm việc (`sb-access-token`) qua `chrome.cookies` API. Khi mở extension, tiện ích tự động nhận diện đã đăng nhập mà không cần thao tác thêm.

### 3.6. State Management và UI: `Zod` + `TanStack Query` + `Tailwind CSS` + `shadcn/ui`
* **Zod:** Khai báo một lần trong `packages/shared`, dùng chung cho validation ở Extension, API Route và Web Form.
* **TanStack Query:** Quản lý server state, deduplication request và hỗ trợ Optimistic Updates trên Kanban board.
* **Tailwind CSS + shadcn/ui:** Cung cấp mã nguồn component trực tiếp vào project, giao diện tối giản chuẩn phong cách Linear/Notion, bundle size cực nhẹ không làm nặng extension.

---

## 4. Ma trận tóm tắt công nghệ

| Thành phần | Lựa chọn | Lý do cốt lõi |
| :--- | :--- | :--- |
| **Workspace** | `pnpm` + `Turborepo` | Chia sẻ Zod schema và types trực tiếp, chống lệch dữ liệu giữa Web và Extension. |
| **Web App** | `Next.js` Client-first | Kiêm nhiệm Dashboard và API Route trung gian; kiểm soát tốt cache. |
| **Extension** | `WXT` (Vite, React, MV3) | HMR ổn định, tự động bọc Shadow DOM chống xung đột CSS với trang web chủ. |
| **Backend & DB** | `Self-Hosted Supabase` (Docker Compose on Mac Mini + Cloudflare Tunnel) | Mô hình quan hệ chuẩn, RLS ở nhân DB, tự chủ dữ liệu 100%, chi phí 0 USD vĩnh viễn. |
| **Auth Sync** | `chrome.cookies` Bridge | Đăng nhập một lần trên Web, Extension tự động nhận phiên. |
| **Validation** | `Zod` | Single Source of Truth cho cả kiểu dữ liệu TypeScript lẫn runtime parsing. |
| **State** | `TanStack Query` | Quản lý cache và Optimistic Updates cho Kanban mượt mà 0ms. |
| **UI** | `Tailwind` + `shadcn/ui` | Giao diện tối giản, kiểm soát 100% mã nguồn, bundle gọn nhẹ. |

---

## 5. Các điều kiện biên có thể làm thay đổi quyết định

* **Nếu người dùng bắt buộc dữ liệu phải lưu 100% cục bộ (Local-first):** Thay Supabase bằng SQLite chạy trên trình duyệt (IndexedDB / Dexie.js / SQLite WASM) và xuất file sao lưu thủ công.
* **Nếu có thêm kỹ sư backend riêng biệt:** Tách Web App thành React SPA tĩnh thuần túy (Vite) và dựng API server độc lập bằng Hono hoặc Go.
