# Job Hunt OS — Product Requirement Document

## 1. Ý tưởng

**Job Hunt OS** là một ứng dụng mobile giúp sinh viên và người mới đi làm quản lý quá trình tìm việc của mình.

Ứng dụng không phải nơi đăng tin tuyển dụng và cũng không tìm việc thay người dùng.

Thay vào đó, Job Hunt OS giúp người dùng tập hợp các cơ hội việc làm đang quan tâm vào một nơi, ghi lại những nơi đã ứng tuyển, biết từng đơn đang tiến triển thế nào, nhớ việc cần làm tiếp theo và nhìn lại toàn bộ quá trình tìm việc của mình.

Có thể hiểu đơn giản sản phẩm như:

> **Một nơi để quản lý hành trình tìm việc cá nhân.**

Thay vì thông tin nằm rải rác trong email, LinkedIn, Facebook, website tuyển dụng, ghi chú, spreadsheet và trí nhớ, người dùng có một nơi duy nhất để theo dõi.

---

# 2. Vấn đề muốn giải quyết

Khi bắt đầu tìm internship hoặc công việc đầu tiên, một người có thể tìm thấy cơ hội từ rất nhiều nguồn khác nhau:

- LinkedIn;
    
- Facebook;
    
- website công ty;
    
- TopCV;
    
- ITviec;
    
- Glints;
    
- các nhóm tuyển dụng;
    
- bạn bè giới thiệu;
    
- recruiter chủ động liên hệ.
    

Sau một thời gian, người dùng có thể đã xem hoặc ứng tuyển hàng chục vị trí.

Thông tin bắt đầu bị phân tán.

Ví dụ:

```text
Job A → lưu trong Chrome

Job B → thấy trên Facebook

Job C → đã gửi CV nhưng không nhớ ngày nào

Job D → recruiter gửi email

Job E → sắp phỏng vấn nhưng bài đăng gốc đã bị xóa

Job F → không nhớ mình đã gửi phiên bản CV nào
```

Khi đó người tìm việc thường gặp những câu hỏi như:

> Mình đã apply công ty này chưa?

> Job này lúc trước yêu cầu những gì?

> Công ty nào đang chờ phản hồi?

> Công ty nào mình nên follow-up?

> Tuần này mình có interview nào?

> Mình đã gửi CV nào cho công ty này?

> Mình thường bị dừng ở vòng nào?

> Mình đang apply rất nhiều nhưng thực sự có tiến triển không?

Hiện nay người dùng có thể tự giải quyết bằng:

- Google Sheets;
    
- Excel;
    
- Notion;
    
- Notes;
    
- Calendar;
    
- bookmark;
    
- screenshot;
    
- email;
    
- hoặc đơn giản là cố nhớ.
    

Những cách này có thể đủ với một số người.

Vì vậy, vấn đề Job Hunt OS cần giải quyết **không chỉ là tạo thêm một danh sách việc làm**.

Sản phẩm chỉ có giá trị nếu giúp việc quản lý quá trình tìm việc **nhẹ hơn và hữu ích hơn cách người dùng đang làm hiện tại**.

---

# 3. Người dùng mục tiêu

## Nhóm người dùng chính

Sinh viên năm cuối và người mới tốt nghiệp tại Việt Nam đang tìm:

- internship;
    
- fresher job;
    
- junior job.
    

## Nhóm nên dùng để kiểm chứng sản phẩm đầu tiên

Sinh viên năm cuối và fresher ngành công nghệ tại Việt Nam.

Lý do chọn nhóm này trước:

- thường phải ứng tuyển nhiều nơi;
    
- dễ tiếp cận để phỏng vấn và thử nghiệm sản phẩm;
    
- quy trình tuyển dụng thường có nhiều bước;
    
- CV, project, technical test và interview tạo ra nhiều thông tin cần theo dõi.
    

Đây là **phạm vi ban đầu để kiểm chứng**, không có nghĩa sản phẩm sau này chỉ dành cho ngành công nghệ.

---

# 4. Bối cảnh sử dụng

Người dùng sử dụng Job Hunt OS trong suốt quá trình tìm việc.

Một hành trình điển hình có thể như sau.

## Khi tìm thấy một công việc

