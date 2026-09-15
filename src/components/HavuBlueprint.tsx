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
          {/* Mobile swipe prompt */}
          <div className="flex md:hidden items-center justify-between pb-3 mb-3 border-b border-[var(--hv-hairline)] font-mono text-[10px] text-[var(--hv-muted)]">
            <span>[ HORIZONTAL BLUEPRINT // DRAG TO PAN ]</span>
            <span>&rarr;</span>
          </div>

          <div className="min-w-[1020px]">
            {/* Blueprint Titlebar */}
            <div className="flex items-center justify-between border-b border-[var(--hv-hairline)] pb-4 mb-6 font-mono text-xs text-[var(--hv-muted)]">
              <span className="font-bold tracking-widest text-[var(--hv-ink)]">
                AKASH / SYSTEM BLUEPRINT 01
              </span>
              <span>CONTINUOUS DEFENSE &amp; NATIVE PERFORMANCE ENGINE</span>
            </div>

            {/* SVG Diagram - Mathematically Balanced (1440 x 560) */}
            <svg
              viewBox="0 0 1440 560"
              className="w-full h-auto text-[var(--hv-ink)] select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="bp-arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--hv-ink)" />
                </marker>
              </defs>

              {/* Column 1 Header */}
              <text x="48" y="38" fontSize="12" fontWeight="700" letterSpacing="2.2" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                01 — DISCIPLINES
              </text>
              <path d="M 48 54 L 392 54" stroke="var(--hv-hairline)" strokeWidth="1.2" />

              {/* Column 2 Header */}
              <text x="720" y="38" fontSize="12" fontWeight="700" letterSpacing="2.2" textAnchor="middle" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                02 — THE CORE OPERATING LOOP
              </text>
              <circle cx="720" cy="54" r="3" fill="var(--hv-ink)" />

              {/* Column 3 Header */}
              <text x="1048" y="38" fontSize="12" fontWeight="700" letterSpacing="2.2" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                03 — ACCUMULATED VALUE
              </text>
              <path d="M 1048 54 L 1392 54" stroke="var(--hv-hairline)" strokeWidth="1.2" />

              {/* ================= COLUMN 1: DISCIPLINES (Left) ================= */}
              {/* Card 1: Security Defense */}
              <g className="hv-fade" style={{ "--d": "100ms" } as React.CSSProperties}>
                <rect x="48" y="78" width="344" height="126" rx="4" stroke="var(--hv-hairline)" strokeWidth="1.2" fill="var(--hv-paper)" />
                {/* Pixel Shield Icon */}
                <g transform="translate(64 96) scale(2.8)" fill="var(--hv-ink)" shapeRendering="crispEdges">
                  <rect x="2" y="1" width="12" height="1" />
                  <rect x="1" y="2" width="14" height="2" />
                  <rect x="1" y="4" width="14" height="4" />
                  <rect x="2" y="8" width="12" height="2" />
                  <rect x="3" y="10" width="10" height="2" />
                  <rect x="5" y="12" width="6" height="2" />
                  <rect x="7" y="14" width="2" height="2" />
                </g>
                <text x="120" y="105" fontSize="10.5" fontWeight="700" letterSpacing="1.8" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  SECURITY DEFENSE
                </text>
                <text x="120" y="128" fontSize="16" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Penetration Testing &amp; Audits
                </text>
                <text x="120" y="152" fontSize="11" fill="var(--hv-ink-70)" fontFamily="var(--font-mono)">
                  OWASP Top 10 · Burp Suite · STRIDE
                </text>
                <text x="120" y="172" fontSize="10.5" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  Memory defense &amp; zero-day audits
                </text>
              </g>

              {/* Card 2: Mobile Engineering */}
              <g className="hv-fade" style={{ "--d": "180ms" } as React.CSSProperties}>
                <rect x="48" y="222" width="344" height="126" rx="4" stroke="var(--hv-hairline)" strokeWidth="1.2" fill="var(--hv-paper)" />
                {/* Pixel Phone Icon */}
                <g transform="translate(68 238) scale(2.8)" fill="var(--hv-ink)" shapeRendering="crispEdges">
                  <rect x="4" y="1" width="8" height="1" />
                  <rect x="3" y="2" width="10" height="1" />
                  <rect x="3" y="3" width="10" height="10" />
                  <rect x="3" y="13" width="10" height="1" />
                  <rect x="4" y="14" width="8" height="1" />
                  <rect x="7" y="12" width="2" height="1" fill="var(--hv-paper)" />
                </g>
                <text x="120" y="249" fontSize="10.5" fontWeight="700" letterSpacing="1.8" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  MOBILE ENGINEERING
                </text>
                <text x="120" y="272" fontSize="16" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Flutter &amp; Dart Architecture
                </text>
                <text x="120" y="296" fontSize="11" fill="var(--hv-ink-70)" fontFamily="var(--font-mono)">
                  60–120 FPS · Riverpod · Impeller ARM
                </text>
                <text x="120" y="316" fontSize="10.5" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  Hardware keystores &amp; TLS 1.3 pinning
                </text>
              </g>

              {/* Card 3: Systems & AI */}
              <g className="hv-fade" style={{ "--d": "260ms" } as React.CSSProperties}>
                <rect x="48" y="366" width="344" height="126" rx="4" stroke="var(--hv-hairline)" strokeWidth="1.2" fill="var(--hv-paper)" />
                {/* Pixel Terminal / CPU Icon */}
                <g transform="translate(65 382) scale(2.8)" fill="var(--hv-ink)" shapeRendering="crispEdges">
                  <rect x="2" y="2" width="12" height="12" />
                  <rect x="4" y="4" width="8" height="8" fill="var(--hv-paper)" />
                  <rect x="6" y="6" width="4" height="4" fill="var(--hv-ink)" />
                  <rect x="7" y="0" width="2" height="2" />
                  <rect x="7" y="14" width="2" height="2" />
                  <rect x="0" y="7" width="2" height="2" />
                  <rect x="14" y="7" width="2" height="2" />
                </g>
                <text x="120" y="393" fontSize="10.5" fontWeight="700" letterSpacing="1.8" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  SYSTEMS &amp; MACHINE LEARNING
                </text>
                <text x="120" y="416" fontSize="16" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Deep Learning Telemetry
                </text>
                <text x="120" y="440" fontSize="11" fill="var(--hv-ink-70)" fontFamily="var(--font-mono)">
                  PyTorch · Rust POSIX · eBPF Flows
                </text>
                <text x="120" y="460" fontSize="10.5" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  98.7% zero-day intrusion detection
                </text>
              </g>

              {/* Vertical Connecting Rail */}
              <path d="M 416 78 L 416 492" stroke="var(--hv-hairline)" strokeWidth="1.4" />
              {/* Drive Arrow to Operating Loop */}
              <path d="M 416 295 L 535 295" stroke="var(--hv-ink)" strokeWidth="1.6" markerEnd="url(#bp-arrow)" className="hv-draw-line" style={{ "--len": 119, "--d": "320ms" } as React.CSSProperties} />
              <text x="475" y="283" fontSize="10" fontWeight="700" letterSpacing="1.5" textAnchor="middle" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                DRIVE
              </text>

              {/* ================= COLUMN 2: OPERATING LOOP (Center) ================= */}
              {/* Static Outer Circle */}
              <circle cx="720" cy="295" r="175" stroke="var(--hv-hairline)" strokeWidth="1.4" />
              {/* Animated Running Dash Circle */}
              <circle cx="720" cy="295" r="165" stroke="var(--hv-ink-45)" strokeWidth="1.2" className="hv-dash-run" />

              {/* Directional Chevrons */}
              <g className="hv-fade" style={{ "--d": "450ms" } as React.CSSProperties}>
                <path d="M -4 -3.5 L 4.5 0 L -4 3.5 z" fill="var(--hv-ink)" opacity="0.6" transform="translate(835 175) rotate(45)" />
                <path d="M -4 -3.5 L 4.5 0 L -4 3.5 z" fill="var(--hv-ink)" opacity="0.6" transform="translate(835 415) rotate(135)" />
                <path d="M -4 -3.5 L 4.5 0 L -4 3.5 z" fill="var(--hv-ink)" opacity="0.6" transform="translate(605 415) rotate(225)" />
                <path d="M -4 -3.5 L 4.5 0 L -4 3.5 z" fill="var(--hv-ink)" opacity="0.6" transform="translate(605 175) rotate(315)" />
              </g>

              {/* Center Engine Core Badge - Perfectly Sized & Centered */}
              <g className="hv-fade" style={{ "--d": "500ms" } as React.CSSProperties}>
                <rect x="625" y="230" width="190" height="130" rx="6" fill="var(--hv-paper)" stroke="var(--hv-ink)" strokeWidth="1.5" />
                {/* Dark Upper Header */}
                <path d="M 625 236 C 625 232.686 627.686 230 631 230 L 809 230 C 812.314 230 815 232.686 815 236 L 815 292 L 625 292 Z" fill="var(--hv-ink)" />
                
                {/* Top Half Text */}
                <text x="720" y="254" fontSize="9.5" fontWeight="700" letterSpacing="1.8" textAnchor="middle" fill="var(--hv-on-ink)" opacity="0.7" fontFamily="var(--font-mono)">
                  RUNTIME // 120 FPS
                </text>
                <text x="720" y="278" fontSize="17" fontWeight="900" textAnchor="middle" fill="var(--hv-on-ink)" fontFamily="var(--font-sans)">
                  ENGINE CORE
                </text>

                {/* Bottom Half Text */}
                <text x="720" y="313" fontSize="9.5" fontWeight="700" letterSpacing="1.8" textAnchor="middle" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  ZERO-COMPROMISE
                </text>
                <text x="720" y="333" fontSize="13" fontWeight="800" textAnchor="middle" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  0 MB Leaks &bull; TLS 1.3
                </text>
                <text x="720" y="349" fontSize="10" textAnchor="middle" fill="var(--hv-ink-70)" fontFamily="var(--font-mono)">
                  Impeller ARM &bull; OWASP Verified
                </text>
              </g>

              {/* 4 Cardinal Nodes - Zero Collisions */}
              {/* Node 1: Top (12 o'clock) */}
              <g className="hv-fade" style={{ "--d": "350ms" } as React.CSSProperties}>
                <rect x="714" y="114" width="12" height="12" rx="2" fill="var(--hv-ink)" />
                <text x="720" y="86" fontSize="13" fontWeight="800" letterSpacing="1.5" textAnchor="middle" fill="var(--hv-ink)" fontFamily="var(--font-mono)">
                  1. THREAT MODEL
                </text>
                <text x="720" y="104" fontSize="11" textAnchor="middle" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  Attack vectors &amp; trust boundaries
                </text>
              </g>

              {/* Node 2: Right (3 o'clock) */}
              <g className="hv-fade" style={{ "--d": "420ms" } as React.CSSProperties}>
                <rect x="889" y="289" width="12" height="12" rx="2" fill="var(--hv-ink)" />
                <text x="905" y="252" fontSize="13" fontWeight="800" letterSpacing="1.5" textAnchor="start" fill="var(--hv-ink)" fontFamily="var(--font-mono)">
                  2. HARDENED CODE
                </text>
                <text x="905" y="270" fontSize="11" textAnchor="start" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  Memory-safe &amp; encrypted stores
                </text>
              </g>

              {/* Node 3: Bottom (6 o'clock) */}
              <g className="hv-fade" style={{ "--d": "490ms" } as React.CSSProperties}>
                <rect x="714" y="464" width="12" height="12" rx="2" fill="var(--hv-ink)" />
                <text x="720" y="496" fontSize="13" fontWeight="800" letterSpacing="1.5" textAnchor="middle" fill="var(--hv-ink)" fontFamily="var(--font-mono)">
                  3. NATIVE COMPILATION
                </text>
                <text x="720" y="514" fontSize="11" textAnchor="middle" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  120 FPS Flutter Impeller runtime
                </text>
              </g>

              {/* Node 4: Left (9 o'clock) */}
              <g className="hv-fade" style={{ "--d": "560ms" } as React.CSSProperties}>
                <rect x="539" y="289" width="12" height="12" rx="2" fill="var(--hv-ink)" />
                <text x="525" y="252" fontSize="13" fontWeight="800" letterSpacing="1.5" textAnchor="end" fill="var(--hv-ink)" fontFamily="var(--font-mono)">
                  4. ML TELEMETRY
                </text>
                <text x="525" y="270" fontSize="11" textAnchor="end" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  98.7% zero-day anomaly detection
                </text>
              </g>

              {/* Compounds Arrow to Column 3 */}
              <path d="M 895 295 L 1030 295" stroke="var(--hv-ink)" strokeWidth="1.6" markerEnd="url(#bp-arrow)" className="hv-draw-line" style={{ "--len": 135, "--d": "600ms" } as React.CSSProperties} />
              <text x="962" y="283" fontSize="10" fontWeight="700" letterSpacing="1.5" textAnchor="middle" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                COMPOUNDS
              </text>

              {/* ================= COLUMN 3: ACCUMULATED VALUE (Right) ================= */}
              <g className="hv-fade" style={{ "--d": "650ms" } as React.CSSProperties}>
                {/* Title and Narrative */}
                <text x="1048" y="94" fontSize="20" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Compounds Every Lap
                </text>
                <text x="1048" y="118" fontSize="12" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  The more iterations executed, the tighter
                </text>
                <text x="1048" y="136" fontSize="12" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  security boundaries and performance become.
                </text>

                {/* Sub divider */}
                <path d="M 1048 152 L 1392 152" stroke="var(--hv-hairline)" strokeWidth="1.2" />

                {/* Upward Stack Flow Arrow */}
                <path d="M 1068 184 L 1068 162" stroke="var(--hv-ink)" strokeWidth="1.5" markerEnd="url(#bp-arrow)" />
                <text x="1084" y="176" fontSize="9.5" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                  ACCUMULATED STATE
                </text>

                {/* Stack Item 3: Lap 3 */}
                <g transform="translate(1048, 196)">
                  <rect width="344" height="88" rx="4" fill="var(--hv-paper)" stroke="var(--hv-ink)" strokeWidth="1.4" />
                  <rect x="0" y="0" width="6" height="88" rx="4 0 0 4" fill="var(--hv-ink)" />
                  <text x="22" y="28" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                    LAP 3 // RESILIENCE
                  </text>
                  <text x="22" y="52" fontSize="14" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                    Zero-Day ML Defense Active
                  </text>
                  <text x="22" y="72" fontSize="11" fill="var(--hv-ink-70)" fontFamily="var(--font-mono)">
                    Continuous telemetry &amp; live packet radar
                  </text>
                </g>

                {/* Stack Item 2: Lap 2 */}
                <g transform="translate(1048, 300)">
                  <rect width="344" height="88" rx="4" fill="var(--hv-paper)" stroke="var(--hv-hairline)" strokeWidth="1.2" />
                  <rect x="0" y="0" width="6" height="88" rx="4 0 0 4" fill="var(--hv-ink)" opacity="0.6" />
                  <text x="22" y="28" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                    LAP 2 // CLIENT PERFORMANCE
                  </text>
                  <text x="22" y="52" fontSize="14" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                    Offline-First 120 FPS Sync
                  </text>
                  <text x="22" y="72" fontSize="11" fill="var(--hv-ink-70)" fontFamily="var(--font-mono)">
                    Impeller ARM runtime with 0 frame drops
                  </text>
                </g>

                {/* Stack Item 1: Lap 1 */}
                <g transform="translate(1048, 404)">
                  <rect width="344" height="88" rx="4" fill="var(--hv-paper)" stroke="var(--hv-hairline)" strokeWidth="1.2" />
                  <rect x="0" y="0" width="6" height="88" rx="4 0 0 4" fill="var(--hv-ink)" opacity="0.3" />
                  <text x="22" y="28" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)" fontFamily="var(--font-mono)">
                    LAP 1 // ARCHITECTURE
                  </text>
                  <text x="22" y="52" fontSize="14" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                    Hardened Cryptographic Baseline
                  </text>
                  <text x="22" y="72" fontSize="11" fill="var(--hv-ink-70)" fontFamily="var(--font-mono)">
                    Hardware keystores &amp; strict TLS 1.3 pinning
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
