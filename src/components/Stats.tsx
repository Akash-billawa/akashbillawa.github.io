"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: "PROJECTS", value: 20, suffix: "+" },
  { label: "RESEARCH", value: 3 },
  { label: "CERTIFICATIONS", value: 6 },
  { label: "EXPERIENCE", value: 4, suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-value tabular-nums">
      {count}{suffix ?? ""}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-6" data-reveal suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-8 lg:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item flex flex-col items-center min-w-[100px]">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span className="section-label text-text-secondary mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
