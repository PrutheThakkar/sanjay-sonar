import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drsanjay-wp.studiosentientdemo.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