Người dùng thấy:

> Backend Intern — Company A

trên LinkedIn.

Họ lưu cơ hội đó vào Job Hunt OS.

Ứng dụng giữ lại các thông tin cần thiết như:

```text
Company A

Backend Intern

Nguồn:
LinkedIn

Link:
...

Job description:
...

Deadline:
...
```

Người dùng chưa nhất thiết phải ứng tuyển ngay.

---

## Khi ứng tuyển

Sau khi gửi CV, người dùng đánh dấu:

```text
Đã ứng tuyển
07/09/2026
```

Nếu cần, họ có thể ghi:

```text
CV đã dùng:
Backend CV v3
```

---

## Khi recruiter phản hồi

Ví dụ recruiter gửi email mời screening.

Người dùng cập nhật:

```text
Recruiter đã liên hệ
```

và có thể tạo việc tiếp theo:

```text
Chuẩn bị HR interview

Deadline:
10/09
```

---

## Khi có phỏng vấn

Một đơn ứng tuyển có thể trải qua nhiều vòng.

Ví dụ:

```text
07/09
Applied

10/09
HR Interview

14/09
Technical Interview

18/09
Final Interview
```

Ứng dụng giữ toàn bộ lịch sử thay vì chỉ hiển thị một trạng thái cuối cùng.

---

## Khi quá trình kết thúc

Ví dụ:

```text
Rejected
```

hoặc:

```text
Offer received
```

Nếu nhận offer, người dùng vẫn có thể:

```text
Accept
Decline
```

Nhận offer không có nghĩa là người dùng đã nhận việc.

---

## Khi nhìn lại quá trình tìm việc

Sau một thời gian, người dùng có thể thấy:

```text
25 applications

11 responses

6 applications reached interview

2 offers
```

Mục đích là giúp người dùng hiểu **điều gì đã thực sự xảy ra**.

Ứng dụng không tự kết luận:

> “CV của bạn kém.”

chỉ vì số interview thấp.

---

# 5. Giá trị cốt lõi

Job Hunt OS cần giúp người dùng trả lời nhanh ba câu hỏi.

## 1. Tôi đang ở đâu?

Ví dụ:

```text
Company A
Technical interview

Company B
Waiting for response

Company C
Offer received

Company D
Need to follow up tomorrow
```

---

## 2. Tôi cần làm gì tiếp theo?

Ví dụ:

```text
Tomorrow
Follow up Company B

Friday
Prepare technical interview

Sunday
Submit coding assignment
```

---

## 3. Điều gì đang xảy ra trong quá trình tìm việc của tôi?

Ví dụ:

```text
30 applications

12 received responses

7 reached interview

1 reached offer
```

Sản phẩm giúp người dùng nhìn thấy dữ liệu.

Không giả vờ biết chắc nguyên nhân phía sau dữ liệu đó.

---

# 6. Cách sản phẩm hoạt động

Luồng chính của sản phẩm là:

```text
Tìm thấy một cơ hội việc làm
        ↓
Lưu vào Job Hunt OS
        ↓
Quyết định ứng tuyển
        ↓
Ghi lại việc đã ứng tuyển
        ↓
Ghi lại những sự kiện quan trọng
        ↓
Biết việc cần làm tiếp theo
        ↓
Nhận kết quả
        ↓
Đóng lần ứng tuyển
        ↓
Nhìn lại lịch sử
        ↓
Tiếp tục cơ hội tiếp theo
```

Điểm quan trọng là người dùng **không cần cập nhật mọi chi tiết nhỏ**.

Chỉ những sự kiện có ý nghĩa với họ mới cần được ghi lại.

---

# 7. Điều đã xác định

## 7.1. Đây không phải job board

Job Hunt OS không cần sở hữu danh sách việc làm riêng.

Người dùng vẫn có thể tìm việc ở:

- LinkedIn;
    
- Facebook;
    
- TopCV;
    
- ITviec;
    
- Glints;
    
- website công ty;
    
- hoặc bất kỳ nguồn nào khác.
    

Job Hunt OS bắt đầu tạo giá trị **sau khi người dùng tìm thấy một cơ hội**.

---

## 7.2. Một công việc được lưu chưa có nghĩa là đã ứng tuyển

