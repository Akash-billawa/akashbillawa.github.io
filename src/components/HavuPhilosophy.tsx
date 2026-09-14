"use client";

export default function HavuPhilosophy() {
  return (
    <section
      data-reveal="true"
      data-reveal-stagger="65"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">08 — Philosophy</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>We leave more than deliverables — we leave the ability to stay secure.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[var(--hv-hairline)] pt-12">
          <div className="hv-up md:col-span-4 font-mono text-xs text-[var(--hv-muted)] uppercase tracking-widest">
            THE GOAL IS RESILIENCE, NOT A HANDOVER TICKET
          </div>

          <div className="hv-up md:col-span-8 space-y-6 text-base sm:text-lg text-[var(--hv-ink-70)] leading-relaxed">
            <p>
              When traditional contractors finish a project, they hand over a repository or a vulnerability report and depart. If a new zero-day surfaces or user scale doubles, the organization is back where it started.
            </p>
            <p>
              We design software as a living feedback loop. We build codified security standards, clean state architectures, documented threat models, and automated CI/CD linting so that your team can continue building safely and quickly without external dependency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
