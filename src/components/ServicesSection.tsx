"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/services";

const SERVICE_IMAGES: Record<string, string> = {
  "precision-haircuts": "/images/service-precision-cut.jpg",
  "dimensional-color": "/images/service-dimensional-color.jpg",
  "signature-styling": "/images/service-signature-styling.jpg",
};

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-olive)", color: "var(--color-ivory)" }}
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow eyebrow-ivory reveal">Thoughtfully Curated</p>
          <h2
            id="services-heading"
            className="serif-heading section-heading mt-4 reveal"
            style={{ color: "var(--color-ivory)" }}
          >
            Our Signature Services
          </h2>
          <p
            className="mx-auto mt-5 max-w-[480px] text-[15.5px] leading-[1.8] reveal"
            style={{ color: "rgba(247,243,237,0.78)" }}
          >
            Considered techniques. Beautiful finishes. A look that feels entirely
            your own.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredServices.map((service) => {
            const image = SERVICE_IMAGES[service.id] ?? "";
            return (
              <article key={service.id} className="flex flex-col reveal">
                <div
                  className="relative mx-auto w-full overflow-hidden"
                  style={{
                    maxWidth: "320px",
                    aspectRatio: "3 / 4",
                    borderTopLeftRadius: "50% 12%",
                    borderTopRightRadius: "50% 12%",
                  }}
                >
                  <Image
                    src={image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 320px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
                <h3
                  className="subsection-heading mt-7 text-center"
                  style={{ color: "var(--color-ivory)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="mx-auto mt-3 max-w-[280px] text-center text-[14.5px] leading-[1.7]"
                  style={{ color: "rgba(247,243,237,0.74)" }}
                >
                  {service.description}
                </p>
                <p
                  className="mx-auto mt-4 text-center text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-blush-light)" }}
                >
                  {service.price}
                </p>
                <a
                  href="#booking"
                  className="group mx-auto mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] underline-offset-[5px]"
                  style={{ color: "var(--color-blush-light)" }}
                >
                  Explore Service
                  <ArrowRight
                    size={12}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center reveal">
          <a href="#services-directory" className="btn btn-light">
            View All Services
            <ArrowRight size={14} aria-hidden="true" className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
