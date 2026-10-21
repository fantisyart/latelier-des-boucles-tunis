"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { galleryImages } from "@/data/gallery";

type ImageItem = (typeof galleryImages)[number];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const open = (index: number) => {
    setActiveIndex(index);
  };

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % galleryImages.length;
    });
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + galleryImages.length) % galleryImages.length;
    });
  }, []);

  // Lightbox keyboard, scroll lock, and focus management
  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    // Focus the close button when the lightbox opens
    setTimeout(() => closeButtonRef.current?.focus(), 30);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, close, next, prev]);

  // When lightbox closes, return focus to the trigger
  useEffect(() => {
    if (activeIndex === null) {
      const idxAttr = document.activeElement?.getAttribute("data-gallery-trigger");
      if (idxAttr) {
        const idx = Number(idxAttr);
        triggerRefs.current[idx]?.focus();
      }
    }
  }, [activeIndex]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="section-padding"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow reveal">The Maison Gallery</p>
          <h2
            id="gallery-heading"
            className="serif-heading section-heading mt-4 reveal"
          >
            Beautiful Hair,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-blush)" }}>
              Beautifully Done
            </em>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[480px] text-[15.5px] leading-[1.8] reveal"
            style={{ color: "var(--color-muted)" }}
          >
            Explore a selection of signature looks, dimensional color, and
            effortless finishes.
          </p>
        </div>

        <div
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5"
          role="list"
        >
          {galleryImages.map((image, index) => {
            // Asymmetric grid spans
            const spans: Record<ImageItem["span"], string> = {
              tall: "row-span-2",
              medium: "row-span-1",
              square: "row-span-1",
            };

            return (
              <div
                key={image.id}
                role="listitem"
                className={`relative overflow-hidden ${spans[image.span]} reveal`}
                style={{
                  aspectRatio:
                    image.span === "tall" ? "3 / 5" : image.span === "square" ? "1 / 1" : "4 / 3",
                }}
              >
                <button
                  ref={(el) => {
                    triggerRefs.current[index] = el;
                  }}
                  data-gallery-trigger={index}
                  type="button"
                  onClick={() => open(index)}
                  className="group block h-full w-full cursor-pointer"
                  aria-label={`Open larger view: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center reveal">
          <a href="#booking" className="btn btn-outline">
            Let&apos;s Create Your Look
            <ArrowRight size={14} aria-hidden="true" className="btn-arrow" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(41,39,32,0.94)" }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border text-white"
            style={{
              borderColor: "rgba(247,243,237,0.4)",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
            aria-label="Close image preview"
          >
            <X size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 sm:left-6 inline-flex h-11 w-11 items-center justify-center rounded-full border text-white"
            style={{
              borderColor: "rgba(247,243,237,0.4)",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
            aria-label="Previous image"
          >
            <ArrowLeft size={16} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 sm:right-6 inline-flex h-11 w-11 items-center justify-center rounded-full border text-white"
            style={{
              borderColor: "rgba(247,243,237,0.4)",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
            aria-label="Next image"
          >
            <ArrowRight size={16} aria-hidden="true" />
          </button>

          <div className="relative h-[78vh] w-full max-w-[1100px]">
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em]"
            style={{ color: "var(--color-blush-light)" }}
          >
            {activeIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
