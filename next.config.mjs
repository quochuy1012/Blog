/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Chỉ dùng static export khi build production
  // Khi dev, không dùng để tránh lỗi generateStaticParams
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
  }),
  trailingSlash: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
