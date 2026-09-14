"use client";

import { useState, useEffect } from "react";

export default function HavuFooter() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[var(--hv-hairline)] bg-[var(--hv-paper)] py-16 px-6 sm:px-12 text-xs font-mono text-[var(--hv-muted)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left */}
        <div className="space-y-1">
          <p className="text-[var(--hv-ink)] font-bold text-sm tracking-tight font-sans">
            AKASH / CYBER SECURITY &amp; FLUTTER LAB
          </p>
          <p className="text-[11px] text-[var(--hv-muted)]">
            Bangalore, India · Systems Architecture · MSc Candidate
          </p>
        </div>

        {/* Center: Live Time & Status */}
        <div className="flex items-center gap-4 text-[11px] py-1 px-4 rounded-full border border-[var(--hv-hairline)]">
          <span className="flex items-center gap-1.5 text-[var(--hv-ink)] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            SYSTEM ONLINE
          </span>
          <span>·</span>
          <span suppressHydrationWarning>{mounted && time ? time : "10:30:00 AM IST"}</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/akashbillawa"
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="hv-underline hover:text-[var(--hv-ink)] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/akashbillawa"
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="hv-underline hover:text-[var(--hv-ink)] transition-colors"
          >
            LinkedIn ↗
          </a>
          <button
            onClick={scrollToTop}
            data-cursor="link"
            className="hover:text-[var(--hv-ink)] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="hv-swap">
              <span>Top ↑</span>
              <span aria-hidden="true">Top ↑</span>
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[var(--hv-hairline)] text-[10px] text-[var(--hv-subtle)] flex flex-col sm:flex-row justify-between gap-2">
        <span suppressHydrationWarning>&copy; 2024 Akash. All rights reserved.</span>
        <span>Architected with Next.js, Tailwind CSS &amp; Neo-Grotesque Precision.</span>
      </div>
    </footer>
  );
}
