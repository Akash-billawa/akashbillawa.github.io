"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "blog", label: "Blog" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as Element[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-dots" aria-label="Section navigation">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`section-dot ${active === section.id ? "section-dot-active" : ""}`}
          aria-label={section.label}
          title={section.label}
        >
          <span className="section-dot-inner" />
        </a>
      ))}
    </nav>
  );
}
