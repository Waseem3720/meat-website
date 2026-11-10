"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";

export default function CreativeIdeasSection() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="relative overflow-hidden bg-mist py-16 lg:py-24">
      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1720px] sm:w-[calc(100%-64px)]">
        <div className="relative overflow-hidden bg-[#1a1513]">
          <Image
            src="/images/creative-ideas-banner.jpg"
            alt={t.creative.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Warm wash + vignette: keeps the photo readable but never washed out */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#1a1513]/45 mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-tr from-[#0f0b09]/95 via-[#1a1513]/65 to-[#1a1513]/25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_18%,rgba(10,7,6,0.72)_100%)]"
          />

          <Reveal
            variant="zoom"
            className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-5 pb-28 pt-16 text-center lg:min-h-[540px] lg:pb-32 lg:pt-24"
          >
            <Image
              src="/images/icon-steak.png"
              alt=""
              width={250}
              height={250}
              className="h-14 w-14 opacity-90 drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] lg:h-20 lg:w-20"
            />
            <h2 className="display-tight mt-6 max-w-[760px] font-display text-[clamp(32px,4.8vw,64px)] font-bold leading-[1.05] text-white [text-shadow:0_4px_26px_rgba(0,0,0,0.55)]">
              {t.creative.title}
            </h2>
            <a href="#products" className="btn-primary mt-8">
              {t.creative.button}
            </a>
          </Reveal>

          {/* Marquee fades out at both ends and sits on a soft bottom shadow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-[#0f0b09]/90 to-transparent"
          />

          <div
            dir="ltr"
            className="absolute inset-x-0 bottom-2 z-10 overflow-hidden pb-2 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] lg:bottom-3"
          >
            <div className="marquee-track flex w-max items-center">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1}
                  className="flex items-center gap-8 pe-8 sm:gap-12 sm:pe-12"
                >
                  {t.creative.marquee.map((item) => (
                    <span
                      key={`${group}-${item}`}
                      className="flex items-center gap-4 whitespace-nowrap font-display text-[clamp(34px,6vw,84px)] font-bold leading-none text-white/85 sm:gap-6"
                    >
                      <span className="text-[0.5em] text-white/55">#</span>
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
