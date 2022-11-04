import { DocsThemeConfig, useConfig } from "nextra-theme-docs"

import { Head } from "~components/head"
import { Logo } from "~components/logo"

import packageJson from "../package.json"

const theme: DocsThemeConfig = {
  // banner: {
  //   key: "plasmo-0.55.0",
  //   text: (
  //     <span>
  //       plasmo@0.55.0 is released!{" "}
  //       <a
  //         className="ml-2 font-medium text-primary-500"
  //         href="https://github.com/PlasmoHQ/plasmo/releases"
  //         target="_blank"
  //         rel="noopener noreferrer">
  //         Check it out →
  //       </a>
  //     </span>
  //   )
  // },

  chat: {
    link: "https://www.plasmo.com/s/d" // Plasmo discord server,
  },
  docsRepositoryBase: "https://github.com/PlasmoHQ/docs/blob/main/", // base URL for the docs repository
  navigation: {
    next: true,
    prev: true
  },

  head: <Head />,
  logo: <Logo />,
  // search: {
  //   component: null
  // },

  notFound: undefined,

  darkMode: true,

  footer: {
    text: (
      <a
        className="font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50"
        href={
          "https://www.plasmo.com"
        }>{`© ${new Date().getFullYear()} Plasmo Corp. All rights reserved. v${
        packageJson.version
      }`}</a>
    )
  },
  project: {
    link: "https://github.com/PlasmoHQ/plasmo"
  },
  editLink: {
    text: "Edit this page on GitHub"
  },
  getNextSeoProps() {
    const { frontMatter } = useConfig()
    // logo: <Logo />,
    // head: <Head />,
    return {
      // additionalLinkTags: [
      //   {
      //     href: '/apple-icon-180x180.png',
      //     rel: 'apple-touch-icon',
      //     sizes: '180x180'
      //   },
      //   {
      //     href: '/android-icon-192x192.png',
      //     rel: 'icon',
      //     sizes: '192x192',
      //     type: 'image/png'
      //   },
      //   {
      //     href: '/favicon-96x96.png',
      //     rel: 'icon',
      //     sizes: '96x96',
      //     type: 'image/png'
      //   },
      //   {
      //     href: '/favicon-32x32.png',
      //     rel: 'icon',
      //     sizes: '32x32',
      //     type: 'image/png'
      //   },
      //   {
      //     href: '/favicon-16x16.png',
      //     rel: 'icon',
      //     sizes: '16x16',
      //     type: 'image/png'
      //   }
      // ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "Plasmo Docs", name: "apple-mobile-web-app-title" },
        { content: "#8800FF", name: "msapplication-TileColor" }
        // { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || "Plasmo: the Browser Extension Framework",
      openGraph: {
        images: [
          { url: frontMatter.image || "https://nextra.vercel.app/og.png" }
        ]
      },
      titleTemplate: "%s - Plasmo Framework",
      twitter: {
        cardType: "summary_large_image",
        site: "https://docs.plasmo.com"
      }
    }
  }
}

export default theme
