"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import ScrollRotatingImage from "@/components/ui/ScrollRotatingImage";
import ProductCarousel from "@/components/sections/ProductCarousel";
import Reveal from "@/components/ui/Reveal";

export default function BusinessGrowthSection() {
  const { t } = useLanguage();

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-mist py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-[1520px] px-5 sm:px-8 lg:px-10">
        <p className="text-center font-script text-[24px] leading-none text-brand">
          {t.growth.eyebrow}
        </p>

        <Reveal variant="up" className="mt-8 flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-6">
            <h2 className="display-tight font-display text-[clamp(30px,4.4vw,58px)] font-bold leading-[1.05] text-ink">
              {t.growth.words.maintenance}
            </h2>
            <ScrollRotatingImage
              src="/images/heading-meat-platter.png"
              alt={t.growth.platterAlt}
              intensity={9}
              className="h-[52px] w-[104px] sm:h-[72px] sm:w-[146px] lg:h-[90px] lg:w-[184px]"
            />
            <h2 className="display-tight font-display text-[clamp(30px,4.4vw,58px)] font-bold leading-[1.05] text-ink">
              {t.growth.words.marketing}
            </h2>
          </div>

          <h2 className="display-tight mt-2 max-w-[880px] font-display text-[clamp(30px,4.4vw,58px)] font-bold leading-[1.05] text-ink">
            {t.growth.words.grow}
          </h2>

          <div className="mt-2 flex items-center justify-center gap-4 sm:gap-6">
            <h2 className="display-tight font-display text-[clamp(30px,4.4vw,58px)] font-bold leading-[1.05] text-ink">
              {t.growth.words.planning}
            </h2>
            <ScrollRotatingImage
              src="/images/heading-raw-steak.png"
              alt={t.growth.rawAlt}
              intensity={-11}
              className="h-[52px] w-[104px] sm:h-[72px] sm:w-[146px] lg:h-[90px] lg:w-[184px]"
            />
          </div>
        </Reveal>

        <Reveal variant="up" delay={120} className="mt-10 flex justify-center">
          <a href="#products" className="btn-primary">
            {t.growth.button}
          </a>
        </Reveal>

        <Reveal variant="zoom" delay={160}>
          <ProductCarousel />
        </Reveal>
      </div>
    </section>
  );
}
