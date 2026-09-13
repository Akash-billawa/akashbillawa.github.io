"use client";

import { useEffect, useRef } from "react";

const CELL = 10;
const RANGE = 50;
const DECAY = 0.05;
const IDLE = 100;
const MAX_DOT = CELL - 2;

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cols: number;
    let rows: number;
    const cells = new Map<number, number>();
    let mouseX = -1000;
    let mouseY = -1000;
    let lastMove = 0;
    let raf: number;

    function resize() {
      canvas!.width = innerWidth;
      canvas!.height = innerHeight;
      cols = Math.ceil(canvas!.width / CELL) + 1;
      rows = Math.ceil(canvas!.height / CELL) + 1;
    }

    function activate(x: number, y: number) {
      const ccx = Math.round(x / CELL);
      const ccy = Math.round(y / CELL);
      const gridR = Math.ceil(RANGE / CELL);

      for (let dy = -gridR; dy <= gridR; dy++) {
        const cy = ccy + dy;
        if (cy < 0 || cy >= rows) continue;
        for (let dx = -gridR; dx <= gridR; dx++) {
          const cx = ccx + dx;
          if (cx < 0 || cx >= cols) continue;

          const px = cx * CELL + CELL / 2;
          const py = cy * CELL + CELL / 2;
          const dist = Math.hypot(px - x, py - y);
          if (dist > RANGE) continue;

          const intensity = 1 - dist / RANGE;
          const key = cy * cols + cx;
          const existing = cells.get(key);
          cells.set(key, existing ? Math.max(existing, intensity) : intensity);
        }
      }
    }

    function frame() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      if (performance.now() - lastMove < IDLE) activate(mouseX, mouseY);

      for (const [key, intensity] of cells) {
        const next = intensity - DECAY;
        if (next <= 0) {
          cells.delete(key);
          continue;
        }
        cells.set(key, next);

        const cx = key % cols;
        const cy = (key - cx) / cols;
        const px = cx * CELL + CELL / 2;
        const py = cy * CELL + CELL / 2;
        const r = (MAX_DOT / 2) * next;

        ctx!.beginPath();
        ctx!.arc(px, py, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${next})`;
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMove = performance.now();
    };

    addEventListener("resize", resize);
    addEventListener("mousemove", onMove);
    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
