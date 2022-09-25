import type { DocsThemeConfig } from "nextra-theme-docs/."

import { Head } from "~components/head"
import { Logo } from "~components/logo"

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
  docsRepositoryBase: "https://github.com/PlasmoHQ/docs/blob/main/src/pages", // base URL for the docs repository
  titleSuffix: " - Plasmo Framework",
  navigation: {
    next: true,
    prev: true
  },

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
        }>{`© ${new Date().getFullYear()} Plasmo Corp. All rights reserved.`}</a>
    )
  },
  project: {
    link: "https://github.com/PlasmoHQ/plasmo"
  },
  editLink: {
    text: "Edit this page on GitHub"
  },

  logo: <Logo />,
  head: <Head />
}

export default theme