Ví dụ:

```text
Backend Intern
Company A
```

có thể chỉ đang ở trạng thái:

```text
Đang quan tâm
```

Người dùng có thể:

- apply sau;
    
- hoặc quyết định không apply.
    

---

## 7.3. Một người có thể ứng tuyển nhiều vị trí tại cùng một công ty

Ví dụ:

```text
Company A

Backend Intern
Data Intern
Mobile Intern
```

Mỗi lần ứng tuyển cần được theo dõi riêng.

---

## 7.4. Một người có thể ứng tuyển lại

Ví dụ:

```text
Backend Intern
Company A

Lần 1:
Rejected — March

Lần 2:
Applied again — September
```

Lần ứng tuyển mới không được xóa hoặc ghi đè lịch sử cũ.

---

## 7.5. Không phải quá trình nào cũng bắt đầu bằng việc user chủ động apply

Có thể xảy ra:

```text
Recruiter liên hệ
↓
Candidate trao đổi
↓
Interview
```

Vì vậy sản phẩm cần hỗ trợ cả trường hợp recruiter chủ động tìm đến người dùng.

---

## 7.6. Interview có thể có nhiều vòng

Không giả định tất cả công ty đều có quy trình giống:

```text
Applied
↓
Interview
↓
Offer
```

Thực tế có thể là:

```text
Applied
↓
HR Screen
↓
Coding Test
↓
Technical Interview
↓
Team Interview
↓
Final Interview
↓
Offer
```

hoặc hoàn toàn khác.

Vì vậy các vòng interview được ghi vào lịch sử thay vì ép mọi công ty vào một quy trình cố định.

---

## 7.7. Việc chưa xảy ra và việc đã xảy ra là hai thứ khác nhau

Ví dụ:

```text
Technical interview
Friday 10:00
```

là một việc sắp xảy ra.

Sau khi interview xong mới trở thành:

```text
Technical interview completed
```

Điều này giúp lịch sử không bị sai.

---

## 7.8. Một application có thể có nhiều việc cần làm tiếp theo

Không chỉ có follow-up.

Ví dụ:

```text
Apply before deadline

Complete coding assignment

Prepare interview

Send follow-up

Reply to offer
```

Ứng dụng cần quản lý các việc này như **Next Actions**.

---

## 7.9. Không phản hồi không đồng nghĩa với bị từ chối

Ví dụ:

```text
Applied:
01/09

Today:
20/09

No response
```

Job Hunt OS có thể nói:

> Đã 19 ngày chưa có hoạt động mới.

Nhưng không được tự đổi thành:

> Rejected.

Chỉ người dùng hoặc thông tin rõ ràng từ employer mới xác nhận outcome.

---

## 7.10. Các lý do kết thúc cần được phân biệt

Ví dụ:

```text
Employer rejected

User withdrew

Position closed

No response — user decided to close

Offer accepted

Offer declined

Offer rescinded
```

Những trường hợp này không nên bị gộp chung thành `Rejected`.

---

## 7.11. Nhận offer không đồng nghĩa với nhận việc

Một offer có thể đang:

```text
Pending
Accepted
Declined
Rescinded
```

---

## 7.12. User là nguồn xác nhận cuối cùng

Trong MVP, ứng dụng không tự đoán trạng thái từ email, LinkedIn hoặc dữ liệu bên ngoài.

User xác nhận điều đã xảy ra.

---

## 7.13. Ứng dụng ưu tiên fact trước interpretation

Ví dụ app có thể nói:

> 3 trong 25 application của bạn đã đi tới interview.

App không được biến điều đó thành fact:

> CV của bạn có vấn đề.

Có rất nhiều nguyên nhân khác có thể dẫn đến cùng kết quả.

---

# 8. Những thông tin chính sản phẩm cần giữ

## Cơ hội việc làm

Ví dụ:

```text
Company
Role
Job description
Source
URL
Deadline
Notes
```

Không phải trường nào cũng bắt buộc.

---

## Lần ứng tuyển

Ví dụ:

```text
Ngày apply
Cách apply
CV đã gửi
Trạng thái hiện tại
Kết quả cuối cùng
```

---

## Lịch sử

Ví dụ:

