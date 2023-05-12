/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['pbs.twimg.com', 'cdn.sanity.io'],
    },
}

module.exports = nextConfig
