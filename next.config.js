const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true
})
const { withPlausibleProxy } = require("next-plausible")

module.exports = withPlausibleProxy()(
  withNextra({
    reactStrictMode: true
  })
)
