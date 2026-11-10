"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "li" | "ul" | "span" | "header" | "form";

type RevealProps = {
  children: ReactNode;
  /** Direction the block travels in from. */
  variant?: "up" | "down" | "left" | "right" | "zoom";
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: RevealTag;
};

/**
 * Reveals its children the first time they scroll into view. Every section uses
 * a mix of directions (up / left / right / zoom) so the page keeps moving as the
 * visitor travels down it.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        elementRef.current = node;
      }}
      data-reveal={variant}
      className={`${className}${revealed ? " is-revealed" : ""}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
