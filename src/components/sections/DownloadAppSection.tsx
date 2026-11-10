"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";

/* The light section above and below the dark band. */
const TOP_FILL = "var(--color-mist)";
const BOTTOM_FILL = "var(--color-paper)";

const EDGE_WIDTH = 1440;

/* Seeded random so the edge looks the same on the server and in the browser. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* A gently torn paper edge: soft waves plus tiny nicks. */
function buildEdgePoints(seed: number, baseY: number, waveShift: number) {
  const rand = seeded(seed);
  const points: Array<[number, number]> = [];

  for (let x = 0; x <= EDGE_WIDTH; x += 8) {
    const y =
      baseY +
      6 * Math.sin(x / 110 + waveShift) +
      3.5 * Math.sin(x / 42 + waveShift * 2) +
      1.5 * Math.sin(x / 17 + waveShift * 3) +
      (rand() - 0.5) * 2.4;

    points.push([x, Math.round(y * 10) / 10]);
  }

  return points;
}

function pointsToPath(points: Array<[number, number]>) {
  const last = points[points.length - 1][1];
  const reversed = [...points].reverse().map(([x, y]) => `L${x},${y}`);
  return `M0,0 H${EDGE_WIDTH} V${last} ${reversed.join(" ")} Z`;
}

const PAPER_PATH = pointsToPath(buildEdgePoints(7, 34, 0.6));
const FIBER_PATH = pointsToPath(buildEdgePoints(23, 39, 1.4));

