export const ShieldBanners = ({
  socialOnly = false,
  packageName = "plasmo"
}) => (
  <span className="flex flex-1 gap-1">
    {!socialOnly && (
      <>
        <a
          aria-label="License"
          href="https://github.com/PlasmoHQ/plasmo/blob/main/LICENSE">
          <img alt="See License" src="https://img.shields.io/npm/l/plasmo" />
        </a>
        <a
          aria-label="NPM"
          href={`https://www.npmjs.com/package/${packageName}`}>
          <img
            alt="NPM Install"
            src={`https://img.shields.io/npm/v/${packageName}?logo=npm`}
          />
        </a>
      </>
    )}
    <a aria-label="Twitter" href="https://www.twitter.com/plasmohq">
      <img
        alt="Follow PlasmoHQ on Twitter"
        src="https://img.shields.io/twitter/follow/plasmohq?logo=twitter"
      />
    </a>
    <a aria-label="Twitch Stream" href="https://www.twitch.tv/plasmohq">
      <img
        alt="Watch our Live DEMO every Friday"
        src="https://img.shields.io/twitch/status/plasmohq?logo=twitch&logoColor=white"
      />
    </a>
    <a aria-label="Discord" href="https://www.plasmo.com/s/d">
      <img
        alt="Join our Discord for support and chat about our projects"
        src="https://img.shields.io/discord/946290204443025438?logo=discord&logoColor=white"
      />
    </a>
  </span>
)
