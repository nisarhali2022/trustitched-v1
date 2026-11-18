# Trustitched redesign: audit, reference analysis and design proposal

Status: **planning phase. Nothing has been built, changed on the live site, or published.**
Date: 2026-11-15

---

## Phase 1: Audit of the current website

### Technology (keep it)
- Next.js 16 (App Router) + React 19 + Tailwind CSS v4, deployed from GitHub `main`.
- All 5 pages are pre-rendered static HTML, so they load fast and are cheap to host.
- Colours are already CSS variables (`--ink`, `--teal`, …) in `src/app/globals.css`. That makes a theme system easy to add, so **no stack change is needed.**
- The quote form sends email through Cloudflare Email from a server action, with server-side validation and a honeypot field.
- SEO is in place: per-page metadata, Open Graph, sitemap, robots, and Organization, Service and FAQ structured data.

### Content to preserve as-is
| Page | Content |
|---|---|
| Home | Hero, stats strip, pricing guidance ("from $10"), two service cards with before/after sliders, 3 steps, showcase, 4 quality points, 6 FAQs, quote form |
| Embroidery Digitizing | Hero, 6 specialties, pricing ($10–15 / $15–25 / quote), process, quality, formats, FAQs, quote form |
| Vector Art | Hero slider, capabilities, pricing, process, formats, FAQs, quote form |
| Portfolio | 12 original samples with an embroidery/vector filter |
| Contact | Phone, email, turnaround, quote form |

### Problems found
**Images**
1. **Home hero alt text is wrong.** It describes "an ornamental owl crest", but the images now show a macaw (they changed in the "hero image update" commits).
2. **The social share card is wrong.** Its alt text describes an owl crest, but the image is the *Quaboag Youth Basketball* crest. The crest sits off-centre on a mostly empty canvas, and the PNG is 708 KB.
3. **Possible permission issue.** The Quaboag crest is a real organisation's logo, used on the home page and in the social card. Please confirm you have permission to show it as client work.
4. The portfolio, showcase and quality images are AI-style "original studio samples". They look polished, but there are **no real client sew-out photos** anywhere. Real stitched photos are the biggest trust upgrade available.
5. There are no images of products being stitched (caps, polos, jackets, patches), no team/studio photos, and no machine-format visuals.

**Information**
6. **Unverified stats.** "25,000+ files delivered", "99.8% approval rate" and "12+ years" can't be verified. The home page also says it avoids unverified claims. These need your confirmation.
7. There are no testimonials or reviews. That's correct, since none were given to me, but it's a gap worth filling with real reviews.
8. Pinterest is hidden until a real profile URL exists.
9. There is no About page or business address/hours. Add them only if you want them and can provide the details.

**Presentation**
10. Fonts are system fonts (Georgia + Segoe UI), so the site looks different on Mac and Android and doesn't feel premium.
11. Section backgrounds barely change (`--canvas` and `--mist` are the same colour), so long pages feel flat.
12. There are no scroll animations, no image lightbox in the portfolio, and no sticky quote button on mobile.
13. There is no place for a promotional banner, seasonal section or offer. This is the main gap your brief targets.

---

### Assets from the reference (added 2026-11-15)
- **Real sew-out photos (unbranded only):** 8 photos in `public/images/sew-outs/`, listed in `src/data/sew-out-photos.js`, now shown in a "Real sew-outs" section on the Portfolio page. They're 560 × 560 px, so card size only, not full-width or hero.
- **Seasonal designs:** 4 Thanksgiving designs in `public/images/seasonal/`, used by theme 4 (Thanksgiving).
- **Not used, by decision:** the Friendship Fire and Hose Co. patch pair, and all photos with university, Disney or brand logos (OU, UF, Alabama A, Louisiana T, Smitty, Bohot Cattle Co., CCP). The USA 250 cap photo is only 255 px, too small to use.
- **Portfolio copy to revisit in the redesign:** the Portfolio hero and notes still talk about "replaceable studio samples" and a "3:2 replaceable ratio". These read like internal notes and don't fit now that real work is shown.

## Phase 2: Reference analysis

Reference: *"Trustitched – Christmas + Black Friday Concept"* (your shared artifact `5Mtrg2uUWcaxHXt3dQRnJu`).

