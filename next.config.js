/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    prependData: `@import "src/styles/functions.scss";`,
  },
};

module.exports = nextConfig;
