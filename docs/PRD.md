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

## 3. Nguyên tắc thiết kế

1. **Less CRM, More Memory:** Không biến người dùng thành nhân viên nhập liệu. Hệ thống chỉ tập trung ghi nhớ những dữ liệu có ích khi cần nhớ lại.
2. **Progressive Tracking:** 
   * Khi mới nộp và chưa có phản hồi: Thu thập ở mức tối thiểu (Tên công ty, Vị trí, Link, Snapshot JD, Tên bản CV). Không bắt điền form dài dòng.
   * Khi nhà tuyển dụng bắt đầu phản hồi (Test, Phỏng vấn, Offer): Mới mở rộng thêm ghi chú vòng phỏng vấn và các hành động tiếp theo.
3. **Thao tác nhanh là ưu tiên số một:** Một cập nhật mà người dùng không phải gõ phím là cập nhật tốt nhất.

---

## 4. Phạm vi MVP

### Fast Capture
* **Extension:** Bấm 1 nút trên trang tuyển dụng $\rightarrow$ tự bóc tách thông tin và lưu toàn văn bản JD $\rightarrow$ chọn nhanh bản CV đã dùng $\rightarrow$ Lưu.
* **Web App:** Hỗ trợ dán URL hoặc dán trực tiếp text của JD, nhập tối thiểu 2 trường: Công ty và Vị trí.

### Quản lý Pipeline ứng tuyển
* 7 trạng thái chuẩn:
  * `saved`: Mới lưu, chưa nộp
  * `applied`: Đã nộp hồ sơ
  * `interviewing`: Đang phỏng vấn hoặc làm bài test
  * `offered`: Nhận được offer
  * `rejected`: Bị từ chối
  * `withdrawn`: Chủ động rút hồ sơ
  * `closed`: Đóng hồ sơ do không phản hồi hoặc vị trí bị hủy
* Cho phép nộp nhiều lần (Attempts) cho cùng một công ty hoặc nộp nhiều vị trí khác nhau mà không ghi đè lịch sử cũ.

### Instant Context Recall
* Ô tìm kiếm nhanh theo Tên công ty hoặc Vị trí, thời gian phản hồi dưới 100ms.
* Hiển thị tập trung trên một màn hình:
  * Tên công ty, Vị trí, Ngày nộp và Nguồn tuyển dụng.
  * JD Snapshot nguyên bản (lưu văn bản offline, không phụ thuộc link gốc).
  * Tên phiên bản CV đã nộp (ví dụ: `CV_Backend_v2.pdf`).
  * Lịch sử sự kiện gần nhất và hành động tiếp theo cần làm.

### Next Actions và Timeline
* Tạo việc cần làm có hạn chót: Chuẩn bị phỏng vấn, nộp bài test, gửi thư follow-up.
* Ghi log sự kiện đơn giản: Ngày phỏng vấn, người liên hệ, các câu hỏi cần nhớ.

---

## 5. Non-goals (Không làm trong MVP)

Để hoàn thành MVP đúng hạn trong 2 đến 3 tuần, dự án dứt khoát không xây dựng:

* Không làm Job Board và không tìm việc thay người dùng.
* Không làm tính năng tạo CV hay viết Cover Letter.
* Không làm tính năng chấm điểm CV hay đo độ khớp ATS bằng AI.
* Không làm Auto-apply hay tự động gửi email hàng loạt.
* Không làm mạng xã hội, diễn đàn review công ty hay khảo sát lương.
* Không tự động đọc hộp thư Gmail của người dùng.
* Không xây dựng native app iOS/Android trong giai đoạn đầu.

---

## 6. Tiêu chí thành công

1. **Tỷ lệ Capture thực tế:** Người dùng lưu job thường xuyên qua Browser Extension khi tìm việc trên máy tính.
2. **Tần suất mở app khi có phản hồi:** Khi nhà tuyển dụng liên hệ, người dùng mở app để tra cứu lại JD Snapshot và cập nhật trạng thái.
3. **Giảm tải thao tác:** Người dùng duy trì việc theo dõi hồ sơ mà không cảm thấy phiền phức như khi dùng Google Sheets.
