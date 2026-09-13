"use client";

import { useEffect, useRef, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface GlitchChar {
  ch: string;
  accent: boolean;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [glitchChars, setGlitchChars] = useState<Map<number, GlitchChar>>(new Map());
  const revertTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleChars(i);
      if (i >= text.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = new Map<number, GlitchChar>();
      for (let j = 0; j < text.length; j++) {
        if (Math.random() > 0.6) {
          next.set(j, {
            ch: GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)],
            accent: Math.random() > 0.7,
          });
        }
      }
      setGlitchChars(next);
      revertTimeoutRef.current = setTimeout(
        () => setGlitchChars(new Map()),
        200
      );
    }, 4000 + Math.random() * 3000);
    return () => {
      clearInterval(interval);
      if (revertTimeoutRef.current) clearTimeout(revertTimeoutRef.current);
    };
  }, [text]);

  const typing = visibleChars < text.length;

  if (glitchChars.size === 0) {
    return (
      <span className={`relative inline-block ${className}`} data-text={text}>
        {text.slice(0, visibleChars)}
        {typing && <span className="typing-cursor">|</span>}
      </span>
    );
  }

  return (
    <span className={`relative inline-block ${className}`} data-text={text}>
      {text.split("").map((char, i) => {
        const glitch = i < visibleChars ? glitchChars.get(i) : undefined;
        if (!glitch) {
          return (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          );
        }
        return (
          <span
            key={i}
            style={{
              color: glitch.accent ? "var(--color-accent)" : undefined,
              animation: "glitch-shift 0.2s ease",
            }}
          >
            {(glitch.ch === " " ? "\u00A0" : glitch.ch)}
          </span>
        );
      })}
      {typing && <span className="typing-cursor">|</span>}
    </span>
  );
}
