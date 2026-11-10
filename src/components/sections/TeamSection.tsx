"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";

/**
 * "Creative ideas for smart people" — three butcher portraits sitting side by
 * side, each one framed by a thin rule that draws itself in on hover.
 */
export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="relative overflow-hidden bg-mist py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="art-pattern pointer-events-none absolute inset-0 opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-[1520px] px-5 sm:px-8 lg:px-10">
        <Reveal variant="up" className="text-center">
          <p className="font-script text-[25px] leading-none text-brand">
            {t.team.eyebrow}
          </p>
          <h2 className="display-tight mx-auto mt-4 max-w-[880px] font-display text-[clamp(30px,4.6vw,62px)] font-bold leading-[1.05] text-ink">
            {t.team.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.85] text-body">
            {t.team.body}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {t.team.members.map((member, index) => (
            <Reveal
              key={member.name}
              as="li"
              variant={index === 1 ? "zoom" : "up"}
              delay={index * 130}
            >
              <article className="hover-lift group relative overflow-hidden bg-ink">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/90"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/25"
                  />

                  {/* Thin frame that draws itself in on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 border border-white/0 transition-all duration-500 group-hover:inset-4 group-hover:border-white/45"
                  />

                  <div className="absolute inset-x-0 bottom-0 px-5 pb-7 text-center">
                    <h3 className="font-display text-[clamp(20px,2vw,26px)] font-bold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 max-h-0 overflow-hidden text-[13px] leading-6 tracking-[0.06em] text-white/80 opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-10 group-hover:opacity-100">
                      {member.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
