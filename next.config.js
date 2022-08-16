const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true
})
const { withPlausibleProxy } = require("next-plausible")

module.exports = withPlausibleProxy()(
  withNextra({
    reactStrictMode: true,
    i18n: {
      locales: ["en"],
      defaultLocale: "en"
    },

    async redirects() {
      return [
        {
          source: "/framework/:slug",
          destination: "/framework-api/:slug",
          permanent: true
        },
        {
          source: "/cs",
          destination: "/workflows/content-scripts",
          permanent: true
        },
        {
          source: "/csui",
          destination: "/workflows/content-scripts-ui",
          permanent: true
        },
        {
          source: "/exp",
          destination: "https://github.com/PlasmoHQ/plasmo/issues/new?assignees=&labels=documentation&template=2.example.yml&title=%5BEXP%5D+",
          permanent: true
        },
        {
          source: "/rfc",
          destination: "https://github.com/PlasmoHQ/plasmo/issues/new?assignees=&labels=enhancement&template=0.rfc.yml&title=%5BRFC%5D+",
          permanent: true
        },
        {
          source: "/bug",
          destination: "https://github.com/PlasmoHQ/plasmo/issues/new?assignees=&labels=bug%2Ctriage&template=1.bug.yml&title=%5BBUG%5D+",
          permanent: true
        }
      ]
    }
  })
)
