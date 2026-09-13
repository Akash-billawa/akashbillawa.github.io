"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#blog", label: "Blog" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const centerMessages = [
  "BUILDING COOL STUFF",
  "SECURITY FIRST",
  "CRAFTING APPS",
  "STAY CURIOUS",
  "CODE & CREATE",
  "PIXEL PERFECT",
  "HACK THE PLANET",
  "FLUTTER MAGIC",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [centerMsg, setCenterMsg] = useState(centerMessages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterMsg((prev) => {
        const idx = centerMessages.indexOf(prev);
        return centerMessages[(idx + 1) % centerMessages.length];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Floating pill navbar - centered */}
      <div className="fixed left-1/2 -translate-x-1/2 top-4 z-50 w-[calc(100vw-2rem)] max-w-[27.375rem]">
        <div className={`relative rounded transition-all duration-300 ${scrolled ? "bg-bg-secondary/90 backdrop-blur-md border border-white/[0.06]" : "bg-bg-secondary/60 backdrop-blur-sm"}`}>
          {/* Main bar */}
          <div className="flex items-center justify-between h-[3.125rem] px-4">
            <Link href="/" className="relative z-10" aria-label="Home">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-text">
                <rect x="4" y="4" width="20" height="20" stroke="currentColor" strokeWidth="1.5" rx="2"/>
                <path d="M4 14H24M14 4V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>

            {/* Center message area */}
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 text-center">
              <span className="section-label text-[10px] tracking-wider">
                {centerMsg}
              </span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 flex flex-col gap-[3px] py-3 px-[7px] group"
              aria-label="Toggle menu"
            >
              <div
                className={`w-4 h-0.5 bg-current transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <div
                className={`w-4 h-0.5 bg-current transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <div
                className={`w-4 h-0.5 bg-current transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
              />
            </button>
          </div>

          {/* Dropdown menu */}
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
            } overflow-y-auto`}
          >
            <div className="px-3 pb-3 space-y-0.5">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center h-[3.125rem] px-3 rounded text-[1rem] transition-all duration-200 ${
                    activeSection === link.href
                      ? "text-white bg-white/[0.06]"
                      : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                  }`}
                  style={{ transitionDelay: isOpen ? `${i * 30}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-white/10">
                <a
                  href="mailto:poojaryakash55@gmail.com"
                  className="flex items-center h-[3.125rem] px-3 rounded text-[1rem] text-accent hover:bg-accent/10 transition-all duration-200"
                >
                  poojaryakash55@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
