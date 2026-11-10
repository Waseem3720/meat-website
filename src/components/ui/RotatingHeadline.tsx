"use client";

import { useEffect, useState, type CSSProperties } from "react";

type RotatingHeadlineProps = {
  words: string[];
  className?: string;
  intervalMs?: number;
};

/**
 * Cycles through the given words with a letter-by-letter "blinds" reveal.
 * Used for "Prime Cuts / Fresh Cuts" and "Smoked / Premium".
 */
export default function RotatingHeadline({
  words,
  className = "",
  intervalMs = 2500,
}: RotatingHeadlineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className={`rotating-headline ${className}`}>
      <span className="sr-only">{words[0]}</span>
      <span aria-hidden="true" className="rotating-headline__stack">
        {words.map((word, wordIndex) => (
          <span
            key={`${word}-${wordIndex}`}
            className={`rotating-headline__word ${
              wordIndex === activeIndex ? "is-active" : ""
            }`}
          >
            {Array.from(word).map((character, characterIndex) => (
              <span
                key={`${character}-${characterIndex}`}
                className="rotating-headline__char"
                style={
                  { "--char-index": characterIndex } as CSSProperties
                }
              >
                {character === " " ? "\u00a0" : character}
              </span>
            ))}
          </span>
        ))}
      </span>
    </span>
  );
}
