"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";

function SocialIcon({ name }: { name: string }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "h-[18px] w-[18px]",
    fill: "currentColor",
  } as const;

  switch (name) {
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V14h2.7v8h3.2Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg {...common}>
          <path d="M12 2.8a9 9 0 0 0-7.7 13.6L3 21.2l5-1.3A9 9 0 1 0 12 2.8Zm0 1.8a7.2 7.2 0 1 1-3.7 13.4l-.4-.2-2.9.8.8-2.8-.2-.4A7.2 7.2 0 0 1 12 4.6Zm-2.7 3.7c-.2 0-.5.1-.7.3-.3.3-.8.8-.8 1.8s.8 2.1 1 2.2c.1.2 1.6 2.6 4 3.5 1.9.7 2.3.6 2.7.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3l-1.4-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.4.1a6 6 0 0 1-1.8-1.1 6.6 6.6 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.6-1.4c-.2-.4-.4-.4-.5-.4h-.6Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M16.6 3h-2.9v11.4a2.1 2.1 0 1 1-1.5-2V9.4a5.2 5.2 0 1 0 4.4 5.1V8.6a5.4 5.4 0 0 0 3.2 1V6.7a3.4 3.4 0 0 1-3.2-3.7Z" />
        </svg>
      );
  }
}

function ArrowUp() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M10 16V4m0 0-5 5m5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Dark "Exceptional Service" panel resting on the rustic steak backdrop, with
 * the contact details, the message form, the social row and a slim legal bar.
 */
export default function SiteFooter() {
  const { t, isRtl } = useLanguage();
  const [sent, setSent] = useState(false);

  const fieldClass =
    "w-full border border-white/12 bg-white/[0.03] px-4 py-3.5 text-[14px] text-white/90 outline-none transition-all duration-300 placeholder:text-white/40 hover:border-white/25 focus:border-brand focus:bg-white/[0.06] focus:ring-2 focus:ring-brand/40";

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#1a1513]">
      <Image
        src="/images/footer-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-65"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75"
      />

      <div className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <Reveal
          variant="up"
          className="mx-auto max-w-[1640px] overflow-hidden bg-[#221a17]/95 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)] backdrop-blur-[2px]"
        >
          <span
            aria-hidden="true"
            className="block h-[3px] w-full bg-gradient-to-r from-transparent via-brand to-transparent"
          />

          <div className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[url('/images/hero-line-art.jpg')] bg-cover bg-center opacity-[0.05] mix-blend-screen"
            />

            <div className="relative grid gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-14 lg:py-16 xl:px-16">
              <div>
                <p className="font-script text-[26px] leading-none text-white/90">
                  {t.footer.eyebrow}
                </p>
                <h2 className="display-tight mt-4 font-display text-[clamp(36px,4.6vw,68px)] font-bold leading-[0.98] text-white">
                  {t.footer.title}
                </h2>

                <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
                  {t.footer.columns.map((column) => (
                    <div key={column.title} className="group">
                      <h3 className="font-display text-[17px] font-bold text-white">
                        {column.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-px w-9 bg-brand transition-all duration-500 group-hover:w-16"
                      />
                      <div className="mt-3 space-y-1.5">
                        {column.lines.map((line) => (
                          <p
                            key={line}
                            className="text-[14px] leading-[1.75] text-white/70 transition-colors duration-300 group-hover:text-white/90"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                <h3 className="font-display text-[24px] font-bold text-white sm:text-[28px]">
                  {t.footer.form.label}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-px w-12 bg-brand"
                />

                <form
                  className="mt-6 space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSent(true);
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.footer.form.name}
                    aria-label={t.footer.form.name}
                    className={fieldClass}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.footer.form.email}
                    aria-label={t.footer.form.email}
                    className={fieldClass}
                  />
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder={t.footer.form.message}
                    aria-label={t.footer.form.message}
                    className={`${fieldClass} resize-none`}
                  />

                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <button type="submit" className="btn-primary">
                      {t.footer.form.button}
                    </button>
                    <p
                      className={`flex-1 text-[13px] leading-5 text-white/70 transition-all duration-500 ${
                        sent
                          ? "translate-y-0 opacity-100"
                          : "translate-y-1 opacity-0"
                      }`}
                      role="status"
                      aria-live="polite"
                    >
                      {sent ? t.footer.form.note : ""}
                    </p>
                  </div>
                </form>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">
                    {t.footer.socialLabel}
                  </p>
                  <ul className="mt-4 flex items-center gap-3">
                    {t.footer.socials.map((social) => (
                      <li key={social}>
                        <a
                          href="#"
                          aria-label={social}
                          title={social}
                          className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-[0_12px_24px_-12px_rgba(130,31,5,0.9)] focus-visible:-translate-y-1 focus-visible:border-brand focus-visible:text-white"
                        >
                          <SocialIcon name={social} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-between gap-5 border-t border-white/10 px-6 py-6 sm:px-10 lg:flex-row lg:px-14 xl:px-16">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <Image
                  src="/images/baba-shakoor-meats-logo.png"
                  alt="Baba Shakoor Meats"
                  width={512}
                  height={512}
                  className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
                />
                <span
                  aria-hidden="true"
                  className="hidden h-3.5 w-px bg-white/20 sm:block"
                />
                <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                  {t.footer.links.map((link, index) => (
                    <li key={link} className="flex items-center gap-3">
                      <a
                        href="#"
                        className="text-[13.5px] text-white/65 transition-colors duration-300 hover:text-white focus-visible:text-white"
                      >
                        {link}
                      </a>
                      {index < t.footer.links.length - 1 && (
                        <span aria-hidden="true" className="text-white/25">
                          ·
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-[12.5px] text-white/40">
                  {t.footer.rights}
                </p>
                <a
                  href="#hero"
                  aria-label={isRtl ? "العودة إلى الأعلى" : "Back to top"}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <span className={isRtl ? "rotate-180" : ""}>
                    <ArrowUp />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
