import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/uploads/**",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/uploads/**",
        port: "8000",
      },
      {
				protocol: "http",
				hostname: "**.mariandesignstudio.in",
				pathname: "/uploads/**",
			},
      {
				protocol: "https",
				hostname: "**.mariandesignstudio.in",
				pathname: "/uploads/**",
			},
    ],
  },
};

export default nextConfig;
