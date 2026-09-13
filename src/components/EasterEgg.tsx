"use client";

import { useEffect, useRef } from "react";

export default function EasterEgg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(false);

  useEffect(() => {
    const konamiCode = [
      "arrowup",
      "arrowup",
      "arrowdown",
      "arrowdown",
      "arrowleft",
      "arrowright",
      "arrowleft",
      "arrowright",
      "b",
      "a",
    ];
    let index = 0;
    let running = true;
    let rafId = 0;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
          index = 0;
          triggerMatrix();
        }
      } else {
        index = 0;
      }
    };

    function triggerMatrix() {
      if (activeRef.current) return;
      activeRef.current = true;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = "block";

      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = Array.from({ length: columns }, () => 1);
      const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";

      let frameCount = 0;

      function draw() {
        if (!running || !ctx || !canvas) return;
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#c8ff00";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }

        frameCount++;
        if (frameCount < 300) {
          rafId = requestAnimationFrame(draw);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          canvas.style.display = "none";
          activeRef.current = false;
        }
      }

      draw();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 10000, display: "none" }}
      aria-hidden="true"
    />
  );
}
