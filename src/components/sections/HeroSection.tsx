
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import RotatingHeadline from "@/components/ui/RotatingHeadline";
import TiltBox from "@/components/ui/TiltBox";

export default function HeroSection() {
  const { t, isRtl } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const knifeRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const shiftX = 120;

  // Slideshow: har 5 seconds mein next image.
  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % t.hero.slides.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [t.hero.slides.length]);

  // Knife scroll ke saath move karega aur direction reverse bhi hogi.
  useEffect(() => {
    const update = () => {
      frameRef.current = 0;

      const section = sectionRef.current;
      if (!section) return;

      const sectionHeight = Math.max(section.offsetHeight, 1);
      const progress = Math.min(
        Math.max(window.scrollY / sectionHeight, 0),
        1
      );
      const direction = isRtl ? -1 : 1;
      const knife = knifeRef.current;
      if (!knife) return;

      // Painterly movement, written straight to the node so the whole hero
      // does not re-render while the visitor scrolls.
      const offset = (progress - 0.35) * 170 * direction;
      knife.style.transform = `translateX(calc(-50% + ${
        offset + (isRtl ? -shiftX : shiftX)
      }px))`;
    };

    const handleScroll = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isRtl]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-x-clip bg-mist"
    >
      {/* Background decorative pattern */}
      <div
        aria-hidden="true"
        className="art-pattern pointer-events-none absolute inset-0"
      />

      {/* Full-height hero photograph */}
      <div className="hero-photo-enter absolute inset-y-0 end-0 hidden w-[62%] overflow-hidden rounded-t-[64px] rounded-b-[160px] lg:block">
        <Image
          src="/images/hero-butcher-counter.jpg"
          alt={t.hero.photoAlt}
          fill
          priority
          sizes="62vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25"
        />
      </div>

      <div className="relative mx-auto max-w-[1640px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-0">
        <div className="relative grid gap-9 lg:min-h-[720px] lg:grid-cols-[37%_25%_38%] lg:items-start lg:gap-0">
          {/* Main heading, description and button */}
          <Reveal
            variant="up"
            className="relative z-30 flex flex-col lg:min-h-[720px] lg:justify-between lg:pb-[70px] lg:pt-[70px]"
          >
            <TiltBox className="w-fit">
              <h1 className="hero-heading-enter hero-delay-1 hero-title display-tight relative -top-1 font-display text-[clamp(36px,6.1vw,80px)] font-bold leading-[0.96] tracking-[-0.01em] text-ink">
                <span className="block">{t.hero.headingLine}</span>

                <RotatingHeadline
                  words={t.hero.headingRotating}
                  className="block text-ink"
                />
              </h1>
            </TiltBox>

            <div className="mt-10 max-w-[420px] lg:mt-12">
              <p className="hero-fade-enter hero-delay-2 font-script text-[26px] leading-none text-brand">
                {t.hero.eyebrow}
              </p>

              <h2 className="hero-heading-enter hero-delay-2 display-tight mt-5 font-display text-[clamp(30px,3.2vw,48px)] font-bold leading-[1.05] text-ink">
                {t.hero.title}
              </h2>

              <p className="hero-fade-enter hero-delay-3 mt-5 max-w-[380px] text-[15px] leading-[1.8] text-body">
                {t.hero.body}
              </p>

              <a
                href="#products"
                className="hero-button-enter btn-primary mt-8"
              >
                {t.hero.button}
              </a>
            </div>
          </Reveal>

          {/* Center slideshow */}
          <Reveal
            variant="zoom"
            delay={140}
            className="relative z-20 mx-auto w-full max-w-[400px] self-start lg:mx-0 lg:-ms-[30px] lg:mt-[110px] lg:w-[320px] lg:max-w-none"
          >
            <div className="hero-card-enter rounded-[10px] shadow-[0_30px_50px_-25px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-ink">
                {t.hero.slides.map((slide, index) => (
                  <Image
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 60vw, 85vw"
                    className={`object-cover transition-opacity duration-700 ease-out ${
                      index === slideIndex
                        ? "slide-enter opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}

                {/* Slideshow indicators */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 pb-4">
                  {t.hero.slides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setSlideIndex(index)}
                      aria-label={slide.alt}
                      aria-current={index === slideIndex}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        index === slideIndex
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div aria-hidden="true" className="hidden lg:block" />

          {/* Meat Lovers headline */}
          <div className="relative z-20 overflow-hidden bg-[url('/images/hero-butcher-counter.jpg')] bg-cover bg-center lg:absolute lg:bottom-[90px] lg:end-0 lg:w-[42%] lg:overflow-visible lg:bg-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/45 lg:hidden"
            />

            <div className="hero-meat-enter relative px-6 py-10 text-end sm:px-10 lg:p-0">
              <TiltBox>
                <h2 className="display-tight font-display text-[clamp(38px,5.6vw,88px)] font-bold leading-[0.95] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
                  <span className="block">{t.hero.meatLoversLine}</span>

                  <RotatingHeadline
                    words={t.hero.meatLoversRotating}
                    className="block text-white"
                  />
                </h2>
              </TiltBox>
            </div>
          </div>
        </div>
      </div>

      {/* Animated knife; scroll par movement bhi rahegi */}
      <div
        ref={knifeRef}
        aria-hidden="true"
        className="hero-knife-enter pointer-events-none absolute bottom-[-200px] start-1/2 z-30 hidden h-[440px] w-[76px] lg:block"
        style={{
          transform: `translateX(calc(-50% + ${isRtl ? -shiftX : shiftX}px))`,
        }}
      >
        <div className="h-full w-full scale-y-[-1]">
          <div className="relative h-full w-full rotate-90">
            <Image
              src="/images/knife.png"
              alt=""
              fill
              sizes="440px"
              className="object-contain drop-shadow-[0_16px_16px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>

      {/* Entrance animations */}
      <style jsx>{`
        .hero-photo-enter {
          opacity: 0;
          animation: photoReveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s
            forwards;
        }

        .hero-heading-enter {
          opacity: 0;
          animation: riseReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-fade-enter {
          opacity: 0;
          animation: fadeReveal 0.85s ease-out forwards;
        }

        .hero-button-enter {
          opacity: 0;
          animation: buttonReveal 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.65s;
        }

        .hero-card-enter {
          opacity: 0;
          animation: cardReveal 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s
            forwards;
        }

        .hero-meat-enter {
          opacity: 0;
          animation: meatReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s
            forwards;
        }

        .hero-knife-enter {
          opacity: 0;
          animation: knifeReveal 0.9s ease-out 0.8s forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.15s;
        }

        .hero-delay-2 {
          animation-delay: 0.35s;
        }

        .hero-delay-3 {
          animation-delay: 0.5s;
        }

        @keyframes photoReveal {
          from {
            opacity: 0;
            transform: scale(1.08);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes riseReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeReveal {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes buttonReveal {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes meatReveal {
          from {
            opacity: 0;
            transform: translateX(45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes knifeReveal {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-photo-enter,
          .hero-heading-enter,
          .hero-fade-enter,
          .hero-button-enter,
          .hero-card-enter,
          .hero-meat-enter,
          .hero-knife-enter {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
