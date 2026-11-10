"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="relative z-30 overflow-hidden bg-night">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/hero-steak-feast.jpg')] bg-cover bg-center opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/70"
      />

      <div className="relative mx-auto flex h-[54px] max-w-[1780px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <ul className="flex items-center gap-3 text-[12px] text-white/90 sm:gap-5 sm:text-[13px]">
          {t.topBar.items.map((item, index) => (
            <li key={item} className="flex items-center gap-3 sm:gap-5">
              {index > 0 && (
                <span aria-hidden="true" className="text-white/50">
                  •
                </span>
              )}
              <a href="#" className="transition-colors hover:text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <ul
          aria-label={t.topBar.label}
          className="hidden items-center gap-4 text-[12px] text-white/90 sm:flex sm:text-[13px]"
        >
          {t.topBar.socials.map((social, index) => (
            <li key={social} className="flex items-center gap-4">
              {index > 0 && (
                <span aria-hidden="true" className="text-white/50">
                  •
                </span>
              )}
              <a href="#" className="transition-colors hover:text-white">
                {social}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
