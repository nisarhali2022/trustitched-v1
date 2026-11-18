# Trustitched project details

Last updated: August 18, 2026

## Project overview

Trustitched is a responsive marketing website for professional embroidery digitizing and vector art services. It uses the Next.js App Router, Tailwind CSS, optimized local images, shared page components, and static public routes.

Production domain: `https://trustitched.com`

The website includes a server-side quote form connected to Cloudflare Email Service. It does not contain a database, authentication, or payments.

## Technology

| Item | Version or implementation |
| --- | --- |
| Next.js | 16.2.12, App Router |
| React | 19.2.4 |
| Tailwind CSS | 4.x |
| Analytics integration | `@next/third-parties` 16.2.12 |
| Quote delivery | Next.js Server Action and Cloudflare Email Service REST API |
| Source language | JavaScript and JSX |
| Body typography | Segoe UI with Arial and Helvetica fallbacks |
| Display typography | Georgia with Times New Roman fallback |
| Image delivery | Local assets rendered through `next/image` |

## Public routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage, service overview, pricing guidance, comparison slider, FAQs, and quote form |
| `/embroidery-digitizing` | Detailed embroidery services, gallery, pricing, formats, FAQs, and quote form |
| `/vector-art` | Detailed vector conversion services, applications, gallery, pricing, formats, FAQs, and quote form |
| `/portfolio` | Filterable embroidery and vector studio-sample gallery |
| `/contact` | Studio details and shared quote form |
| `/robots.txt` | Search-engine crawling directives |
| `/sitemap.xml` | Sitemap for the five primary public pages |

All page routes are statically rendered. Client-side interaction is limited to the responsive navigation, portfolio filters, homepage comparison slider, and quote-form submission feedback.

## Main project structure

```text
src/
  app/
    page.js                         Homepage
    embroidery-digitizing/page.js  Embroidery service page
    vector-art/page.js              Vector service page
    portfolio/page.js               Portfolio page
    contact/page.js                 Contact page
    layout.js                       Global layout and metadata
    actions.js                      Quote-form validation and email delivery
    globals.css                     Theme and shared styles
    robots.js                       robots.txt generator
    sitemap.js                      sitemap.xml generator
  components/
    hero-comparison-slider.js       Homepage before/after slider
    portfolio-gallery.js            Portfolio filters and cards
    quote-form.js                   Reusable connected quote form
    site-header.js                  Shared responsive navigation
    site-footer.js                  Shared footer
    social-links.js                 Central social buttons and URLs
    structured-data.js              JSON-LD output
  data/
    portfolio-projects.js           Replaceable portfolio metadata
  lib/
    site.js                         Site URL, metadata, routes, and schemas
public/
  images/                            All website image assets
```

## Brand and theme

The active theme follows the approved Trustitched logo.

| Token | Value | Main use |
| --- | --- | --- |
| Brand navy | `#0C313D` | Main text, dark sections, footer, dark buttons |
| Brand teal | `#2AA0A2` | Brand accents |
| Dark teal | `#176F73` | Accessible teal text on light backgrounds |
| Light teal | `#72D4D3` | Accents on navy backgrounds |
| CTA teal | `#32A9AA` | Primary action buttons |
| Canvas and mist | `#EDF5F3` | Header and page backgrounds |
| White | `#FFFFFF` | Cards, form panels, and contrast surfaces |

Theme tokens and shared button, form, focus, and layout styles are defined in `src/app/globals.css`.

## Logo and browser icons

Active brand files:

- `public/images/brand/trustitched-logo.png` - complete logo used in the header and footer.
- `public/images/brand/trustitched-icon.png` - standalone needle-and-thread symbol.
- `src/app/favicon.ico` - browser favicon.
- `src/app/icon.png` - application icon.
- `src/app/apple-icon.png` - Apple touch icon.

The three `trustitched-logo-sample-*` files are retained as unused design samples.

## Homepage comparison sliders

The homepage hero compares two aligned 4:3 images:

- `public/images/home/hero-vector-before.webp`
- `public/images/home/hero-embroidery-after.webp`

The Embroidery Digitizing service card currently shows a single photo, `public/images/portfolio/embroidery-heritage-cap.webp`.
To bring back a slider there, add two aligned 891 x 762 images (vector + embroidery) and set `comparison` instead of `image` on that card in `src/app/page.js`.

The Vector Art Conversion service card compares two aligned 891 x 762 images:

- `public/images/home/service-vector-before.webp`
- `public/images/home/service-vector-after.webp`

All three sliders begin at 50 percent and use native range controls. They support mouse dragging, touch, arrow keys, Home, and End. The image paths and alt text are centralized in the `homeImages` object near the top of `src/app/page.js`.

To replace slider artwork without editing code, overwrite its before-and-after pair using the same filenames. Each pair must use the same canvas size, aspect ratio, and subject position for a clean comparison. Use approximately 4:3 for the hero pair and 891:762 for the service-card pair. The previous `hero-dual-service.png` remains available but is unused.

## Image replacement

All runtime image references point to files inside `public/images/`; no Downloads or temporary-folder paths are used.

