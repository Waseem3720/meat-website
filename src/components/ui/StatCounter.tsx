"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  label: string;
};

/**
 * Number that counts up once the statistics block scrolls into view.
 */
export default function StatCounter({ value, label }: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1800;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={containerRef} className="border-t border-ink/10 pt-8">
      <p className="font-display text-[clamp(42px,5vw,64px)] font-bold leading-none text-ink tabular-nums">
        <span dir="ltr">
          {displayValue} <span className="text-brand">+</span>
        </span>
      </p>
      <p className="mt-4 font-display text-lg font-semibold text-ink">{label}</p>
    </div>
  );
}
