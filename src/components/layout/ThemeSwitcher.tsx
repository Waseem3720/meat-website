"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTheme, type ThemeId } from "@/components/providers/ThemeProvider";

const SWATCHES: Record<ThemeId, string> = {
  rust: "#821f05",
  copper: "#b4530a",
  olive: "#4c6b2f",
  ocean: "#235a7a",
};

/**
 * Navbar palette button: four colour themes plus a light/dark switch. Both
 * choices live in the ThemeProvider, so the whole page repaints at once.
 */
export default function ThemeSwitcher() {
  const { t } = useLanguage();
  const { theme, mode, setTheme, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
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

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={t.theme.label}
        className="group flex h-9 w-9 items-center justify-center gap-2 border border-ink/10 text-ink transition-all duration-300 hover:border-brand hover:text-brand sm:h-10 sm:w-auto sm:px-3"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-[18px] w-[18px] transition-transform duration-500 group-hover:rotate-[18deg]"
        >
          <path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.9-.9 1.9-1.9 0-.6-.2-1-.6-1.4-.4-.4-.6-.8-.6-1.3 0-1 .8-1.8 1.8-1.8h1.6A4.9 4.9 0 0 0 21 9.7C21 5.9 17 3 12 3Z" />
          <circle cx="7.6" cy="10.4" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="10.6" cy="7.2" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="14.6" cy="7.6" r="1.15" fill="currentColor" stroke="none" />
        </svg>
        <span
          aria-hidden="true"
          className="hidden h-3.5 w-3.5 rounded-full ring-1 ring-black/10 sm:block"
          style={{ backgroundColor: SWATCHES[theme] }}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={t.theme.label}
          className="absolute end-0 top-full z-50 mt-3 w-[248px] border border-ink/10 bg-surface p-4 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.45)]"
        >
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-body">
            {t.theme.paletteLabel}
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {t.theme.palette.map((option) => {
              const isActive = option.id === theme;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setTheme(option.id)}
                  aria-pressed={isActive}
                  title={option.label}
                  className={`group flex flex-col items-center gap-1.5 rounded-sm p-1 transition-colors ${
                    isActive ? "text-brand" : "text-body hover:text-ink"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "ring-2 ring-brand ring-offset-2 ring-offset-surface" : ""
                    }`}
                    style={{ backgroundColor: SWATCHES[option.id] }}
                  >
                    {isActive && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#fff"
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
                  </span>
                  <span className="text-[11px] leading-none">{option.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 border-t border-ink/10 pt-3">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-body">
              {t.theme.modeLabel}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {(["light", "dark"] as const).map((value) => {
                const isActive = mode === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setMode(value)}
                    aria-pressed={isActive}
                    className={`flex items-center justify-center gap-1.5 border px-2 py-2 text-[12px] font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-brand bg-brand text-white"
                        : "border-ink/15 text-body hover:border-brand hover:text-brand"
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4"
                    >
                      {value === "light" ? (
                        <>
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.4 5.4l1.4 1.4M17.2 17.2l1.4 1.4M18.6 5.4l-1.4 1.4M6.8 17.2l-1.4 1.4" strokeLinecap="round" />
                        </>
                      ) : (
                        <path
                          d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                    </svg>
                    {value === "light" ? t.theme.light : t.theme.dark}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
