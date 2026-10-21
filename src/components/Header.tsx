"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Our Story" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(247, 243, 237, 0.92)"
            : "var(--color-ivory)",
          backdropFilter: scrolled ? "saturate(160%) blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(160%) blur(10px)" : "none",
          borderBottom: "1px solid var(--color-border)",
          boxShadow: scrolled
            ? "0 8px 24px -16px rgba(41, 39, 32, 0.18)"
            : "none",
        }}
      >
        <div className="container-editorial flex h-[78px] sm:h-[82px] items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#home"
            className="flex flex-col items-start leading-none"
            aria-label="Latelier des Boucles — Tunis Hair Artistry, return to top"
          >
            <span className="serif-heading text-[15px] sm:text-[16px] tracking-[0.18em] uppercase whitespace-nowrap">
              Latelier des Boucles
            </span>
            <span
              className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em]"
              style={{ color: "var(--color-muted)" }}
            >
              Tunis · Hair Artistry
            </span>
          </a>

          {/* Center navigation */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-9"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-[var(--color-text)]"
                style={{ color: "var(--color-text)" }}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden md:inline-flex btn btn-primary"
            >
              Book an Appointment
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
                backgroundColor: "var(--color-white)",
              }}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
