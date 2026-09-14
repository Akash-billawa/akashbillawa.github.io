"use client";

interface IssueItem {
  num: string;
  title: string;
  desc: string;
}

const issues: IssueItem[] = [
  {
    num: "01",
    title: "The real threat model has never been framed",
    desc: "Feature requests are implemented rapidly, but the attack surfaces, trust boundaries, and privilege levels underneath them are never systematically defined.",
  },
  {
    num: "02",
    title: "Security, mobile and backend decide in isolation",
    desc: "Every team operates from conflicting assumptions; mobile state leaks authentication tokens while APIs fail to enforce strict parameterization.",
  },
  {
    num: "03",
    title: "Security adoption stops at buying automated scanners",
    desc: "Expensive scanning tools are in place, but they never reach the developer workflow or understand custom business-logic vulnerabilities.",
  },
  {
    num: "04",
    title: "The UI looks modern but performance collapses",
    desc: "Screens look impressive in design tools, yet stutter at 25 FPS with memory leaks and dropped frames when compiled to real mobile hardware.",
  },
  {
    num: "05",
    title: "Nothing is left behind once the audit ends",
    desc: "When external penetration testers file their PDF report and leave, continuous defensive capability and hardening stop with them.",
  },
  {
    num: "06",
    title: "Code output went up, systemic coherence went down",
    desc: "AI generators produce massive amounts of code quickly, while memory safety, architectural cohesion, and verifiable security deteriorate.",
  },
];

export default function HavuIssue() {
  return (
    <section
      id="issue"
      data-reveal="true"
      data-reveal-stagger="65"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">01 — The Issue</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>The faster you can build, the more security &amp; architecture matter.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            AI and frameworks have made writing code far faster. But speed delivers nothing while systemic vulnerabilities and sluggish runtimes stay unaddressed.
          </p>
        </div>

        {/* 6 Grid Cards (HAVU exact 2x3 or 3x2 hairline grid) */}
        <div className="border-t border-[var(--hv-hairline)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((item, idx) => (
            <div
              key={item.num}
              className={`hv-up p-8 sm:p-10 border-b border-[var(--hv-hairline)] space-y-4 transition-colors hover:bg-[var(--hv-ink)]/[0.02] ${
                idx % 3 !== 2 ? "lg:border-r" : ""
              } ${idx % 2 === 0 ? "md:border-r lg:border-r-0" : ""}`}
            >
              <span className="font-mono text-2xl font-bold text-[var(--hv-muted)] block">
                {item.num}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[var(--hv-ink)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--hv-ink-70)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
