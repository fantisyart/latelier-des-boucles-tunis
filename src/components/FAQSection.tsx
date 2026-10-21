"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow reveal">Frequently Asked</p>
            <h2
              id="faq-heading"
              className="serif-heading section-heading mt-4 reveal"
            >
              Good
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
                to Know
              </em>
            </h2>
            <p
              className="mt-6 max-w-[320px] text-[14.5px] leading-[1.85] reveal"
              style={{ color: "var(--color-muted)" }}
            >
              Clear answers to help you feel prepared and at ease before your
              visit.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y" style={{ borderColor: "var(--color-border)" }}>
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                const panelId = `faq-panel-${faq.id}`;
                const buttonId = `faq-button-${faq.id}`;
                return (
                  <li key={faq.id} className="py-1">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        onClick={() => toggle(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span
                          className="serif-heading"
                          style={{
                            fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)",
                            lineHeight: 1.35,
                            color: "var(--color-text)",
                          }}
                        >
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                          style={{
                            borderColor: "var(--color-border)",
                            backgroundColor: "var(--color-white)",
                            color: "var(--color-text)",
                          }}
                        >
                          {isOpen ? (
                            <Minus size={14} aria-hidden="true" />
                          ) : (
                            <Plus size={14} aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="overflow-hidden pr-12 text-[14.5px] leading-[1.85]"
                      style={{
                        color: "var(--color-text)",
                        maxHeight: isOpen ? "400px" : "0",
                        opacity: isOpen ? 1 : 0,
                        paddingBottom: isOpen ? "1.25rem" : "0",
                        transition:
                          "max-height 320ms cubic-bezier(0.22,0.61,0.36,1), opacity 220ms ease, padding-bottom 320ms cubic-bezier(0.22,0.61,0.36,1)",
                        visibility: isOpen ? "visible" : "hidden",
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