### What it does well (worth adopting)
- **Announcement ticker** above the nav for the current offer.
- **Dark, rich hero** with a layered scene (night sky, aurora glow, flying sleigh, snowy hills) and a gold shimmer on the key headline word.
- **Offer card** beside the hero with a dashed "stitch" border and a countdown.
- **Service marquee**: a scrolling strip of service names.
- **Stitch motifs**: dashed separators, hoop-ring image frames and stitched textures. These are on-brand for embroidery and worth keeping all year.
- **Card polish**: image-top service cards, a hover lift, and a spotlight that follows the cursor.
- **Seasonal collection section** (a Thanksgiving designs strip) that can be switched on or off.
- **"What we stitch on"** product categories (caps, hoodies, towels, beanies, home decor).
- **Portfolio filter + lightbox**, a **sticky mobile quote bar**, a scroll progress bar and a back-to-top button.
- Respects `prefers-reduced-motion`.

### What should NOT be copied
| Reference element | Problem |
|---|---|
| 30% off, code **XMAS30**, "Offer ends Dec 1" | Not on the current site. Use only if you confirm the offer is real. |
| Monthly plans $99 / $135 / $250 / $500 | Not on the current site. Needs your approval. |
| "Caps & left chest **from $8**" | Conflicts with the current "from $10". |
| **DTF Printing** service | Not offered on the current site. |
| 3D puff / appliqué / patch as separate services | The current site lists these as specialties inside embroidery digitizing. That works fine and can stay. |
| 5-star testimonials with "Client name" placeholders | Invented reviews. Not allowed without real ones. |
| "Worldwide clients served", "Sew-out tested quality" | Unverified claims. |
| Vector Art reduced to 1 card of 6 | The current site treats vector art as an equal second specialty. That should stay. |
| Thanksgiving + Black Friday + Christmas all at once | Mixing three events dilutes each one. The theme system shows one event at a time. |
| Background sound button, two full-screen canvases (snow and lights), confetti | Drains battery on phones and hurts performance and accessibility. Keep effects light and optional. |
| One 2 MB HTML page with 64 inline images and fake page switching | Bad for speed and SEO. Real Next.js pages and optimised images instead. |
| Text logo ("Trusti**tched**") | Keep your real logo files. |

---

## Phase 3: Design proposal

**Direction: "Premium studio, stitched details."** The site stays dark-and-light editorial in your brand colours all year. Each event theme repaints it through tokens and adds optional seasonal layers.

