/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverActions: true,
  },
  trailingSlash: true,
  basePath: '/webinar-v2',
  assetPrefix: '/webinar-v2',
};

module.exports = nextConfig;
