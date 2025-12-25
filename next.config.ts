




// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       // Your custom domains
//       { protocol: 'https', hostname: 'ourlittlelifestyle.com' },
//       { protocol: 'https', hostname: 't4.ftcdn.net' },
//       { protocol: 'https', hostname: 'www.shutterstock.com' },
      
//       // Popular free image sources
//       { protocol: 'https', hostname: 'images.unsplash.com' },
//       { protocol: 'https', hostname: 'images.pexels.com' },
//       { protocol: 'https', hostname: 'img.freepik.com' },
      
//       // Cloud/CDN services
//       { protocol: 'https', hostname: 'res.cloudinary.com' },
//       { protocol: 'https', hostname: '*.cloudinary.com' },
      
//       // Video hosts
//       { protocol: 'https', hostname: 'player.vimeo.com' },
//       { protocol: 'https', hostname: 'assets.mixkit.co' },
//     ],
//   },
// };

// export default nextConfig;











import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Your custom domains
      { protocol: 'https', hostname: 'ourlittlelifestyle.com' },
      { protocol: 'https', hostname: 't4.ftcdn.net' },
      { protocol: 'https', hostname: 'www.shutterstock.com' },
      
      // Popular free image sources
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      
      // Cloud/CDN services
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '*.cloudinary.com' },
      
      // Video hosts
      { protocol: 'https', hostname: 'player.vimeo.com' },
      { protocol: 'https', hostname: 'assets.mixkit.co' },
    ],
  },
  
  // Turbopack configuration
  turbopack: {
    // Resolve aliases for Turbopack
    resolveAlias: {
      // Add any aliases you need
    }
  },
  
  // Keep webpack for fallback if needed
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        'fs/promises': false,
        'timers/promises': false,
      };
    }
    return config;
  },
};

export default nextConfig;