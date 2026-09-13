"use client";

import { useEffect, useCallback } from "react";

export interface ProjectData {
  name: string;
  description: string;
  tags: string[];
  longDescription?: string;
  features?: string[];
  link?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 btn-plus"
          aria-label="Close modal"
        >
          <span>&times;</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill text-[10px] h-6">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="heading-sm">{project.name}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {project.longDescription ?? project.description}
        </p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <span className="section-label text-text-secondary block mb-3">
              [ Key Features ]
            </span>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-text/70 flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5 flex-shrink-0">-</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-sm inline-flex"
          >
            <span>View Project</span>
          </a>
        )}
      </div>
    </div>
  );
}
