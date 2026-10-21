"use client";

import Image from "next/image";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow reveal">Beauty, with Intention</p>
          <h2
            id="philosophy-heading"
            className="serif-heading section-heading mt-4 reveal"
            style={{ letterSpacing: "-0.01em" }}
          >
            A More Personal
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
              Kind of Luxury
            </em>
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-7 block h-px w-14 reveal"
            style={{ backgroundColor: "var(--color-blush)" }}
          />
          <p
            className="mx-auto mt-7 max-w-[520px] text-[15.5px] leading-[1.85] reveal"
            style={{ color: "var(--color-text)" }}
          >
            We believe the best salon experience is one that feels effortless. A
            thoughtful consultation, a welcoming atmosphere, and attention to
            every detail make all the difference.
          </p>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[15.5px] leading-[1.85] reveal"
            style={{ color: "var(--color-muted)" }}
          >
            Exceptional hair begins with exceptional care.
          </p>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-[920px] overflow-hidden reveal">
          <div className="relative aspect-[16/6] sm:aspect-[16/5]">
            <Image
              src="/images/salon-interior.jpg"
              alt="A view of the Latelier des Boucles salon interior with warm ambient lighting and refined styling stations."
              fill
              sizes="(max-width: 1024px) 100vw, 920px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
