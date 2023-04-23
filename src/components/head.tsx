import { NextSeo, type NextSeoProps } from "next-seo"
import { useConfig } from "nextra-theme-docs"

export const Head = () => {
  const config = useConfig()
  const frontMatter = config.frontMatter as NextSeoProps
  return (
    <>
      <NextSeo {...frontMatter} />
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
