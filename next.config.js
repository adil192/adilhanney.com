/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/saber-notes/**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/adil192/**',
            },
        ],
    },
}

module.exports = nextConfig
