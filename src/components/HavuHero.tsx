"use client";

import { useState } from "react";

export default function HavuHero() {
  const [pixelActive, setPixelActive] = useState(false);

  return (
    <section
      id="mainVisual"
      data-reveal="true"
      data-reveal-stagger="75"
      className="relative w-full min-h-[92vh] px-6 sm:px-12 pt-12 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Kicker Bar */}
      <div className="w-full flex items-start justify-between gap-4 pt-2">
        <div className="hv-fade hv-kicker">
          <span className="w-1.5 h-1.5 bg-[var(--hv-ink)] rounded-full hv-twinkle"></span>
          <span>Cyber Security &amp; Mobile Engineer</span>
        </div>
        <div className="hv-fade hv-kicker hidden md:flex items-center gap-2">
          <span>Bangalore — India / MSc Active</span>
        </div>
      </div>

      {/* Hero Massive Editorial Headline (HAVU exact visual weight) */}
      <div className="my-auto py-8 sm:py-16 relative">
        <h1
          className="hv-hero-title max-w-6xl tracking-[-0.04em]"
          aria-label="I don't just build apps. I engineer secure systems that withstand the real world."
        >
          <span className="hv-mask">
            <span>I don&apos;t just build apps.</span>
          </span>
          <span className="hv-mask text-[var(--hv-ink-70)]">
            <span>I engineer secure systems</span>
          </span>
          <span className="hv-mask">
            <span>that withstand the real world.</span>
          </span>
        </h1>

        {/* Interactive Pixel UFO / Satellite Graphic (HAVU signature easter-egg) */}
        <div className="absolute -top-4 right-4 sm:right-16 select-none hidden sm:block hv-fade">
          <button
            onClick={() => setPixelActive(!pixelActive)}
            data-cursor="link"
            className="group flex flex-col items-center focus:outline-none cursor-pointer"
            title="Interactive pixel telemetry probe"
          >
            <svg
              viewBox="0 0 21 8"
              className="w-14 h-6 text-[var(--hv-ink)] group-hover:translate-y-[-2px] transition-transform hv-drift"
              fill="currentColor"
              shapeRendering="crispEdges"
            >
              <rect x="8" y="0" width="5" height="1" />
              <rect x="7" y="1" width="1" height="1" />
              <rect x="9" y="1" width="3" height="1" />
              <rect x="13" y="1" width="1" height="1" />
              <rect x="6" y="2" width="1" height="1" />
              <rect x="10" y="2" width="1" height="1" />
              <rect x="14" y="2" width="1" height="1" />
              <rect x="2" y="3" width="17" height="1" />
              <rect x="0" y="4" width="21" height="1" />
              <rect x="2" y="5" width="17" height="1" />
              <rect x="5" y="6" width="11" height="1" />
              <rect x="7" y="7" width="1" height="1" />
              <rect x="10" y="7" width="1" height="1" />
              <rect x="13" y="7" width="1" height="1" />
            </svg>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--hv-muted)] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
              [ PROBE ACTIVE ]
            </span>
          </button>

          {pixelActive && (
            <div className="absolute top-12 -left-12 w-48 p-2.5 rounded-lg border border-[var(--hv-hairline)] bg-[var(--hv-paper)] shadow-xl text-[10px] font-mono text-[var(--hv-ink)] animate-in fade-in zoom-in-95">
              <span className="font-bold block text-emerald-500">✓ TELEMETRY ONLINE</span>
              <span>Memory: Clean · Impeller: 120fps · OWASP: Compliant</span>
            </div>
          )}
        </div>
      </div>

      {/* Hairline divider with pixel walker */}
      <div className="relative w-full border-t border-[var(--hv-hairline)] pt-8">
        {/* Pixel sprite standing and stepping on line */}
        <div
          aria-hidden="true"
          className="absolute -top-6 left-8 select-none pointer-events-none text-[var(--hv-ink)] hv-sprite-stepping"
        >
          <svg
            viewBox="0 0 16 16"
            className="w-6 h-6"
            fill="currentColor"
            shapeRendering="crispEdges"
          >
            <rect x="6" y="1" width="4" height="4" />
            <rect x="5" y="5" width="6" height="5" />
            <rect x="3" y="6" width="2" height="4" />
            <rect x="11" y="6" width="2" height="4" />
            <rect x="5" y="10" width="2" height="5" />
            <rect x="9" y="10" width="2" height="5" />
          </svg>
        </div>

        {/* Bottom Hero Narrative & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 hv-up">
            <p className="hv-lead max-w-2xl text-base sm:text-lg">
              Bridging offensive cybersecurity, deep protocol knowledge, and high-performance cross-platform mobile engineering. Every system is built defense-first, compiling to native ARM performance with zero telemetry blind spots.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap sm:flex-nowrap items-center md:justify-end gap-3 hv-up">
            <a
              href="#work"
              data-cursor="link"
              className="px-6 py-3 rounded-full bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-bold uppercase tracking-wider hover:opacity-85 transition-opacity"
            >
              <span className="hv-swap">
                <span>Selected Works &rarr;</span>
                <span aria-hidden="true">Selected Works &rarr;</span>
              </span>
            </a>

            <a
              href="#contact"
              data-cursor="link"
              className="px-5 py-3 rounded-full border border-[var(--hv-ink-25)] hover:border-[var(--hv-ink)] text-xs font-bold uppercase tracking-wider text-[var(--hv-ink)] transition-colors"
            >
              <span className="hv-swap">
                <span>Get in touch</span>
                <span aria-hidden="true">Get in touch</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
