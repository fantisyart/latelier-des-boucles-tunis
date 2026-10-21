"use client";

import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
import { salonConfig } from "@/lib/salon-config";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow reveal">Visit the Maison</p>
            <h2
              id="contact-heading"
              className="serif-heading section-heading mt-4 reveal"
            >
              Come
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
                Say Hello
              </em>
            </h2>
            <p
              className="mt-6 max-w-[420px] text-[15.5px] leading-[1.85] reveal"
              style={{ color: "var(--color-text)" }}
            >
              Have a question, a hair goal, or an upcoming occasion? We&apos;d
              love to hear from you.
            </p>

            <div className="mt-10 space-y-6 text-[14.5px] reveal">
              <a
                href={`mailto:${salonConfig.email}`}
                className="group flex items-start gap-3"
              >
                <Mail size={16} aria-hidden="true" style={{ color: "var(--color-blush)" }} className="mt-1" />
                <div>
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.18em]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Email
                  </p>
                  <p className="mt-1 underline-offset-4 group-hover:underline">
                    {salonConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${salonConfig.phoneTel}`}
                className="group flex items-start gap-3"
              >
                <Phone size={16} aria-hidden="true" style={{ color: "var(--color-blush)" }} className="mt-1" />
                <div>
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.18em]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Phone
                  </p>
                  <p className="mt-1 underline-offset-4 group-hover:underline">
                    {salonConfig.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={16} aria-hidden="true" style={{ color: "var(--color-blush)" }} className="mt-1" />
                <div>
                  <p
                    className="text-[11px] font-medium uppercase tracking-[0.18em]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Address
                  </p>
                  <p className="mt-1">
                    {salonConfig.address.line1}
                    <br />
                    {salonConfig.address.line2}, {salonConfig.address.city},{" "}
                    {salonConfig.address.country}
                  </p>
                </div>
              </div>
            </div>

            {salonConfig.social.instagram && (
              <a
                href={salonConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] reveal"
                style={{ color: "var(--color-text)" }}
              >
                <InstagramIcon size={14} />
                Follow on Instagram
                <ArrowRight size={12} aria-hidden="true" />
              </a>
            )}

            <a
              href="#booking"
              className="btn btn-primary mt-9 reveal"
            >
              Request a Consultation
              <ArrowRight size={14} aria-hidden="true" className="btn-arrow" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal overflow-hidden border" style={{ borderColor: "var(--color-border)" }}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/salon-interior.jpg"
                  alt="A glimpse inside the Latelier des Boucles salon — warm, refined, and ready to welcome you."
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Hours */}
            <div className="reveal mt-9 border-t pt-7" style={{ borderColor: "var(--color-border)" }}>
              <p
                className="text-[11px] font-medium uppercase tracking-[0.18em]"
                style={{ color: "var(--color-muted)" }}
              >
                Opening Hours
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[14px] sm:grid-cols-3 sm:gap-y-3">
                {salonConfig.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between gap-2 border-b pb-2 sm:border-0 sm:pb-0"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span
                      className="text-[12px] font-medium uppercase tracking-[0.14em]"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {row.day}
                    </span>
                    <span style={{ color: "var(--color-text)" }}>{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded map */}
            {salonConfig.mapEmbedUrl && (
              <div
                className="reveal mt-9 overflow-hidden border"
                style={{ borderColor: "var(--color-border)" }}
              >
                <iframe
                  title="Latelier des Boucles Tunis location map"
                  src={salonConfig.mapEmbedUrl}
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%", height: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
