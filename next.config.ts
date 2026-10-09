import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory otherwise confuses workspace-root detection.
  turbopack: { root: __dirname },
};

export default nextConfig;
