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

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--hv-hairline)]">
          {/* Left: Conventional */}
          <div className="hv-up p-8 sm:p-12 space-y-6 border-b md:border-b-0 md:border-r border-[var(--hv-hairline)]">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--hv-muted)] block">
              [ Conventional Development ]
            </span>
            <h3 className="text-2xl font-bold text-[var(--hv-ink)]">
              Siloed &amp; Fragile
            </h3>

            <ul className="space-y-4 text-sm text-[var(--hv-ink-70)]">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">&times;</span>
                <span>Security reviews tacked on as an afterthought right before deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">&times;</span>
                <span>Slow hybrid web views masquerading as native applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">&times;</span>
                <span>Unvetted third-party dependencies introducing supply chain risks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">&times;</span>
                <span>Zero real-time telemetry or anomaly detection on live traffic</span>
              </li>
            </ul>
          </div>

          {/* Right: Integrated Engineered Model */}
          <div className="hv-up p-8 sm:p-12 space-y-6 bg-[var(--hv-ink)] text-[var(--hv-on-ink)] transition-transform duration-500 hover:scale-[1.005]">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--hv-subtle)] block">
              [ Our Integrated Model ]
            </span>
            <h3 className="text-2xl font-bold">
              Hardened &amp; 120 FPS
            </h3>

            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Pre-emptive STRIDE threat modeling and OWASP Top 10 mitigation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Butter-smooth 60 to 120 FPS Flutter apps compiling directly to native ARM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Memory-safe backend and systems tooling engineered with Rust &amp; Dart</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Continuous deep learning anomaly classification with 98.7% accuracy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
