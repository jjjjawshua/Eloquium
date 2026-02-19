/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@openly/shared", "@openly/ui"],
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
};
module.exports = nextConfig;
