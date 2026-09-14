"use client";

export default function HavuBlueprint() {
  return (
    <section
      id="blueprint"
      data-reveal="true"
      data-reveal-stagger="60"
      className="py-24 px-6 sm:px-12 border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="hv-fade hv-kicker">03 — System Blueprint</span>
            <span className="hv-rule h-px flex-1 bg-[var(--hv-hairline)]" />
          </div>

          <h2 className="hv-mask hv-display-jp text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl">
            <span>The security &amp; performance loop.</span>
          </h2>

          <p className="hv-up hv-lead max-w-3xl">
            How threat modeling, memory safety, and cross-platform native compilation connect into an iterative loop. This is our engineering operating system, drawn exactly as it runs.
          </p>
        </div>

        {/* Blueprint Diagram Card */}
        <div className="hv-up border border-[var(--hv-hairline)] p-4 sm:p-8 bg-[var(--hv-paper)] overflow-x-auto">
          <div className="min-w-[780px]">
            {/* Blueprint Titlebar */}
            <div className="flex items-center justify-between border-b border-[var(--hv-hairline)] pb-4 mb-6 font-mono text-xs text-[var(--hv-muted)]">
              <span className="font-bold tracking-widest text-[var(--hv-ink)]">
                AKASH / SYSTEM BLUEPRINT 01
              </span>
              <span>CONTINUOUS DEFENSE &amp; NATIVE PERFORMANCE ENGINE</span>
            </div>

            {/* SVG Diagram */}
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-auto text-[var(--hv-ink)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="hv-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" />
                </marker>
              </defs>

              {/* Top Section Labels */}
              <text x="30" y="30" fontSize="11" fontWeight="700" letterSpacing="2" fill="var(--hv-muted)">
                01 — DISCIPLINES
              </text>
              <text x="360" y="30" fontSize="11" fontWeight="700" letterSpacing="2" fill="var(--hv-muted)">
                02 — THE CORE OPERATING LOOP
              </text>
              <text x="760" y="30" fontSize="11" fontWeight="700" letterSpacing="2" fill="var(--hv-muted)">
                03 — ACCUMULATED VALUE
              </text>

              <line x1="20" y1="45" x2="980" y2="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

              {/* Column 1: Roles */}
              {/* Box 1: Cyber Security */}
              <g transform="translate(20, 65)">
                <rect width="260" height="95" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="transparent" />
                <text x="16" y="26" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)">
                  SECURITY DEFENSE
                </text>
                <text x="16" y="50" fontSize="14" fontWeight="800" fill="currentColor">
                  Penetration Testing &amp; Audits
                </text>
                <text x="16" y="74" fontSize="11" fill="var(--hv-muted)">
                  OWASP Top 10 · Burp Suite · STRIDE
                </text>
              </g>

              {/* Box 2: Mobile Engine */}
              <g transform="translate(20, 185)">
                <rect width="260" height="95" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="transparent" />
                <text x="16" y="26" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)">
                  MOBILE ENGINEERING
                </text>
                <text x="16" y="50" fontSize="14" fontWeight="800" fill="currentColor">
                  Flutter &amp; Dart Architecture
                </text>
                <text x="16" y="74" fontSize="11" fill="var(--hv-muted)">
                  60–120 FPS · Riverpod · Impeller ARM
                </text>
              </g>

              {/* Box 3: Systems & AI */}
              <g transform="translate(20, 305)">
                <rect width="260" height="95" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="transparent" />
                <text x="16" y="26" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)">
                  SYSTEMS &amp; MACHINE LEARNING
                </text>
                <text x="16" y="50" fontSize="14" fontWeight="800" fill="currentColor">
                  Deep Learning Telemetry
                </text>
                <text x="16" y="74" fontSize="11" fill="var(--hv-muted)">
                  PyTorch · Rust · Zero-Day Classifiers
                </text>
              </g>

              {/* Connector line to loop */}
              <line x1="280" y1="232" x2="360" y2="232" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#hv-arrow)" />

              {/* Center Column: Loop Circle */}
              <circle cx="540" cy="232" r="140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
              <circle cx="540" cy="232" r="130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" className="hv-dash-run" strokeOpacity="0.8" />

              {/* Loop Nodes */}
              {/* Top: Threat Modeling */}
              <g transform="translate(540, 92)">
                <circle cx="0" cy="0" r="6" fill="currentColor" className="hv-pulse" />
                <text x="0" y="-14" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="1" fill="currentColor">
                  1. THREAT MODEL
                </text>
                <text x="0" y="20" textAnchor="middle" fontSize="10" fill="var(--hv-muted)">
                  Attack Vectors &amp; Surface
                </text>
              </g>

              {/* Right: Hardened Architecture */}
              <g transform="translate(670, 232)">
                <circle cx="0" cy="0" r="6" fill="currentColor" className="hv-pulse" />
                <text x="14" y="-4" fontSize="11" fontWeight="800" letterSpacing="1" fill="currentColor">
                  2. HARDENED CODE
                </text>
                <text x="14" y="14" fontSize="10" fill="var(--hv-muted)">
                  Memory-Safe &amp; Encrypted
                </text>
              </g>

              {/* Bottom: Native Compilation */}
              <g transform="translate(540, 372)">
                <circle cx="0" cy="0" r="6" fill="currentColor" className="hv-pulse" />
                <text x="0" y="24" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="1" fill="currentColor">
                  3. NATIVE COMPILATION
                </text>
                <text x="0" y="-12" textAnchor="middle" fontSize="10" fill="var(--hv-muted)">
                  60 FPS Impeller / ARM
                </text>
              </g>

              {/* Left: Telemetry & ML */}
              <g transform="translate(410, 232)">
                <circle cx="0" cy="0" r="6" fill="currentColor" className="hv-pulse" />
                <text x="-14" y="-4" textAnchor="end" fontSize="11" fontWeight="800" letterSpacing="1" fill="currentColor">
                  4. ML TELEMETRY
                </text>
                <text x="-14" y="14" textAnchor="end" fontSize="10" fill="var(--hv-muted)">
                  Zero-Day Detection
                </text>
              </g>

              {/* Center Badge inside loop */}
              <g transform="translate(470, 195)">
                <rect width="140" height="74" fill="var(--hv-ink)" rx="4" />
                <text x="70" y="26" textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="1.5" fill="var(--hv-on-ink)" opacity="0.6">
                  ENGINE CORE
                </text>
                <text x="70" y="46" textAnchor="middle" fontSize="13" fontWeight="900" fill="var(--hv-on-ink)">
                  ZERO-COMPROMISE
                </text>
                <text x="70" y="62" textAnchor="middle" fontSize="10" fill="var(--hv-on-ink)" opacity="0.8">
                  Security &amp; Fluidity
                </text>
              </g>

              {/* Connector line to accumulation */}
              <line x1="680" y1="232" x2="760" y2="232" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#hv-arrow)" />

              {/* Column 3: Accumulation */}
              <g transform="translate(760, 65)">
                <text x="0" y="24" fontSize="16" fontWeight="800" fill="currentColor">
                  Compounds Every Lap
                </text>
                <text x="0" y="46" fontSize="12" fill="var(--hv-muted)">
                  The more iterations executed, the tighter the security boundaries and the faster the UI.
                </text>

                {/* Stacks */}
                <g transform="translate(0, 80)">
                  <rect width="210" height="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="transparent" />
                  <text x="14" y="24" fontSize="11" fontWeight="700" fill="currentColor">
                    Lap 3: Zero-Day Resilience
                  </text>
                </g>

                <g transform="translate(0, 130)">
                  <rect width="210" height="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="transparent" />
                  <text x="14" y="24" fontSize="11" fontWeight="700" fill="currentColor">
                    Lap 2: Offline-First Native Sync
                  </text>
                </g>

                <g transform="translate(0, 180)">
                  <rect width="210" height="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="transparent" />
                  <text x="14" y="24" fontSize="11" fontWeight="700" fill="currentColor">
                    Lap 1: Hardened API Baseline
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
