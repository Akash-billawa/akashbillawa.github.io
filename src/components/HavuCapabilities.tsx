"use client";

interface Capability {
  number: string;
  title: string;
  subtitle: string;
  skills: string[];
}

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Offensive Security & Penetration Testing",
    subtitle:
      "Deep attack surface reconnaissance, web application security testing, API fuzzing, and mitigation verification using Burp Suite Pro, Metasploit, Wireshark, and OWASP Top 10 methodologies.",
    skills: ["Burp Suite Pro", "OWASP Top 10", "Wireshark", "Metasploit", "Threat Modeling"],
  },
  {
    number: "02",
    title: "High-Performance Flutter Engineering",
    subtitle:
      "Architecting fluid, 60-to-120 FPS cross-platform mobile apps for iOS and Android with strict state management via Riverpod, offline-first Hive caching, and low-level platform channels.",
    skills: ["Flutter", "Dart", "Riverpod", "Hive", "Platform Channels", "Custom Shaders"],
  },
  {
    number: "03",
    title: "Systems & Memory-Safe Tooling",
    subtitle:
      "Building low-overhead security tooling, packet analyzers, and backend automation using Rust and Python. Enforcing zero buffer overflows, thread safety, and asynchronous POSIX concurrency.",
    skills: ["Rust", "Python", "FastAPI", "Linux / POSIX", "Memory Safety"],
  },
  {
    number: "04",
    title: "Deep Learning Anomaly Detection",
    subtitle:
      "Applying Transformer attention networks and hybrid CNN-LSTM deep architectures to high-throughput network traffic, achieving 98.7% accuracy on the CICIDS2017 benchmark dataset.",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "CICIDS2017", "Feature Selection"],
  },
  {
    number: "05",
    title: "DevSecOps & Infrastructure Hardening",
    subtitle:
      "Integrating continuous security linting, hardened Docker containerization, automated vulnerability scans, and cryptographic integrity into continuous integration pipelines.",
    skills: ["Docker", "CI/CD Security", "Git", "TLS / Cryptography", "Container Audits"],
  },
];

export default function HavuCapabilities() {
  return (
    <section
      id="skills"
      data-reveal="true"
      data-reveal-stagger="65"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">05 — Capabilities</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>Five core disciplines in one process.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            From offensive vulnerability discovery to production-ready cross-platform mobile compilation, every capability is executed with engineering rigor.
          </p>
        </div>

        {/* Hairline Grid (HAVU exact layout) */}
        <div className="border-t border-[var(--hv-hairline)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.number}
              data-cursor="view"
              data-cursor-label="CAPABILITY"
              className={`hv-up p-8 sm:p-10 border-b border-[var(--hv-hairline)] flex flex-col justify-between space-y-8 transition-colors hover:bg-[var(--hv-ink)]/[0.02] ${
                idx % 3 !== 2 ? "lg:border-r" : ""
              } ${idx % 2 === 0 ? "md:border-r lg:border-r-0" : ""}`}
            >
              <div className="space-y-4">
                <span className="font-mono text-2xl font-bold text-[var(--hv-muted)] block">
                  {cap.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--hv-ink)]">
                  {cap.title}
                </h3>
                <p className="text-sm text-[var(--hv-ink-70)] leading-relaxed">
                  {cap.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--hv-hairline)]">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--hv-ink-12)] text-[var(--hv-ink)] transition-colors hover:bg-[var(--hv-ink)] hover:text-[var(--hv-on-ink)]"
                  >
                    {skill}
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