function TornPaperEdge({
  position,
  fill,
}: {
  position: "top" | "bottom";
  fill: string;
}) {
  const isTop = position === "top";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-[1] h-[28px] sm:h-[40px] lg:h-[60px] ${
        isTop ? "top-0" : "bottom-0 scale-y-[-1]"
      }`}
      style={{ filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.28))" }}
    >
      <svg
        viewBox={`0 0 ${EDGE_WIDTH} 60`}
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <path d={FIBER_PATH} fill="#e6e2db" />
        <path d={PAPER_PATH} fill={fill} />
      </svg>
    </div>
  );
}

function AppleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M16.4 12.7c0-1.9 1.5-2.8 1.6-2.9-.9-1.3-2.3-1.5-2.8-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.8-3.2 1.9-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6c1 0 1.7-.9 2.3-1.9.7-1 1-2.1 1-2.2-.1 0-2.4-.9-2.4-3.4ZM14.6 6.9c.5-.6.9-1.5.8-2.4-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.4.9.1 1.8-.5 2.4-1.2Z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M3.9 2.5 14.2 12 3.9 21.5c-.3-.2-.5-.6-.5-1.1V3.6c0-.5.2-.9.5-1.1Z" fill="#29b6f6" />
      <path d="M17.9 8.4 6.1 2.1c-.4-.2-.8-.2-1.2-.1l10 9.6 3-3.2Z" fill="#66bb6a" />
      <path d="M18.9 9.5 15.6 12l3.3 3.1 2.3-1.3c.7-.4.7-1.4 0-1.8l-2.3-1.3Z" fill="#ffa726" />
      <path d="M4.9 21.9c.4.1.8.1 1.2-.1l11.8-6.3-3-3.1-10 9.5Z" fill="#ef5350" />
    </svg>
  );
}

/**
 * "For order → Download App": the dark band keeps the butcher-photo backdrop
 * and the torn paper frame, with the copy on one side and a compact phone
 * preview of the ordering app on the other.
 */
export default function DownloadAppSection() {
  const { t, isRtl } = useLanguage();
  const { app } = t;

  return (
    <section id="app" className="relative overflow-hidden bg-[#1a1513]">
      <Image
        src="/images/woocommerce-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/50"
      />

      <TornPaperEdge position="top" fill={TOP_FILL} />
      <TornPaperEdge position="bottom" fill={BOTTOM_FILL} />

      <div className="relative z-[2] mx-auto max-w-[1400px] px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:pb-32 lg:pt-32">
        <div
          className={`flex flex-col gap-14 lg:items-center lg:justify-between lg:gap-20 ${
            isRtl ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <Reveal variant="left" className="max-w-[560px]">
            <p className="font-script text-[22px] uppercase leading-none tracking-[0.18em] text-white/85">
              {app.eyebrow}
            </p>
            <h2 className="display-tight mt-4 font-display text-[clamp(44px,6vw,86px)] font-bold leading-[0.95] text-white">
              {app.title}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-white/75">
              {app.body}
            </p>

            <p className="mt-10 font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-white/55">
              {app.storeLabel}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="group flex items-center gap-3 border border-white/15 bg-black/55 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-black/80"
              >
                <AppleMark />
                <span className="leading-tight text-white">
                  <span className="block text-[9px] uppercase tracking-[0.12em] text-white/60">
                    Download on the
                  </span>
                  <span className="block font-display text-[16px] font-semibold">
                    {app.appStore}
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 border border-white/15 bg-black/55 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-black/80"
              >
                <PlayMark />
                <span className="leading-tight text-white">
                  <span className="block text-[9px] uppercase tracking-[0.12em] text-white/60">
                    Get it on
                  </span>
                  <span className="block font-display text-[16px] font-semibold">
                    {app.playStore}
                  </span>
                </span>
              </a>
            </div>

            <p className="mt-5 text-[13px] text-white/55">{app.note}</p>
          </Reveal>

          <Reveal
            variant="right"
            delay={120}
            className="shrink-0 max-lg:mx-auto lg:mr-12 xl:mr-24"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 scale-125 rounded-full bg-brand/25 blur-[70px]"
              />

              <div className="float-soft relative w-[196px] rounded-[32px] border border-white/15 bg-[#0b0a09] p-2.5 shadow-[0_35px_60px_-28px_rgba(0,0,0,0.95)] sm:w-[224px]">
                <div className="relative overflow-hidden rounded-[24px] bg-surface">
                  {/* Notch */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 z-10 flex justify-center"
                  >
                    <span className="h-[10px] w-[62px] rounded-b-[8px] bg-[#0b0a09]" />
                  </div>

                  {/* Status row */}
                  <div className="flex items-center justify-between px-3 pb-1 pt-2 text-[8px] font-semibold text-ink/60">
                    <span>9:41</span>
                    <span aria-hidden="true" className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
                      <span className="h-2 w-3 rounded-[2px] border border-ink/40" />
                    </span>
                  </div>

                  {/* Brand row */}
                  <div className="flex items-center justify-between px-3 pb-2 pt-1">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.1em] text-ink">
                      {app.screen.brand}
                    </span>
                    <span aria-hidden="true" className="flex flex-col gap-[2px]">
                      <span className="h-[2px] w-3 rounded-full bg-ink/40" />
                      <span className="h-[2px] w-3 rounded-full bg-ink/40" />
                    </span>
                  </div>

                  {/* Product image */}
                  <div className="relative mx-3 aspect-[4/3] overflow-hidden rounded-lg bg-ink">
                    <Image
                      src="/images/cut-beef.jpg"
                      alt={app.screen.alt}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                    <span className="absolute end-2 top-2 rounded-full bg-brand px-2 py-[3px] font-display text-[8px] font-semibold text-white">
                      {app.screen.price}
                    </span>
                  </div>

                  <div className="px-3 pt-2.5">
                    <p className="font-display text-[11px] font-bold leading-tight text-ink">
                      {app.screen.cut}
                    </p>
                    <p className="mt-[2px] text-[8.5px] text-body">
                      {app.screen.weight}
                    </p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-body/80">
                      {app.screen.donenessLabel}
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      {app.screen.doneness.map((option, index) => (
                        <span
                          key={option}
                          className={`flex-1 rounded-[3px] border px-1 py-[3px] text-center text-[7.5px] font-semibold transition-colors ${
                            index === 0
                              ? "border-brand bg-brand text-white"
                              : "border-ink/15 text-body"
                          }`}
                        >
                          {option}
                        </span>
                      ))}
                    </div>

                    <span className="mt-2.5 flex w-full items-center justify-center bg-brand py-[7px] font-display text-[9px] font-semibold uppercase tracking-[0.08em] text-white">
                      {app.screen.cta}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-around border-t border-ink/10 px-3 py-2">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        aria-hidden="true"
                        className={`h-[5px] w-[5px] rounded-full ${
                          dot === 0 ? "bg-brand" : "bg-ink/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <span
                aria-hidden="true"
                className={`absolute -bottom-3 ${
                  isRtl ? "-start-3" : "-end-3"
                } hidden items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 font-display text-[11px] font-semibold text-white shadow-[0_12px_24px_-12px_rgba(0,0,0,0.9)] sm:flex`}
              >
                {app.screen.price}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
