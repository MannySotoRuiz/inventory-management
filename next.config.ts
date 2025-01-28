import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "135opydn8x.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
