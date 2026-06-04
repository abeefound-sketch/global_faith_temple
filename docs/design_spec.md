# GlobalFaith - Design & System Specification
Tài liệu này tổng hợp các phân tích, đề xuất thiết kế và kiến trúc hệ thống dựa trên việc nghiên cứu các nền tảng lịch sử/tưởng niệm hàng đầu và chiến lược xử lý hình ảnh A.I.

## 1. Phân tích tham khảo & Định hướng (Reference Analysis)
Hệ thống GlobalFaith sẽ là sự kết hợp của 5 triết lý từ các nền tảng tiêu biểu:
*   **Fields of Honor:** Cảm xúc & Cá nhân hóa. Giao diện (UI) lấy con người làm trung tâm, tôn nghiêm nhưng ấm áp.
*   **The Virtual Wall:** Cấu trúc thông tin phân lớp. Hồ sơ cá nhân minh bạch, tách biệt dữ liệu cốt lõi (hành chính) và dữ liệu cảm xúc (tưởng niệm).
*   **Vimy Foundation:** Trải nghiệm sống động. Tận dụng công nghệ hiện đại (interactive map, 3D/2.5D) để lôi cuốn người dùng trẻ.
*   **Polynational War Memorial:** Kiến trúc dữ liệu mở rộng. Sẵn sàng lưu trữ và truy xuất siêu dữ liệu toàn cầu.
*   **Asia War Graves:** Quản lý tài nguyên số hiệu quả. Xử lý kho ảnh khổng lồ, lập chỉ mục tốc độ cao.

## 2. Chiến lược Hình ảnh A.I (A.I Art Direction)
Vì toàn bộ hình ảnh được tạo bởi A.I, hệ thống cần giải quyết cảm giác "công nghiệp" và "giả tạo" (plastic look).

### 2.1. Khâu tạo ảnh (Prompt Engineering)
*   Sử dụng keyword về thiết bị/chất liệu nhiếp ảnh lịch sử: `shot on 35mm film, kodak portra 400, grainy, chiaroscuro lighting, double exposure, lithograph print`.
*   Tránh các keyword như: `hyper-realistic, 8k, unreal engine`.
*   Đề xuất: Sử dụng mô hình Stable Diffusion/ComfyUI kết hợp **LoRA** được huấn luyện riêng trên các tư liệu lịch sử thực tế để giữ phong cách nghệ thuật đồng nhất.

### 2.2. Xử lý Hậu kỳ Front-end (Post-Processing)
*   **CSS Filters:** Phủ lớp nhiễu hạt (film grain texture) hoặc áp dụng `mix-blend-mode` (Duotone/Monochrome) để đưa mọi bức ảnh về tone màu chủ đạo của thương hiệu.
*   **WebGL Distortion:** Áp dụng hiệu ứng méo ảnh (displacement map) khi hover/transition để đánh lừa thị giác khỏi các lỗi chi tiết nhỏ của A.I.
*   **Creative Framing:** Dùng `clip-path` hoặc SVG Masks để cắt ảnh thành các hình khối nghệ thuật thay vì khung chữ nhật truyền thống.

## 3. Trải nghiệm người dùng (UX/UI & Scrollytelling)
*   **Scrollytelling:** Tách lớp nhân vật và nền của ảnh A.I, áp dụng hiệu ứng Parallax khi cuộn trang để tạo chiều sâu không gian (2.5D).
*   **Smooth Scroll:** Bắt buộc áp dụng mượt cuộn trang (Smooth Scrolling) để mang lại cảm giác cao cấp và điện ảnh.
*   **Micro-animations:** Hiệu ứng xuất hiện mượt mà cho các đoạn text và card thông tin khi chúng lọt vào khung hình.

## 4. Kiến trúc Hệ thống & Dữ liệu (System & Data Architecture)
### 4.1. Cấu trúc Hồ sơ cá nhân (Profile Schema)
Chia làm 2 phân hệ rõ ràng:
1.  **Core Data (Dữ liệu lịch sử):** Họ tên, quê quán, cấp bậc, thời gian, sự kiện, vị trí địa lý. (Dữ liệu tĩnh, độ chuẩn xác cao).
2.  **Community/Emotional Data:** Lời tưởng nhớ, hình ảnh cộng đồng đóng góp, thư từ. (Dữ liệu động, có tính tương tác).

### 4.2. Xử lý Dữ liệu lớn & Hình ảnh (Scalability)
*   **Asset Management:** Lưu trữ ảnh trên CDN, tự động nén và chuyển đổi sang định dạng WebP/AVIF. Áp dụng Lazy-loading.
*   **Indexing & Search:** Gắn thẻ metadata phong phú (địa điểm, thời kỳ, tên, từ khóa mô tả) cho mỗi bức ảnh/hồ sơ để phục vụ thanh tìm kiếm toàn cầu.

## 5. Đề xuất Thư viện Kỹ thuật (Tech Stack & Open Source)
Để hiện thực hóa các yêu cầu cao cấp trên, ưu tiên sử dụng các thư viện mã nguồn mở sau:
*   **Hình ảnh & WebGL (Distortion/Transitions):**
    *   [GL Transitions](https://gl-transitions.com/)
    *   [WebGl__rgbKineticSlider](https://github.com/VivekTarsariya/WebGl__rgbKineticSlider)
*   **Cuộn trang & Scrollytelling (Smooth Scroll):**
    *   [Lenis (Studio Freight)](https://lenis.darkroom.engineering/) (Cho Smooth Scroll)
    *   [BSMNT Scrollytelling](https://github.com/basementstudio/scrollytelling) (Dành cho React/Next.js)
    *   [React Scrollama](https://github.com/jsonkao/react-scrollama)
*   **Hoạt ảnh chung (Animations):**
    *   [Framer Motion](https://www.framer.com/motion/) hoặc [GSAP (GreenSock)](https://gsap.com/) (Dành cho Micro-animations phức tạp).
