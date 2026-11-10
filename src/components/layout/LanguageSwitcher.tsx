"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/content";

const OPTIONS: { value: Language; label: string }[] = [
  { value: "ar", label: "العربية" },
  { value: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const currentLabel =
    OPTIONS.find((option) => option.value === language)?.label ?? "العربية";

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.languageLabel}
        className="flex h-9 w-9 items-center justify-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:text-brand sm:h-10 sm:w-auto sm:justify-start lg:text-sm"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-[18px] w-[18px]"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
        </svg>
        <span className="hidden normal-case tracking-normal sm:inline">
          {currentLabel}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={`hidden h-3 w-3 transition-transform duration-200 sm:block ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.nav.languageLabel}
          className="absolute end-0 top-full z-50 mt-3 min-w-[160px] border border-ink/10 bg-surface p-1 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)]"
        >
          {OPTIONS.map((option) => {
            const isActive = option.value === language;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLanguage(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-4 px-3 py-2.5 text-start text-sm transition-colors ${
                  isActive
                    ? "bg-brand/10 font-semibold text-brand"
                    : "text-ink hover:bg-mist"
                }`}
              >
                <span>{option.label}</span>
                {isActive && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="m4 10.5 4 4 8-9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
