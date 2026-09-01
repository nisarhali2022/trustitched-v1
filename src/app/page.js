import Image from "next/image";
import Link from "next/link";
import { HeroComparisonSlider } from "@/components/hero-comparison-slider";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/site";

const homeImages = {
  heroBefore: {
    src: "/images/home/hero-vector-before.webp",
    alt: "A complete ornamental owl crest constructed as clean vector artwork",
  },
  heroAfter: {
    src: "/images/home/hero-embroidery-after.webp",
    alt: "The matching ornamental owl crest rendered as detailed commercial embroidery on navy fabric",
  },
  embroideryService: {
    src: "/images/home/service-embroidery.webp",
    alt: "Multi-needle embroidery machine stitching a detailed crest in a professional studio",
  },
  vectorService: {
    src: "/images/home/service-vector.webp",
    alt: "Design workspace showing an original fox emblem being rebuilt with precise vector paths",
  },
  embroideryShowcase: {
    src: "/images/home/showcase-embroidery.webp",
    alt: "Nine original embroidery samples demonstrating badges, portraits, monograms, and garment applications",
  },
  vectorShowcase: {
    src: "/images/home/showcase-vector.webp",
    alt: "Nine original vector examples demonstrating badges, mascots, icons, and product graphics",
  },
};

const metrics = [
  ["12+ years", "Hands-on experience"],
  ["25,000+", "Files delivered"],
  ["12–24 hr", "Standard turnaround"],
  ["99.8%", "Approval rate"],
];

const services = [
  {
    eyebrow: "Thread-ready files",
    title: "Embroidery Digitizing",
    description: "Production-minded stitch files prepared around the finished size, fabric, placement, and machine format—not a generic preset.",
    features: ["Caps, polos, jackets, and patches", "Small lettering, appliqué, and 3D puff", "DST, PES, EXP, EMB, and more"],
    href: "/embroidery-digitizing",
    cta: "Explore digitizing",
    image: homeImages.embroideryService,
  },
  {
    eyebrow: "Scalable master artwork",
    title: "Vector Art Conversion",
    description: "Clean, manually redrawn vector artwork that stays sharp for printing, signage, cutting, engraving, packaging, and future edits.",
    features: ["Logo redraws and manual vector tracing", "Screen print, vinyl, and engraving artwork", "AI, EPS, SVG, PDF, CDR, and previews"],
    href: "/vector-art",
    cta: "Explore vector art",
    image: homeImages.vectorService,
  },
];

const pricing = [
  {
    service: "Embroidery digitizing",
    price: "$10",
    description: "A typical starting point for straightforward logos and standard placements.",
    href: "/embroidery-digitizing",
  },
  {
    service: "Vector art conversion",
    price: "$10",
    description: "A typical starting point for clean, low-complexity raster-to-vector redraws.",
    href: "/vector-art",
  },
];

const process = [
  ["01", "Send your artwork", "Share the clearest source available together with the intended size, material, application, deadline, and required format."],
  ["02", "We build the production file", "A specialist manually plans the stitch paths or vector curves and checks the work around its real production use."],
  ["03", "Review, download, and produce", "Receive the requested files and practical previews, with reasonable minor revisions available within the approved brief."],
];

const qualityBenefits = [
  ["Built manually", "Digitizing paths and vector curves are shaped by specialists instead of accepted from one-click automatic tracing."],
  ["Production-aware", "Files are prepared around fabric, placement, scale, printing, cutting, engraving, or the other output you actually need."],
  ["Checked before delivery", "We review small details, color order, trims, path construction, formats, and practical file organization."],
  ["Clear revision support", "Reasonable minor revisions are included when they stay within the original artwork, size, and production brief."],
];

