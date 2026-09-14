"use client";

interface Deliverable {
  num: string;
  title: string;
  desc: string;
  action: string;
  tags: string[];
}

const deliverables: Deliverable[] = [
  {
    num: "01",
    title: "Find the real vulnerabilities",
    desc: "We bring together manual penetration testing, protocol inspection, API fuzzing, and frontline threat modeling to unearth the flaws sitting behind standard scanner outputs.",
    action: "Threat Modeling & Auditing",
    tags: ["STRIDE Mapping", "OWASP Top 10", "Burp Suite Pro", "Zero-Day Discovery"],
  },
  {
    num: "02",
    title: "Make architecture tangible, fast",
    desc: "We build functioning security harnesses, proof-of-concept exploits, and interactive mobile prototypes quickly so hypotheses can be verified before full engineering investment.",
    action: "Rapid Prototyping & Exploits",
    tags: ["PoC Exploit Harnesses", "Flutter UI Spikes", "Platform Channels", "Offline Sync"],
  },
  {
    num: "03",
    title: "Deliver 60 to 120 FPS fluidity",
    desc: "Fluid gesture physics, zero jank, and instant responsiveness don't emerge from generic templates. We craft them with Flutter's Skia/Impeller engine and custom shaders.",
    action: "Native Flutter Architecture",
    tags: ["Impeller ARM", "Custom Shaders", "Riverpod State", "120 FPS Physics"],
  },
  {
    num: "04",
    title: "Carry it through to production build",
    desc: "We do not stop at filing a vulnerability report. We engineer the hardened application, the memory-safe libraries, the encrypted storage, and the CI/CD pipeline.",
    action: "Production Engineering & CI/CD",
    tags: ["Memory-Safe Rust", "Hardware Keychains", "TLS 1.3 Pinning", "GitHub Actions"],
  },
  {
    num: "05",
    title: "Turn telemetry into continuous defense",
    desc: "We deploy deep learning intrusion detection and real-time packet classification to confirm attacks are neutralized, feeding forensic logs into continuous hardening.",
    action: "Deep Learning & Forensics",
    tags: ["CICIDS2017 Dataset", "Transformer Hybrid", "eBPF Packet Flows", "98.7% Accuracy"],
  },
];

export default function HavuValue() {
  return (
    <section
      id="value"
      data-reveal="true"
      data-reveal-stagger="65"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">04 — Value</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>The strengths of security &amp; mobile craft, in one process.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            These are the five core outcomes we deliver to every project and research initiative.
          </p>
        </div>

        {/* 5 Deliverables Grid (HAVU style) */}
        <div className="border-t border-[var(--hv-hairline)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d, idx) => (
            <div
              key={d.num}
              data-cursor="view"
              data-cursor-label="EXPLORE"
              className={`hv-up p-8 sm:p-10 border-b border-[var(--hv-hairline)] flex flex-col justify-between space-y-6 transition-colors hover:bg-[var(--hv-ink)]/[0.02] ${
                idx % 3 !== 2 ? "lg:border-r" : ""
              } ${idx % 2 === 0 ? "md:border-r lg:border-r-0" : ""}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-[var(--hv-muted)] block">
                    {d.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-[var(--hv-muted)] uppercase">
                    {d.action}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--hv-ink)]">
                  {d.title}
                </h3>
                <p className="text-sm text-[var(--hv-ink-70)] leading-relaxed">
                  {d.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--hv-hairline)] flex flex-wrap gap-1.5">
                {d.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[var(--hv-hairline)] text-[var(--hv-ink-70)] hover:border-[var(--hv-ink)] hover:text-[var(--hv-ink)] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* 6th Cell: Engineering Stance (HAVU style) */}
          <div className="hv-up p-8 sm:p-10 border-b border-[var(--hv-hairline)] bg-[var(--hv-ink-12)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--hv-muted)]">
                ENGINEERING STANCE
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[var(--hv-ink)]">
                Defense-in-Depth &bull; Zero Lag
              </h3>
              <p className="text-xs text-[var(--hv-ink-70)] leading-relaxed">
                We measure success not by lines of code produced, but by attack vectors eliminated, frames delivered smoothly, and resilience maintained under live traffic.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[var(--hv-muted)]">
              AKASH / CORE CHARTER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
