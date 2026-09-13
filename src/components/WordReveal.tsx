"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface WordRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function WordReveal({ children, className = "", delay = 0 }: WordRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timerRef.current = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [delay]);

  if (typeof children !== "string") {
    return (
      <span
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.6s cubic-bezier(0.19,1,0.22,1), transform 0.6s cubic-bezier(0.19,1,0.22,1)`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </span>
    );
  }

  const text = children;
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.5s cubic-bezier(0.19,1,0.22,1), transform 0.5s cubic-bezier(0.19,1,0.22,1)`,
            transitionDelay: `${delay + i * 60}ms`,
            display: "inline-block",
            marginRight: "0.3em",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
