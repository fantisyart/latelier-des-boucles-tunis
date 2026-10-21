"use client";

import { useEffect } from "react";

/**
 * Smooth-scrolls to anchor targets while accounting for the sticky header,
 * and reduces motion when the user prefers it.
 */
export function SmoothAnchors() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headerOffset = 86;

    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      const el = document.querySelector<HTMLElement>(href);
      if (!el) return;

      event.preventDefault();
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top,
        behavior: reduced ? "auto" : "smooth",
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
