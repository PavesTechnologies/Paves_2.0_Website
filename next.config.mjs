import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone: a self-contained server.js plus only the traced
  // node_modules. The Docker runtime stage copies that instead of the full
  // dependency tree.
  output: "standalone",
  compress: true,
  productionBrowserSourceMaps: true,
  // Pin the workspace root. A stray package-lock.json in the user profile
  // directory otherwise wins root inference and Next picks the wrong one.
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Next 16 only serves qualities listed here. HeroSection uses 50 and 80;
    // 75 is the framework default and is kept for every other <Image>.
    qualities: [50, 75, 80],
    minimumCacheTTL: 2592000, // 30 days
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;
