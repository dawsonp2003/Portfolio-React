/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for GitHub Pages (no image optimization server)
  },
  basePath: '/Portfolio-React',
  assetPrefix: '/Portfolio-React/',
};

module.exports = nextConfig;
