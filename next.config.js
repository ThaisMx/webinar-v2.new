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
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/webinar-v2',
          destination: '/'
        },
        {
          source: '/webinar-v2/:path*',
          destination: '/:path*'
        }
      ]
    };
  },
};

module.exports = nextConfig;
