
"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { PRODUCT_IMAGES, PRODUCT_ORDER } from "@/lib/products";

const CARD_GAP = 24;

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className="h-5 w-5"
    >
      <path
        d={direction === "left" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductCarousel() {
  const { t, isRtl } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard =
      track.querySelector<HTMLElement>("[data-product-card]");
    const step = (firstCard?.offsetWidth ?? 320) + CARD_GAP;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const position = Math.abs(track.scrollLeft);

    if (direction === 1 && position >= maxScroll - 8) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === -1 && position <= 8) {
      track.scrollTo({
        left: isRtl ? -maxScroll : maxScroll,
        behavior: "smooth",
      });
      return;
    }

    track.scrollBy({
      left: direction * step * (isRtl ? -1 : 1),
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative mt-14"
      role="region"
      aria-roledescription="carousel"
      aria-label={t.growth.carouselLabel}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {PRODUCT_ORDER.map((key) => (
          <article
            key={key}
            data-product-card
            className="hover-lift group w-[84%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
          >
            {/* Image with slightly rounded corners */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-black">
              <Image
                src={PRODUCT_IMAGES[key]}
                alt={t.products.items[key]}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 84vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Product title */}
              <div className="absolute inset-x-5 bottom-5 rounded-lg bg-surface px-4 py-4 text-center transition-colors duration-300 group-hover:bg-brand sm:inset-x-7 sm:bottom-7">
                <h3 className="product-name font-display text-[20px] font-bold uppercase tracking-[0.06em] text-ink transition-colors duration-300 group-hover:text-white sm:text-[22px]">
                  {t.products.items[key]}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label={t.growth.previous}
        className="carousel-arrow start-1 sm:start-2"
      >
        <span className={isRtl ? "rotate-180" : ""}>
          <Chevron direction="left" />
        </span>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={() => move(1)}
        aria-label={t.growth.next}
        className="carousel-arrow end-1 sm:end-2"
      >
        <span className={isRtl ? "rotate-180" : ""}>
          <Chevron direction="right" />
        </span>
      </button>
    </div>
  );
}
