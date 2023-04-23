import { useRouter } from "next/router"
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs"

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

  useNextSeoProps() {
    const { frontMatter } = useConfig()
    const router = useRouter()
    return {
      additionalLinkTags: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/favicons/site.webmanifest"
        },
        {
          rel: "mask-icon",
          href: "/favicons/safari-pinned-tab.svg",
          color: "#ffffff"
        },
        {
          rel: "shortcut icon",
          href: "/favicons/favicon.ico"
        }
      ],
      additionalMetaTags: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff"
        },
        {
          name: "msapplication-config",
          content: "/favicons/browserconfig.xml"
        },
        {
          name: "theme-color",
          content: "#ffffff"
        },
        { content: "en", name: "language" },
        { content: "Plasmo Docs", name: "apple-mobile-web-app-title" }
        // { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
      ],
      description: frontMatter.description || "The Browser Extension Platform",
      openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Plasmo Docs",
        url: `https://docs.plasmo.com${router.asPath}`,
        images: [
          {
            url:
              frontMatter.image ||
              "https://docs.plasmo.com/images/seo-1200-700.png",
            width: 1200,
            height: 700,
            alt: "Plasmo Docs"
          }
        ]
      },
      titleTemplate: "%s – Plasmo",
      twitter: {
        handle: "@plasmohq",
        cardType: "summary_large_image",
        site: "https://docs.plasmo.com"
      }
    }
  }
}

export default theme
