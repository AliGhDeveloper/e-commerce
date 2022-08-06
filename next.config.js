/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: 'https://e-commerce-project-one.vercel.app'
  }
}

module.exports = nextConfig
