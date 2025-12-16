// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '/**',
//       },
//       // Add specific Cloudinary subdomains if needed
//       {
//         protocol: 'https',
//         hostname: '*.cloudinary.com',
//       },
//       // Add Freepik/ftcdn.net for Hero background image
//       {
//         protocol: 'https',
//         hostname: 't4.ftcdn.net',
//         pathname: '/**',
//       },
//       // Add other common image hosts you might use
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         pathname: '/**',
//       },
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
};

export default nextConfig;

