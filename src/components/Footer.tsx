"use client";

import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

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

const exploreLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Our Story" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const servicesLinks = [
  { href: "#services-directory", label: "Haircuts" },
  { href: "#services-directory", label: "Hair Color" },
  { href: "#services-directory", label: "Hair Treatments" },
  { href: "#services-directory", label: "Styling" },
  { href: "#services-directory", label: "Bridal Hair" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-20 pb-10"
      style={{ backgroundColor: "var(--color-olive)", color: "var(--color-ivory)" }}
    >
      <div className="container-editorial">
        {/* Top wordmark + lede */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="serif-heading text-[20px] tracking-[0.18em] uppercase">
              Latelier des Boucles
            </p>
            <p
              className="mt-1 text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "var(--color-blush-light)" }}
            >
              Tunis · Hair Artistry
            </p>
            <p
              className="mt-7 max-w-[300px] text-[14px] leading-[1.85]"
              style={{ color: "rgba(247,243,237,0.7)" }}
            >
              Thoughtful hair artistry, personalized service, and beauty that
              feels like you.
            </p>
          </div>

          {/* Explore */}
          <FooterColumn
            title="Explore"
            links={exploreLinks}
            className="lg:col-span-2"
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={servicesLinks}
            className="lg:col-span-3"
          />

          {/* Contact */}
          <div className="lg:col-span-3">
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="mt-5 space-y-3 text-[14px]" style={{ color: "rgba(247,243,237,0.85)" }}>
              <li>
                <a
                  href={`mailto:${salonConfig.email}`}
                  className="inline-flex items-start gap-2 hover:text-white"
                >
                  <Mail size={14} aria-hidden="true" className="mt-1" style={{ color: "var(--color-blush-light)" }} />
                  <span>{salonConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${salonConfig.phoneTel}`}
                  className="inline-flex items-start gap-2 hover:text-white"
                >
                  <Phone size={14} aria-hidden="true" className="mt-1" style={{ color: "var(--color-blush-light)" }} />
                  <span>{salonConfig.phone}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin size={14} aria-hidden="true" className="mt-1" style={{ color: "var(--color-blush-light)" }} />
                <span>
                  {salonConfig.address.line1}, {salonConfig.address.line2}
                  <br />
                  {salonConfig.address.city}, {salonConfig.address.country}
                </span>
              </li>
            </ul>
            {salonConfig.social.instagram && (
              <a
                href={salonConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                style={{ color: "var(--color-blush-light)" }}
              >
                <InstagramIcon size={14} />
                Instagram
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div
          className="mt-14 border-t pt-6"
          style={{ borderColor: "rgba(247,243,237,0.18)" }}
        />

        <div className="flex flex-col items-start justify-between gap-4 text-[12px] sm:flex-row sm:items-center"
          style={{ color: "rgba(247,243,237,0.55)" }}
        >
          <p>© {year} Latelier des Boucles. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#accessibility" className="hover:text-white">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: { href: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-5 space-y-3 text-[14px]" style={{ color: "rgba(247,243,237,0.85)" }}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] font-medium uppercase tracking-[0.22em]"
      style={{ color: "var(--color-blush-light)" }}
    >
      {children}
    </p>
  );
}
