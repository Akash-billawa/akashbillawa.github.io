"use client";

interface HavuMarqueeProps {
  items?: string[];
  speedSeconds?: number;
}

const defaultItems = [
  "DEFENSIVE ARCHITECTURE & ZERO-TRUST THREAT MODELING",
  "FLUTTER & IMPELLER NATIVE 60–120 FPS RENDERING",
  "OFFENSIVE APPLICATION SECURITY & BURP SUITE FUZZING",
  "TRANSFORMER ANOMALY CLASSIFIERS — 98.7% ACCURACY",
  "RUST MEMORY-SAFE TOOLING & POSIX CONCURRENCY",
  "PRE-EMPTIVE STRIDE ATTACK SURFACE AUDITING",
  "OFFLINE-FIRST DISTRIBUTED STATE WITH RIVERPOD & HIVE",
];

export default function HavuMarquee({
  items = defaultItems,
  speedSeconds = 40,
}: HavuMarqueeProps) {
  const content = items.join("  ／  ");

  return (
    <div className="w-full border-y border-[var(--hv-hairline)] bg-[var(--hv-paper)] py-4 overflow-hidden select-none">
      <div className="hv-marquee">
        <div
          className="hv-marquee-track"
          style={{ "--hv-marquee-dur": `${speedSeconds}s` } as React.CSSProperties}
        >
          {/* Duplicate track for seamless infinite loop */}
          <div className="flex shrink-0 items-center pr-8" aria-hidden="true">
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-[var(--hv-muted)] flex items-center">
              {content}
              <span className="px-6 opacity-35">／</span>
            </span>
          </div>
          <div className="flex shrink-0 items-center pr-8" aria-hidden="true">
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-[var(--hv-muted)] flex items-center">
              {content}
              <span className="px-6 opacity-35">／</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
