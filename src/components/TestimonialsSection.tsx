"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7500);

    return () => window.clearInterval(id);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-olive)", color: "var(--color-ivory)" }}
    >
      {/* Original botanical line-art motif — subtle SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        preserveAspectRatio="xMidYMid slice"
      >
        <g
          fill="none"
          stroke="#D7B8AA"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M40,300 C90,260 120,220 160,180 C200,140 240,100 260,40" />
          <path d="M120,260 q20,-30 10,-60 q-12,-30 6,-60" />
          <path d="M180,200 q24,-22 14,-58 q-10,-30 8,-54" />
          <path d="M740,80 q-30,30 -10,70 q14,40 -10,70" />
          <path d="M700,160 q-22,28 -6,60 q14,32 -10,60" />
          <circle cx="180" cy="120" r="2" />
          <circle cx="240" cy="80" r="2" />
          <circle cx="700" cy="220" r="2" />
          <circle cx="660" cy="280" r="2" />
          <path d="M380,40 q40,60 -10,140 q-30,60 -10,140 q14,60 -10,80" />
          <path d="M460,400 q14,-160 -20,-260" />
        </g>
      </svg>

      <div className="container-editorial relative z-10">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow eyebrow-ivory reveal">Kind Words</p>
          <h2
            id="testimonials-heading"
            className="serif-heading section-heading mt-4 reveal"
            style={{ color: "var(--color-ivory)" }}
          >
            A Little Love
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-blush-light)" }}>
              From Our Clients
            </em>
          </h2>
        </div>

        <div
          className="mx-auto mt-12 max-w-[760px] border px-6 py-12 sm:px-12 sm:py-14 reveal"
          style={{
            borderColor: "var(--color-blush)",
            backgroundColor: "rgba(247,243,237,0.04)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Quote
            size={26}
            aria-hidden="true"
            style={{ color: "var(--color-blush-light)" }}
          />
          <blockquote
            className="serif-heading mt-7 text-[1.4rem] leading-[1.55] sm:text-[1.55rem]"
            style={{ color: "var(--color-ivory)" }}
          >
            <p>{`\u201C${current.quote}\u201D`}</p>
          </blockquote>

          <div
            className="mt-7 flex items-center justify-between gap-6 border-t pt-5"
            style={{ borderColor: "rgba(247,243,237,0.18)" }}
          >
            <div>
              <p
                className="text-[11px] font-medium uppercase tracking-[0.22em]"
                style={{ color: "var(--color-blush-light)" }}
              >
                — Client Testimonial
              </p>
              <p
                className="mt-1 text-[12px]"
                style={{ color: "rgba(247,243,237,0.6)" }}
              >
                {current.context}
              </p>
            </div>
            <div
              className="flex items-center gap-2"
              role="group"
              aria-label="Testimonial navigation"
            >
              <button
                type="button"
                onClick={() =>
                  setIndex((prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                  )
                }
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
                style={{
                  borderColor: "rgba(247,243,237,0.4)",
                  color: "var(--color-ivory)",
                  backgroundColor: "transparent",
                }}
              >
                <ArrowLeft size={14} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setIndex((prev) => (prev + 1) % testimonials.length)
                }
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
                style={{
                  borderColor: "rgba(247,243,237,0.4)",
                  color: "var(--color-ivory)",
                  backgroundColor: "transparent",
                }}
              >
                <ArrowRight size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p
          className="mx-auto mt-6 max-w-[600px] text-center text-[11px]"
          style={{ color: "rgba(247,243,237,0.55)" }}
        >
          Testimonials shown are demonstration content. Replace with authentic
          client reviews before launch.
        </p>
      </div>
    </section>
  );
}
