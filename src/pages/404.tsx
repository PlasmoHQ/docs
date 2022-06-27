import Link from "next/link"

export default function NotFoundPage() {
  return (
    <article className="flex flex-col items-center items-center justify-center p-8">
      <h1>404</h1>
      <h2>Where no one has gone before</h2>
      <blockquote style={{ maxWidth: 470 }}>
        <p>
          We're the same. We share the same history, the same heritage, the same
          lives. We're tied together beyond any untying. Man or woman, it makes
          no difference. We're human. We couldn't escape from each other even if
          we wanted to. That's how you do it, by remembering who and what you
          are - a bit of flesh and blood afloat in a universe without end. The
          only thing that's truly yours is the rest of humanity.
        </p>
      </blockquote>
      <Link href="/">
        <a className="w-full text-lg font-medium p-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-center rounded ml-2">
          👈 Back to base
        </a>
      </Link>
    </article>
  )
}
