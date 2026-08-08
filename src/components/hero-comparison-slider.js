"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroComparisonSlider({ before, after }) {
  const [position, setPosition] = useState(50);

  function handleKeyDown(event) {
    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setPosition((current) => Math.max(0, current - 1));
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setPosition((current) => Math.min(100, current + 1));
    }
  }

  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/15 bg-ink shadow-2xl focus-within:ring-4 focus-within:ring-teal-light/70 focus-within:ring-offset-4 focus-within:ring-offset-ink">
      <Image
        alt={after.alt}
        className="object-cover"
        fill
        preload
        sizes="(max-width: 1024px) 100vw, 52vw"
        src={after.src}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          alt={before.alt}
          className="object-cover"
          fill
          preload
          sizes="(max-width: 1024px) 100vw, 52vw"
          src={before.src}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-4 text-[0.68rem] font-bold uppercase tracking-[0.14em] sm:inset-x-5 sm:top-5 sm:text-xs">
        <span className="rounded-full border border-ink/10 bg-canvas/92 px-3 py-2 text-ink shadow-lg backdrop-blur">
          Vector artwork
        </span>
        <span className="rounded-full border border-white/15 bg-ink/88 px-3 py-2 text-white shadow-lg backdrop-blur">
          Finished embroidery
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_16px_rgba(12,49,61,0.55)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-teal-action text-ink shadow-xl sm:h-14 sm:w-14">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
      </div>

      <input
        aria-label="Compare vector artwork with finished embroidery"
        aria-valuetext={`${position}% vector artwork visible`}
        className="absolute inset-0 z-30 h-full w-full cursor-col-resize touch-none opacity-0"
        max="100"
        min="0"
        onChange={(event) => setPosition(Number(event.target.value))}
        onKeyDown={handleKeyDown}
        step="1"
        type="range"
        value={position}
      />

      <figcaption className="sr-only">
        Drag the comparison slider to reveal the vector artwork and its finished embroidered version.
      </figcaption>
    </figure>
  );
}
