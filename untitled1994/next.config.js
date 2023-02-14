/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["reef.mypinata.cloud"],
  },
  experimental: {
    appDir: true,
    mdxRs: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
