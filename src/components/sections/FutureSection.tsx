"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ScrollRotatingImage from "@/components/ui/ScrollRotatingImage";

const FEATURE_ICONS = ["/images/icon-steak-sketch.png", "/images/icon-legs.png"];

/**
 * "Start building your future today" — three-image layout with the two
 * hand-drawn feature icons above the copy.
 */
export default function FutureSection() {
  const { t } = useLanguage();

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-mist py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div>
            <a
              href="#products"
              className="hover-lift group relative block aspect-[4/3] overflow-hidden bg-ink"
            >
              <Image
                src="/images/future-meat-board.jpg"
                alt={t.future.mainAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/20"
              />
            </a>

            <div className="mt-10 grid gap-9 sm:grid-cols-2 sm:gap-8">
              {t.future.features.map((feature, index) => (
                <div key={feature.title}>
                  <ScrollRotatingImage
                    src={FEATURE_ICONS[index]}
                    alt=""
                    intensity={index === 0 ? 8 : -8}
                    className="h-[72px] w-[72px] sm:h-20 sm:w-20"
                  />
                  <h3 className="mt-4 font-display text-[22px] font-bold leading-tight text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-[320px] text-[15px] leading-[1.8] text-body">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-[1fr_170px] lg:grid-cols-[1fr_200px]">
              <div className="max-w-[540px]">
                <p className="font-script text-[25px] leading-none text-brand">
                  {t.future.eyebrow}
                </p>
                <h2 className="display-tight mt-4 font-display text-[clamp(32px,4vw,56px)] font-bold leading-[1.03] text-ink">
                  {t.future.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.85] text-body">
                  {t.future.body}
                </p>
                <a href="#products" className="btn-primary mt-7">
                  {t.future.button}
                </a>
              </div>

              <a
                href="#products"
                className="group relative hidden overflow-hidden bg-ink sm:block"
                aria-label={t.future.sideAlt}
              >
                <Image
                  src="/images/future-side.jpg"
                  alt={t.future.sideAlt}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-brand/40"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="rotate-90 whitespace-nowrap font-display text-[16px] font-bold uppercase tracking-[0.16em] text-white">
                    <span className="me-2 text-[#e7b9a8]">#</span>
                    {t.future.sideLabel}
                  </span>
                </span>
              </a>
            </div>

            <a
              href="#products"
              className="hover-lift group relative mt-6 block aspect-[16/10] overflow-hidden bg-ink"
            >
              <Image
                src="/images/future-wide.jpg"
                alt={t.future.wideAlt}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/20"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
