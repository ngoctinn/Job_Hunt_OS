# Job Hunt OS — Product Requirement Document

## 1. Ý tưởng

**Job Hunt OS** là một ứng dụng mobile giúp người đang tìm việc không bị mất dấu giữa nhiều cơ hội, nhiều phiên bản CV, nhiều nguồn tuyển dụng và nhiều bước tuyển dụng khác nhau.

Ứng dụng giúp người dùng:

* lưu nhanh một cơ hội việc làm;
* nhớ mình đã ứng tuyển ở đâu;
* giữ lại thông tin quan trọng của job;
* biết CV nào đã gửi;
* ghi lại những sự kiện quan trọng;
* biết việc cần làm tiếp theo;
* tìm lại toàn bộ context khi recruiter liên hệ;
* nhìn lại quá trình tìm việc của mình.

Job Hunt OS **không phải job board** và không tìm việc thay người dùng.

Có thể hiểu sản phẩm đơn giản là:

> **Một lớp ghi nhớ và quản lý bước tiếp theo cho quá trình tìm việc.**

Product principle:

> **Less CRM. More memory.**

---

# 2. Vấn đề muốn giải quyết

Người tìm việc thường phát hiện cơ hội từ nhiều nguồn:

* LinkedIn;
* Facebook;
* TopCV;
* ITviec;
* Glints;
* website công ty;
* group tuyển dụng;
* referral;
* recruiter chủ động liên hệ.

Khi chỉ có một vài application, người dùng có thể nhớ được.

Nhưng khi số lượng tăng lên, thông tin bắt đầu phân tán.

Ví dụ:

```text
Job A
→ lưu trong browser

Job B
→ thấy trên Facebook

Job C
→ đã gửi CV nhưng không nhớ gửi bản nào

Job D
→ recruiter gọi nhưng không nhớ JD

Job E
→ có interview nhưng bài đăng đã bị xóa

Job F
→ cần follow-up nhưng quên ngày
```

Người dùng bắt đầu phải trả lời những câu hỏi như:

> Mình đã apply công ty này chưa?

> Mình apply ngày nào?

> Job này lúc trước yêu cầu gì?

> Recruiter đang gọi về vị trí nào?

> Mình đã gửi CV nào?

> Application này đang chờ gì?

> Hôm nay mình cần làm gì?

> Công ty này đã phản hồi chưa?

> Mình đã interview mấy vòng?

> Kết quả cuối cùng là gì?

Hiện tại những thông tin này thường nằm rải rác trong:

* email;
* Google Sheets;
* Notes;
* Notion;
* Calendar;
* browser bookmark;
* screenshots;
* chat;
* trí nhớ.

---

# 3. Đối thủ thực tế

Đối thủ lớn nhất của Job Hunt OS không nhất thiết là một ứng dụng tuyển dụng khác.

Đối thủ thực tế là:

```text
Google Sheets
+
Email
+
Calendar
+
Notes
+
"Để lúc recruiter gọi rồi tính"
```

Google Sheets và Notion đã đủ khả năng để người dùng tự tạo application tracker.

Các sản phẩm như Huntr, Teal và Simplify cũng đã có nhiều chức năng:

* job tracking;
* saving JD;
* CV management;
* autofill;
* reminders;
* analytics;
* AI.

Vì vậy Job Hunt OS **không tạo đủ giá trị nếu chỉ là một tracker có giao diện đẹp hơn**.

Sản phẩm cần tạo khác biệt bằng:

1. ít thao tác hơn;
2. lấy lại context nhanh hơn;
3. không yêu cầu user duy trì một CRM phức tạp;
4. ưu tiên đúng những application đang có tiến triển.

---

# 4. Người dùng mục tiêu

## Nhóm người dùng chính

Sinh viên năm cuối và fresher tại Việt Nam đang tìm:

* internship;
* fresher position;
* junior position.

## Initial target

Nhóm phù hợp nhất để kiểm chứng sản phẩm ban đầu:

> **Sinh viên/fresher đang theo đuổi nhiều cơ hội việc làm song song qua nhiều nguồn và bắt đầu không còn nhớ rõ từng application.**

Ví dụ:

```text
20 applications
+
nhiều job boards
+
nhiều CV versions
+
recruiter gọi bất ngờ
+
nhiều interview đang diễn ra
```

Đây là target phù hợp hơn một định nghĩa rộng như:

> “Tất cả sinh viên đang tìm việc.”

---

# 5. Người không phải target chính

Một số người có thể không cần Job Hunt OS.

Ví dụ:

### Người chỉ apply rất ít vị trí

Nếu user chỉ có:

```text
3–5 applications
```

và nhớ được toàn bộ bằng email hoặc calendar, tracker riêng có thể không tạo đủ giá trị.

### Người không muốn track

Một số người chủ động chọn:

```text
Apply
↓
Forget
↓
Chỉ quan tâm khi employer phản hồi
```

Nếu Job Hunt OS yêu cầu họ cập nhật mọi application thường xuyên, sản phẩm có thể làm quá trình tìm việc mệt hơn.

---

# 6. Giá trị cốt lõi

Job Hunt OS cần giúp người dùng trả lời nhanh ba câu hỏi.

## 1. Tôi đang ứng tuyển những đâu?

Ví dụ:

```text
ABC
Backend Intern
Applied

XYZ
Mobile Intern
Technical Interview

DEF
Data Intern
Waiting
```

---

## 2. Tôi cần làm gì tiếp theo?

Ví dụ:

```text
Today

Prepare Technical Interview
ABC

Submit Coding Test
XYZ

Reply to Recruiter
DEF
```

---

## 3. Khi cần, tôi có nhớ đúng context không?

Ví dụ recruiter gọi:

> “Anh gọi từ ABC về vị trí Backend Intern em apply tuần trước.”

User mở Job Hunt OS và ngay lập tức thấy:

```text
ABC

Backend Intern

Applied:
18 Aug

Source:
LinkedIn

CV used:
backend-v3

JD:
Python
FastAPI
PostgreSQL

Last activity:
Applied

Next action:
None
```

Use case này được gọi là:

## **Instant Context Recall**

Đây là một trong những giá trị quan trọng nhất của sản phẩm.

---

# 7. Value proposition

Phiên bản ngắn:

> **Lưu một lần. Khi cần, nhớ đúng job, đúng CV và đúng bước tiếp theo.**

Phiên bản đầy đủ:

> Job Hunt OS giúp người đang apply nhiều nơi lưu lại context quan trọng của từng cơ hội và từng lần ứng tuyển, sau đó nhanh chóng biết mình đang ở đâu và cần làm gì tiếp theo mà không phải duy trì một spreadsheet hoặc CRM phức tạp.

---

# 8. Product philosophy

## Less CRM, more memory

Job Hunt OS không hướng tới việc biến người tìm việc thành người quản lý dữ liệu.

Người dùng không nên phải:

```text
điền 15 fields
↓
chọn 12 statuses
↓
update sau mỗi email nhỏ
↓
chăm tracker mỗi ngày
```

Sản phẩm nên ưu tiên:

```text
Capture once
↓
Log meaningful events only
↓
Always show next action
↓
Retrieve context when needed
```

---

# 9. Progressive Tracking

Không phải mọi application cần được quản lý chi tiết như nhau.

Đây là một nguyên tắc quan trọng của sản phẩm.

## Giai đoạn chưa có phản hồi

Tracking nên cực nhẹ.

Ví dụ chỉ cần:

```text
Company
Role
Source
JD
Applied date
CV used
```

Không cần ép user thêm interview notes, contacts hoặc các field chưa liên quan.

---

## Khi employer bắt đầu phản hồi

Application trở nên quan trọng hơn.

Lúc này app có thể mở thêm:

```text
Timeline
Interview
Assessment
Notes
Next Actions
Offer
```

Có thể hiểu:

