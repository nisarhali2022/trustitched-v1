import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata, createServiceStructuredData } from "@/lib/site";

const embroideryImages = {
  hero: {
    src: "/images/embroidery/hero-studio.webp",
    alt: "Multi-needle embroidery machine stitching a detailed crest in a professional studio",
  },
  showcase: {
    src: "/images/embroidery/gallery-mosaic.webp",
    alt: "Nine original embroidery samples including patches, a cap design, monogram, animal portrait, and club emblems",
  },
  quality: {
    src: "/images/embroidery/cap-detail.webp",
    alt: "Close-up of a navy cap with a crisp gold and ivory embroidered T monogram",
  },
};

const metrics = [
  ["12+ years", "Hands-on experience"],
  ["85,000+", "Files delivered"],
  ["12–24 hr", "Standard turnaround"],
  ["99.8%", "Approval rate"],
];

const services = [
  ["01", "Left chest & polos", "Balanced density, crisp lettering, and efficient paths for uniforms and branded apparel."],
  ["02", "Caps & headwear", "Center-out sequencing and cap-aware underlay for clean registration on structured panels."],
  ["03", "Jacket backs", "Smooth coverage, thoughtful stitch direction, and optimized color changes for large artwork."],
  ["04", "Patches & appliqué", "Clean placement lines, secure borders, and reliable edge coverage for specialty pieces."],
  ["05", "Small lettering", "Careful column widths, spacing, and compensation to preserve readability at compact sizes."],
  ["06", "3D puff", "Purpose-built support stitches and sequencing for bold, dimensional embroidery."],
];

const prices = [
  {
    label: "Small designs",
    price: "$10–25",
    description: "Simple left-chest marks, names, and compact artwork.",
    features: ["Typically up to 4 inches", "Simple to moderate detail", "Standard placements"],
  },
  {
    label: "Medium designs",
    price: "$25–50",
    description: "Detailed logos, cap designs, and medium jacket artwork.",
    features: ["Typically 4–6 inches", "More colors and details", "Complex stitch direction"],
    featured: true,
  },
  {
    label: "Large designs",
    price: "Get a quote",
    description: "Jacket backs, intricate illustrations, and specialty techniques.",
    features: ["Typically 6 inches or larger", "Puff, appliqué, or complex fills", "Production-specific planning"],
  },
];

const process = [
  ["01", "Send your artwork", "Share a JPG, PNG, PDF, AI, EPS, SVG, or CDR file with the finished size, fabric, and placement."],
  ["02", "We digitize by hand", "A specialist plans underlay, stitch direction, density, sequencing, trims, and pull compensation around your production needs."],
  ["03", "Receive a ready-to-run file", "We quality-check the design and deliver your requested machine format with a clear run-sheet preview."],
];

const qualityBenefits = [
  ["Manual pathing", "Every design is planned by a specialist instead of relying on one-click auto-tracing."],
  ["Fabric-aware setup", "Underlay and compensation are adjusted for polos, caps, fleece, twill, and other materials."],
  ["Production review", "Color order, trims, densities, and small details are checked before delivery."],
  ["Revision support", "Reasonable minor revisions are included so the file fits the approved production brief."],
];

const formats = ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX", "EMB", "PDF run sheet"];

