/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Disable Webpack cache if you're facing caching issues
    config.cache = false;
    return config;
  },
};

export default nextConfig;

