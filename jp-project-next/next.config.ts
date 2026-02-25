import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',           // leave empty
        pathname: '/**',    // allow all paths under this domain
      },
      // Optional: add more if you use other external sources (e.g. pexels, your S3, etc.)
      // {
      //   protocol: 'https',
      //   hostname: 'videos.pexels.com',
      //   pathname: '/**',
      // },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
