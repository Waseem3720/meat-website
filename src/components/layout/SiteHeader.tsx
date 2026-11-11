"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader() {
  const { t, isRtl } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Arabic mein text bara, bold, aur letter-spacing/uppercase ke baghair
  const navTextClass = isRtl
    ? "text-[14px] font-bold tracking-normal xl:text-[17px]"
    : "text-[12px] font-semibold uppercase tracking-[0.05em] xl:text-[14px]";

  const mobileTextClass = isRtl
    ? "text-[17px] font-bold tracking-normal"
    : "text-[15px] font-semibold uppercase tracking-[0.05em]";

  return (
    <header className="relative z-40 border-b border-ink/10 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/90">
      <div className="mx-auto max-w-[1780px] px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid h-[64px] grid-cols-[1fr_auto_1fr] items-center gap-1.5 sm:h-[78px] sm:gap-3 lg:h-[146px]">
          <div className="flex min-w-0 items-center justify-start">
            <button
              type="button"
              aria-label={t.nav.menuToggle}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
              className="inline-flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-brand sm:h-10 sm:w-10 lg:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                {mobileOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>

            <nav
              aria-label="Main navigation"
              className="hidden min-w-0 items-center gap-3 lg:flex xl:gap-8"
            >
              {t.nav.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link flex items-center gap-1.5 whitespace-nowrap font-display text-ink ${navTextClass}`}
                >
                  {item.label}
                  {item.hasChildren && <ChevronDown className="h-3 w-3" />}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="#hero"
            className="min-w-0 shrink-0 justify-self-center"
            aria-label="Carne Shop — home"
          >
            <Image
              src="/images/baba-shakoor-meats-logo.png"
              alt="Baba Shakoor Meats"
              width={512}
              height={512}
              priority
              className="h-11 w-11 rounded-full object-cover sm:h-14 sm:w-14 lg:h-[86px] lg:w-[86px] xl:h-[94px] xl:w-[94px]"
            />
          </a>

          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-3 lg:gap-5">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-ink/10 bg-paper lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-[1780px] px-5 py-4 sm:px-6"
          >
            <ul>
              {t.nav.items.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-ink/10 last:border-b-0"
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3.5 font-display text-ink transition-colors hover:text-brand ${mobileTextClass}`}
                  >
                    {item.label}
                    {item.hasChildren && (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}