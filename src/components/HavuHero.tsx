"use client";

import { useState } from "react";

export default function HavuHero() {
  const [pixelActive, setPixelActive] = useState(false);

  return (
    <section
      id="mainVisual"
      data-reveal="true"
      data-reveal-stagger="75"
      className="hv-grain relative w-full min-h-[92vh] px-6 sm:px-12 pt-12 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Kicker Bar */}
      {/* Top Kicker Bar with Telemetry UFO Probe */}
      <div className="w-full flex items-center justify-between gap-4 pt-2 relative z-10">
        <div className="hv-fade hv-kicker">
          <span className="w-1.5 h-1.5 bg-[var(--hv-ink)] rounded-full hv-twinkle"></span>
          <span>Cyber Security &amp; Mobile Engineer</span>
        </div>
        
        <div className="hv-fade hv-kicker hidden md:flex items-center gap-3">
          <span>Bangalore [12.9716° N, 77.5946° E] — MSc Active</span>
          <span className="text-[var(--hv-hairline)]" aria-hidden="true">/</span>

          {/* Interactive Pixel UFO / Satellite Telemetry Probe */}
          <div className="relative select-none flex items-center">
            <button
              onClick={() => setPixelActive(!pixelActive)}
              data-cursor="link"
              className="group flex items-center focus:outline-none cursor-pointer p-1 rounded hover:bg-[var(--hv-ink-12)] transition-colors"
              title="Toggle interactive telemetry probe"
              aria-label="Toggle interactive telemetry probe"
            >
              <svg
                viewBox="0 0 21 8"
                className="w-10 h-4 text-[var(--hv-ink)] group-hover:translate-y-[-1px] transition-transform hv-drift"
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
            </button>

            {/* Interactive Popover */}
            {pixelActive && (
              <div className="absolute top-8 right-0 w-60 p-3 rounded-lg border border-[var(--hv-hairline)] bg-[var(--hv-paper)] shadow-2xl text-[10px] font-mono text-[var(--hv-ink)] animate-in fade-in zoom-in-95 duration-200 z-30">
                <div className="flex items-center justify-between pb-1.5 border-b border-[var(--hv-hairline)] mb-2">
                  <span className="font-bold text-emerald-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    TELEMETRY V2
                  </span>
                  <span className="text-[9px] text-[var(--hv-muted)]">[BLR_NODE]</span>
                </div>
                <div className="space-y-1 text-[11px] text-[var(--hv-ink-70)] leading-tight">
                  <p>Runtime: <span className="text-[var(--hv-ink)] font-semibold">Flutter Impeller ARM</span></p>
                  <p>FPS: <span className="text-emerald-500 font-semibold">120.0 (0 drops)</span></p>
                  <p>Memory: <span className="text-emerald-500 font-semibold">0 MB Leaks</span></p>
                  <p>Defense: <span className="text-[var(--hv-ink)] font-semibold">TLS 1.3 Strict</span></p>
                  <p>Threat Vector: <span className="text-emerald-500 font-semibold">0 Exposed</span></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Massive Editorial Headline (HAVU exact visual weight with word cascade) */}
      <div className="my-auto py-8 sm:py-16 relative z-10">
        <h1
          className="hv-hero-title max-w-6xl tracking-[-0.04em]"
          aria-label="I don't just build apps. I engineer secure systems that withstand the real world."
        >
          {/* Line 1: I don't just build apps. */}
          <span className="hv-mask" aria-hidden="true">
            <span className="flex flex-wrap gap-x-[0.25em]">
              {["I", "don't", "just", "build", "apps."].map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="hv-piece inline-block"
                  style={{ "--pd": `${wIdx * 35}ms` } as React.CSSProperties}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>

          {/* Line 2: I engineer secure systems */}
          <span className="hv-mask text-[var(--hv-ink-70)]" aria-hidden="true">
            <span className="flex flex-wrap gap-x-[0.25em]">
              {["I", "engineer", "secure", "systems"].map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="hv-piece inline-block"
                  style={{ "--pd": `${(wIdx + 5) * 35}ms` } as React.CSSProperties}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>

          {/* Line 3: that withstand the real world. */}
          <span className="hv-mask" aria-hidden="true">
            <span className="flex flex-wrap gap-x-[0.25em]">
              {["that", "withstand", "the", "real", "world."].map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="hv-piece inline-block"
                  style={{ "--pd": `${(wIdx + 9) * 35}ms` } as React.CSSProperties}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
        </h1>
      </div>

      {/* Hairline divider with traversing pixel walker */}
      <div className="relative w-full border-t border-[var(--hv-hairline)] pt-8 z-10">
        {/* Pixel sprite walking back and forth along the divider */}
        <div
          aria-hidden="true"
          className="absolute -top-6 select-none pointer-events-none text-[var(--hv-ink)] hv-sprite-traversal"
        >
          <div className="hv-sprite-stepping">
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
              className="px-6 py-3 rounded-full bg-[var(--hv-ink)] text-[var(--hv-on-ink)] text-xs font-bold uppercase tracking-wider hover:opacity-85 transition-opacity inline-flex items-center"
            >
              <span className="hv-swap">
                <span>Selected Works &rarr;</span>
                <span aria-hidden="true">Selected Works &rarr;</span>
              </span>
            </a>

            <a
              href="#contact"
              data-cursor="link"
              className="px-5 py-3 rounded-full border border-[var(--hv-ink-25)] hover:border-[var(--hv-ink)] text-xs font-bold uppercase tracking-wider text-[var(--hv-ink)] transition-colors inline-flex items-center"
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
