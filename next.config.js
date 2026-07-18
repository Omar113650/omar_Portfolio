/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: false,
  },

  // تجاهل أخطاء ESLint أثناء الـ Build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;