const faqs = [
  ["What is embroidery digitizing?", "Embroidery digitizing converts artwork into a stitch-based machine file. It defines stitch types, direction, density, sequencing, underlay, trims, and color changes rather than simply tracing the image."],
  ["What artwork files can I send?", "You can send JPG, PNG, PDF, AI, EPS, SVG, CDR, or ZIP files. A clear source image is helpful, but we can often rebuild lower-resolution artwork when the intended details are understandable."],
  ["How long does digitizing take?", "Most standard projects are prepared within 12–24 hours after the artwork, finished size, fabric, placement, and output format are confirmed. Complex or urgent work may have a different schedule."],
  ["Which embroidery file formats can you deliver?", "Common deliveries include DST, PES, EXP, JEF, HUS, VP3, XXX, and EMB, along with a PDF run sheet. Tell us your machine or software if you are unsure which format to choose."],
  ["How much does embroidery digitizing cost?", "Typical small designs are $10–25, medium designs are $25–50, and large or specialty designs are quoted individually. Final pricing depends on artwork complexity, size, stitch count, placement, and turnaround."],
  ["What information should I include with my order?", "Please provide the finished embroidery size, garment or fabric, placement, required colors, deadline, and preferred machine format. Mention any special technique such as puff, appliqué, or patch borders."],
  ["Are revisions included?", "Reasonable minor revisions are included when they stay within the original brief. A major size, artwork, placement, or technique change may require a revised quote."],
  ["Can you digitize caps, patches, puff, and appliqué?", "Yes. Each requires different sequencing and support. Let us know the exact application so we can prepare the design around cap structure, patch borders, foam, or placement lines."],
  ["What is the difference between digitizing and vector conversion?", "Digitizing creates instructions for an embroidery machine. Vector conversion creates scalable editable artwork for printing, cutting, or design use. Many projects benefit from both services."],
];

const embroideryDescription = "Production-ready embroidery digitizing for caps, polos, jacket backs, patches, small lettering, and 3D puff, with standard 12–24 hour turnaround.";

export const metadata = createPageMetadata({
  title: "Professional Embroidery Digitizing Services",
  description: embroideryDescription,
  path: "/embroidery-digitizing",
});

const embroideryStructuredData = createServiceStructuredData({
  name: "Professional Embroidery Digitizing",
  description: embroideryDescription,
  path: "/embroidery-digitizing",
});