```text
Silent application
→ lightweight tracking

Active application
→ deeper tracking
```

Mục tiêu là giảm tracking fatigue.

---

# 10. Core product loop

```text
Tìm thấy một job
        ↓
Lưu nhanh vào app
        ↓
Quyết định apply
        ↓
Mark Applied
        ↓
Nếu employer im lặng
→ gần như không cần làm gì
        ↓
Employer phản hồi
        ↓
Log meaningful event
        ↓
Create Next Action
        ↓
Interview / Assessment / Offer
        ↓
Close Application
        ↓
History được giữ lại
```

App không cần ép user tương tác mỗi ngày.

---

# 11. Các khái niệm nghiệp vụ chính

## Opportunity

Một cơ hội việc làm user đang quan tâm.

Ví dụ:

```text
ABC
Backend Intern
```

User có thể lưu Opportunity mà chưa apply.

---

## Application

Một lần người dùng thực sự theo đuổi một Opportunity.

Ví dụ:

```text
Backend Intern
ABC

Attempt #1
March
Rejected

Attempt #2
September
Applied
```

Hai lần này phải có history riêng.

---

## Event

Một việc **đã xảy ra**.

Ví dụ:

```text
Applied
Recruiter contacted
Interview completed
Assessment submitted
Offer received
Rejected
```

---

## Next Action

Một việc **chưa xảy ra** mà user cần làm.

Ví dụ:

```text
Follow up recruiter

Prepare interview

Complete assessment

Reply to offer
```

`Event` và `Next Action` không phải một thứ.

---

## JD Snapshot

Nội dung Job Description được giữ lại để user có thể xem sau.

JD snapshot có giá trị vì:

* bài đăng có thể hết hạn;
* link có thể bị xóa;
* user cần xem lại trước interview;
* recruiter có thể gọi khi user không nhớ role.

---

## CV Version

Phiên bản CV đã được dùng cho application.

Ví dụ:

```text
Backend-v3
```

Không bắt buộc user phải upload file trong MVP.

Có thể chỉ cần lưu tên/version.

---

# 12. Các quy tắc nghiệp vụ đã xác định

## Một job được lưu chưa có nghĩa là đã apply

```text
Saved
```

khác:

```text
Applied
```

---

## Một user có thể apply nhiều role trong cùng một công ty

Ví dụ:

```text
ABC

Backend Intern
Data Intern
Mobile Intern
```

Mỗi application được theo dõi riêng.

---

## User có thể apply lại

Ví dụ:

```text
Backend Intern
ABC

Attempt #1
Rejected

Attempt #2
6 months later
Applied
```

Không ghi đè history cũ.

---

## Không phải mọi process bắt đầu bằng Apply

Có thể:

```text
Recruiter contacted
↓
Interview
↓
Offer
```

Ứng dụng phải support recruiter inbound.

---

## Interview có thể có nhiều vòng

Ví dụ:

```text
HR Screen

Coding Test

Technical Interview

Team Interview

Final Interview
```

Không ép tất cả employer theo cùng một pipeline.

---

## Interview là event lặp lại được

Không nên chỉ có một trạng thái duy nhất:

```text
Interview
```

mà mất toàn bộ lịch sử.

---

## Không phản hồi không đồng nghĩa Rejected

Ví dụ:

```text
Applied:
01 Sep

Today:
20 Sep

No response
```

App có thể nói:

> 19 ngày chưa có hoạt động mới.

Nhưng không được tự kết luận:

> Rejected.

---

## Archived không phải kết quả tuyển dụng

Archive chỉ là cách user dọn giao diện.

Không được dùng Archive để tính rejection.

---

## Offer received không đồng nghĩa Accepted

Offer có thể:

```text
Pending
Accepted
Declined
Rescinded
```

---

## User là nguồn xác nhận cuối cùng

Trong MVP, app không tự thay đổi application state dựa trên email hoặc suy đoán.

---

# 13. Instant Context Recall

Đây là một use case quan trọng của MVP.

