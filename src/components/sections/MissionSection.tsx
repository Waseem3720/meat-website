"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import ScrollRotatingImage from "@/components/ui/ScrollRotatingImage";

const VALUE_ICONS = [
  "/images/icon-steak-sketch.png",
  "/images/icon-legs.png",
  "/images/icon-steak-soft.png",
  "/images/icon-pepper-mill.png",
];

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
 * "Your success is our mission" — two-image slider whose captions rise in on
 * every change, plus the four value icons that rotate with the scroll.
 */
export default function MissionSection() {
  const { t, isRtl } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const slideCount = t.mission.slides.length;

  useEffect(() => {
    if (hovering) return;
    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, 6500);
    return () => window.clearTimeout(timeout);
  }, [activeSlide, hovering, slideCount]);

  const goToSlide = (direction: 1 | -1) => {
    setActiveSlide((current) => (current + direction + slideCount) % slideCount);
  };

  const slide = t.mission.slides[activeSlide];

  return (
    <section id="mission" className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="art-pattern pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto max-w-[1560px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal variant="left" className="relative overflow-hidden bg-ink">
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={t.mission.title}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
            <div className="relative h-[430px] sm:h-[520px] lg:h-[640px]">
              {t.mission.slides.map((item, index) => (
                <div
                  key={item.src}
                  aria-hidden={index !== activeSlide}
                  className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className={`object-cover transition-transform duration-[7000ms] ease-out ${
                      index === activeSlide ? "scale-[1.06]" : "scale-100"
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/15"
                  />
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-0 px-6 pb-9 text-center sm:px-10 lg:pb-12">
                <div key={activeSlide} className="mission-caption mx-auto max-w-[560px]">
                  <h3 className="font-display text-[clamp(24px,2.4vw,34px)] font-bold leading-tight text-white">
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-white/85 sm:text-[15px]">
                    {slide.body}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => goToSlide(-1)}
                aria-label={t.mission.previous}
                className="absolute start-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/75 transition-all duration-300 hover:scale-110 hover:text-white sm:start-4"
              >
                <span className={isRtl ? "rotate-180" : ""}>
                  <Chevron direction="left" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => goToSlide(1)}
                aria-label={t.mission.next}
                className="absolute end-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/75 transition-all duration-300 hover:scale-110 hover:text-white sm:end-4"
              >
                <span className={isRtl ? "rotate-180" : ""}>
                  <Chevron direction="right" />
                </span>
              </button>
            </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <p className="font-script text-[26px] leading-none text-brand">
              {t.mission.eyebrow}
            </p>
            <h2 className="display-tight mt-4 font-display text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.03] text-ink">
              {t.mission.title}
            </h2>

            {t.mission.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={`text-[15px] leading-[1.85] text-body ${
                  index === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 border-t border-ink/10">
              {t.mission.accordions.map((accordion, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div key={accordion.title} className="border-b border-ink/10">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenAccordion(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 py-5 text-start"
                    >
                      <span className="font-display text-[18px] font-bold text-ink sm:text-xl">
                        {accordion.title}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`h-3.5 w-3.5 shrink-0 text-ink transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="m5 7.5 5 5 5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] pb-5 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-[14px] leading-[1.8] text-body">
                        {accordion.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#products" className="btn-primary mt-8">
              {t.mission.button}
            </a>
          </Reveal>
        </div>

        <Reveal
          variant="up"
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-ink/10 pt-12 sm:grid-cols-4 lg:mt-20 lg:pt-14"
        >
          {t.mission.values.map((value, index) => (
            <div
              key={value.title}
              className="text-center transition-transform duration-500 hover:-translate-y-1.5"
            >
              <ScrollRotatingImage
                src={VALUE_ICONS[index]}
                alt=""
                intensity={index % 2 === 0 ? 9 : -9}
                className="mx-auto h-[74px] w-[74px] sm:h-20 sm:w-20"
              />
              <h3 className="mt-4 font-display text-[20px] font-bold text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-body">{value.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