| Folder | Contents |
| --- | --- |
| `public/images/home/` | Homepage slider, service, and showcase images |
| `public/images/embroidery/` | Embroidery hero, gallery mosaic, and cap detail |
| `public/images/vector/` | Vector hero, comparison, gallery, and application mockups |
| `public/images/portfolio/` | Twelve gallery projects and two portfolio quality images |
| `public/images/brand/` | Approved logo, icon, and unused logo samples |
| `public/images/social/` | Shared 1200 x 630 social-sharing image |

The easiest replacement method is to overwrite an existing file while preserving its filename and approximate aspect ratio. PNG, JPG, and WebP replacements are supported. If the filename or format changes, update the corresponding page image configuration.

Portfolio project titles, categories, techniques, image paths, and alt text are centralized in `src/data/portfolio-projects.js`. Preserve an existing filename for a direct replacement, or update one project entry when using a new filename.

See `public/images/README.md` for the shorter image-only replacement guide.

## Quote form

`src/components/quote-form.js` is shared by Home, Contact, Embroidery Digitizing, and Vector Art. Unique `idPrefix` values prevent duplicate field IDs, and service pages can preselect their relevant service.

Current fields:

- Name
- Email
- Phone
- Service type
- Project details
- Optional artwork file

The form submits through `src/app/actions.js`, requires a phone number, validates every field on the server, uses a hidden honeypot field for basic spam filtering, and sends the request through Cloudflare Email Service. The visitor's address is assigned as the email reply-to address. Optional artwork is attached to the studio notification and must be 3 MB or smaller. Supported extensions are JPG, PNG, PDF, AI, EPS, SVG, CDR, PSD, TIFF, and ZIP.

The following server-only environment variables are required locally and in the Vercel Production environment:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_EMAIL_API_TOKEN`
- `CONTACT_EMAIL_FROM`
- `CONTACT_EMAIL_TO`

`.env.example` documents the required variable names without containing secrets. The Cloudflare token must have Email Sending permission, and the sender domain must be available in Cloudflare Email Service.

## Social media links

Facebook, Instagram, Pinterest, and WhatsApp buttons appear in the desktop header, mobile navigation, and footer. Their URLs and brand colors are centralized in `src/components/social-links.js`.

The current URLs point to the public platform homepages and are temporary:

- Facebook: `https://www.facebook.com/profile.php?id=61592558164198`
- Instagram: `https://www.instagram.com/trustitched/reels/?hl=en`
- `https://www.pinterest.com/`

Replace these three values with verified Trustitched profile URLs before launch. The temporary URLs are intentionally excluded from Organization structured data.

WhatsApp opens a direct conversation with the studio through `https://wa.me/17579068220`. In addition to the shared social rows, a green circular WhatsApp icon stays fixed at the bottom-right on mobile and desktop while visitors scroll. WhatsApp remains excluded from Organization structured data.

## SEO and structured data

The site includes:

- A canonical production URL of `https://trustitched.com`.
- Unique page titles and descriptions.
- Open Graph and Twitter card metadata.
- A replaceable 1200 x 630 social preview image.
- WebSite and Organization JSON-LD on the global layout.
- Service JSON-LD on the two service pages.
- Generated `robots.txt` and `sitemap.xml` endpoints.
- Semantic headings, descriptive image alt text, a skip link, visible focus states, and active-navigation `aria-current` attributes.

Global metadata, sitemap routes, the logo reference, and structured-data helpers are centralized in `src/lib/site.js`.

The studio phone number is temporary and is not included in structured data.

## Google configuration

The application reads these server-side environment variables:

```dotenv
GOOGLE_SITE_VERIFICATION=your-google-verification-token
GOOGLE_ANALYTICS_ID=your-ga4-measurement-id
```

Store local values in `.env.local`. That file is ignored by Git and must not be committed. Configure the same variables separately in the Vercel Production environment.

Behavior:

- Search Console verification metadata is emitted only when `GOOGLE_SITE_VERIFICATION` exists.
- Google Analytics is loaded only in a production build and only when `GOOGLE_ANALYTICS_ID` exists.
- No manual pageview tracking, Google Tag Manager, custom events, or consent banner is included.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL printed by Next.js. It normally uses `http://localhost:3000`; if that port is already occupied, Next.js may select another port. Only one development server should run for this project directory.

## Production checks

Run these commands before deployment:

```bash
npm run lint
git diff --check
npm run build
```

Run the compiled application locally when needed:

```bash
npm run start
```

Also verify the five page routes at desktop, tablet, and mobile widths; test navigation, FAQs, portfolio filters, the homepage comparison slider, quote-form labels, social links, and browser-console output.

## Before-launch checklist

- Add the four contact-form environment variables to Vercel Production and complete one live delivery test.
- Replace the temporary phone number if necessary.
- Replace the temporary social-platform homepage URLs with verified profiles.
- Replace generated portfolio studio samples with approved client work when available.
- Confirm all pricing, turnaround, metrics, and service statements.
- Configure Google environment variables in the production host.
- Verify Search Console ownership and GA4 Realtime reporting after deployment.
- Confirm the canonical domain and HTTPS redirects.
- Run lint, production build, responsive checks, keyboard checks, and a broken-link review.