Scenario:

```text
Recruiter gọi bất ngờ
```

User search:

```text
ABC
```

Ứng dụng phải giúp user nhanh chóng thấy:

```text
Company
Role
Applied date
Source
JD
CV used
Last activity
Next action
Notes
```

Mục tiêu:

> Người dùng không phải tìm lại email, LinkedIn, Google Drive hoặc spreadsheet trong lúc đang nói chuyện với recruiter.

---

# 14. MVP Scope

## P0 — bắt buộc

### Quick Add Opportunity

User có thể tạo một cơ hội với tối thiểu:

```text
Company
Role
```

Có thể thêm:

```text
Source
URL
JD
Deadline
Notes
```

---

## Fast Capture

Ứng dụng nên hỗ trợ các cách nhập nhẹ nhất có thể:

```text
Manual
Paste URL
Paste JD
Share vào app
```

Không bắt buộc auto crawl website.

---

## Mark Applied

User có thể nhanh chóng ghi:

```text
Applied
```

và application date.

---

## JD Snapshot

User có thể lưu nội dung JD để xem lại sau.

---

## CV Version

User có thể ghi optional:

```text
CV used:
backend-v3
```

Không bắt buộc upload CV.

---

## Application Timeline

User có thể ghi meaningful events:

```text
Applied

Recruiter contacted

Assessment

Interview

Offer

Rejected
```

---

## Next Action

User có thể tạo:

```text
Prepare interview
Follow up
Complete assessment
Reply to recruiter
Reply to offer
```

và deadline.

---

## Fast Search

User phải có thể tìm application nhanh theo:

```text
Company
Role
```

để hỗ trợ Instant Context Recall.

---

## Explicit Closure

Khi process kết thúc, user ghi rõ lý do.

Ví dụ:

```text
Employer rejected

User withdrew

Position closed

No response — user chose to close

Offer accepted

Offer declined

Offer rescinded

Unknown
```

---

# 15. Home screen cần trả lời gì?

Home không nên chỉ là Kanban.

Câu hỏi chính:

> **Hôm nay có gì cần tôi chú ý?**

Ví dụ:

```text
TODAY

Technical interview
ABC
14:00

Submit assessment
XYZ
Due 18:00

Follow up recruiter
DEF
Overdue
```

Sau đó mới đến:

```text
Active Applications
```

và các overview khác.

---

# 16. Analytics

Analytics không phải trọng tâm P0.

Khi có đủ dữ liệu, app có thể cho user thấy:

```text
Applications
Responses
Reached Interview
Offers
```

Ví dụ:

```text
25 applications

11 responses

6 reached interview

2 offers
```

Đây chỉ là **dữ liệu mô tả**.

Không được kết luận:

> CV của bạn yếu.

Từ:

```text
25 applications
3 interviews
```

có thể có nhiều nguyên nhân:

* CV;
* target role;
* seniority;
* timing;
* competition;
* hiring freeze;
* market conditions;
* application quality.

Ứng dụng không biết chắc nguyên nhân.

---

# 17. AI

AI không phải requirement của MVP.

Nếu sau này AI được thêm vào, AI có thể hỗ trợ:

## JD extraction

Ví dụ:

```text
Python
PostgreSQL
Docker
AWS
```

---

## Requirement → Evidence mapping

```text
Python
→ Project A

PostgreSQL
→ Project B

Docker
→ No evidence

AWS
→ Project C
```

Mục tiêu là cho user biết:

> Requirement nào có evidence?

> Requirement nào chưa có?

Không ưu tiên:

```text
CV Match Score: 82%
```

nếu không giải thích được vì sao.

---

# 18. Những thứ không làm trong MVP

Không build:

* job marketplace;
* employer ATS;
* company review;
* salary database;
* social network;
* community;
* mentor marketplace;
* course platform;
* resume builder;
* cover letter generator;
* ATS score;
* generic AI chatbot;
* automatic rejection diagnosis;
* auto-apply;
* automatic recruiter messages;
* full recruiter CRM;
* complex custom workflows;
* complex analytics dashboard;
* automatic Gmail reading;
* automatic status inference;
* background scraping mọi job board.

