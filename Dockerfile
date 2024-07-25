# Sử dụng hình ảnh cơ sở Node.js v18 (hoặc phiên bản Node.js phù hợp)
FROM node:18 as builder

# Đặt thư mục làm việc là /app
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục /app
COPY . .

# Cài đặt các gói phụ thuộc
RUN npm install --f

# Xây dựng ứng dụng Angular
RUN npm run build

# Sử dụng hình ảnh Nginx để phục vụ ứng dụng đã xây dựng
FROM arm64v8/nginx:1.25.2-bookworm-perl

# Sao chép tệp cấu hình Nginx tùy chỉnh (nếu cần)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Sao chép tệp chứng chỉ và khóa riêng vào thư mục cấu hình của Nginx
COPY certificate.crt /etc/nginx/conf.d/certificate.crt
COPY private.key /etc/nginx/conf.d/private.key

# Sao chép tệp đã xây dựng từ bước trước vào thư mục web của Nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Mở cổng 80 để lắng nghe truy cập HTTP, 443 truy cập HTTPS
EXPOSE 80
EXPOSE 443

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]