```text
07/09
Applied

10/09
Recruiter contacted

12/09
HR interview

17/09
Technical interview

21/09
Offer received
```

---

## Việc cần làm

Ví dụ:

```text
Prepare technical interview

Due:
17/09
```

---

## Ghi chú

Ví dụ:

```text
Recruiter hỏi về Docker.

Technical interview hỏi về database indexing.

Cần xem lại Redis.
```

---

## CV hoặc tài liệu đã sử dụng

Không nhất thiết phải upload file trong MVP.

Có thể chỉ cần lưu:

```text
CV:
Backend CV v3
```

để user nhớ chính xác phiên bản đã gửi.

---

# 9. Phạm vi MVP

Phiên bản đầu tiên chỉ cần chứng minh rằng người dùng thật sự muốn duy trì workflow này.

## MVP cần có

### Lưu cơ hội việc làm

User nhập:

```text
Company
Role
```

và có thể thêm:

```text
URL
Job description
Source
Deadline
Notes
```

---

### Ghi nhận một lần ứng tuyển

User có thể nói:

```text
Tôi đã apply job này.
```

---

### Timeline

User có thể ghi các sự kiện quan trọng như:

```text
Applied

Recruiter responded

Interview

Assessment

Offer

Rejected
```

---

### Next Actions

User có thể tạo việc cần làm:

```text
Follow up

Prepare interview

Submit assignment

Reply to offer
```

và đặt deadline.

---

### Ghi kết quả cuối cùng

User có thể đóng application với lý do phù hợp.

---

### Danh sách tổng quan

User có thể nhanh chóng thấy:

```text
Đang active

Đang chờ

Sắp interview

Có việc cần làm

Đã kết thúc
```

---

### Thống kê cơ bản

Ví dụ:

```text
Applications:
25

Responses:
11

Reached interview:
6

Offers:
2
```

Chỉ mô tả dữ liệu.

---

# 10. Những thứ chưa làm trong MVP

Không xây:

- job marketplace;
    
- hệ thống đăng tuyển cho doanh nghiệp;
    
- social network;
    
- community;
    
- mentor marketplace;
    
- course platform;
    
- auto apply hàng loạt;
    
- tự gửi CV;
    
- tự nhắn recruiter;
    
- tự đọc toàn bộ email;
    
- tự thay đổi application status;
    
- tự crawl mọi website tuyển dụng;
    
- AI chấm CV theo điểm;
    
- “ATS score”;
    
- AI khẳng định nguyên nhân user bị reject;
    
- AI interview platform hoàn chỉnh;
    
- company review platform;
    
- salary database.
    

Những phần này chỉ được xem xét nếu core product đã chứng minh có giá trị.

---

# 11. AI

AI **không phải điều kiện để MVP tồn tại**.

Nếu sau này thêm AI, hướng ưu tiên là giúp user hiểu thông tin rõ hơn.

Ví dụ từ một JD:

```text
Job requires:

Python
PostgreSQL
Docker
AWS
```

và hồ sơ user:

```text
Python
→ Project A

PostgreSQL
→ Project B

Docker
→ chưa có evidence

AWS
→ Project C
```

Sản phẩm có thể giúp user thấy:

> Requirement nào đã có bằng chứng?

> Requirement nào chưa có?

Không ưu tiên kiểu:

```text
Your CV match score: 82%
```

nếu hệ thống không giải thích rõ 82% đó đến từ đâu.

AI cũng không được tự biến suy đoán thành sự thật.

---

# 12. Constraint

## Mobile app

Sản phẩm được định hướng là mobile app.

Mobile đặc biệt phù hợp với các hành động như:

```text
Thấy job
↓
Share / copy vào app

Nhận email
↓
Update trạng thái

Có interview
↓
Nhận reminder
```

---

## MVP phải đủ nhỏ để một developer xây

Không thiết kế sản phẩm dựa trên giả định rằng có một team lớn.

Mỗi feature mới phải trả lời được:

> Nó có cần thiết để kiểm chứng core value không?

---

## Không phụ thuộc network effect

Một người dùng duy nhất vẫn phải nhận được giá trị từ sản phẩm.

Sản phẩm không được cần:

