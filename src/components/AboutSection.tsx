"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: "var(--color-ivory)" }}
      aria-labelledby="about-heading"
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Image column */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/about-salon-experience.jpg"
                alt="A hairstylist caring for a client's hair during a personalized salon appointment."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover reveal"
              />
            </div>
            {/* Circular overlapping detail */}
            <div
              className="absolute -bottom-10 -right-6 hidden md:block reveal"
              style={{ width: "200px", aspectRatio: "1/1" }}
            >
              <div
                className="h-full w-full overflow-hidden rounded-full border-[6px]"
                style={{ borderColor: "var(--color-ivory)" }}
              >
                <Image
                  src="/images/salon-interior.jpg"
                  alt="Detail of the salon's warm interior styling station."
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-6 lg:pl-4">
            <p className="eyebrow reveal">The Art of Feeling Beautiful</p>
            <h2
              id="about-heading"
              className="serif-heading section-heading mt-4 reveal"
            >
              Your Hair.
              <br />
              Your Story.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
                Our Artistry.
              </em>
            </h2>

            <span
              aria-hidden="true"
              className="mt-7 block h-px w-14 reveal"
              style={{ backgroundColor: "var(--color-blush)" }}
            />

            <p
              className="mt-7 max-w-[520px] text-[15.5px] leading-[1.85] reveal"
              style={{ color: "var(--color-text)" }}
            >
              At Latelier des Boucles, beautiful hair begins with understanding you.
              Our approach combines thoughtful consultation, refined technique,
              and an appreciation for the details that make your look uniquely
              yours.
            </p>

            <p
              className="mt-5 max-w-[520px] text-[15.5px] leading-[1.85] reveal"
              style={{ color: "var(--color-text)" }}
            >
              From lived-in color to beautifully tailored cuts, every appointment
              is designed around your style, your routine, and the way you want
              to feel.
            </p>

            <p
              className="mt-7 serif-heading italic text-[1.25rem] reveal"
              style={{ color: "var(--color-text)" }}
            >
              Beautifully individual. Always.
            </p>

            <a
              href="#services"
              className="btn btn-outline mt-9 reveal"
              aria-label="Discover our approach to hair artistry"
            >
              Discover Our Approach
              <ArrowRight size={14} aria-hidden="true" className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
