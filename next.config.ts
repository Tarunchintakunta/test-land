import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable strict mode for React (catches potential problems)
  reactStrictMode: true,
  // pageExtensions: ["page.tsx"],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
