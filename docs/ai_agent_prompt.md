# Hướng Dẫn Dành Cho AI Agent (SOP) - Dự án GlobalFaith

Tài liệu này dùng để bạn (hoặc quản trị viên) copy/paste yêu cầu gửi cho một AI Coding Agent bất kỳ (như ChatGPT, Gemini, Claude, Cursor) khi muốn thêm dữ liệu vào website tĩnh GlobalFaith mà không cần biết lập trình.

---

## 1. Mẫu Lệnh Thêm Hồ Sơ Tử Sĩ Mới (Virtual Wall Profile)

**Hãy copy đoạn dưới đây và gửi cho AI:**

```text
Bạn là một lập trình viên duy trì website tĩnh GlobalFaith. 
Nhiệm vụ của bạn là thêm một hồ sơ tử sĩ mới vào trang `vi/memorial.html`.

THÔNG TIN TỬ SĨ MỚI:
- Tên: [Điền tên, VD: Trần Văn B]
- Cấp Bậc - Đơn Vị: [Điền cấp bậc, VD: Trung Úy - Biệt Động Quân VNCH]
- Sinh quán: [Điền sinh quán]
- Năm sinh: [Điền năm sinh]
- Trận đánh tham gia: [Điền trận đánh]
- Lời tưởng nhớ: [Điền lời tưởng nhớ hoặc để trống nếu không có]
- Link ảnh đại diện: [Điền link ảnh hoặc dùng placeholder Unsplash]

HƯỚNG DẪN THỰC THI:
Hãy chèn thông tin trên vào template HTML sau và thêm nó vào phía dưới khối `.bento-card` cuối cùng trong phần "Bức Tường Ảo (Virtual Wall)" của file `vi/memorial.html`.

[TEMPLATE HTML BẮT BUỘC SỬ DỤNG]
<div class="bento-card">
    <div class="arch-frame" style="aspect-ratio: 1/1; border-radius: 50%; clip-path: none; width: 150px; margin: 0 auto 1rem;">
        <div class="film-grain"></div>
        <img src="{LINK_ANH}" class="duotone-sepia" alt="Soldier Portrait" style="border-radius: 50%;">
    </div>
    <div style="text-align: center;">
        <h3 style="margin-bottom: 0.2rem; color: var(--accent-gold);">{TEN_TU_SI}</h3>
        <p style="font-family: var(--font-heading); color: var(--text-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem;">{CAP_BAC_DON_VI}</p>
    </div>
    <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; font-size: 0.9rem; color: var(--text-secondary);">
        <p><strong>Sinh quán:</strong> {SINH_QUAN}</p>
        <p><strong>Năm sinh:</strong> {NAM_SINH}</p>
        <p><strong>Trận đánh tham gia:</strong> {TRAN_DANH}</p>
    </div>
    <div style="margin-top: 1rem; background: var(--bg-primary); padding: 1rem; border-radius: 8px; font-style: italic; border-left: 3px solid var(--accent-gold);">
        "{LOI_TUONG_NHO}"<br>
        <span style="font-size: 0.8rem; color: var(--accent-gold);">- Cộng đồng mạng</span>
    </div>
</div>
```

---

## 2. Cách Tạo Bài Viết Sự Kiện / Tầm Nhìn Mới

**Hãy copy đoạn dưới đây và gửi cho AI:**

```text
Bạn là lập trình viên duy trì website tĩnh GlobalFaith.
Nhiệm vụ của bạn là thêm một phần nội dung (section) mới vào trang `vi/about.html` (hoặc `events.html`).

NỘI DUNG MỚI:
[Viết nội dung văn bản của bạn vào đây]

HƯỚNG DẪN THỰC THI:
Sử dụng class `.feature-split` và `.cinematic-text` để bọc nội dung. 
Tuân thủ đúng CSS Variables hiện có (`var(--accent-gold)`, `var(--text-secondary)`). 
Đảm bảo thêm thuộc tính GSAP fade-up vào thẻ section đó.
```
