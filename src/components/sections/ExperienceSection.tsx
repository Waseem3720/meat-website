"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import FadeParallaxSlider from "@/components/ui/FadeParallaxSlider";
import Reveal from "@/components/ui/Reveal";

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3 w-3 shrink-0"
    >
      <path d="m7.5 4 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * "Experience quality at its best" — the two-photo slider on the left (it
 * cross-fades on its own and drifts with the scroll) and the offer copy with
 * the round customer-care portrait on the right.
 */
export default function ExperienceSection() {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-mist py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-10">
        <Reveal variant="up" className="text-center">
          <p className="font-script text-[25px] leading-none text-brand">
            {t.experience.eyebrow}
          </p>
          <h2 className="display-tight mx-auto mt-4 max-w-[880px] font-display text-[clamp(30px,4.4vw,62px)] font-bold leading-[1.04] text-ink">
            {t.experience.title}
          </h2>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
            {t.experience.tags.map((tag) => (
              <li
                key={tag}
                className="flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.07em] text-ink"
              >
                <span className="text-brand">#</span>
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal variant="left" className="w-full">
            <FadeParallaxSlider
              slides={t.experience.slides}
              label={t.experience.title}
              previous={t.experience.previous}
              next={t.experience.next}
              className="aspect-square w-full"
            />
          </Reveal>

          <Reveal variant="right" delay={110}>
            <span className="inline-flex bg-brand px-3.5 py-1.5 font-display text-[12.5px] font-semibold uppercase tracking-[0.09em] text-white">
              {t.experience.badge}
            </span>

            <h3 className="display-tight mt-5 font-display text-[clamp(28px,3.6vw,50px)] font-bold leading-[1.02] text-ink">
              {t.experience.heading}
            </h3>
            <p className="mt-2 font-display text-[clamp(28px,3.2vw,46px)] font-bold leading-none text-brand">
              {t.experience.price}
            </p>

            <p className="mt-6 max-w-[590px] text-[15px] leading-[1.85] text-body">
              {t.experience.body}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {t.experience.packs.map((pack) => (
                <li key={pack}>
                  <a
                    href="#products"
                    className="group inline-flex items-center gap-2 text-[15px] text-body transition-colors duration-300 hover:text-brand"
                  >
                    <span
                      className={`text-brand transition-transform duration-300 group-hover:translate-x-1 ${
                        isRtl ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""
                      }`}
                    >
                      <Chevron />
                    </span>
                    {pack}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-5 border-t border-ink/10 pt-8">
              <div className="group relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-full bg-ink ring-2 ring-transparent transition-all duration-500 hover:ring-4 hover:ring-brand/70">
                <Image
                  src="/images/avatar-customer-care.jpg"
                  alt={t.experience.review.alt}
                  fill
                  sizes="84px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-display text-[20px] font-bold leading-tight text-ink sm:text-[22px]">
                  {t.experience.review.title}
                </h4>
                <p className="mt-2 max-w-[420px] text-[14.5px] leading-[1.8] text-body">
                  {t.experience.review.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