---

# 19. Competitive constraints

## Google Sheets

Nếu Job Hunt OS mất nhiều thao tác ngang hoặc hơn Google Sheets, user không có lý do rõ để switch.

---

## Notion

Job Hunt OS không nên yêu cầu user tự thiết kế database hoặc workflow.

---

## Huntr

Job Hunt OS không nên trở thành:

> Huntr nhưng ít feature hơn.

Không cạnh tranh bằng feature count.

---

## Teal

Không ưu tiên resume optimization, ATS scores hoặc keyword matching trong MVP.

---

## Simplify

Simplify cho thấy value lớn của việc giảm manual input.

Job Hunt OS nên học nguyên tắc:

> **Một update user không phải nhập là update tốt nhất.**

Nhưng chưa cần xây browser autofill.

---

# 20. Constraints

## Mobile app

Sản phẩm được định hướng mobile-first.

Mobile phù hợp với:

```text
See job
→ Share

Recruiter calls
→ Search context

Interview tomorrow
→ Reminder

Receive response
→ Quick update
```

Mobile không phải moat một mình.

---

## Một developer có thể xây MVP

Mỗi feature phải trả lời:

> Nó có cần thiết để kiểm chứng core product value không?

Nếu không, defer.

---

## Không phụ thuộc network effect

Một user duy nhất vẫn phải nhận được full core value.

---

## Không phụ thuộc scraping

MVP không yêu cầu:

```text
Paste LinkedIn URL
→ backend tự crawl toàn bộ JD
```

User có thể:

* paste;
* share;
* nhập thủ công.

---

## Privacy

Sản phẩm có thể xử lý:

* CV;
* JD;
* application history;
* notes;
* recruiter information;
* email/phone nếu user lưu.

Chỉ thu thập dữ liệu cần thiết.

Không upload CV nếu chỉ cần lưu:

```text
Backend-v3
```

---

## Tracking friction

Đây là constraint sản phẩm quan trọng nhất.

Nếu user thấy việc cập nhật app giống:

> thêm một công việc hành chính,

core loop sẽ thất bại.

---

# 21. Success criteria

Không đánh giá product chỉ bằng:

```text
Downloads
Accounts created
```

Các signal quan trọng hơn:

## Capture

User lưu job thật vào app.

---

## Continued usage

User tiếp tục cập nhật nhiều application.

---

## Meaningful return

User quay lại khi:

* recruiter phản hồi;
* có interview;
* có assessment;
* cần chuẩn bị;
* cần follow-up.

---

## Context retrieval

User sử dụng app để tìm lại:

```text
JD
CV
Notes
History
```

---

## Next Action usage

User tạo và xử lý Next Actions.

---

## Reduced maintenance

User cảm thấy tracking nhẹ hơn workflow cũ.

Đây là một success criterion quan trọng.

---

# 22. Dấu hiệu product hypothesis sai

Cần xem xét lại dự án nếu user:

* tạo vài application rồi bỏ;
* không quay lại khi employer phản hồi;
* thấy việc update quá phiền;
* Google Sheets vẫn nhanh hơn;
* không cần JD snapshot;
* không cần context recall;
* không dùng Next Action;
* chỉ apply vài job và nhớ được;
* chỉ quan tâm CV optimization;
* chỉ quan tâm interview preparation;
* chỉ cần job discovery.

Nếu vậy không nên mặc định giải pháp là:

```text
Add AI
Add gamification
Add analytics
Add features
```

Có thể core problem chưa đủ lớn.

---

# 23. Giả thuyết sản phẩm

## Primary hypothesis

> Fresher đang apply nhiều cơ hội song song qua nhiều nguồn bắt đầu mất context giữa job descriptions, CV versions, recruiter conversations và lịch tuyển dụng.

## Solution hypothesis

