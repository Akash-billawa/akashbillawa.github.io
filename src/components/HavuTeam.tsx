"use client";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  specialties: string[];
}

const members: TeamMember[] = [
  {
    name: "Akash",
    role: "Cyber Security Engineer & Flutter Architect",
    desc: "Specializes in penetration testing, threat modeling, and high-performance cross-platform mobile engineering. Bridges low-level protocol inspection with butter-smooth 60fps Flutter user experiences.",
    specialties: ["Burp Suite Pro", "OWASP Top 10", "Flutter / Dart", "Riverpod", "Rust Systems"],
  },
  {
    name: "Research Lab",
    role: "Academic Inquiry & ML Intrusion Detection",
    desc: "Postgraduate research track focusing on Transformer attention models for network intrusion detection and cloud digital forensics. Evaluates models against real-world attack benchmarks (CICIDS2017).",
    specialties: ["PyTorch", "CICIDS2017", "Deep Learning", "Cloud Forensics", "eBPF"],
  },
  {
    name: "Jarvis Agent",
    role: "Autonomous Copilot for Security & Code",
    desc: "Custom-engineered LLM tool orchestration agent built with LangChain and FastAPI. Handles automated vulnerability fuzzing, dynamic script generation, and sub-15ms local codebase analysis.",
    specialties: ["LangChain", "OpenAI", "FastAPI", "AsyncIO", "Automated Fuzzing"],
  },
];

export default function HavuTeam() {
  return (
    <section
      id="team"
      data-reveal="true"
      data-reveal-stagger="70"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">10 — Practitioner &amp; Ecosystem</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Security, mobile, AI — as one unified force.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            We don&apos;t separate security audits from engineering execution; every discipline is brought together under a unified standard of craft.
          </p>
        </div>

        {/* 3 Members / Units Grid (HAVU style with pixel portraits) */}
        <div className="border-t border-[var(--hv-hairline)] grid grid-cols-1 md:grid-cols-3">
          {members.map((m, idx) => (
            <div
              key={m.name}
              className={`hv-up p-8 sm:p-10 border-b border-[var(--hv-hairline)] flex flex-col justify-between space-y-8 transition-colors hover:bg-[var(--hv-ink)]/[0.02] ${
                idx !== 2 ? "md:border-r" : ""
              }`}
            >
              <div className="space-y-6">
                {/* Pixel Art Avatar Box */}
                <div className="w-16 h-16 rounded-xl border border-[var(--hv-hairline)] bg-[var(--hv-ink-12)] flex items-center justify-center text-[var(--hv-ink)] group-hover:scale-105 transition-transform">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-10 h-10 hv-drift"
                    fill="currentColor"
                    shapeRendering="crispEdges"
                  >
                    {idx === 0 ? (
                      // Human Engineer Sprite
                      <>
                        <rect x="6" y="2" width="4" height="4" />
                        <rect x="5" y="6" width="6" height="5" />
                        <rect x="3" y="7" width="2" height="4" />
                        <rect x="11" y="7" width="2" height="4" />
                        <rect x="5" y="11" width="2" height="4" />
                        <rect x="9" y="11" width="2" height="4" />
                      </>
                    ) : idx === 1 ? (
                      // Academic Research / Network Node Sprite
                      <>
                        <rect x="7" y="1" width="2" height="2" />
                        <rect x="3" y="5" width="2" height="2" />
                        <rect x="11" y="5" width="2" height="2" />
                        <rect x="7" y="9" width="2" height="2" />
                        <rect x="7" y="3" width="2" height="6" />
                        <rect x="5" y="5" width="6" height="2" />
                        <rect x="4" y="12" width="8" height="2" />
                      </>
                    ) : (
                      // AI Agent Robot Sprite
                      <>
                        <rect x="4" y="2" width="8" height="7" />
                        <rect x="5" y="4" width="2" height="2" fill="var(--hv-paper)" />
                        <rect x="9" y="4" width="2" height="2" fill="var(--hv-paper)" />
                        <rect x="7" y="0" width="2" height="2" />
                        <rect x="5" y="10" width="6" height="4" />
                        <rect x="3" y="10" width="1" height="4" />
                        <rect x="12" y="10" width="1" height="4" />
                      </>
                    )}
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--hv-ink)]">
                    {m.name}
                  </h3>
                  <p className="font-mono text-xs text-[var(--hv-muted)]">
                    {m.role}
                  </p>
                </div>

                <p className="text-sm text-[var(--hv-ink-70)] leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--hv-hairline)] flex flex-wrap gap-1.5">
                {m.specialties.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--hv-ink-12)] text-[var(--hv-muted)] transition-colors hover:text-[var(--hv-ink)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
