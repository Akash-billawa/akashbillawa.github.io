import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are first-party local SVGs (public/); allow them through
    // the image optimizer instead of returning 400.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
