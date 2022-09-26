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
      'i.pravatar.cc',
      'cdn.pixabay.com'
    ]
  }
}

module.exports = nextConfig
