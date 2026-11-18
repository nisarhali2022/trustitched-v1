"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

// Development-only theme switcher. Rendered from layout.js only when
// NODE_ENV is "development", so it is never part of the live site.
// It stores the chosen number in a cookie and re-renders the page;
// it does not change ACTIVE_THEME in src/themes/index.js.
function saveThemeCookie(cookieName, number) {
  document.cookie = number === null
    ? `${cookieName}=; path=/; max-age=0; SameSite=Lax`
    : `${cookieName}=${number}; path=/; SameSite=Lax`;
}

export function DevThemeBar({ options, currentTheme, live, dates, cookieName }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [collapsed, setCollapsed] = useState(false);
  const labelOf = (number) => options.find((option) => option.number === number)?.label;

  function choose(number) {
    saveThemeCookie(cookieName, number);
    startTransition(() => router.refresh());
  }

  if (collapsed) {
    return (
      <button
        className="dev-theme-bar fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-white/20 bg-black/85 px-4 py-2 text-xs font-bold text-white shadow-xl"
        type="button"
        onClick={() => setCollapsed(false)}
      >
        Theme {currentTheme}
      </button>
    );
  }

  return (
    <div className="dev-theme-bar fixed bottom-4 left-1/2 z-[60] w-[min(48rem,calc(100vw-10rem))] -translate-x-1/2 rounded-2xl border border-white/20 bg-black/85 p-3 text-xs text-white shadow-2xl backdrop-blur">
      <div className="mb-2 flex items-start justify-between gap-4">
        <p className="leading-5 text-white/75">
          <span className="font-bold uppercase tracking-[0.14em] text-white">Dev theme</span>
          {" · "}Live today: <strong className="text-white">{live.number} {labelOf(live.number)}</strong>
          {live.mode === "auto" ? ` (auto${live.range ? `, ${live.range}` : ", no event"})` : " (forced by number)"}
          {pending ? " · loading…" : ""}
        </p>
        <button className="rounded-full px-2 text-white/60 hover:text-white" type="button" onClick={() => setCollapsed(true)} aria-label="Collapse theme bar">
          ✕
        </button>
      </div>
      <div className="flex max-h-40 flex-wrap gap-1.5 overflow-y-auto">
        <button className="rounded-full border border-dashed border-white/50 px-3 py-1.5 font-semibold text-white/85 hover:text-white" type="button" onClick={() => choose(null)}>
          Reset to live
        </button>
        {options.map(({ number, label }) => (
          <button
            aria-pressed={number === currentTheme}
            className={`rounded-full border px-3 py-1.5 font-semibold transition ${number === currentTheme ? "border-white bg-white text-black" : "border-white/25 hover:border-white/70"}`}
            key={number}
            title={dates[number] ? `Calendar: ${dates[number]}` : "Shown when no event is scheduled"}
            type="button"
            onClick={() => choose(number)}
          >
            {number} {label}
            {dates[number] ? <span className="ml-1 font-normal opacity-60">{dates[number]}</span> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
