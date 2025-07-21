import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  devIndicators: false,
  images: {
    remotePatterns: [new URL(`${process.env.IMAGE_REMOTE_URL}`)],
  },
};

export default nextConfig;
