"use client";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

const steps: ProcessStep[] = [
  {
    step: "Step 01",
    title: "Understand",
    desc: "We analyze technical specifications, threat surfaces, user journeys, and existing vulnerabilities, agreeing on where the system is today and where it must go.",
  },
  {
    step: "Step 02",
    title: "Frame & Threat Model",
    desc: "We map trust boundaries, attack vectors (STRIDE), network latency constraints, and success criteria, defining the exact problems this sprint must solve.",
  },
  {
    step: "Step 03",
    title: "Explore & Prototype",
    desc: "We build functioning proof-of-concept exploits and mobile UI prototypes rapidly, turning abstract architectural questions into testable software.",
  },
  {
    step: "Step 04",
    title: "Build & Harden",
    desc: "We engineer the chosen architecture into production-ready Flutter code, memory-safe backend services, encrypted stores, and CI/CD security pipelines.",
  },
  {
    step: "Step 05",
    title: "Learn & Telemetry",
    desc: "We monitor live intrusion detection telemetry, memory profiles, and user interactions, converting real-world traffic data into ongoing system improvements.",
  },
];

export default function HavuProcess() {
  return (
    <section
      id="process"
      data-reveal="true"
      data-reveal-stagger="60"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">07 — Process</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Build fast. Test small. Keep the learning.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            Every engagement and research project runs through these five structured steps.
          </p>
        </div>

        {/* 5 Steps Grid (HAVU style) */}
        <div className="border-t border-[var(--hv-hairline)] divide-y divide-[var(--hv-hairline)]">
          {steps.map((s) => (
            <div
              key={s.step}
              className="hv-up py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group transition-colors hover:bg-[var(--hv-ink)]/[0.02]"
            >
              <div className="md:col-span-3 font-mono text-sm font-bold text-[var(--hv-muted)]">
                {s.step}
              </div>

              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold tracking-tight text-[var(--hv-ink)] group-hover:text-[var(--hv-accent)] transition-colors">
                  {s.title}
                </h3>
              </div>

              <div className="md:col-span-5 text-sm text-[var(--hv-ink-70)] leading-relaxed">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* How We Run Projects Manifesto Card */}
        <div className="hv-up p-8 sm:p-12 border border-[var(--hv-hairline)] bg-[var(--hv-ink-12)] space-y-6 mt-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--hv-muted)] block">
            HOW WE RUN PROJECTS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--hv-ink)] leading-relaxed">
            <div className="space-y-3">
              <p className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-[var(--hv-muted)]">&bull;</span>
                <span>Confirm the threat model and core hypotheses before freezing requirements.</span>
              </p>
              <p className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-[var(--hv-muted)]">&bull;</span>
                <span>Test high-risk technical uncertainties before polishing visual UI surfaces.</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-[var(--hv-muted)]">&bull;</span>
                <span>Use automated fuzzing and AI tooling to widen exploration, keeping final verification human-led.</span>
              </p>
              <p className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-[var(--hv-muted)]">&bull;</span>
                <span>Leave behind a hardened codebase, documentation, and continuous telemetry pipelines.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
