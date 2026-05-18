// Định nghĩa kiểu dữ liệu cho params (Next.js 15+: params là Promise)
type Params = {
  params: Promise<{
    slug: string;
  }>;
};

// 1. Tạo Metadata (SEO) động dựa trên slug
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

// 2. Định nghĩa các slug tĩnh để Next.js biết đường tạo file HTML (Sửa lỗi Build)
export async function generateStaticParams() {
  // GIẢ QUYẾT: Thay mảng này bằng logic lấy danh sách bài viết thật của bạn (từ file markdown, API, v.v.)
  const posts = [
    { slug: 'bai-viet-1' },
    { slug: 'bai-viet-2' },
    { slug: 'bai-viet-3' },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 3. Giao diện (Component) chính của trang
export default async function Page({ params }: Params) {
  const { slug } = await params;
  return (
    <div>
      <h1>Slug: {slug}</h1>
      <p>Nội dung chi tiết của bài viết sẽ nằm ở đây...</p>
    </div>
  );
}