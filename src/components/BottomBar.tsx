"use client";

import { useState, useEffect } from "react";

export default function BottomBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh} : ${mm} : ${ss}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-inner">
        {/* Left - stats + location (Lamalama pattern) */}
        <div className="hidden sm:flex items-center gap-6">
          <span className="bottom-bar-label">20+ DIGITAL FREAKS</span>
          <span className="bottom-bar-label">INDIA BASED</span>
        </div>

        {/* Mobile left */}
        <div className="flex sm:hidden items-center gap-4">
          <span className="bottom-bar-label">20+ DIGITAL FREAKS</span>
        </div>

        {/* Center - time with Lamalama format */}
        <div className="hidden sm:flex items-center">
          <span className="bottom-bar-label text-text font-medium tabular-nums">
            [ {time} ]
          </span>
        </div>

        {/* Right - social links + back to top */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <span className="bottom-bar-label">FOLLOW US</span>
            <a
              href="https://instagram.com/akash"
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-bar-label hover:text-text transition-colors"
            >
              INSTAGRAM +
            </a>
            <a
              href="https://linkedin.com/in/akash"
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-bar-label hover:text-text transition-colors"
            >
              LINKEDIN +
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="bottom-bar-label">NL</span>
            <span className="text-accent">●</span>
            <span className="bottom-bar-label">EN</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bottom-bar-label hover:text-text transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            [TOP]
          </button>
        </div>
      </div>
    </div>
  );
}
