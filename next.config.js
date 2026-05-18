/** @type {import('next').NextConfig} */
const nextConfig = {
    // BẮT BUỘC: Bật chế độ xuất toàn bộ web thành HTML tĩnh
    output: 'export',

    // KHUYÊN DÙNG: Tắt tối ưu hóa hình ảnh trên server của Next.js
    // (Vì GitHub Pages không có server Node.js để tự động nén ảnh)
    images: {
        unoptimized: true,
    },
};

export default nextConfig;