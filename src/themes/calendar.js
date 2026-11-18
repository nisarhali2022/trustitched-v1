// Yearly theme calendar used when ACTIVE_THEME = "auto".
//
// Each theme starts early enough for customers to order before the day,
// and ends on (or just after) the event. Holidays that move every year
// (Mother's Day, Father's Day, Thanksgiving, Black Friday) are calculated.
// Days not covered by any entry show theme 0 (Normal days).
// If two entries overlap, the one listed first wins.

export const STUDIO_TIME_ZONE = "America/New_York";

// "Today" in the studio's time zone, as { year, month, day }.
export function studioToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: STUDIO_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const get = (type) => Number(parts.find((part) => part.type === type).value);
  return { year: get("year"), month: get("month"), day: get("day") };
}

// Day of the month of the nth weekday (0 = Sunday … 6 = Saturday) in a month.
function nthWeekday(year, month, weekday, n) {
  const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  return 1 + ((weekday - firstWeekday + 7) % 7) + (n - 1) * 7;
}

// Shift a { month, day } by a number of days within the same year.
function shift(year, { month, day }, days) {
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return { month: date.getUTCMonth() + 1, day: date.getUTCDate() };
}

const md = (month, day) => ({ month, day });

// theme = number from src/themes/themes.js
const calendar = [
  { theme: 5, start: () => md(12, 27), end: () => md(1, 11) }, // New Year (crosses the year end)
  { theme: 13, start: () => md(1, 12), end: () => md(1, 31) }, // Big Game (football)
  { theme: 6, start: () => md(2, 1), end: () => md(2, 15) }, // Valentine's Day
  { theme: 8, start: () => md(3, 2), end: () => md(3, 17) }, // St. Patrick's Day
  { theme: 14, start: () => md(3, 18), end: () => md(4, 6) }, // Basketball tournament season
  { theme: 7, start: () => md(4, 7), end: () => md(4, 24) }, // Spring
  { theme: 9, start: () => md(4, 25), end: (y) => md(5, nthWeekday(y, 5, 0, 2)) }, // Mother's Day (2nd Sunday of May)
  {
    theme: 10, // Father's Day (3rd Sunday of June), starting 16 days before
    start: (y) => shift(y, md(6, nthWeekday(y, 6, 0, 3)), -16),
    end: (y) => md(6, nthWeekday(y, 6, 0, 3)),
  },
  { theme: 11, start: (y) => shift(y, md(6, nthWeekday(y, 6, 0, 3)), 1), end: () => md(7, 6) }, // 4th of July
  { theme: 15, start: () => md(7, 7), end: () => md(7, 31) }, // Baseball season
  { theme: 12, start: () => md(8, 1), end: () => md(8, 24) }, // Back to School
  { theme: 16, start: () => md(8, 25), end: () => md(9, 30) }, // Football season
  { theme: 3, start: () => md(10, 1), end: () => md(10, 31) }, // Halloween
  { theme: 4, start: () => md(11, 1), end: (y) => md(11, nthWeekday(y, 11, 4, 4)) }, // Thanksgiving (4th Thursday of Nov)
  { theme: 2, start: (y) => shift(y, md(11, nthWeekday(y, 11, 4, 4)), 1), end: () => md(12, 11) }, // Black Friday → Cyber week
  { theme: 1, start: () => md(12, 12), end: () => md(12, 26) }, // Christmas
];

const key = ({ month, day }) => month * 100 + day;

function inRange(today, start, end) {
  const t = key(today);
  const s = key(start);
  const e = key(end);
  return s <= e ? t >= s && t <= e : t >= s || t <= e; // second case crosses Dec → Jan
}

// The scheduled theme for a date: { theme, start, end } or null (Normal days).
export function scheduledEntry(today = studioToday()) {
  for (const entry of calendar) {
    const start = entry.start(today.year);
    const end = entry.end(today.year);
    if (inRange(today, start, end)) return { theme: entry.theme, start, end };
  }
  return null;
}

// Every entry with its dates for one year (used by the dev theme bar).
export function scheduleForYear(year) {
  return calendar.map((entry) => ({ theme: entry.theme, start: entry.start(year), end: entry.end(year) }));
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const formatDay = ({ month, day }) => `${monthNames[month - 1]} ${day}`;
