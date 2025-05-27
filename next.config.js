/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org','drive.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/file/d/**' // Allow all file URLs
      }
    ]
  }
}

module.exports = nextConfig