```text
nhiều recruiter
nhiều employer
nhiều user khác
```

mới hoạt động.

---

## Không phụ thuộc vào việc crawl job board

User có thể:

- nhập thủ công;
    
- paste link;
    
- paste JD;
    
- share nội dung vào app nếu nguồn cho phép.
    

Không coi việc tự động scrape LinkedIn, Glints hoặc các nền tảng khác là requirement mặc định.

---

## Privacy là constraint bắt buộc

Sản phẩm có thể giữ những thông tin cá nhân như:

- CV;
    
- portfolio;
    
- application history;
    
- notes;
    
- email;
    
- thông tin recruiter.
    

Vì vậy sản phẩm phải hạn chế thu thập dữ liệu không cần thiết.

Nếu user tạo account, phải có cách để user yêu cầu xóa account và dữ liệu theo các yêu cầu pháp lý/platform áp dụng.

---

## Không bắt user nhập quá nhiều

Đây là một constraint quan trọng của sản phẩm.

Nếu mỗi job bắt user nhập:

```text
15 fields
```

hoặc mỗi email phải mở app update một lần, người dùng có khả năng bỏ tracker.

Sản phẩm phải ưu tiên:

```text
Lưu nhanh

Chỉ cập nhật sự kiện quan trọng

Luôn cho biết next action
```

---

# 13. Điều sản phẩm không hứa hẹn

Job Hunt OS không hứa:

> Dùng app sẽ chắc chắn có việc.

Không hứa:

> Dùng app sẽ tăng offer rate X%.

Không hứa:

> AI biết chính xác tại sao bạn bị reject.

Không hứa:

> Job nào app đánh giá cao thì bạn sẽ được tuyển.

Sản phẩm giúp user **quản lý và hiểu quá trình tìm việc tốt hơn**.

Quyết định tuyển dụng cuối cùng vẫn phụ thuộc vào employer và nhiều yếu tố bên ngoài.

---

# 14. Dấu hiệu sản phẩm đang tạo giá trị

Không nên đánh giá thành công chỉ bằng:

```text
Số lượt tải app
```

hoặc:

```text
Số account được tạo
```

Tín hiệu quan trọng hơn là hành vi thật.

Ví dụ:

### User lưu application thật

Không phải chỉ dùng dữ liệu demo.

### User quay lại khi có sự kiện mới

Ví dụ recruiter phản hồi hoặc có interview.

### User cập nhật nhiều application

Không chỉ tạo một application rồi bỏ app.

### User sử dụng Next Actions

Ví dụ:

```text
Follow up tomorrow
```

và quay lại xử lý.

### User dùng history để tìm lại context

Ví dụ trước interview họ mở lại:

```text
JD
CV đã gửi
Notes
Timeline
```

### User tiếp tục sử dụng app trong thời gian họ đang tìm việc

Đây là tín hiệu quan trọng nhất.

---

# 15. Dấu hiệu giả thuyết sản phẩm có thể sai

Cần xem xét lại ý tưởng nếu user:

- nhập vài job lúc đầu rồi không quay lại;
    
- thấy việc update application quá phiền;
    
- thích spreadsheet hiện tại hơn;
    
- chỉ apply 2–3 job nên không cần tracker;
    
- không quan tâm history;
    
- không sử dụng next actions;
    
- chỉ thực sự cần hỗ trợ CV;
    
- chỉ thực sự cần interview preparation;
    
- chỉ thực sự cần tìm job.
    

Nếu điều này xảy ra, không nên mặc định giải pháp là:

> thêm AI;

> thêm nhiều feature;

> thêm gamification.

Có thể vấn đề ban đầu đơn giản là chưa đủ lớn.

---

# 16. Thông tin chưa chắc chắn

Những điều dưới đây chưa được xem là fact.

## Người dùng có thật sự duy trì tracker không?

Đây là câu hỏi quan trọng nhất.

Research cho thấy tracking fatigue là một failure mode thực tế.

Cần kiểm chứng với user Việt Nam.

---

## IT có phải nhóm đầu tiên tốt nhất không?

Hiện tại IT được chọn vì thuận lợi cho validation.

Chưa có bằng chứng đủ để nói đây là vertical tốt nhất của toàn thị trường.

---

