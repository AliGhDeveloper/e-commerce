/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: 'https://e-commerce-project-alighdeveloper.vercel.app/api'
  }
}

module.exports = nextConfig
