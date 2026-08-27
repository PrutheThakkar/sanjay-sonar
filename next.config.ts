import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sanjaysonar.com" }],
        destination: "https://www.sanjaysonar.com/:path*",
        permanent: true,
      },
      { source: "/selectedwork", destination: "/selected-work/", permanent: true },
      { source: "/expertise/complex-hernia-repair", destination: "/expertise/complex-hernia-surgery/", permanent: true },
      { source: "/expertise/pyeloplasty", destination: "/expertise/laparoscopic-pyeloplasty/", permanent: true },
      { source: "/expertise/laser-treatment-for-varicose-veins", destination: "/expertise/laser-treatment-varicose-veins/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/selected-work", destination: "/selectedwork" },
      { source: "/consultation", destination: "/Consultation" },
    ];
  },
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
