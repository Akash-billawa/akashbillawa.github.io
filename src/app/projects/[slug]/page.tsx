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
    title: `${project.name} | Akash Projects`,
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
    <div className="min-h-screen pb-bottom-bar pt-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <div className="mb-8">
          <Link href="/#projects" className="section-label text-text-secondary hover:text-text transition-colors">
            [ &larr; Back to projects ]
          </Link>
        </div>

        {/* Status badge */}
        <div className="mb-4">
          <span className="section-label text-accent">{project.status}</span>
        </div>

        {/* Title */}
        <h1 className="heading-lg mb-6">{project.name}</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill text-[10px] h-6">{tag}</span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-10">
          {project.longDescription}
        </p>

        {/* Features */}
        <div className="mb-10">
          <span className="section-label text-text-secondary block mb-4">
            [ Key Features ]
          </span>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="text-sm text-text/70 flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">-</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-10">
          <span className="section-label text-text-secondary block mb-4">
            [ Tech Stack ]
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag-pill text-[10px] h-6">{tech}</span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-pill-filled">
              <span>Live Demo</span>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-pill">
              <span>Source Code</span>
            </a>
          )}
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link href="/#projects" className="btn-pill-sm inline-flex">
            <span>&larr; All projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
