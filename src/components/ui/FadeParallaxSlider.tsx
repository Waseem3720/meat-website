"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

type FadeParallaxSliderProps = {
  slides: { src: string; alt: string }[];
  label: string;
  previous: string;
  next: string;
  intervalMs?: number;
  className?: string;
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
    >
      <path
        d={direction === "left" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Slow cross-fading slideshow that also drifts and tilts while the page is
 * being scrolled (the move only happens on scroll, never on its own).
 */
export default function FadeParallaxSlider({
  slides,
  label,
  previous,
  next,
  intervalMs = 5600,
  className = "",
}: FadeParallaxSliderProps) {
  const { isRtl } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const frameElRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering || slides.length < 2) return;
    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearTimeout(timeout);
  }, [activeSlide, hovering, intervalMs, slides.length]);

  useEffect(() => {
    const update = () => {
      frameRef.current = 0;
      const element = containerRef.current;
      const frame = frameElRef.current;
      if (!element || !frame) return;

      const bounds = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const value = Math.min(
        Math.max((viewportHeight - bounds.top) / (viewportHeight + bounds.height), 0),
        1,
      );

      // Written straight onto the node: the drift never triggers a re-render.
      frame.style.transform = `translateX(${((value - 0.5) * 32).toFixed(2)}px)`;
    };

    const handleScroll = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const goToSlide = (direction: 1 | -1) => {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* The whole frame — photo, arrows and dots — drifts and tilts on scroll */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className="relative h-full w-full overflow-hidden bg-ink"
        ref={frameElRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== activeSlide}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}

        <button
        type="button"
        onClick={() => goToSlide(-1)}
        aria-label={previous}
        className="absolute start-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 transition-all duration-300 hover:scale-110 hover:text-white sm:start-5"
      >
        <span className={`transition-transform duration-300 hover:-translate-x-0.5 ${
          isRtl ? "rotate-180" : ""
        }`}>
          <Chevron direction="left" />
        </span>
      </button>
      <button
        type="button"
        onClick={() => goToSlide(1)}
        aria-label={next}
        className="absolute end-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/70 transition-all duration-300 hover:scale-110 hover:text-white sm:end-5"
      >
        <span className={`transition-transform duration-300 hover:translate-x-0.5 ${
          isRtl ? "rotate-180" : ""
        }`}>
          <Chevron direction="right" />
        </span>
      </button>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2 pb-5">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={slide.alt}
            aria-current={index === activeSlide}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              index === activeSlide ? "bg-brand" : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
