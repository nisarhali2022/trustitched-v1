import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata, createServiceStructuredData } from "@/lib/site";

const vectorImages = {
  hero: {
    src: "/images/vector/hero-workspace.png",
    alt: "Design workspace showing an original fox emblem being rebuilt with precise vector paths",
  },
  comparison: {
    src: "/images/vector/raster-vector-comparison.png",
    alt: "The same original hummingbird emblem shown as a pixelated raster image and a clean vector redraw",
  },
  applications: {
    src: "/images/vector/production-mockups.png",
    alt: "An original fox emblem applied consistently to apparel, stickers, signage, packaging, and an engraved tag",
  },
  showcase: {
    src: "/images/vector/portfolio-mosaic.png",
    alt: "Nine original vector artwork examples including badges, mascots, icons, and product graphics",
  },
};

const metrics = [
  ["12+ years", "Hands-on experience"],
  ["85,000+", "Files delivered"],
  ["12–24 hr", "Standard turnaround"],
  ["99.8%", "Approval rate"],
];

const capabilities = [
  ["01", "Logo redraws", "Rebuild rough, pixelated, or undersized logos with controlled curves, balanced shapes, and accurate proportions."],
  ["02", "Manual vector tracing", "A specialist redraws the artwork path by path instead of relying on an automatic image trace."],
  ["03", "Screen-print artwork", "Clean, production-conscious graphics prepared for apparel printing, spot colors, and practical separations."],
  ["04", "Line art & silhouettes", "Crisp shapes for engraving, vinyl cutting, signage, decals, stencils, and specialty applications."],
  ["05", "Color & shape cleanup", "Refined edges, consistent colors, corrected symmetry, and organized artwork that is easier to reuse."],
  ["06", "Print-ready exports", "Useful vector and preview packages prepared for vendors, production teams, and common design software."],
];

const applications = [
  "Apparel and screen printing",
  "Signs, banners, and large-format graphics",
  "Vinyl cutting, decals, and stickers",
  "Laser engraving and CNC workflows",
  "Packaging and product labels",
  "Brand libraries and editable master artwork",
];

const process = [
  ["01", "Send the best artwork you have", "Share a JPG, PNG, PDF, scan, sketch, or existing design file and tell us how the finished artwork will be used."],
  ["02", "We redraw it manually", "A specialist rebuilds the shapes, curves, colors, and details while checking the artwork at both small and large sizes."],
  ["03", "Receive an organized file package", "We review the paths and export the requested vector formats together with convenient PNG or JPG previews."],
];

const prices = [
  {
    label: "Simple redraw",
    price: "From $10",
    description: "Clean marks, basic icons, simple lettering, and low-detail artwork.",
    features: ["One straightforward graphic", "Limited colors and shapes", "Standard vector deliverables"],
  },
  {
    label: "Detailed redraw",
    price: "From $20",
    description: "Layered logos, mascots, illustrations, and artwork needing careful cleanup.",
    features: ["More paths and fine details", "Color and proportion cleanup", "Organized production files"],
    featured: true,
  },
  {
    label: "Complex illustration",
    price: "Get a quote",
    description: "Highly detailed, damaged, hand-drawn, or production-specific artwork.",
    features: ["Advanced manual rebuilding", "Application-specific preparation", "Scope confirmed before work"],
  },
];

const qualityBenefits = [
  ["Manual path construction", "Curves and corners are intentionally built and refined instead of accepted from a one-click trace."],
  ["Practical file organization", "Artwork is grouped and named sensibly so colors, shapes, and production elements are easier to manage."],
  ["Scale and edge review", "We inspect the result at multiple sizes to catch rough curves, uneven spacing, and unnecessary points."],
  ["Application-aware delivery", "The final package is prepared around printing, cutting, engraving, signage, packaging, or general design use."],
];

const formats = ["AI", "EPS", "SVG", "PDF", "CDR", "PNG preview", "JPG preview"];

const faqs = [
  ["What is vector art?", "Vector art is built from mathematical paths, curves, and shapes rather than a fixed grid of pixels. It can be enlarged or reduced without becoming blurry, making it practical for production and editing."],
  ["What is raster-to-vector conversion?", "Raster-to-vector conversion is the process of rebuilding pixel-based artwork such as a JPG or PNG as clean, editable vector shapes. Good conversion involves design judgment, not simply pressing an automatic trace button."],
  ["What files can I send?", "You can send JPG, JPEG, PNG, PDF, TIFF, PSD, AI, EPS, SVG, CDR, a scan, or a clear photograph. Send the highest-quality source available, even if it is not a vector file."],
  ["How long does vector conversion take?", "Most standard projects are completed within 12–24 hours after the artwork, intended use, deliverables, and deadline are confirmed. Complex illustrations or urgent schedules may require a different timeframe."],
  ["How much does vector artwork cost?", "Simple redraws typically start at $10, detailed redraws start at $20, and complex illustrations are quoted individually. Final pricing depends on source quality, detail, required formats, revisions, and turnaround."],
  ["Which vector formats can you provide?", "Common deliveries include AI, EPS, SVG, PDF, and CDR, along with PNG or JPG previews. Tell us which software or vendor will use the file if you are unsure what to request."],
  ["Can you match my existing colors?", "Yes. Provide Pantone, CMYK, RGB, or HEX references when exact values matter. We can also sample colors from the source, though a screenshot or compressed image may not represent the original color perfectly."],
  ["Can you prepare artwork for screen printing, vinyl, or engraving?", "Yes. Tell us the intended production method so we can account for minimum detail, closed shapes, color count, line weight, and other practical requirements."],
  ["Is vector conversion the same as embroidery digitizing?", "No. Vector conversion creates scalable design artwork for printing, cutting, and editing. Embroidery digitizing creates stitch instructions for an embroidery machine. Some projects need both services."],
];

