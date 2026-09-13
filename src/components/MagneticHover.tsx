"use client";

import { useRef, useState, type ReactNode } from "react";

interface MagneticHoverProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  block?: boolean;
}

export default function MagneticHover({ children, className = "", strength = 0.3, block = false }: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setStyle({
      transform: `translate(${x * strength}px, ${y * strength}px)`,
      transition: "transform 0.15s ease-out",
    });
  }

  function onMouseLeave() {
    setStyle({
      transform: "translate(0,0)",
      transition: "transform 0.4s cubic-bezier(0.19,1,0.22,1)",
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`${block ? "block" : "inline-block"} ${className}`}
    >
      {children}
    </div>
  );
}
