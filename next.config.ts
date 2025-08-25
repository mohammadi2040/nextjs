/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false, // 🚨 فقط Pages Router فعال میشه
  },
};

module.exports = nextConfig;
