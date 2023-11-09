/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || "/",
  sassOptions: {
    prependData: `@import "src/styles/functions.scss";`,
  },
};

module.exports = nextConfig;
