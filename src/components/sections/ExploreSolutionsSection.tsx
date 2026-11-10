"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";

export default function ExploreSolutionsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-paper py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.34fr_0.66fr] lg:gap-16">
          <div>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-10">
              <Reveal variant="zoom" className="hover-lift group relative aspect-square overflow-hidden bg-mist">
                <Image
                  src="/images/solutions-beef-cuts.jpg"
                  alt={t.solutions.squareAlt}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 46vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/10"
                />
              </Reveal>

              <Reveal variant="right" delay={120} className="max-w-[430px]">
                <p className="font-script text-[26px] leading-none text-brand">
                  {t.solutions.eyebrow}
                </p>
                <h2 className="display-tight mt-5 font-display text-[clamp(30px,3.3vw,48px)] font-bold leading-[1.05] text-ink">
                  {t.solutions.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.8] text-body">
                  {t.solutions.body}
                </p>
                <a href="#products" className="btn-primary mt-8">
                  {t.solutions.button}
                </a>
              </Reveal>
            </div>

            <Reveal variant="up" delay={180} className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-12">
              {t.solutions.stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </Reveal>
          </div>

          <Reveal variant="left" delay={80} className="hover-lift group relative aspect-[3/4] overflow-hidden bg-ink">
            <Image
              src="/images/solutions-butcher-board.jpg"
              alt={t.solutions.verticalAlt}
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
            />
            <span className="absolute inset-x-0 bottom-7 rotate-[-4deg] text-center font-display text-[clamp(26px,2.6vw,34px)] font-bold text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              {t.solutions.support}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
