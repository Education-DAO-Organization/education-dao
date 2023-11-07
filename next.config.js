/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    prependData: `@import "src/styles/functions.scss";`,
  }
}

module.exports = nextConfig
