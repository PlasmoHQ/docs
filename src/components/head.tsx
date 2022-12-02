import { NextSeo, NextSeoProps } from "next-seo"
import { useConfig } from "nextra-theme-docs"

export const Head = () => {
  const config = useConfig()
  const frontMatter = config.frontMatter as NextSeoProps
  return (
    <>
      <NextSeo {...frontMatter} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#ffffff"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <style>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
    }
  `}</style>
    </>
  )
}
