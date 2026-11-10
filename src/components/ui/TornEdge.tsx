"use client";

import { useMemo } from "react";

type TornEdgeProps = {
  fill: string;
  position?: "top" | "bottom";
  className?: string;
};

/**
 * Rough ripped-paper edge used above and below the dark WooCommerce band.
 * The teeth are generated deterministically so server and client markup match.
 */
export default function TornEdge({
  fill,
  position = "top",
  className = "h-[34px] sm:h-[46px] lg:h-[58px]",
}: TornEdgeProps) {
  const clipPath = useMemo(() => {
    // Irregular teeth, like the edge of a page ripped out of a book: the
    // depth mixes a few waves plus the odd deep notch.
    const teeth = 72;
    const points = ["0% 0%", "100% 0%"];

    for (let index = teeth; index >= 0; index -= 1) {
      const x = (index / teeth) * 100;
      const wave =
        Math.abs(Math.sin(index * 1.73)) * 0.9 +
        Math.abs(Math.sin(index * 0.41 + 1.2)) * 0.75;
      const notch = index % 11 === 0 || index % 17 === 0 ? 1.35 : 0;
      const depth = 0.25 + wave + notch;
      points.push(`${x.toFixed(2)}% ${(depth + 0.6).toFixed(2)}%`);
    }

    return `polygon(${points.join(", ")})`;
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-20 ${
        position === "top" ? "top-0" : "bottom-0"
      } ${className}`}
    >
      <div
        className="h-full w-full"
        style={{ backgroundColor: fill, clipPath }}
      />
    </div>
  );
}
