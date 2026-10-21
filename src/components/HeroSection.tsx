"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return (
    <section
      id="home"
      aria-label="Latelier des Boucles — luxury hair artistry in Tunis"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      <div className="relative w-full h-[clamp(520px,68vh,640px)] sm:h-[clamp(480px,62vh,600px)] lg:h-[clamp(540px,68vh,640px)]">
        {/* Background image with subtle scale-in */}
        <div
          className="absolute inset-0"
          style={{
            transform: reducedMotion ? "none" : "scale(1.03)",
            animation: reducedMotion
              ? "none"
              : "hero-zoom 1400ms cubic-bezier(0.22,0.61,0.36,1) forwards",
          }}
        >
          <Image
            src="/images/hero-hair-editorial.jpg"
            alt="A model with long dimensional brunette and caramel hair, photographed in soft, warm editorial light."
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[78%_center] sm:object-[70%_center] lg:object-right-center"
          />
        </div>

        {/* Charcoal gradient overlay for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(41,39,32,0.78) 0%, rgba(41,39,32,0.55) 38%, rgba(41,39,32,0.12) 64%, rgba(41,39,32,0) 78%)",
          }}
        />

        {/* Hero content */}
        <div className="container-editorial relative z-10 flex h-full items-center">
          <div className="max-w-[560px] py-12 sm:py-16">
            <div
              className="reveal mb-5 flex items-center gap-3"
              style={{ color: "var(--color-blush-light)" }}
            >
              <span
                aria-hidden="true"
                className="block h-px w-12"
                style={{ backgroundColor: "var(--color-blush-light)" }}
              />
              <span className="text-[10.5px] font-medium uppercase tracking-[0.2em]">
                Your Signature Look Starts Here
              </span>
            </div>

            <h1
              className="reveal"
              style={{
                color: "var(--color-ivory)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.6rem, 5.4vw, 5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.012em",
                fontWeight: 400,
                transitionDelay: "120ms",
              }}
            >
              Great Hair.
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-blush-light)",
                }}
              >
                A Beautiful You.
              </em>
            </h1>

            <p
              className="reveal mt-6 max-w-[480px] text-[15px] leading-[1.75]"
              style={{
                color: "rgba(247,243,237,0.86)",
                transitionDelay: "220ms",
              }}
            >
              Discover personalized hair artistry, dimensional color, and
              effortless styling designed to bring out your most confident self.
            </p>

            <div
              className="reveal mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
              style={{ transitionDelay: "320ms" }}
            >
              <a href="#booking" className="btn btn-light">
                Book Your Experience
                <ArrowRight size={14} aria-hidden="true" className="btn-arrow" />
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Bottom blush transition strip */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[6px]"
          style={{ backgroundColor: "var(--color-blush-light)" }}
        />
      </div>

      <style>{`
        @keyframes hero-zoom {
          from { transform: scale(1.07); }
          to { transform: scale(1.0); }
        }
      `}</style>
    </section>
  );
}