export default function EmbroideryDigitizingPage() {
  return (
    <>
      <StructuredData data={embroideryStructuredData} />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="page-hero-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/55" aria-label="Breadcrumb">
            <Link className="hover:text-white" href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-teal-light">Embroidery Digitizing</span>
          </nav>
          <div className="mt-9 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow text-teal-light">Manual digitizing • zero auto-tracing</p>
              <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
                Fast, professional embroidery digitizing in 12–24 hours.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Turn logos and illustrations into clean, production-ready stitch files planned around your garment, placement, and machine format.
              </p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-white/82 sm:grid-cols-2">
                {["Digitized manually", "Major machine formats", "Minor revisions included", "Fabric-aware file setup"].map((item) => (
                  <li className="flex items-center gap-3" key={item}><span className="text-teal-light" aria-hidden="true">✓</span>{item}</li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="button button-teal" href="#quote-form">Get a free quote <span aria-hidden="true">↓</span></Link>
                <Link className="button button-ghost" href="/portfolio">View embroidery work</Link>
              </div>
            </div>
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl sm:min-h-[28rem]">
              <Image
                src={embroideryImages.hero.src}
                alt={embroideryImages.hero.alt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-white/15 bg-ink/85 px-5 py-4 backdrop-blur">
                <span className="text-sm font-bold">Artwork in. Production file out.</span>
                <span className="text-xs text-teal-light">DST • PES • EXP • EMB</span>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Digitizing capabilities"
            title="One production-minded studio for every placement."
            description="Each file is built around its finished size, fabric, placement, and embroidery technique—not a generic preset."
            align="center"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, description]) => (
              <article className="bg-white p-7 sm:p-8" key={title}>
                <span className="font-display text-2xl text-teal-dark">{number}</span>
                <h2 className="mt-8 text-lg font-bold text-ink">{title}</h2>
                <p className="mt-3 leading-7 text-slate">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality showcase"
            title="See how different stitch styles hold their detail."
            description="Original sample concepts demonstrate the range of fills, borders, lettering, portraits, patches, and garment placements we can prepare."
            align="center"
          />
          <div className="relative mt-12 aspect-square overflow-hidden rounded-3xl border border-line bg-mist shadow-xl">
            <Image
              src={embroideryImages.showcase.src}
              alt={embroideryImages.showcase.alt}
              fill
              sizes="(max-width: 1152px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sample pricing"
            title="Clear ranges before you request a quote."
            description="These are typical digitizing estimates. Final pricing depends on artwork complexity, stitch count, finished size, placement, technique, and turnaround."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {prices.map((price) => (
              <article className={`relative rounded-3xl border bg-white p-8 ${price.featured ? "border-teal shadow-xl" : "border-line"}`} key={price.label}>
                {price.featured ? <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-action px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">Most popular</span> : null}
                <p className="eyebrow text-teal-dark">{price.label}</p>
                <h2 className="mt-4 font-display text-4xl text-ink">{price.price}</h2>
                <p className="mt-4 min-h-14 leading-7 text-slate">{price.description}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm text-slate">
                  {price.features.map((feature) => <li className="flex gap-3" key={feature}><span className="text-teal-dark" aria-hidden="true">✓</span>{feature}</li>)}
                </ul>
                <Link className="button button-ink mt-8 w-full" href="#quote-form">Get my quote</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-teal-dark">How it works</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">From artwork to embroidery file in three clear steps.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">A complete brief helps us prepare the right file quickly and reduces production guesswork.</p>
            <Link className="button button-ink mt-8" href="#quote-form">Start your quote</Link>
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

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="relative min-h-[25rem] overflow-hidden rounded-3xl border border-line bg-white shadow-xl sm:min-h-[32rem]">
            <Image
              src={embroideryImages.quality.src}
              alt={embroideryImages.quality.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-teal-dark">Why choose Trustitched</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Quality comes from decisions made before the first stitch.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">Reliable embroidery begins with a file planned for the actual material and placement—not just an image that looks right on screen.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {qualityBenefits.map(([title, description]) => (
                <article className="rounded-2xl border border-line bg-white p-5" key={title}>
                  <h3 className="font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="eyebrow text-center text-teal-dark">Common delivery formats</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {formats.map((format) => <span className="rounded-full border border-line bg-canvas px-5 py-2 text-sm font-bold text-ink" key={format}>{format}</span>)}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate">Tell us your machine brand or software if you are unsure. We will recommend the most practical output format.</p>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-teal-dark">Built for real production</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink">Manual digitizing that respects fabric, size, and placement.</h2>
            <p className="mt-5 leading-8 text-slate">The same logo cannot be stitched identically on a cap, polo, fleece jacket, and patch. Fabric stretch, nap, panel structure, and finished size all affect the underlay, density, compensation, and stitch direction required for a clean result.</p>
            <p className="mt-5 leading-8 text-slate">We build each file around those production conditions, then review the color sequence, trims, small details, and overall efficiency before delivery. This helps reduce unnecessary stops and gives your operator a more dependable starting point.</p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
            <p className="eyebrow text-teal-dark">What to send</p>
            <h3 className="mt-3 font-display text-3xl text-ink">A strong brief makes a stronger file.</h3>
            <ul className="mt-7 divide-y divide-line text-sm leading-6 text-slate">
              {["The clearest artwork available", "Exact finished width or height", "Garment, fabric, and placement", "Required thread colors", "Machine format or machine brand", "Deadline and any special technique"].map((item) => (
                <li className="flex items-center gap-3 py-3" key={item}><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-canvas text-teal-dark" aria-hidden="true">✓</span>{item}</li>
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
            description="If your project has an unusual material, placement, or deadline, include it in the quote request and we will review it directly."
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
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Send your artwork for a clear, no-pressure quote.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">Include the finished size, fabric, placement, and output format. We will review the artwork and confirm the price before production begins.</p>
            <div className="mt-8 border-y border-line py-6 text-sm text-slate">
              <p><strong className="text-ink">Prefer to talk?</strong> Call <a className="font-bold text-teal-dark hover:text-ink" href="tel:+17579068220">+1 757-906-8220</a>.</p>
              <p className="mt-3">You can also use the full <Link className="font-bold text-teal-dark hover:text-ink" href="/contact">Contact Us page</Link>.</p>
            </div>
          </div>
          <QuoteForm idPrefix="embroidery" defaultService="digitizing" />
        </div>
      </section>
    </>
  );
}