const vectorDescription = "Manual raster-to-vector conversion for logos, apparel, signage, engraving, vinyl, packaging, and clean print-ready production artwork.";

export const metadata = createPageMetadata({
  title: "Professional Vector Art Conversion Services",
  description: vectorDescription,
  path: "/vector-art",
});

const vectorStructuredData = createServiceStructuredData({
  name: "Professional Vector Art Conversion",
  description: vectorDescription,
  path: "/vector-art",
});

export default function VectorArtPage() {
  return (
    <>
      <StructuredData data={vectorStructuredData} />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="page-hero-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/55" aria-label="Breadcrumb">
            <Link className="hover:text-white" href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gold-light">Vector Art</span>
          </nav>

          <div className="mt-9 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow text-gold-light">Manual redraws • clean vector paths</p>
              <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
                Professional raster-to-vector conversion for real production.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Turn pixelated logos, scans, sketches, and rough graphics into crisp, editable vector artwork that stays sharp at every size.
              </p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-white/82 sm:grid-cols-2">
                {["Redrawn manually", "Clean editable paths", "Major vector formats", "Minor revisions included"].map((item) => (
                  <li className="flex items-center gap-3" key={item}><span className="text-gold-light" aria-hidden="true">✓</span>{item}</li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="button button-gold" href="#quote-form">Get a free quote <span aria-hidden="true">↓</span></Link>
                <Link className="button button-ghost" href="/portfolio">View vector work</Link>
              </div>
            </div>

            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl sm:min-h-[28rem]">
              <Image
                src={vectorImages.hero.src}
                alt={vectorImages.hero.alt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2 rounded-xl border border-white/15 bg-ink/88 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-bold">Rough source in. Scalable artwork out.</span>
                <span className="text-xs text-gold-light">AI • EPS • SVG • PDF • CDR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {metrics.map(([value, label]) => (
            <div className="border-line px-3 py-8 text-center even:border-l lg:border-l lg:first:border-l-0" key={label}>
              <strong className="block font-display text-3xl text-ink sm:text-4xl">{value}</strong>
              <span className="mt-2 block text-sm text-slate">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-line bg-white shadow-xl">
            <Image
              src={vectorImages.comparison.src}
              alt={vectorImages.comparison.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">Raster source</span>
            <span className="absolute right-4 top-4 rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink">Vector redraw</span>
          </div>
          <div>
            <p className="eyebrow text-gold-dark">Vector art explained</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Sharp at business-card size. Sharp on a storefront.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Raster images are made from pixels, so enlarging a small file exposes blur and jagged edges. Vector artwork uses editable paths that remain smooth at virtually any output size.
            </p>
            <p className="mt-5 leading-8 text-slate">
              We rebuild important shapes and details manually, creating a clean master that can support printing, cutting, engraving, signage, packaging, and future design updates.
            </p>
            <Link className="button button-ink mt-8" href="#quote-form">Convert my artwork</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vector capabilities"
            title="Clean curves, organized artwork, practical files."
            description="Every redraw is shaped around the source artwork and the way the finished file will be produced or reused."
            align="center"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([number, title, description]) => (
              <article className="bg-canvas p-7 sm:p-8" key={title}>
                <span className="font-display text-2xl text-gold-dark">{number}</span>
                <h2 className="mt-8 text-lg font-bold text-ink">{title}</h2>
                <p className="mt-3 leading-7 text-slate">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-gold-dark">Built for more than one use</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">One clean master file, many production possibilities.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Tell us where the artwork is going. That context helps us preserve the right detail, line weight, colors, and construction for the job.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {applications.map((item) => (
                <li className="flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink" key={item}>
                  <span className="text-gold-dark" aria-hidden="true">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-white shadow-xl">
            <Image
              src={vectorImages.applications.src}
              alt={vectorImages.applications.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Original vector showcase"
            title="Different styles, the same commitment to clean construction."
            description="These original concepts demonstrate badges, mascots, illustrations, product graphics, and simplified production artwork."
            align="center"
          />
          <div className="relative mt-12 aspect-square overflow-hidden rounded-3xl border border-line bg-mist shadow-xl">
            <Image
              src={vectorImages.showcase.src}
              alt={vectorImages.showcase.alt}
              fill
              sizes="(max-width: 1152px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <Link className="button button-ink" href="/portfolio">Explore the portfolio</Link>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-gold-dark">How it works</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">From rough source to clean vector in three steps.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">A clear intended use helps us prepare the most practical artwork package from the start.</p>
            <Link className="button button-ink mt-8" href="#quote-form">Start your quote</Link>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {process.map(([number, title, description]) => (
              <li className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]" key={number}>
                <span className="font-display text-3xl text-gold-dark">{number}</span>
                <div><h3 className="text-lg font-bold text-ink">{title}</h3><p className="mt-2 leading-7 text-slate">{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sample pricing"
            title="Straightforward starting points for common redraws."
            description="Final pricing depends on artwork complexity, source quality, required formats, revisions, intended application, and turnaround. We confirm the price before work begins."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {prices.map((price) => (
              <article className={`relative rounded-3xl border bg-white p-8 ${price.featured ? "border-gold shadow-xl" : "border-line"}`} key={price.label}>
                {price.featured ? <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">Most common</span> : null}
                <p className="eyebrow text-gold-dark">{price.label}</p>
                <h2 className="mt-4 font-display text-4xl text-ink">{price.price}</h2>
                <p className="mt-4 min-h-14 leading-7 text-slate">{price.description}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm text-slate">
                  {price.features.map((feature) => <li className="flex gap-3" key={feature}><span className="text-gold-dark" aria-hidden="true">✓</span>{feature}</li>)}
                </ul>
                <Link className="button button-ink mt-8 w-full" href="#quote-form">Get my quote</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why choose Trustitched"
            title="Quality is visible in the paths, not just the preview."
            description="A clean-looking JPG is not enough. The underlying vector construction should also be practical to edit, export, and produce."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {qualityBenefits.map(([title, description]) => (
              <article className="rounded-2xl border border-line bg-canvas p-6" key={title}>
                <span className="block h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
                <h3 className="mt-6 font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-light">Testimonial layout preview</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Reserved for verified customer feedback.</h2>
            <p className="mt-5 text-lg leading-8 text-white/65">These cards intentionally contain no invented customers, ratings, or claims. Replace them with approved reviews before launch.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Apparel decorator", "Sign and print studio", "Growing product brand"].map((customerType) => (
              <article className="rounded-2xl border border-white/15 bg-white/5 p-6" key={customerType}>
                <span className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold-light">Placeholder — do not publish</span>
                <h3 className="mt-6 font-display text-2xl">{customerType}</h3>
                <p className="mt-4 leading-7 text-white/60">Replace this area with a verified quote, customer-approved attribution, and relevant project context.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="eyebrow text-center text-gold-dark">Common delivery formats</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {formats.map((format) => <span className="rounded-full border border-line bg-canvas px-5 py-2 text-sm font-bold text-ink" key={format}>{format}</span>)}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate">Tell us which software, vendor, or production process will use the artwork. We will recommend the most practical deliverables.</p>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-gold-dark">Built for real production</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink">A vector redraw should suit the job—not just look tidy on screen.</h2>
            <p className="mt-5 leading-8 text-slate">A screen-print graphic, engraved mark, vinyl-cut sign, and packaging illustration can require different decisions about line weight, small gaps, color count, overlapping shapes, and fine detail.</p>
            <p className="mt-5 leading-8 text-slate">We review your intended application before rebuilding the artwork, then check curves, corners, alignment, color construction, and file organization before exporting the final package.</p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
            <p className="eyebrow text-gold-dark">What to send</p>
            <h3 className="mt-3 font-display text-3xl text-ink">A useful brief keeps the redraw focused.</h3>
            <ul className="mt-7 divide-y divide-line text-sm leading-6 text-slate">
              {["The clearest source artwork available", "Where and how the artwork will be used", "Required finished size or scale", "Known brand or production colors", "Preferred software or output formats", "Deadline and any vendor requirements"].map((item) => (
                <li className="flex items-center gap-3 py-3" key={item}><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-canvas text-gold-dark" aria-hidden="true">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Helpful answers before you order."
            description="Include unusual source files, applications, or deadlines in your quote request and we will review them directly."
            align="center"
          />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {faqs.map(([question, answer]) => (
              <details className="group" key={question}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-bold text-ink">
                  {question}<span className="text-xl font-normal text-gold-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pb-6 pr-12 leading-7 text-slate">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-mist py-20 sm:py-24" id="quote-form">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-gold-dark">Ready to start?</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Send your artwork for a clear, no-pressure quote.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">Include the intended use, preferred formats, deadline, and the best source file available. We will review the artwork and confirm the price before work begins.</p>
            <div className="mt-8 border-y border-line py-6 text-sm text-slate">
              <p><strong className="text-ink">Prefer to talk?</strong> Call <a className="font-bold text-gold-dark hover:text-ink" href="tel:+1800123456">+1 (800) 123456</a>.</p>
              <p className="mt-3">You can also use the full <Link className="font-bold text-gold-dark hover:text-ink" href="/contact">Contact Us page</Link>.</p>
            </div>
          </div>
          <QuoteForm idPrefix="vector" defaultService="vector" />
        </div>
      </section>
    </>
  );
}
