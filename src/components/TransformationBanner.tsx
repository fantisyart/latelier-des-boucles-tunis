"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function TransformationBanner() {
  return (
    <section
      aria-labelledby="transformation-heading"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      <div className="relative h-[clamp(360px,46vw,460px)] sm:h-[clamp(380px,40vw,460px)]">
        <Image
          src="/images/hair-transformation-banner.jpg"
          alt="A stylist creating a beautiful hair transformation in the salon."
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(41,39,32,0.55) 0%, rgba(41,39,32,0.4) 50%, rgba(41,39,32,0.62) 100%)",
          }}
        />
        <div className="container-editorial relative z-10 flex h-full flex-col items-center justify-center text-center">
          <p
            className="eyebrow eyebrow-ivory reveal"
            style={{ color: "var(--color-blush-light)" }}
          >
            Your Next Chapter Begins Here
          </p>
          <h2
            id="transformation-heading"
            className="serif-heading section-heading mt-4 reveal"
            style={{
              color: "var(--color-ivory)",
              fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
              maxWidth: "720px",
            }}
          >
            Ready for a Little
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-blush-light)" }}>
              Hair Magic?
            </em>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[480px] text-[15.5px] leading-[1.8] reveal"
            style={{ color: "rgba(247,243,237,0.85)" }}
          >
            Let&apos;s create a look that feels unmistakably you.
          </p>
          <a
            href="#booking"
            className="btn btn-light reveal mt-8"
            style={{ transitionDelay: "180ms" }}
          >
            Book Your Appointment
            <ArrowRight size={14} aria-hidden="true" className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
