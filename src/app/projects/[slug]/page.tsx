import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/project-data";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} ｜ Akash Lab`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 bg-[var(--hv-paper)] text-[var(--hv-ink)]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#work"
            className="font-mono text-xs text-[var(--hv-muted)] hover:text-[var(--hv-ink)] transition-colors inline-flex items-center gap-2"
          >
            &larr; Back to Selected Works
          </Link>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-4 border-b border-[var(--hv-hairline)] pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[var(--hv-ink-12)]">
              {project.status}
            </span>
            <span className="font-mono text-xs text-[var(--hv-muted)]">
              System Specification
            </span>
          </div>

          <h1 className="hv-display-jp text-4xl sm:text-6xl font-black">
            {project.name}
          </h1>

          <p className="hv-lead max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Long Description */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--hv-muted)] block">
            ARCHITECTURE &amp; OVERVIEW
          </span>
          <p className="text-base text-[var(--hv-ink-70)] leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-4 border-t border-[var(--hv-hairline)] pt-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--hv-muted)] block">
            KEY CAPABILITIES
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="p-4 border border-[var(--hv-hairline)] text-sm text-[var(--hv-ink-70)] flex items-start gap-3"
              >
                <span className="font-mono text-xs font-bold text-[var(--hv-ink)]">
                  0{idx + 1}
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4 border-t border-[var(--hv-hairline)] pt-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--hv-muted)] block">
            TECHNOLOGY STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded bg-[var(--hv-ink-12)] text-[var(--hv-ink)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-8 border-t border-[var(--hv-hairline)]">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-bold uppercase tracking-wider hover:opacity-85 transition-opacity"
            >
              Live Application &rarr;
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[var(--hv-ink)] text-[var(--hv-ink)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--hv-ink)] hover:text-[var(--hv-on-ink)] transition-colors"
            >
              Source Repository ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
