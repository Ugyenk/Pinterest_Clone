/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'firebasestorage.googleapis.com',
            'platform-lookaside.fbsbx.com' // <-- Add this line
        ]
    }
}

module.exports = nextConfig