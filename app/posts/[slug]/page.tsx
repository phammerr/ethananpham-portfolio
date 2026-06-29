import Link from "next/link"
import { notFound } from "next/navigation"
import { PageShell } from "@/components/page-shell"
import { posts } from "@/lib/site-data"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <PageShell title={post.title} meta={formatDate(post.date)}>
      <article className="space-y-5 text-lg leading-relaxed text-foreground/90">
        <p>{post.summary}</p>
        <p>
          This is placeholder body copy for the post template. Replace it with
          your writing — the layout keeps a comfortable measure for long-form
          reading and inherits the serif type used across the site.
        </p>
        <p>
          You can structure posts however you like: pull data from a CMS, read
          MDX files from the filesystem, or keep them inline as in this starter.
        </p>
      </article>

      <Link
        href="/posts"
        className="mt-12 inline-block font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {"[← all posts]"}
      </Link>
    </PageShell>
  )
}
