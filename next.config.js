/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: 'https://e-commerce-alighdeveloper.vercel.app/api'
  }
}

module.exports = nextConfig