const faqs = [
  ["Which service do I need?", "Choose embroidery digitizing when you need a machine-readable stitch file. Choose vector art when you need scalable editable artwork for printing, cutting, engraving, signage, or design use. Select both or Not sure in the quote form if you would like us to recommend the best path."],
  ["How much does a typical project cost?", "Many straightforward homepage projects start around $10, but this is general guidance rather than a guaranteed minimum. Final pricing depends on artwork complexity, size, source quality, placement, technique, required formats, revisions, and turnaround. The service pages provide more detailed examples."],
  ["How quickly will I receive my files?", "Most standard projects are prepared within 12–24 hours after the artwork, intended use, output format, and deadline are confirmed. Complex or urgent projects may follow a different schedule."],
  ["What artwork can I send?", "You can send JPG, JPEG, PNG, PDF, AI, EPS, SVG, CDR, PSD, TIFF, ZIP, scans, or clear photographs. Send the best source available and include any known sizes, colors, or production requirements."],
  ["Are revisions included?", "Reasonable minor revisions are included when they stay within the confirmed brief. Major changes to the artwork, size, placement, application, or technique may require a revised quote."],
  ["Can I send artwork with the quote form?", "Yes. The form emails your project details and one optional JPG, PNG, PDF, AI, EPS, SVG, CDR, PSD, TIFF, or ZIP file to the studio. Keep the attachment at 3 MB or smaller."],
];

