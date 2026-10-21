"use client";

import { ArrowRight } from "lucide-react";
import { serviceGroups } from "@/data/services";

export function ServicesDirectorySection() {
  return (
    <section
      id="services-directory"
      aria-labelledby="directory-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="eyebrow reveal">The Complete Menu</p>
          <h2
            id="directory-heading"
            className="serif-heading section-heading mt-4 reveal"
          >
            Services
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
              & Treatments
            </em>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[15.5px] leading-[1.85] reveal"
            style={{ color: "var(--color-muted)" }}
          >
            A considered menu of haircuts, color, treatments, and occasion
            styling — entirely tailored to you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[980px] space-y-14">
          {serviceGroups.map((group) => (
            <div key={group.category} className="reveal">
              <div className="flex flex-col gap-3 border-b pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3
                    className="serif-heading"
                    style={{
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {group.category}
                  </h3>
                  <p
                    className="mt-2 max-w-[480px] text-[14px]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {group.description}
                  </p>
                </div>
              </div>
              <ul className="mt-6 divide-y" style={{ borderColor: "var(--color-border)" }}>
                {group.services.map((service) => (
                  <li
                    key={service.id}
                    className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
                  >
                    <div className="sm:max-w-[640px]">
                      <h4
                        className="subsection-heading"
                        style={{ fontSize: "1.25rem" }}
                      >
                        {service.name}
                      </h4>
                      <p
                        className="mt-2 text-[14.5px] leading-[1.75]"
                        style={{ color: "var(--color-text)" }}
                      >
                        {service.description}
                      </p>
                      {service.priceNote && (
                        <p
                          className="mt-2 text-[12px]"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {service.priceNote}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <p
                        className="text-[12px] uppercase tracking-[0.18em]"
                        style={{ color: "var(--color-blush)" }}
                      >
                        {service.price || "Consultation Required"}
                      </p>
                      <a
                        href="#booking"
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.18em] underline-offset-4 hover:underline"
                      >
                        Request <ArrowRight size={11} aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
