"use client";

import Link from "next/link";
import { getAllPosts } from "@/lib/blog-data";

export default function HavuBlog() {
  const posts = getAllPosts();

  return (
    <section
      id="blog"
      data-reveal="true"
      data-reveal-stagger="55"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">12 — Technical Log</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Writing &amp; technical guides.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            Detailed explorations of web exploitation vectors, Flutter Impeller performance tuning, and Rust systems programming.
          </p>
        </div>

        {/* Table of articles */}
        <div className="border-t border-[var(--hv-hairline)] divide-y divide-[var(--hv-hairline)]">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="hv-up py-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline group transition-colors hover:bg-[var(--hv-ink)]/[0.02]"
            >
              <div className="md:col-span-3 font-mono text-xs text-[var(--hv-muted)] flex items-center gap-3">
                <span>{post.date}</span>
                <span>·</span>
                <span className="px-2 py-0.5 rounded bg-[var(--hv-ink-12)] text-[var(--hv-ink)]">
                  {post.category}
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--hv-ink)] mb-2">
                  <Link href={`/blog/${post.slug}`} data-cursor="link" className="hv-underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-[var(--hv-ink-70)] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="md:col-span-2 md:text-right font-mono text-xs text-[var(--hv-muted)] flex items-center md:justify-end gap-2">
                <span>{post.readTime}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  data-cursor="link"
                  className="group-hover:translate-x-1 transition-transform inline-block"
                  aria-label={`Read ${post.title}`}
                >
                  &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
