/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/education-dao',
  sassOptions: {
    prependData: `@import "src/styles/functions.scss";`,
  }
}

module.exports = nextConfig
