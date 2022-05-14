import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
      <h1
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem"
        }}>
        404 | where no one has gone before
      </h1>
      <Link href="/">
        <a>👈 Back to base</a>
      </Link>
    </div>
  )
}
