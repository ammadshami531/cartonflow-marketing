import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent redirect for /for-distributors — page was retired
  // 2026-05-16 with the marketing repositioning (CartonFlow is now
  // pitched as a brand-first supply chain platform, not a
  // distributor-management tool). Any external/backlinked traffic still
  // landing on the old URL gets sent to /features.
  async redirects() {
    return [
      {
        source: "/for-distributors",
        destination: "/features",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