- **Typography:** a characterful display serif for headings (e.g. *Fraunces* or *Playfair Display*) and a clean sans for body text (e.g. *Inter*), loaded with `next/font` so they're fast and self-hosted.
- **Regular theme palette:** keep your ink (#0C313D) and teal family, add a warm thread-gold accent, and make section backgrounds clearly different (ink / white / soft mist).
- **Signature motif:** stitched dashed dividers, hoop-framed thumbnails and a subtle twill texture. These work in every theme.
- **Hero:** the current headline and copy unchanged, the before/after slider kept as the hero visual, plus a theme "scene layer" behind it (empty for Regular, snow and lights for Christmas, and so on).
- **Sections:** the same 12 homepage sections in your brief, in the current order. Changes are visual only: image-top service cards, pricing cards with a featured state, numbered steps with stitched connectors, a portfolio grid with a lightbox, an FAQ accordion, and a two-column quote form.
- **Motion:** gentle reveal-on-scroll, hover lift and button shine. All of it is turned off with reduced motion.
- **Mobile:** a sticky "Get free quote" bar, a full-height menu and 16px gutters.

## Phase 4: Event theme system

### How it works
```
src/themes/
  regular.js        ← default look
  christmas.js
  black-friday.js
  thanksgiving.js
  halloween.js
  valentines.js
  new-year.js
  index.js          ← ACTIVE_THEME number picks the live theme
```
Each theme is one plain config object:
```js
export const christmas = {
  id: "christmas",
  label: "Christmas",
  colors: { bg: "#06241a", surface: "#0b3a2a", accent: "#d4af6a", cta: "#e0213f", ctaText: "#fff" },
  hero:   { eyebrow: "Holiday season", image: null /* keep default slider */ },
  banner: { enabled: true, text: "Holiday orders: send artwork early", link: "/contact", code: null, endsAt: null },
  effects:{ snow: true, lights: true },
  sections: { seasonalCollection: true },
  ctaStyle: "glow",
};
```
- **Colours, CTA style and backgrounds:** the theme writes CSS variables onto `<html data-theme="christmas">`. Every component uses those variables, so the page structure never changes.
- **Hero banner and images:** optional overrides per theme. Leave a field empty and the default content is used.
- **Promo banner and seasonal sections:** switched on or off per theme. Offer text, codes and end dates only appear when you fill them in, so nothing is invented.
- **Effects** (snow, lights, sleigh) load only when a theme turns them on, and never with reduced motion.
- **Switching (decided):** themes are numbered in `src/themes/index.js` (0 = Normal days, 1 = Christmas, 2 = Black Friday, 3 = Halloween, 4 = Thanksgiving, 5 = New Year, 6 = Valentine’s Day, 7 = Spring). `ACTIVE_THEME = "auto"` follows the yearly calendar in `src/themes/calendar.js` (17 themes incl. sports seasons, each about 15+ days, US Eastern time, pages re-rendered hourly). Setting a number forces that theme. An unknown number falls back to Normal days.
- **Preview (decided):** preview locally by changing the number and running `npm run dev`. No live preview link is needed.
- **Dev theme bar (decided):** while developing, a small floating bar in the corner shows numbered buttons (`0 Regular · 1 Christmas · 2 Black Friday · …`). Clicking a number repaints the whole page with that theme instantly, without editing `ACTIVE_THEME`. Your choice is remembered while you browse between pages, and a "Reset" button goes back to the `ACTIVE_THEME` value.
  - It lives in its own component (`src/components/dev-theme-bar.js`) and only renders when `process.env.NODE_ENV === "development"`.
  - Production builds (`npm run build`, the live site) skip it **automatically**. Visitors never see it, it adds nothing to the live page, and no code has to be removed before going live.
  - Optional cleanup later: delete the one component file and its single line in `layout.js`.
  - The bar is for looking only. The live theme is still whatever number `ACTIVE_THEME` holds when you push.

### Managing themes: options
| Option | How you change a theme | Cost / effort |
|---|---|---|
| **A. Config files (recommended to start)** | Edit one theme file and upload images (or ask me), commit, and it deploys | Free; fastest to build; safest |
| B. Headless CMS (e.g. Sanity, Decap) | Web dashboard with forms and image upload | Free tier available; +1 stage of work |
| C. Custom admin page | Your own password-protected panel | Most work; needs a database |

Start with A. The theme files are designed so B can be added later without redesigning anything.

## Phase 5: Visual prototype (next, after your approval)
One interactive preview page of the redesigned homepage with a theme switcher (Regular, Christmas, Black Friday, Halloween, Valentine's, New Year). It will use your real content and images, with offers shown as clearly marked placeholders.

## Phase 6: Development plan (estimate)
| Stage | Work | Rough effort |
|---|---|---|
| 1 | Design tokens, fonts, theme provider, Regular theme matching today's site | 1–2 days |
| 2 | Rebuild homepage sections as reusable components (content unchanged) | 2–3 days |
| 3 | Promo banner, seasonal section, effects layer, numbered theme switch | **Done** (8 themes) |
| 4 | Dev-only theme bar with numbered buttons (hidden automatically in production) | **Done** |
| 5 | Apply the components to the other 4 pages | 2 days |
| 6 | Event themes (colours + assets) and image fixes from the audit | 1–2 days |
| 7 | Performance, accessibility and SEO checks, then deploy to a preview URL for your sign-off | 1 day |

---

## Decisions needed from you
1. **Offers and pricing:** are the 30% / XMAS30 offer, the monthly plans, the "$8" price and DTF printing real? If not, they stay out.
2. **Stats:** confirm or replace "12+ years", "25,000+ files" and "99.8% approval".
3. **Quaboag crest:** do you have permission to show it?
4. **Regular look (decided):** Regular theme (0) follows the current site theme: same light ink/teal colours, with only the polish described in Phase 3.
5. **Theme management:** start with option A (config files), or do you need a dashboard (B/C) from day one?
6. **Next step:** approve moving to Phase 5, the visual prototype.
