import PlausibleProvider from "next-plausible"
import { DefaultSeo } from "next-seo"
import "nextra-theme-docs/style.css"

export default function MyApp({ Component, pageProps, router }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <PlausibleProvider domain="docs.plasmo.com">
      <DefaultSeo
        description="Plasmo Framework is a battery-packed browser extension SDK made by hackers for hackers. Build your product and stop worrying about config files and the odd peculiarities of building browser extensions. Get started using Plasmo with the official documentation, and explore all of our features!"
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Plasmo Docs",
          url: `https://docs.plasmo.com${router.asPath}`,
          images: [
            {
              url: "https://docs.plasmo.com/images/seo-1200-700.png",
              width: 1200,
              height: 700,
              alt: "Plasmo Docs"
            }
          ]
        }}
        twitter={{
          handle: "@plasmohq",
          cardType: "summary_large_image"
        }}
        additionalLinkTags={[
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
        ]}
        additionalMetaTags={[
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
          }
        ]}
      />
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
