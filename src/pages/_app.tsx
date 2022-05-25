import PlausibleProvider from "next-plausible"
import "nextra-theme-docs/style.css"

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <PlausibleProvider domain="docs.plasmo.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
