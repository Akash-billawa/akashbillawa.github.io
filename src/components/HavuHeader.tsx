"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "The Issue", href: "#issue", num: "01" },
  { label: "Our Approach", href: "#approach", num: "02" },
  { label: "Blueprint", href: "#blueprint", num: "03" },
  { label: "Value", href: "#value", num: "04" },
  { label: "Capabilities", href: "#skills", num: "05" },
  { label: "Selected Works", href: "#work", num: "06" },
  { label: "Process", href: "#process", num: "07" },
  { label: "Research", href: "#research", num: "08" },
  { label: "Team", href: "#team", num: "09" },
  { label: "FAQ", href: "#faq", num: "10" },
  { label: "Log", href: "#blog", num: "11" },
];

export default function HavuHeader() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    const hasDark = document.documentElement.classList.contains("dark");
    setIsDark(hasDark);

    const sectionIds = ["issue", "approach", "blueprint", "skills", "work", "process", "faq"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.style.colorScheme = nextDark ? "dark" : "light";
    try {
      localStorage.setItem("hv-theme", nextDark ? "dark" : "light");
    } catch {
      // ignore
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 px-6 sm:px-12 flex items-center justify-between z-50 bg-[var(--hv-paper)]/85 backdrop-blur-md transition-colors duration-500 border-b border-[var(--hv-hairline)]">
        {/* Brand Mark / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-[var(--hv-ink)] group focus:outline-none"
          aria-label="Akash - Home"
        >
          {/* Geometric Monogram */}
          <div className="font-mono font-black text-xl tracking-tighter flex items-center">
            <span className="inline-block px-1.5 py-0.5 bg-[var(--hv-ink)] text-[var(--hv-on-ink)] font-black text-sm tracking-widest mr-1">
              AKASH
            </span>
            <span className="text-xs text-[var(--hv-muted)] font-bold tracking-widest hidden sm:inline">
              / LAB
            </span>
          </div>
        </a>

        {/* Desktop Quick Nav Links (HAVU subset) */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold tracking-tight text-[var(--hv-ink)]">
          {["Issue", "Approach", "Blueprint", "Works", "Process", "FAQ"].map((name) => {
            const sectionId = name === "Works" ? "work" : name.toLowerCase();
            const href = `#${sectionId}`;
            const isActive = activeSection === sectionId;
            return (
              <a
                key={name}
                href={href}
                data-cursor="link"
                className={`group text-xs font-bold tracking-wide uppercase transition-colors py-1 flex items-center gap-1.5 ${
                  isActive ? "text-[var(--hv-ink)]" : "text-[var(--hv-ink-70)] hover:text-[var(--hv-ink)]"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--hv-ink)] inline-block" />
                )}
                <span className="hv-swap">
                  <span>{name}</span>
                  <span aria-hidden="true">{name}</span>
                </span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Contact Pill + Menu Button */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Theme Switch Pill */}
          {mounted && (
            <button
              type="button"
              role="switch"
              aria-checked={isDark}
              onClick={toggleTheme}
              data-cursor="link"
              aria-label="Toggle color theme"
              title="Toggle color theme"
              className="h-switch w-switch rounded-full border border-[var(--hv-ink-25)] hover:border-[var(--hv-ink)] flex items-center p-1 transition-colors duration-300 relative cursor-pointer"
            >
              <span
                className={`h-knob w-knob rounded-full bg-[var(--hv-ink)] text-[var(--hv-on-ink)] grid place-items-center transition-transform duration-300 ${
                  isDark ? "translate-x-4" : "translate-x-0"
                }`}
              >
                {isDark ? (
                  // Moon icon
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  // Sun icon
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" />
                  </svg>
                )}
              </span>
            </button>
          )}

          {/* Direct CTA */}
          <a
            href="#contact"
            data-cursor="link"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full border border-[var(--hv-ink)] text-xs font-bold uppercase tracking-wider text-[var(--hv-ink)] hover:bg-[var(--hv-ink)] hover:text-[var(--hv-on-ink)] transition-colors duration-300"
          >
            <span className="hv-swap">
              <span>Get in touch</span>
              <span aria-hidden="true">Get in touch</span>
            </span>
          </a>

          {/* Menu Trigger Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="global-menu"
            aria-label="Toggle Full Menu"
            data-cursor="link"
            className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[var(--hv-ink)] p-2 focus:outline-none cursor-pointer"
          >
            <span className="hidden sm:inline font-mono">
              <span className="hv-swap">
                <span>{menuOpen ? "CLOSE" : "MENU"}</span>
                <span aria-hidden="true">{menuOpen ? "CLOSE" : "MENU"}</span>
              </span>
            </span>
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Global Menu (HAVU style) */}
      <div
        id="global-menu"
        className={`fixed inset-0 z-40 bg-[var(--hv-paper)] text-[var(--hv-ink)] flex flex-col justify-between px-6 sm:px-12 pt-24 pb-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0 is-in"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center overflow-y-auto py-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8">
            {navItems.map((item, idx) => (
              <li
                key={item.href}
                className="hv-mask"
                style={{ "--d": `${menuOpen ? idx * 40 + 100 : 0}ms` } as React.CSSProperties}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  data-cursor="link"
                  className="group flex items-baseline gap-4 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--hv-ink)] hover:opacity-60 transition-all duration-200"
                >
                  <span className="font-mono text-xs sm:text-sm text-[var(--hv-muted)] font-normal">
                    {item.num}
                  </span>
                  <span className="hv-underline">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Menu Information */}
        <div className="max-w-6xl mx-auto w-full pt-6 border-t border-[var(--hv-hairline)] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-xs font-mono text-[var(--hv-muted)]">
          <div>
            <p className="text-[var(--hv-ink)] font-bold">AKASH / CYBER SECURITY &amp; FLUTTER LAB</p>
            <p>Bangalore, Karnataka, India · MSc Cyber Security</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/akashbillawa"
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="hv-underline hover:text-[var(--hv-ink)] transition-colors"
            >
              GitHub &rarr;
            </a>
            <a
              href="https://linkedin.com/in/akashbillawa"
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="hv-underline hover:text-[var(--hv-ink)] transition-colors"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
