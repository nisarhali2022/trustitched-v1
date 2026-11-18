import { cookies } from "next/headers";
import { formatDay, scheduledEntry, scheduleForYear, studioToday } from "./calendar";
import { themes } from "./themes";

// ─── WEBSITE THEME ───
// "auto" = follow the yearly calendar in src/themes/calendar.js (recommended).
// A number = force that theme all the time, until you change it back to "auto".
//   0 Normal days      1 Christmas        2 Black Friday     3 Halloween
//   4 Thanksgiving     5 New Year         6 Valentine's Day  7 Spring
//   8 St. Patrick's    9 Mother's Day    10 Father's Day    11 4th of July
//  12 Back to School  13 Big Game        14 Basketball      15 Baseball
//  16 Football Season
export const ACTIVE_THEME = "auto";

export const DEV_THEME_COOKIE = "trustitched-dev-theme";

export const themeOptions = Object.entries(themes).map(([number, theme]) => ({
  number: Number(number),
  label: theme.label,
}));

export function getTheme(number) {
  return themes[number] ?? themes[0]; // unknown number → Normal days
}

// Which theme the live site shows right now, and why.
export function getLiveTheme(today = studioToday()) {
  if (ACTIVE_THEME === "auto") {
    const entry = scheduledEntry(today);
    const number = entry?.theme ?? 0;
    return {
      number,
      mode: "auto",
      range: entry ? `${formatDay(entry.start)} – ${formatDay(entry.end)}` : null,
    };
  }

  const number = ACTIVE_THEME in themes ? Number(ACTIVE_THEME) : 0;
  return { number, mode: "manual", range: null };
}

// The theme for the current page.
// In development the dev theme bar can override it with a cookie.
// In production builds that branch is removed, so pages stay static
// (re-rendered hourly so the calendar can switch themes on time).
export async function getCurrentTheme() {
  if (process.env.NODE_ENV === "development") {
    const override = (await cookies()).get(DEV_THEME_COOKIE)?.value;
    if (override !== undefined && themes[override]) {
      return { number: Number(override), ...themes[override] };
    }
  }

  const { number } = getLiveTheme();
  return { number, ...getTheme(number) };
}

// Calendar dates per theme for this year, e.g. { 4: "Nov 1 – Nov 26" }.
export function themeDates(year = studioToday().year) {
  return Object.fromEntries(
    scheduleForYear(year).map(({ theme, start, end }) => [theme, `${formatDay(start)} – ${formatDay(end)}`]),
  );
}
