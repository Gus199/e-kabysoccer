// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig


module.exports = {
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'localhost:3000',
        },
      ],
    },
  },
}