## Mobile có tốt hơn web đủ nhiều không?

Mobile có lợi thế về:

- share;
    
- reminder;
    
- update nhanh.
    

Nhưng cần prototype để biết user có thực sự thích workflow mobile hơn spreadsheet/web không.

---

## Funnel analytics có tạo giá trị lâu dài không?

Có thể user thích xem analytics một vài lần nhưng sau đó không còn quan tâm.

Cần đo bằng hành vi thực tế.

---

## CV version có cần nằm trong MVP đầu tiên không?

Concept này có giá trị rõ về mặt nghiệp vụ.

Nhưng chưa biết target users có customize CV đủ thường xuyên để nó trở thành feature bắt buộc ngay phiên bản đầu.

---

## AI có thực sự cần thiết không?

Chưa xác định.

AI chỉ nên được thêm nếu nó giải quyết một pain point đã được kiểm chứng.

---

# 17. Giả thuyết sản phẩm hiện tại

Giả thuyết cốt lõi là:

> Sinh viên và fresher đang tìm việc qua nhiều nguồn gặp khó khăn trong việc giữ lại context, trạng thái và việc cần làm tiếp theo của nhiều application.

Và:

> Nếu việc lưu và cập nhật đủ nhẹ, một ứng dụng mobile tập trung vào timeline và next action có thể hữu ích hơn việc quản lý bằng email, Notes và spreadsheet rời rạc.

Điều cần kiểm chứng không phải:

> User nói app có hay không.

Mà là:

> User có thực sự sử dụng nó trong quá trình tìm việc thật hay không.

---

# 18. Cách nên kiểm chứng dự án trước khi xây lớn

Chọn khoảng 8–12 sinh viên năm cuối hoặc fresher đang thực sự tìm việc.

Yêu cầu mỗi người lấy ra khoảng 5 application gần nhất.

Không hỏi:

> “Bạn có thích ý tưởng này không?”

Thay vào đó hỏi họ cho xem quá trình thật:

> Job này bạn tìm thấy ở đâu?

> Bạn apply khi nào?

> Bạn có còn JD không?

> Bạn nhớ CV nào đã gửi không?

> Công ty đã phản hồi gì?

> Bạn đang chờ gì?

> Bạn có việc gì cần làm tiếp không?

> Bạn lưu những thông tin này ở đâu?

> Có từng quên mình đã apply chưa?

> Có từng ngừng cập nhật spreadsheet không? Vì sao?

Sau đó cho họ sử dụng một prototype rất nhỏ:

```text
Add opportunity
↓
Mark applied
↓
Log event
↓
Add next action
↓
Close application
```

Điều quan trọng nhất cần quan sát là:

> Khi có sự kiện tuyển dụng thật xảy ra, họ có tự nhớ tới Job Hunt OS và quay lại cập nhật hay không?

Nếu có, dự án có tín hiệu tốt để tiếp tục.

Nếu không, cần tìm lại xem pain point thực sự nằm ở đâu trước khi xây thêm.

---

# 19. Định nghĩa ngắn gọn cuối cùng

Nếu cần giải thích Job Hunt OS cho một người chưa từng nghe về sản phẩm:

> **Job Hunt OS là ứng dụng giúp người đang tìm việc quản lý tất cả những nơi họ quan tâm hoặc đã ứng tuyển. Người dùng có thể lưu job, ghi lại khi đã apply, theo dõi các vòng tuyển dụng, nhớ việc cần làm tiếp theo, lưu lại CV hoặc ghi chú liên quan và cuối cùng nhìn lại quá trình tìm việc của mình. Sản phẩm không tìm việc thay người dùng và cũng không quyết định họ có phù hợp với công việc hay không; nó giúp quá trình tìm việc bớt rời rạc và dễ quản lý hơn.**

Nếu phải mô tả bằng ba câu hỏi:

```text
Tôi đang ứng tuyển những đâu?

Tôi cần làm gì tiếp theo?

Quá trình tìm việc của tôi đang diễn ra như thế nào?
```

Nếu Job Hunt OS trả lời tốt được ba câu hỏi đó mà không bắt người dùng phải “chăm sóc” một hệ thống phức tạp, sản phẩm đang đi đúng hướng.
