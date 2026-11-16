import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [72, 80],
    deviceSizes: [390, 640, 828, 1080, 1280, 1440, 1920, 2400],
  },
  async headers() {
    return [
      {
        source: "/media/video/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
