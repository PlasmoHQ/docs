import { withPlausibleProxy } from "next-plausible"
import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",
  unstable_flexsearch: {
    codeblocks: true
  },
  unstable_readingTime: true,
  unstable_staticImage: true,
  unstable_defaultShowCopyCode: true
})

export default withPlausibleProxy()(
  withNextra({
    reactStrictMode: true,
    // i18n: {
    //   locales: ["en"],
    //   defaultLocale: "en"
    // },

    async redirects() {
      return [
        {
          source: "/cs",
          destination: "/framework/content-scripts",
          permanent: true
        },
        {
          source: "/csui",
          destination: "/framework/content-scripts-ui",
          permanent: true
        },
        {
          source: "/exp",
          destination:
            "https://github.com/PlasmoHQ/plasmo/issues/new?assignees=&labels=documentation&template=2.example.yml&title=%5BEXP%5D+",
          permanent: true
        },
        {
          source: "/rfc",
          destination:
            "https://github.com/PlasmoHQ/plasmo/issues/new?assignees=&labels=enhancement&template=0.rfc.yml&title=%5BRFC%5D+",
          permanent: true
        },
        {
          source: "/bug",
          destination:
            "https://github.com/PlasmoHQ/plasmo/issues/new?assignees=&labels=bug%2Ctriage&template=1.bug.yml&title=%5BBUG%5D+",
          permanent: true
        }
      ]
    }
  })
)
