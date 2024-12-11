/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Disable Webpack cache if you're facing caching issues
    config.cache = false;

    // Add SVGR configuration
    config.module.rules.push({
      test: /\.svg$/, // Apply to SVG files
      use: [
        {
          loader: '@svgr/webpack', // Use SVGR Webpack loader
          options: {
            icon: true, // Enable icon mode for SVGs
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

