"use client";

import { useEffect, useRef, useState } from "react";

export function HavuCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<"" | "link" | "view" | "hidden">("hidden");
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only enable custom cursor if fine pointer and hover are available
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsHover || prefersReduced) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        currentX = targetX;
        currentY = targetY;
        hasMoved = true;
        setCursorState("");
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest<HTMLElement>('[data-cursor="view"]');
      if (viewTarget) {
        setCursorState("view");
        setLabel(viewTarget.dataset.cursorLabel || "VIEW");
        return;
      }

      const linkTarget = target.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, [data-cursor="link"], .hv-swap'
      );
      if (linkTarget) {
        setCursorState("link");
        setLabel("");
        return;
      }

      setCursorState("");
      setLabel("");
    };

    const onMouseLeave = () => {
      setCursorState("hidden");
    };

    const onMouseEnter = () => {
      setCursorState("");
    };

    const loop = () => {
      // Lerp smoothing factor
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hv-cursor"
      data-state={cursorState}
      aria-hidden="true"
    >
      <span className="hv-cursor__label">{label}</span>
    </div>
  );
}
