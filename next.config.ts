import type { NextConfig } from "next";

// Keep in sync with src/lib/site.ts.
const SITE_LIVE = process.env.SITE_LIVE === "true";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory otherwise confuses workspace-root detection.
  turbopack: { root: __dirname },
  async redirects() {
    if (SITE_LIVE) return [];
    // Pre-launch: hide every page except the coming-soon home page.
    return [{ source: "/:path(speakers|agenda|team|gallery|contact)/:rest*", destination: "/", permanent: false }];
  },
};

export default nextConfig;
