import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} ｜ Akash Log`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 bg-[var(--hv-paper)] text-[var(--hv-ink)]">
      <article className="max-w-3xl mx-auto space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#blog"
            className="font-mono text-xs text-[var(--hv-muted)] hover:text-[var(--hv-ink)] transition-colors inline-flex items-center gap-2"
          >
            &larr; Back to Technical Log
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-[var(--hv-hairline)] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--hv-muted)]">
            <span className="px-2 py-0.5 rounded bg-[var(--hv-ink-12)] text-[var(--hv-ink)]">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>

          <h1 className="hv-display-jp text-3xl sm:text-5xl font-black">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-[var(--hv-muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-6 text-[var(--hv-ink-70)] leading-relaxed text-base">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-[var(--hv-ink)] pt-6 tracking-tight"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="space-y-2 pl-4 list-disc text-sm">
                  {paragraph.split("\n").map((line, lIdx) => (
                    <li key={lIdx}>{line.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-[var(--hv-hairline)] flex justify-between items-center text-xs font-mono">
          <Link
            href="/#blog"
            className="hover:text-[var(--hv-ink)] text-[var(--hv-muted)] transition-colors"
          >
            &larr; All entries
          </Link>
          <a
            href="#main-content"
            className="hover:text-[var(--hv-ink)] text-[var(--hv-muted)] transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </article>
    </div>
  );
}
