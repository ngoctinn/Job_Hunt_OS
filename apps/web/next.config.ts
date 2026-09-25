import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@job-hunt-os/shared"],
  reactCompiler: true,
  cacheComponents: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
