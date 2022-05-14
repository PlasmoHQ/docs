const theme = {
  projectLink: "https://github.com/PlasmoHQ/plasmo", // GitHub link in the navbar
  projectChatLink: "https://www.plasmo.com/s/d", // Next.js discord server

  docsRepositoryBase: "https://github.com/PlasmoHQ/docs/blob/main/src/pages", // base URL for the docs repository
  titleSuffix: " - Plasmo",
  nextLinks: true,
  prevLinks: true,
  search: true,
  //   TODO: Let's set up Algolia search
  customSearch: null,
  darkMode: true,
  footer: true,

  footerText: `© ${new Date().getFullYear()} Plasmo Corp. All rights reserved.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
          html.dark path {
            fill: white;
          }
          html.light path {
            fill: black;
          }
          `}
        </style>

        <path d="M16.2269 23.73C17.3315 23.73 18.2611 24.6564 17.8519 25.6824C17.7161 26.0229 17.5444 26.3501 17.3387 26.658C16.7596 27.5247 15.9365 28.2002 14.9735 28.5991C14.0104 28.998 12.9508 29.1023 11.9284 28.899C10.9061 28.6956 9.96703 28.1937 9.22997 27.4566C8.49291 26.7196 7.99096 25.7805 7.78761 24.7582C7.58425 23.7358 7.68862 22.6762 8.08752 21.7131C8.48641 20.7501 9.16191 19.927 10.0286 19.3479C10.3365 19.1422 10.6637 18.9705 11.0042 18.8347C12.0302 18.4255 12.9566 19.3551 12.9566 20.4597V21.73C12.9566 22.8346 13.852 23.73 14.9566 23.73H16.2269Z" />
        <path d="M20.1243 13.4324C20.1243 12.3278 21.0507 11.3981 22.0767 11.8073C22.4173 11.9431 22.7444 12.1148 23.0523 12.3206C23.919 12.8997 24.5945 13.7228 24.9934 14.6858C25.3923 15.6488 25.4967 16.7085 25.2933 17.7308C25.09 18.7531 24.588 19.6922 23.851 20.4293C23.1139 21.1663 22.1748 21.6683 21.1525 21.8716C20.1302 22.075 19.0705 21.9706 18.1075 21.5717C17.1444 21.1728 16.3213 20.4973 15.7422 19.6306C15.5365 19.3227 15.3648 18.9956 15.229 18.655C14.8198 17.629 15.7495 16.7026 16.854 16.7026L18.1243 16.7026C19.2289 16.7026 20.1243 15.8072 20.1243 14.7026L20.1243 13.4324Z" />
        <path d="M13.0269 15.0541C13.0269 16.1586 12.1139 17.0815 11.0538 16.7714C10.3717 16.5718 9.72018 16.2689 9.12289 15.8698C7.9673 15.0977 7.06663 14.0002 6.53477 12.7162C6.00291 11.4321 5.86375 10.0192 6.13489 8.65612C6.40603 7.29301 7.07529 6.04092 8.05803 5.05817C9.04078 4.07542 10.2929 3.40616 11.656 3.13502C13.0191 2.86388 14.432 3.00304 15.716 3.5349C17 4.06676 18.0975 4.96743 18.8697 6.12302C19.2688 6.72032 19.5717 7.37185 19.7712 8.0539C20.0814 9.11403 19.1585 10.027 18.0539 10.027L15.0269 10.027C13.9223 10.027 13.0269 10.9225 13.0269 12.027L13.0269 15.0541Z" />
      </svg>
      <span>
        <b>
          <i>plasmo</i>
        </b>
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="https://docs.plasmo.com/" />
      <meta property="og:title" content="Plasmo Framework Documentation" />
      <meta
        property="og:description"
        content="Plasmo is a platform for making browser extensions at lightning speed. We make it easy to build, test, and deploy browser extensions in a matter of seconds."
      />
      <meta
        name="keywords"
        content="browser extension, chrome extension, developer tools, developer tooling, continuous integration, security, cybersecurity, enterprise"
      />

      <meta name="twitter:site" content="@plasmohq" />
      <meta name="twitter:creator" content="@plasmohq" />
      <meta name="twitter:card" content="summary_large_image" />

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
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap");

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

export default theme
