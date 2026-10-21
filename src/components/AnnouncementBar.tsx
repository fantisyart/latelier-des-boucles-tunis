import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Salon announcement"
      className="w-full"
      style={{
        backgroundColor: "var(--color-blush-light)",
        color: "var(--color-text)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container-editorial flex items-center justify-center gap-3 py-2 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium">
        <span>Your Moment. Your Style. Your Beauty.</span>
        <span
          aria-hidden="true"
          className="hidden sm:inline-block h-3 w-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1 underline-offset-4 hover:underline"
        >
          Discover the Maison experience
          <ArrowRight size={11} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