> Nếu việc lưu và cập nhật đủ nhẹ, một mobile app tập trung vào context recall và next action có thể hữu ích hơn việc quản lý bằng email, spreadsheet và Notes rời rạc.

## Differentiation hypothesis

> Job Hunt OS có thể tạo lý do để switch nếu việc capture và lấy lại context nhanh hơn đáng kể so với Sheets/Notion, đồng thời nhẹ hơn các dedicated job-search platforms như Huntr, Teal và Simplify.

Các hypothesis trên chưa phải fact.

---

# 24. Thông tin chưa chắc chắn

## User có switch khỏi Sheets không?

Chưa xác định.

---

## Instant Context Recall có đủ mạnh để trở thành differentiator không?

Research cho thấy problem tồn tại.

Chưa có behavioral evidence rằng user sẽ cài app chỉ vì feature này.

---

## Next Action có phải return trigger mạnh nhất không?

Chưa xác định.

Các return triggers có thể là:

```text
Recruiter reply

Interview preparation

Follow-up

Job hunt session
```

---

## Mobile có tạo advantage đủ lớn không?

Chưa xác định.

Huntr cũng đã có native mobile app.

---

## CV version có đủ quan trọng với target Việt Nam không?

Có evidence community nhưng chưa biết mức sử dụng trong target cụ thể.

---

## Analytics có tạo retention không?

Chưa xác định.

---

## AI có cần thiết không?

Chưa xác định.

Không phải MVP requirement.

---

# 25. Prototype cần kiểm chứng điều gì?

Prototype đầu tiên không cần chứng minh toàn bộ sản phẩm.

Chỉ cần kiểm chứng ba điều.

## Test A — Capture

> User có lưu một job thật nhanh hơn workflow hiện tại không?

Flow:

```text
See job
↓
Share / Add
↓
Saved
```

---

## Test B — Recall

Giả lập:

> Recruiter gọi về một application user đã lưu.

User phải tìm lại được nhanh:

```text
Company
Role
JD
CV
Applied date
Latest activity
```

---

## Test C — Return

Giả lập hoặc quan sát:

> Employer vừa phản hồi.

User có thấy update Job Hunt OS dễ hơn:

```text
không track
```

hoặc:

```text
update Sheet/Notion
```

hay không?

---

# 26. Điều kiện để tiếp tục đầu tư

Nên tiếp tục build sâu nếu prototype cho thấy:

1. user thực sự lưu opportunity thật;
2. user quay lại khi có meaningful event;
3. context recall tạo value rõ;
4. Next Action được sử dụng;
5. maintenance effort thấp;
6. user bắt đầu dùng app thay vì workflow cũ cho ít nhất một phần quá trình tìm việc.

Nếu không đạt các tín hiệu này, cần revisiting core value trước khi xây thêm.

---

# 27. Định nghĩa ngắn gọn cuối cùng

Nếu phải giải thích Job Hunt OS cho một người chưa biết dự án:

> **Job Hunt OS là một ứng dụng mobile dành cho người đang tìm việc ở nhiều nơi cùng lúc. Ứng dụng giúp họ lưu lại job, nhớ mình đã gửi CV nào, giữ lại JD, theo dõi những việc quan trọng đã xảy ra và biết việc cần làm tiếp theo. Khi recruiter bất ngờ liên hệ, người dùng có thể nhanh chóng tìm lại toàn bộ context thay vì tìm trong email, browser, Notes hoặc spreadsheet.**

Sản phẩm không tìm việc thay người dùng.

Sản phẩm không hứa giúp họ chắc chắn được tuyển.

Sản phẩm giải quyết ba câu hỏi:

```text
Tôi đã apply những đâu?

Tôi cần làm gì tiếp theo?

Khi cần, tôi có nhớ đúng context không?
```

Nếu Job Hunt OS trả lời ba câu hỏi đó nhanh hơn và ít tốn công hơn các cách hiện tại, sản phẩm đang tạo ra giá trị.
