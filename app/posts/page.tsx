import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { posts } from "@/lib/site-data"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function PostsPage() {
  return (
    <PageShell title="posts" meta="Essays, notes, and half-formed thoughts.">
      <ul className="mt-2 divide-y divide-border">
        {posts.map((post) => (
          <li key={post.slug} className="py-5">
            <Link href={`/posts/${post.slug}`} className="group block">
              <p className="font-mono text-xs text-muted-foreground">
                {formatDate(post.date)}
              </p>
              <h2 className="mt-1 text-xl underline-offset-4 group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-1 leading-relaxed text-foreground/80">
                {post.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
