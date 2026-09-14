"use client";

import { useEffect } from "react";

export function HavuRevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seenElements = new WeakSet<Element>();

    const observer = prefersReduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-in");
                observer?.unobserve(entry.target);
              }
            });
          },
          {
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.01,
          }
        );

    const setupElement = (node: HTMLElement) => {
      if (seenElements.has(node)) return;
      seenElements.add(node);

      const stagger = Number(node.dataset.revealStagger ?? 75);
      const targets = node.querySelectorAll<HTMLElement>(
        ".hv-mask, .hv-clip, .hv-up, .hv-wipe, .hv-rule, .hv-fade, .hv-draw-line, .hv-piece"
      );

      let idx = 0;
      targets.forEach((el) => {
        // Ensure this target belongs directly to this reveal container
        if (el.closest('[data-reveal="true"]') === node) {
          el.style.setProperty("--d", `${idx * stagger}ms`);
          idx++;
        }
      });

      if (prefersReduced) {
        node.classList.add("is-in");
      } else {
        observer?.observe(node);
      }
    };

    const scanAll = (root: ParentNode = document) => {
      if (root instanceof HTMLElement && root.hasAttribute("data-reveal")) {
        setupElement(root);
      }
      root.querySelectorAll<HTMLElement>('[data-reveal="true"]').forEach(setupElement);
    };

    // Initial scan
    scanAll(document.body);

    // Dynamic subtree mutation observer
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((added) => {
          if (added.nodeType === Node.ELEMENT_NODE) {
            scanAll(added as ParentNode);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
