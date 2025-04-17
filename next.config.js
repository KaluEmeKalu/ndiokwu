/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Custom domain configuration for ndiokwu.org
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 