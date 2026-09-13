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
    title: `${post.title} | Akash Blog`,
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
    <div className="min-h-screen pb-bottom-bar pt-24">
      <article className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <div className="mb-8">
          <Link href="/#blog" className="section-label text-text-secondary hover:text-text transition-colors">
            [ &larr; Back to blog ]
          </Link>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="tag-pill text-[10px] h-6">{post.category}</span>
          <span className="section-label text-text-secondary">{post.readTime} read</span>
          <span className="section-label text-text-secondary">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="heading-lg mb-8">{post.title}</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="tag-pill text-[10px] h-6">{tag}</span>
          ))}
        </div>

        {/* Content */}
        <div className="prose-custom">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="heading-sm mt-10 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-sm text-text-secondary leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link href="/#blog" className="btn-pill-sm inline-flex">
            <span>&larr; All posts</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
