# 🌐 Hướng Dẫn Đưa Portfolio Lên GitHub Pages Miễn Phí (2 Phút)

Trang web portfolio này được thiết kế dành riêng cho **Hồ Văn Danh - .NET Backend Developer**, sử dụng công nghệ Web thuần (HTML5, CSS3, Vanilla JS) không cần bất kỳ công cụ build hay thư viện cồng kềnh nào. Bạn có thể đưa thẳng lên **GitHub Pages** để có link web cá nhân (ví dụ: `https://hovandanh.github.io`).

---

## 📁 Cấu Trúc Thư Mục
```
portfolio/
├── index.html           # File giao diện chính (chứa toàn bộ nội dung CV & Portfolio)
├── style.css            # File giao diện hiện đại (Dark/Light mode, hiệu ứng, responsive)
├── script.js            # File xử lý tương tác (bộ lọc kỹ năng, sơ đồ kiến trúc, copy clipboard)
├── Ho_Van_Danh_CV.pdf   # Bản PDF CV gốc (để nhà tuyển dụng tải về)
└── README.md            # Hướng dẫn này
```

---

## 🚀 Cách 1: Đưa Lên Bằng Giao Diện Web GitHub (Không cần gõ lệnh)

### Bước 1: Tạo Repository mới trên GitHub
1. Đăng nhập vào tài khoản [GitHub](https://github.com/).
2. Nhấn nút **New** (Tạo repository mới).
3. Đặt tên Repository:
   - **Tên đẹp nhất:** `<tên_github_của_bạn>.github.io` (Ví dụ: `hovandanh.github.io`).
   - Hoặc đặt tên bất kỳ: `portfolio`, `my-portfolio`.
4. Để chế độ **Public**.
5. Nhấn **Create repository**.

### Bước 2: Tải các file lên
1. Tại trang repository vừa tạo, nhấn nút **Add file** -> **Upload files**.
2. Kéo thả toàn bộ 4 file trong thư mục `portfolio/`:
   - `index.html`
   - `style.css`
   - `script.js`
   - `Ho_Van_Danh_CV.pdf`
3. Nhấn **Commit changes**.

### Bước 3: Bật GitHub Pages
1. Vào tab **Settings** của repository.
2. Ở thanh menu bên trái, tìm và chọn mục **Pages**.
3. Tại phần **Build and deployment**:
   - Source: Chọn `Deploy from a branch`.
   - Branch: Chọn nhánh `main` (hoặc `master`), thư mục chọn `/ (root)`.
4. Nhấn **Save**.
5. Đợi khoảng 1 - 2 phút, GitHub sẽ hiển thị đường link trang web của bạn:
   👉 **`https://<tên_github_của_bạn>.github.io/`**

---

## 💻 Cách 2: Đưa Lên Bằng Dòng Lệnh Git (Dành cho Developer)

Mở Terminal / PowerShell tại thư mục `d:\tmp\aa\portfolio` và chạy các lệnh sau:

```bash
# 1. Khởi tạo Git repository
git init

# 2. Thêm tất cả file
git add .

# 3. Commit
git commit -m "feat: init Ho Van Danh backend developer portfolio"

# 4. Đổi tên nhánh sang main
git branch -M main

# 5. Liên kết tới remote repo trên GitHub của bạn
git remote add origin https://github.com/<tai-khoan-github>/<tai-khoan-github>.github.io.git

# 6. Đẩy mã nguồn lên
git push -u origin main
```

Sau khi push xong, nếu đặt tên repo là `<tai-khoan-github>.github.io`, GitHub Pages sẽ tự động kích hoạt ngay lập tức!

---

## ✨ Điểm Nhấn Ấn Tượng Với Nhà Tuyển Dụng Trên Portfolio Này

1. **Giao Diện Công Nghệ Cao (Modern Dark/Light Tech Aesthetic):**
   - Mặc định Dark Mode phong cách lập trình viên cao cấp, có nút chuyển Light Mode tức thì.
   - Hiệu ứng ánh sáng nền mượt mà, typography chuẩn mực (Plus Jakarta Sans & JetBrains Mono).
2. **Terminal C# Code Showcase Trực Quan:**
   - Trực quan hóa một Service .NET 8 chuẩn Clean Architecture, xử lý giao dịch cơ sở dữ liệu kết hợp bắn sự kiện Kafka và SignalR Push.
3. **Mô Hình Kiến Trúc Tương Tác (Interactive Backend Architecture Showcase):**
   - Nhà tuyển dụng có thể click vào từng tầng hệ thống (Client Layer, ASP.NET Core API, Apache Kafka & SignalR, Database & Caching) để xem giải thích tư duy kỹ thuật chi tiết.
4. **Bộ Lọc Kỹ Năng Thông Minh (Interactive Skills Filter):**
   - Phân loại rõ ràng: Backend & .NET, Dữ liệu & Caching, Event & Real-time, Kiến trúc & Design, DevOps & Công cụ.
5. **Timeline Dự Án & Kinh Nghiệm Chi Tiết:**
   - Thể hiện chuẩn xác các phân hệ ERP lớn (Dự án xây dựng, kế hoạch vốn, giải ngân, sản lượng hợp đồng, hồ sơ thầu, nhân sự RBAC, WebGIS hierarchical trees với Apache AGE).
6. **Tiện Ích 1-Click Tuyển Dụng:**
   - Nút **Tải CV PDF** trực tiếp.
   - Nút **Sao chép Email / Số điện thoại** nhanh kèm thông báo Toast.
   - Form gửi lời mời phỏng vấn tự động tạo email chuẩn format.

---

## 📝 Cách Chỉnh Sửa Thông Tin Sau Này

- **Đổi thông tin liên hệ / mạng xã hội:** Mở file [index.html](file:///d:/tmp/aa/portfolio/index.html) và tìm các đoạn có số điện thoại `0978737826` hoặc email `hovandannh@gmail.com` để sửa.
- **Thêm dự án mới:** Sao chép thêm một khối `<div class="timeline-item">...</div>` trong phần `#experience` của `index.html`.
- **Cập nhật CV mới:** Chỉ cần ghi đè file PDF mới vào `Ho_Van_Danh_CV.pdf`.

