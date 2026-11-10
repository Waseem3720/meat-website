"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ScrollRotatingImageProps = {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
};

/**
 * Rotates with the page scroll (only while scrolling), used by the
 * "Maintenance / Marketing / Planning" heading images.
 *
 * The angle is written straight onto the node instead of going through state,
 * so a page full of these does not re-render on every scroll frame.
 */
export default function ScrollRotatingImage({
  src,
  alt,
  className = "",
  intensity = 12,
}: ScrollRotatingImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(
        Math.max((viewportHeight - bounds.top) / (viewportHeight + bounds.height), 0),
        1,
      );

      element.style.transform = `rotate(${((progress - 0.5) * intensity * 2).toFixed(2)}deg)`;
    };

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <Image src={src} alt={alt} fill sizes="200px" className="object-contain" />
    </div>
  );
}
