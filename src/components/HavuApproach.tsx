"use client";

export default function HavuApproach() {
  return (
    <section
      id="approach"
      data-reveal="true"
      data-reveal-stagger="60"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">02 — The Approach</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>We build an engine for solving vulnerabilities, not just screens.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            We do not build software that simply functions on the surface. We work across offensive security, systems programming, and mobile rendering to build software that is mathematically secure and natively fluid.
          </p>
        </div>

        {/* HAVU-Style Hairline Comparison Table (7 Core Dimensions) */}
        <div className="hv-up border border-[var(--hv-hairline)] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[var(--hv-hairline)] bg-[var(--hv-ink-12)]">
            <div className="md:col-span-5 p-4 sm:p-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--hv-muted)] border-b md:border-b-0 md:border-r border-[var(--hv-hairline)]">
              [ Conventional Production Support ]
            </div>
            <div className="md:col-span-7 p-4 sm:p-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--hv-ink)] flex items-center justify-between">
              <span>[ Our Integrated Defensive Model ]</span>
              <span className="text-[10px] text-emerald-500 font-bold hidden sm:inline">ZERO-COMPROMISE</span>
            </div>
          </div>

          {/* 7 Comparison Rows */}
          <div className="divide-y divide-[var(--hv-hairline)]">
            {[
              {
                conventional: "Builds what was requested without questioning security boundaries",
                ours: "Frames STRIDE threat models and attack surfaces before writing code",
              },
              {
                conventional: "Hands over a hybrid web-view screen or a generic scanner PDF",
                ours: "Delivers a mathematically hardened system compiled to 120 FPS native ARM",
              },
              {
                conventional: "Supplies isolated contractor hours without cross-discipline insight",
                ours: "Supplies offensive penetration testing, architectural judgement and rapid execution",
              },
              {
                conventional: "Separates mobile frontend from backend security in isolated silos",
                ours: "Connects cryptographic protocols, secure local storage and native platform channels",
              },
              {
                conventional: "Builds once and stops when the external audit finishes",
                ours: "Deploys deep learning telemetry, forensic logging and continuous hardening",
              },
              {
                conventional: "Leaves security know-how and tooling trapped outside your company",
                ours: "Codifies defensive test suites, CI/CD gates and operational runbooks with your team",
              },
              {
                conventional: "Blindly pastes generative AI code without memory or boundary safety",
                ours: "Deploys verified ML models (98.7% accuracy) to actively classify zero-day flows",
              },
            ].map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-[var(--hv-ink)]/[0.02]"
              >
                {/* Left: Conventional */}
                <div className="md:col-span-5 p-5 sm:p-6 text-sm text-[var(--hv-ink-70)] border-b md:border-b-0 md:border-r border-[var(--hv-hairline)] flex items-start gap-3">
                  <span className="text-red-500/70 font-mono font-bold text-base leading-none select-none">&times;</span>
                  <span>{row.conventional}</span>
                </div>

                {/* Right: Our Model */}
                <div className="md:col-span-7 p-5 sm:p-6 text-sm text-[var(--hv-ink)] font-medium flex items-start gap-3 bg-[var(--hv-ink-12)]/40">
                  <span className="text-emerald-500 font-mono font-bold text-base leading-none select-none">✓</span>
                  <span>{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