export const metadata = createPageMetadata({
  title: "Embroidery Digitizing & Vector Art",
  description: "Manual embroidery digitizing and vector art conversion prepared for reliable apparel, print, signage, cutting, engraving, and brand production.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="page-hero-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="eyebrow text-teal-light">Manual craft • production-ready files</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              Professional Embroidery Digitizing &amp; Vector Art, Built for Production.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Turn logos, scans, sketches, and rough graphics into dependable embroidery stitch files and clean, scalable vector artwork.
            </p>
            <ul className="mt-7 grid gap-3 text-sm font-semibold text-white/82 sm:grid-cols-2">
              {["Digitized and redrawn manually", "12–24 hour standard turnaround", "Major embroidery and vector formats", "Reasonable minor revisions included"].map((item) => (
                <li className="flex items-center gap-3" key={item}><span className="text-teal-light" aria-hidden="true">✓</span>{item}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-teal" href="#quote-form">Get a free quote <span aria-hidden="true">↓</span></Link>
              <Link className="button button-ghost" href="/portfolio">View our work</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-white/70">
              <span className="flex items-center gap-2"><b className="text-teal-light" aria-hidden="true">✓</b> No credit card required</span>
              <span className="flex items-center gap-2"><b className="text-teal-light" aria-hidden="true">✓</b> Clear price before production</span>
              <span className="flex items-center gap-2"><b className="text-teal-light" aria-hidden="true">✓</b> Direct studio support</span>
            </div>
          </div>

          <HeroComparisonSlider before={homeImages.heroBefore} after={homeImages.heroAfter} />
        </div>
      </section>

      <section className="border-b border-line bg-white" aria-label="Trustitched performance metrics">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {metrics.map(([value, label]) => (
            <div className="border-line px-3 py-8 text-center even:border-l lg:border-l lg:first:border-l-0" key={label}>
              <strong className="block font-display text-3xl text-ink sm:text-4xl">{value}</strong>
              <span className="mt-2 block text-sm text-slate">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <p className="eyebrow text-teal-dark">Typical project pricing</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Straightforward production files often start around $10.</h2>
              <p className="mt-5 text-lg leading-8 text-slate">This is general homepage guidance, not a guaranteed minimum. We review the source and confirm the exact price before work begins.</p>
              <p className="mt-5 leading-7 text-slate">Complexity, finished size, source quality, stitch technique, required formats, revisions, and turnaround can all affect the final quote.</p>
              <Link className="button button-teal mt-8" href="#quote-form">Request exact pricing</Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {pricing.map((item) => (
                <article className="rounded-3xl border border-teal/35 bg-white p-7 shadow-[0_18px_50px_rgba(12,49,61,0.10)]" key={item.service}>
                  <p className="eyebrow text-teal-dark">{item.service}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-slate">Typical projects from</p>
                  <strong className="mt-1 block font-display text-5xl text-teal-dark">{item.price}</strong>
                  <p className="mt-4 leading-7 text-slate">{item.description}</p>
                  <Link className="mt-7 inline-flex items-center gap-2 font-bold text-teal-dark hover:text-ink" href={item.href}>View detailed pricing <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services we provide"
            title="Two specialties, one production-minded studio."
            description="Choose a focused service or send the artwork once and let us help determine which deliverables your production workflow needs."
            align="center"
          />
          <div className="mt-12 space-y-8">
            {services.map((service, index) => (
              <article className="grid overflow-hidden rounded-3xl border border-line bg-canvas lg:grid-cols-2" key={service.title}>
                <div className={`relative min-h-[22rem] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={service.image.src} alt={service.image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="eyebrow text-teal-dark">{service.eyebrow}</p>
                  <h2 className="mt-3 font-display text-4xl leading-tight text-ink">{service.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-slate">{service.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate">
                    {service.features.map((feature) => <li className="flex gap-3" key={feature}><span className="text-teal-dark" aria-hidden="true">✓</span>{feature}</li>)}
                  </ul>
                  <div className="mt-8"><Link className="button button-ink" href={service.href}>{service.cta}</Link></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-teal-dark">How it works</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">From source artwork to production in three clear steps.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">A useful brief helps us prepare the right file efficiently and reduces production guesswork.</p>
            <Link className="button button-ink mt-8" href="#quote-form">Start your project</Link>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {process.map(([number, title, description]) => (
              <li className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]" key={number}>
                <span className="font-display text-3xl text-teal-dark">{number}</span>
                <div><h3 className="text-lg font-bold text-ink">{title}</h3><p className="mt-2 leading-7 text-slate">{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Take a closer look"
              title="Original work across stitches and scalable paths."
              description="Explore different embroidery techniques and vector styles prepared around practical production goals."
            />
            <Link className="inline-flex items-center gap-2 font-bold text-ink hover:text-teal-dark" href="/portfolio">View the portfolio <span aria-hidden="true">→</span></Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-mist shadow-lg">
                <Image src={homeImages.embroideryShowcase.src} alt={homeImages.embroideryShowcase.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <p className="mt-5 eyebrow text-teal-dark">Embroidery showcase</p>
              <h3 className="mt-2 font-display text-3xl text-ink">Texture, sequencing, and detail.</h3>
            </article>
            <article>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-mist shadow-lg">
                <Image src={homeImages.vectorShowcase.src} alt={homeImages.vectorShowcase.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <p className="mt-5 eyebrow text-teal-dark">Vector showcase</p>
              <h3 className="mt-2 font-display text-3xl text-ink">Clean construction at every scale.</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-teal-light">Quality you can verify</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">The value is in how the file is built.</h2>
            <p className="mt-5 text-lg leading-8 text-white/65">Instead of unverified customer claims, here is what every approved production brief is designed to receive.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {qualityBenefits.map(([title, description], index) => (
              <article className="rounded-2xl border border-white/15 bg-white/5 p-6" key={title}>
                <span className="font-display text-3xl text-teal-light">0{index + 1}</span>
                <h3 className="mt-7 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Helpful answers before you request a quote."
            description="If your project has an unusual material, application, source file, or deadline, include it in the request and we will review it directly."
            align="center"
          />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {faqs.map(([question, answer]) => (
              <details className="group" key={question}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-bold text-ink">
                  {question}<span className="text-xl font-normal text-teal-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
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
            <p className="eyebrow text-teal-dark">Ready to start?</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Send the artwork you have. We will help define the file you need.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">Include the intended size, material or application, deadline, and preferred format. Select Not sure yet if you would like a recommendation.</p>
            <div className="mt-8 border-y border-line py-6 text-sm text-slate">
              <p><strong className="text-ink">Prefer to talk?</strong> Call <a className="font-bold text-teal-dark hover:text-ink" href="tel:+17579068220">+1 757-906-8220</a>.</p>
              <p className="mt-3">You can also use the full <Link className="font-bold text-teal-dark hover:text-ink" href="/contact">Contact Us page</Link>.</p>
            </div>
          </div>
          <QuoteForm idPrefix="home" />
        </div>
      </section>
    </>
  );
}
