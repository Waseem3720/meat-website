"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";

/**
 * The four "Customer Care / Consulting / Support / Maintenance" columns with
 * large outlined numbers sitting behind each label.
 */
export default function CustomerCareStrip() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.care.items.map((item) => item.label).join(" · ")}
      className="relative bg-mist py-14 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1620px] grid-cols-2 gap-y-8 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
        {t.care.items.map((item, index) => (
          <Reveal
            key={item.label}
            variant="up"
            delay={index * 100}
            className="group relative flex min-h-[120px] items-center justify-center lg:min-h-[160px]"
          >
            <span
              aria-hidden="true"
              className="outlined-number pointer-events-none absolute select-none font-display text-[96px] font-bold leading-none sm:text-[120px] lg:text-[142px]"
            >
              {item.number}
            </span>
            <h3 className="relative font-display text-[18px] font-bold text-ink sm:text-[22px] lg:text-[24px]">
              {item.label}
            </h3>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
