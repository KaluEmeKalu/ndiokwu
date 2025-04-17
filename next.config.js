/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  // GitHub Pages compatibility
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Disables image optimization for static export
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig; 