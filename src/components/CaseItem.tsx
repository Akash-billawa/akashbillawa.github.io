"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MagneticHover from "./MagneticHover";

interface CaseItemProps {
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  techStack: string[];
  status: string;
  slug: string;
  index: number;
  images: string[];
}

export default function CaseItem({
  name,
  description,
  longDescription,
  tags,
  features,
  techStack,
  status,
  slug,
  index,
  images,
}: CaseItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="case-item-wrapper">
      {/* Row - always visible with image thumbnails */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="case-item group w-full text-left"
        aria-expanded={expanded}
        aria-controls={`case-panel-${slug}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <span className="text-text-secondary text-sm font-mono w-6 flex-shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-medium truncate group-hover:text-white/80 transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
              {tags.map((tag) => (
                <span key={tag} className="tag-border text-[10px] px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image thumbnails - Lamalama style horizontal strip */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pr-4 flex-shrink-0 w-[300px] lg:w-[400px]">
            {images.map((img, i) => (
              <div key={i} className="flex-shrink-0 relative w-24 h-16 lg:w-32 lg:h-20 rounded overflow-hidden border border-white/[0.08] group-hover:border-white/[0.2] transition-colors">
                <Image
                  src={img}
                  alt={`${name} ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="80px"
                />
              </div>
            ))}
          </div>

          <MagneticHover strength={0.4}>
            <span className="btn-plus">
              <span>{expanded ? "−" : "+"}</span>
            </span>
          </MagneticHover>
        </div>
        {!expanded && (
          <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
            <p className="text-sm text-text-secondary pt-3 pb-1">
              {description}
            </p>
          </div>
        )}
      </button>

      {/* Expanded content - Lamalama-style expandable panel */}
      <div
        id={`case-panel-${slug}`}
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          expanded ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-4 ml-10">
          {/* Status badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/[0.04] border border-white/[0.06] rounded-full text-text-secondary">
              {status}
            </span>
          </div>

          {/* Long description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {longDescription}
          </p>

          {/* Image gallery in expanded view */}
          <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
              {images.map((img, i) => (
                <div key={i} className="flex-shrink-0 relative w-64 h-36 rounded overflow-hidden border border-white/[0.08]">
                  <Image
                    src={img}
                    alt={`${name} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Two-column layout for features and tech stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Features */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary/60 block mb-3">
                Features
              </span>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-text-secondary/80 flex items-start gap-2"
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary/60 block mb-3">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono bg-white/[0.04] border border-white/[0.06] rounded-md text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <MagneticHover strength={0.2}>
              <Link
                href={`/projects/${slug}`}
                className="btn-pill-filled text-sm"
              >
                <span>View Project</span>
              </Link>
            </MagneticHover>
          </div>
        </div>
      </div>
    </div>
  );
}