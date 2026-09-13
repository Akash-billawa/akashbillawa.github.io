"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ScrollParallax({ children, speed = 0.15, className = "" }: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el!.getBoundingClientRect();
        const viewH = window.innerHeight;
        const center = rect.top + rect.height / 2 - viewH / 2;
        const offset = center * speed;
        el!.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
