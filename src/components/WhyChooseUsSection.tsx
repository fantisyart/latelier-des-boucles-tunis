"use client";

import { whyChooseFeatures } from "@/data/whyChooseUs";

export function WhyChooseUsSection() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow reveal">The Maison Touch</p>
          <h2
            id="why-heading"
            className="serif-heading section-heading mt-4 reveal"
          >
            Thoughtful
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
              in Every Detail
            </em>
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-7 block h-px w-14 reveal"
            style={{ backgroundColor: "var(--color-blush)" }}
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-[1080px] gap-10 sm:grid-cols-3 sm:gap-6">
          {whyChooseFeatures.map((feature) => (
            <div
              key={feature.id}
              className="reveal text-center sm:px-6"
              style={{ borderLeft: "none" }}
            >
              <span
                aria-hidden="true"
                className="mx-auto block h-px w-8"
                style={{ backgroundColor: "var(--color-blush)" }}
              />
              <h3
                className="subsection-heading mt-6"
                style={{ letterSpacing: "-0.005em" }}
              >
                {feature.title}
              </h3>
              <p
                className="mx-auto mt-4 max-w-[260px] text-[14.5px] leading-[1.85]"
                style={{ color: "var(--color-muted)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
