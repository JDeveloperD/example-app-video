/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [
      'localhost',
      'i.pravatar.cc'
    ]
  }
}

module.exports = nextConfig
