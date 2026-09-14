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
          <div className="min-w-[960px]">
            {/* Blueprint Titlebar */}
            <div className="flex items-center justify-between border-b border-[var(--hv-hairline)] pb-4 mb-6 font-mono text-xs text-[var(--hv-muted)]">
              <span className="font-bold tracking-widest text-[var(--hv-ink)]">
                AKASH / SYSTEM BLUEPRINT 01
              </span>
              <span>CONTINUOUS DEFENSE &amp; NATIVE PERFORMANCE ENGINE</span>
            </div>

            {/* SVG Diagram - Exact HAVU Proportions (1344 x 748) */}
            <svg
              viewBox="48 0 1344 748"
              className="w-full h-auto text-[var(--hv-ink)] select-none font-mono"
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

              {/* Blueprint Subtitle & Scope inside SVG */}
              <g className="hv-fade">
                <text x="48" y="46" fontSize="12" fontWeight="700" letterSpacing="2.4" fill="var(--hv-muted)">
                  AKASH / SYSTEM ARCHITECTURE SPEC
                </text>
                <text x="48" y="96" fontSize="32" fontWeight="900" letterSpacing="-0.5" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Continuous Defense &amp; Native Compilation Loop
                </text>
                <text x="48" y="130" fontSize="15" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  Pre-emptive threat modeling feeds native 120 FPS compilation, returning real-world telemetry into continuous defense.
                </text>
              </g>

              {/* Main Divider Line */}
              <path d="M 48 166 L 1392 166" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 1344 } as React.CSSProperties} />

              {/* Section Column Headers */}
              <g className="hv-fade" fontSize="12" fontWeight="700" letterSpacing="2.4" fill="var(--hv-muted)">
                <text x="48" y="212">01 — DISCIPLINES</text>
                <text x="540" y="212">02 — THE CORE OPERATING LOOP</text>
                <text x="1144" y="212">03 — ACCUMULATED VALUE</text>
              </g>

              {/* ================= COLUMN 1: DISCIPLINES (Left) ================= */}
              {/* Row 1: Security Defense */}
              <g className="hv-fade" style={{ "--d": "120ms" } as React.CSSProperties}>
                <path d="M 48 246 L 440 246" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 392, "--d": "120ms" } as React.CSSProperties} />
                <text x="48" y="272" fontSize="11" fontWeight="700" letterSpacing="2" fill="var(--hv-muted)">
                  SECURITY DEFENSE
                </text>
                {/* Pixel Shield Icon */}
                <g transform="translate(56 292) scale(4)" fill="var(--hv-ink)" shapeRendering="crispEdges">
                  <rect x="2" y="1" width="12" height="1" />
                  <rect x="1" y="2" width="14" height="2" />
                  <rect x="1" y="4" width="14" height="4" />
                  <rect x="2" y="8" width="12" height="2" />
                  <rect x="3" y="10" width="10" height="2" />
                  <rect x="5" y="12" width="6" height="2" />
                  <rect x="7" y="14" width="2" height="2" />
                </g>
                <text x="140" y="320" fontSize="18" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Penetration Testing &amp; Audits
                </text>
                <text x="140" y="346" fontSize="12.5" fill="var(--hv-ink-70)">
                  OWASP Top 10 · Burp Suite Pro · STRIDE Threat Models
                </text>
              </g>

              {/* Row 2: Mobile Engineering */}
              <g className="hv-fade" style={{ "--d": "200ms" } as React.CSSProperties}>
                <path d="M 48 418 L 440 418" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 392, "--d": "200ms" } as React.CSSProperties} />
                <text x="48" y="444" fontSize="11" fontWeight="700" letterSpacing="2" fill="var(--hv-muted)">
                  MOBILE ENGINEERING
                </text>
                {/* Pixel Phone Icon */}
                <g transform="translate(60 464) scale(4)" fill="var(--hv-ink)" shapeRendering="crispEdges">
                  <rect x="4" y="1" width="8" height="1" />
                  <rect x="3" y="2" width="10" height="1" />
                  <rect x="3" y="3" width="10" height="10" />
                  <rect x="3" y="13" width="10" height="1" />
                  <rect x="4" y="14" width="8" height="1" />
                  <rect x="7" y="12" width="2" height="1" fill="var(--hv-paper)" />
                </g>
                <text x="140" y="492" fontSize="18" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Flutter &amp; Dart Architecture
                </text>
                <text x="140" y="518" fontSize="12.5" fill="var(--hv-ink-70)">
                  60–120 FPS Fluidity · Riverpod · Impeller ARM Compiler
                </text>
              </g>

              {/* Row 3: Systems & AI */}
              <g className="hv-fade" style={{ "--d": "280ms" } as React.CSSProperties}>
                <path d="M 48 590 L 440 590" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 392, "--d": "280ms" } as React.CSSProperties} />
                <text x="48" y="616" fontSize="11" fontWeight="700" letterSpacing="2" fill="var(--hv-muted)">
                  SYSTEMS &amp; MACHINE LEARNING
                </text>
                {/* Pixel Terminal / CPU Icon */}
                <g transform="translate(56 636) scale(4)" fill="var(--hv-ink)" shapeRendering="crispEdges">
                  <rect x="2" y="2" width="12" height="12" />
                  <rect x="4" y="4" width="8" height="8" fill="var(--hv-paper)" />
                  <rect x="6" y="6" width="4" height="4" fill="var(--hv-ink)" />
                  <rect x="7" y="0" width="2" height="2" />
                  <rect x="7" y="14" width="2" height="2" />
                  <rect x="0" y="7" width="2" height="2" />
                  <rect x="14" y="7" width="2" height="2" />
                </g>
                <text x="140" y="664" fontSize="18" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  Deep Learning Telemetry
                </text>
                <text x="140" y="690" fontSize="12.5" fill="var(--hv-ink-70)">
                  PyTorch · Rust POSIX · 98.7% Zero-Day Detection
                </text>
              </g>

              {/* Vertical Connecting Rail and Arrow into the Operating Loop */}
              <path d="M 464 246 L 464 738" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 492, "--d": "320ms" } as React.CSSProperties} />
              <path d="M 464 492 L 580 492" fill="none" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 116, "--d": "420ms" } as React.CSSProperties} markerEnd="url(#bp-arrow)" />
              <text x="522" y="478" fontSize="12" textAnchor="middle" fill="var(--hv-muted)" className="hv-fade" style={{ "--d": "480ms" } as React.CSSProperties}>
                DRIVE
              </text>

              {/* ================= COLUMN 2: THE OPERATING LOOP (Center) ================= */}
              {/* Concentric Circle Guides */}
              <circle cx="810" cy="492" r="215" fill="none" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 1351, "--d": "200ms" } as React.CSSProperties} />
              <circle cx="810" cy="492" r="203" fill="none" stroke="var(--hv-ink-45)" strokeWidth="1.2" className="hv-dash-run" />

              {/* 5 Outer Directional Chevrons circulating around the perimeter */}
              <g className="hv-fade" style={{ "--d": "620ms" } as React.CSSProperties}>
                <path d="M -5 -4.5 L 5.5 0 L -5 4.5 z" fill="var(--hv-ink)" opacity="0.55" transform="translate(936.37 318.06) rotate(36)" />
                <path d="M -5 -4.5 L 5.5 0 L -5 4.5 z" fill="var(--hv-ink)" opacity="0.55" transform="translate(1014.48 558.44) rotate(108)" />
                <path d="M -5 -4.5 L 5.5 0 L -5 4.5 z" fill="var(--hv-ink)" opacity="0.55" transform="translate(810 707) rotate(180)" />
                <path d="M -5 -4.5 L 5.5 0 L -5 4.5 z" fill="var(--hv-ink)" opacity="0.55" transform="translate(605.52 558.44) rotate(252)" />
                <path d="M -5 -4.5 L 5.5 0 L -5 4.5 z" fill="var(--hv-ink)" opacity="0.55" transform="translate(683.63 318.06) rotate(324)" />
              </g>

              {/* 5 Operating Loop Nodes - Positioned Safely OUTSIDE with Zero Line Collisions */}
              <g className="hv-fade" style={{ "--d": "560ms" } as React.CSSProperties}>
                {/* Node 1: Top (Threat Model) */}
                <g>
                  <rect x="804" y="271" width="12" height="12" fill="var(--hv-ink)" />
                  <text x="810" y="235" fontSize="13" fontWeight="800" letterSpacing="1.6" textAnchor="middle" fill="var(--hv-ink)">
                    1. THREAT MODEL
                  </text>
                  <text x="810" y="254" fontSize="11.5" textAnchor="middle" fill="var(--hv-ink-70)">
                    Attack vectors &amp; trust boundaries
                  </text>
                </g>

                {/* Node 2: Top-Right (Hardened Code) */}
                <g>
                  <rect x="1008.48" y="419.56" width="12" height="12" fill="var(--hv-ink)" />
                  <text x="1036" y="414" fontSize="13" fontWeight="800" letterSpacing="1.6" textAnchor="start" fill="var(--hv-ink)">
                    2. HARDENED CODE
                  </text>
                  <text x="1036" y="433" fontSize="11.5" textAnchor="start" fill="var(--hv-ink-70)">
                    Memory-safe &amp; encrypted stores
                  </text>
                </g>

                {/* Node 3: Bottom-Right (Native ARM) */}
                <g>
                  <rect x="930.37" y="659.94" width="12" height="12" fill="var(--hv-ink)" />
                  <text x="958" y="694" fontSize="13" fontWeight="800" letterSpacing="1.6" textAnchor="start" fill="var(--hv-ink)">
                    3. NATIVE ARM
                  </text>
                  <text x="958" y="713" fontSize="11.5" textAnchor="start" fill="var(--hv-ink-70)">
                    120 FPS Flutter Impeller runtime
                  </text>
                </g>

                {/* Node 4: Bottom-Left (Production Gate) */}
                <g>
                  <rect x="677.63" y="659.94" width="12" height="12" fill="var(--hv-ink)" />
                  <text x="660" y="694" fontSize="13" fontWeight="800" letterSpacing="1.6" textAnchor="end" fill="var(--hv-ink)">
                    4. PRODUCTION GATE
                  </text>
                  <text x="660" y="713" fontSize="11.5" textAnchor="end" fill="var(--hv-ink-70)">
                    Automated CI/CD security tests
                  </text>
                </g>

                {/* Node 5: Top-Left (ML Telemetry) */}
                <g>
                  <rect x="599.52" y="419.56" width="12" height="12" fill="var(--hv-ink)" />
                  <text x="584" y="414" fontSize="13" fontWeight="800" letterSpacing="1.6" textAnchor="end" fill="var(--hv-ink)">
                    5. ML TELEMETRY
                  </text>
                  <text x="584" y="433" fontSize="11.5" textAnchor="end" fill="var(--hv-ink-70)">
                    98.7% zero-day anomaly detection
                  </text>
                </g>
              </g>

              {/* Center Engine Core Badge - HAVU 2-Tone Card */}
              <g className="hv-fade" style={{ "--d": "700ms" } as React.CSSProperties}>
                {/* Background Card */}
                <rect x="690" y="404" width="240" height="176" fill="var(--hv-paper)" stroke="var(--hv-ink)" strokeWidth="1.6" />
                {/* Dark Upper Header */}
                <rect x="690" y="404" width="240" height="92" fill="var(--hv-ink)" />

                {/* Top Half Text */}
                <text x="754" y="432" fontSize="10.5" fontWeight="700" letterSpacing="1.8" fill="var(--hv-on-ink)" opacity="0.6">
                  RUNTIME // 120.0 FPS
                </text>
                <text x="754" y="456" fontSize="20" fontWeight="900" fill="var(--hv-on-ink)" fontFamily="var(--font-sans)">
                  ENGINE CORE
                </text>
                <text x="710" y="482" fontSize="11.5" fill="var(--hv-on-ink)" opacity="0.75">
                  Mathematical Defense &amp; Fluidity
                </text>

                {/* Bottom Half Text */}
                <text x="710" y="520" fontSize="10.5" fontWeight="700" letterSpacing="1.8" fill="var(--hv-muted)">
                  ZERO-COMPROMISE
                </text>
                <text x="710" y="542" fontSize="15" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  0 MB Leaks &bull; TLS 1.3
                </text>
                <text x="710" y="563" fontSize="11.5" fill="var(--hv-ink-70)">
                  Impeller ARM &bull; OWASP Verified
                </text>
              </g>

              {/* Connecting Arrow from Loop to Accumulation */}
              <path d="M 1032 492 L 1130 492" fill="none" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 98, "--d": "760ms" } as React.CSSProperties} markerEnd="url(#bp-arrow)" />
              <text x="1081" y="478" fontSize="12" textAnchor="middle" fill="var(--hv-muted)" className="hv-fade" style={{ "--d": "800ms" } as React.CSSProperties}>
                COMPOUNDS
              </text>

              {/* ================= COLUMN 3: ACCUMULATION (Right) ================= */}
              <g className="hv-fade" style={{ "--d": "840ms" } as React.CSSProperties}>
                <text x="1144" y="300" fontSize="20" fontWeight="800" fill="var(--hv-ink)" fontFamily="var(--font-sans)">
                  It compounds every lap
                </text>
                <text x="1144" y="330" fontSize="13" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  The more iterations executed, the tighter
                </text>
                <text x="1144" y="352" fontSize="13" fill="var(--hv-ink-70)" fontFamily="var(--font-sans)">
                  security boundaries and performance become.
                </text>

                {/* Divider Line under Heading */}
                <path d="M 1144 400 L 1392 400" stroke="var(--hv-ink)" strokeWidth="1.6" className="hv-draw-line" style={{ "--len": 248, "--d": "880ms" } as React.CSSProperties} />

                {/* Upward Stack Arrow */}
                <path d="M 1194 440 L 1194 416" stroke="var(--hv-ink)" strokeWidth="1.6" markerEnd="url(#bp-arrow)" className="hv-pulse" />

                {/* Stack Item 3: Zero-Day Resilience */}
                <g transform="translate(1144, 450)">
                  <rect width="248" height="64" fill="var(--hv-paper)" stroke="var(--hv-ink)" strokeWidth="1.2" />
                  <rect x="0" y="0" width="6" height="64" fill="var(--hv-ink)" />
                  <text x="18" y="26" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)">
                    LAP 3 // RESILIENCE
                  </text>
                  <text x="18" y="48" fontSize="13" fontWeight="800" fill="var(--hv-ink)">
                    Zero-Day ML Defense Active
                  </text>
                </g>

                {/* Stack Item 2: Offline-First Native Sync */}
                <g transform="translate(1144, 532)">
                  <rect width="248" height="64" fill="var(--hv-paper)" stroke="var(--hv-ink)" strokeWidth="1.2" />
                  <rect x="0" y="0" width="6" height="64" fill="var(--hv-ink)" opacity="0.6" />
                  <text x="18" y="26" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)">
                    LAP 2 // CLIENT PERFORMANCE
                  </text>
                  <text x="18" y="48" fontSize="13" fontWeight="800" fill="var(--hv-ink)">
                    Offline-First 120 FPS Sync
                  </text>
                </g>

                {/* Stack Item 1: Hardened API Baseline */}
                <g transform="translate(1144, 614)">
                  <rect width="248" height="64" fill="var(--hv-paper)" stroke="var(--hv-ink)" strokeWidth="1.2" />
                  <rect x="0" y="0" width="6" height="64" fill="var(--hv-ink)" opacity="0.3" />
                  <text x="18" y="26" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="var(--hv-muted)">
                    LAP 1 // ARCHITECTURE
                  </text>
                  <text x="18" y="48" fontSize="13" fontWeight="800" fill="var(--hv-ink)">
                    Hardened Cryptographic Baseline
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
