"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";

type TiltBoxProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/**
 * Tilts its content towards the pointer on hover, like the reference site's
 * mouse-tilt effect on "Quality Meat" and "Meat Lovers".
 */
export default function TiltBox({
  children,
  className = "",
  maxTilt = 7,
}: TiltBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg)",
  );

  const reset = () => setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const element = containerRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    setTransform(
      `perspective(900px) rotateX(${(-vertical * maxTilt).toFixed(
        2,
      )}deg) rotateY(${(horizontal * maxTilt).toFixed(2)}deg)`,
    );
  };

  const style: CSSProperties = {
    transform,
    transformStyle: "preserve-3d",
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </div>
  );
}
