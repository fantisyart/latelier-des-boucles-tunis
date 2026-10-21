"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  "Personalized Hair Color",
  "Precision Cuts",
  "Effortless Styling",
  "Healthy Hair Treatments",
  "Beautiful by Design",
];

export function MarqueeStrip() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const items = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-label="Salon specialties"
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-blush-light)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="relative py-3.5"
        style={{
          color: "var(--color-text)",
        }}
      >
        <div
          className="flex items-center gap-10 whitespace-nowrap"
          style={{
            animation: reducedMotion
              ? "none"
              : "marquee 32s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="inline-block h-1 w-1 rounded-full"
                style={{ backgroundColor: "var(--color-blush)" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
