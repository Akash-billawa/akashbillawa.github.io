"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingProfile() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.8) {
        setIsOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 top-4 z-40 hidden lg:flex flex-col items-end gap-2">
      {/* GET IN TOUCH panel */}
      <a
        href="#contact"
        className="flex items-center gap-2 px-3 py-2 rounded bg-bg-secondary/80 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
      >
        <div className="w-5 h-5 rounded-full overflow-hidden relative">
          <Image
            src="/profile.svg"
            alt="Akash"
            fill
            className="object-cover"
            sizes="20px"
          />
        </div>
        <span className="section-label text-[10px]">GET IN TOUCH</span>
      </a>

      {/* THIS IS ME panel - collapses when scrolled past hero */}
      <div className="bg-bg-secondary/80 backdrop-blur-md border border-white/[0.08] rounded overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-6 w-full px-3 py-2 cursor-pointer"
        >
          <span className="section-label text-[10px]">THIS IS ME</span>
          <span className="text-[10px] text-text-secondary font-mono">
            {isOpen ? "( - )" : "( + )"}
          </span>
        </button>

        {/* Expandable panel */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-[180px]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/profile.svg"
                alt="Akash"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="180px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
