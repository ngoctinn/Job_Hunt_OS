# Job Hunt OS — Product Specification

> **Less CRM. More Memory.**  
> Công cụ tinh gọn gồm Web App và Browser Extension giúp người tìm việc không bị mất dấu cơ hội, phiên bản CV và tiến độ ứng tuyển mà không tốn công nhập liệu thủ công.

---

## 1. Vấn đề cần giải quyết

Người tìm việc, đặc biệt là sinh viên năm cuối và fresher, thường apply từ 20 đến 100+ vị trí cùng lúc qua nhiều nguồn như LinkedIn, TopCV, ITviec, Facebook và website tuyển dụng của doanh nghiệp. Họ luôn gặp 3 vấn đề lớn:

1. **Link JD bị xóa:** Khi nhà tuyển dụng liên hệ sau 2 đến 4 tuần, bài đăng gốc thường đã bị gỡ hoặc link báo 404. Ứng viên không còn nội dung mô tả công việc để chuẩn bị phỏng vấn.
2. **Hỗn loạn phiên bản CV:** Ứng viên nộp nhiều phiên bản CV khác nhau tùy theo vị trí (Backend, Frontend, Fullstack...) nhưng không nhớ chính xác mình đã gửi bản nào cho công ty nào.
3. **Tracking Fatigue:** Việc ghi chép thủ công trên Google Sheets, Notion hay các phần mềm CRM phức tạp đòi hỏi quá nhiều thao tác gõ phím. Người dùng thường nản và bỏ theo dõi chỉ sau 20 đến 30 đơn ứng tuyển.

---

## 2. Nền tảng và Mô hình vận hành

Hệ thống gồm 2 thành phần phối hợp:

* **Desktop Web App (kèm PWA/Mobile Responsive):**
  * Quản lý toàn bộ pipeline ứng tuyển dạng Kanban và danh sách tối giản.
  * Hiển thị danh sách việc cần làm trong ngày (Next Actions).
  * Tra cứu tức thì toàn bộ bối cảnh ứng tuyển, JD snapshot và phiên bản CV đã nộp (Instant Context Recall).
  * Hỗ trợ PWA trên di động để tra cứu nhanh khi nhận cuộc gọi hoặc trước giờ vào phỏng vấn.
* **Browser Extension (Chromium MV3):**
  * Fast Capture 1-click: Tự động nhận diện công ty, vị trí, URL và chụp trọn vẹn văn bản JD trực tiếp trên tab tuyển dụng.
  * Loại bỏ hoàn toàn thao tác copy-paste thủ công giữa các màn hình.

---

## 3. Danh mục tài liệu kỹ thuật

Toàn bộ tài liệu kỹ thuật của dự án nằm trong thư mục `docs/`:

* [**`docs/PRD.md`**](docs/PRD.md): Đặc tả yêu cầu sản phẩm, phạm vi MVP và Non-goals.
* [**`docs/TECH_STACK.md`**](docs/TECH_STACK.md): Báo cáo kiến trúc kỹ thuật và phân tích lựa chọn công nghệ.
* [**`docs/DATA_SCHEMA.md`**](docs/DATA_SCHEMA.md): Đặc tả cơ sở dữ liệu (PostgreSQL DDL, Row Level Security, Shared Zod schemas).
