import Link from "next/link"

import style from "~styles/404.module.css"

export default function NotFoundPage() {
  return (
    <article className={style.container}>
      <h1 className={style.header}>404</h1>
      <h2 className={style.subheader}>Where no one has gone before</h2>
      <blockquote className={style.quote} style={{ maxWidth: 470 }}>
        <p>
          We're the same. We share the same history, the same heritage, the same
          lives. We're tied together beyond any untying. Man or woman, it makes
          no difference. We're human. We couldn't escape from each other even if
          we wanted to. That's how you do it, by remembering who and what you
          are - a bit of flesh and blood afloat in a universe without end. The
          only thing that's truly yours is the rest of humanity.
        </p>
      </blockquote>
      <Link href="/" className={style.back}>
        👈 Back to base
      </Link>
    </article>
  )
}
