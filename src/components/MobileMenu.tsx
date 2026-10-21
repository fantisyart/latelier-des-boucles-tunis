"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock & Escape key handling
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    // Move focus into the menu
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 lg:hidden flex"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(41, 39, 32, 0.45)" }}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative ml-auto flex h-full w-full max-w-[420px] flex-col px-7 py-7"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="flex items-center justify-between">
          <span className="serif-heading text-[16px] tracking-[0.18em] uppercase whitespace-nowrap">
            Latelier des Boucles
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text)",
              backgroundColor: "var(--color-white)",
            }}
            aria-label="Close navigation menu"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <span
          aria-hidden="true"
          className="my-7 h-px w-full"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        <nav aria-label="Mobile primary" className="flex flex-col gap-5">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="serif-heading block text-[2rem] leading-tight tracking-[-0.005em]"
            >
              <span
                className="mr-3 text-[11px] uppercase tracking-[0.18em] align-middle"
                style={{ color: "var(--color-muted)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <a
            href="#booking"
            onClick={onClose}
            className="btn btn-primary w-full"
          >
            Book an Appointment
          </a>
          <p
            className="mt-5 text-[12px] leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            38 Rue de la Faculté · Ennasr 2, Tunis
          </p>
        </div>
      </div>
    </div>
  );
}
