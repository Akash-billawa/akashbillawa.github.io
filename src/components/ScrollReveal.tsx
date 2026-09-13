"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let fallback: ReturnType<typeof setTimeout> | undefined;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "200px 0px 200px 0px" }
      );

      const els = document.querySelectorAll("[data-reveal]:not(.revealed)");
      els.forEach((el) => observer?.observe(el));

      // Fallback: reveal all remaining after 3s
      fallback = setTimeout(() => {
        document.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => {
          el.classList.add("revealed");
        });
        observer?.disconnect();
      }, 3000);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (fallback) clearTimeout(fallback);
      observer?.disconnect();
    };
  }, []);

  return null;
}
