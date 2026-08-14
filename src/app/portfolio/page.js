import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/call-to-action";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { SectionHeading } from "@/components/section-heading";
import { portfolioProjects } from "@/data/portfolio-projects";
import { createPageMetadata } from "@/lib/site";

const portfolioImages = {
  embroideryQuality: {
    src: "/images/portfolio/quality-embroidery.webp",
    alt: "Close-up of a navy cap demonstrating clean gold and ivory embroidery detail",
  },
  vectorQuality: {
    src: "/images/portfolio/quality-vector.webp",
    alt: "Original hummingbird emblem comparing pixelated raster artwork with a clean vector redraw",
  },
};

const qualityPrinciples = [
  ["Manual construction", "Stitch paths and vector curves are shaped intentionally instead of accepted from one-click automatic tracing."],
  ["Production awareness", "Artwork is prepared around the fabric, placement, scale, print method, cutting process, or other real output."],
  ["Format flexibility", "We organize practical delivery files for major embroidery machines, design software, printers, sign shops, and vendors."],
  ["Revision support", "Reasonable minor revisions stay focused on the approved artwork, dimensions, technique, and production brief."],
];

export const metadata = createPageMetadata({
  title: "Embroidery Digitizing & Vector Art Portfolio",
  description: "Explore original Trustitched studio samples across embroidery digitizing and vector art for apparel, patches, print, packaging, and signage.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const featuredEmbroidery = portfolioProjects[0];
  const featuredVector = portfolioProjects[1];

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="page-hero-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55" aria-label="Breadcrumb">
              <Link className="transition-colors hover:text-teal-light" href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-teal-light">Portfolio</span>
            </nav>
            <p className="eyebrow mt-7 text-teal-light">Original studio samples</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              Production artwork designed to work beyond the preview.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Explore replaceable studio samples across precise embroidery digitizing and clean vector construction. Each concept demonstrates a practical technique without representing unverified customer work.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-teal" href="#project-gallery">Explore the work <span aria-hidden="true">↓</span></Link>
              <Link className="button button-ghost" href="/contact">Discuss your project</Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[["12", "Studio samples"], ["2", "Specialties"], ["3:2", "Replaceable ratio"]].map(([value, label]) => (
                <div key={label}>
                  <strong className="block font-display text-2xl text-teal-light">{value}</strong>
                  <span className="mt-1 block text-xs leading-5 text-white/55">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[28rem] sm:min-h-[34rem]">
            <div className="absolute inset-x-0 top-0 h-[72%] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 shadow-2xl">
              <Image
                src={featuredEmbroidery.src}
                alt={featuredEmbroidery.alt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[45%] w-[56%] overflow-hidden rounded-3xl border-4 border-ink bg-white shadow-2xl">
              <Image
                src={featuredVector.src}
                alt={featuredVector.alt}
                fill
                sizes="(max-width: 640px) 56vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-3 left-0 w-[40%] rounded-2xl border border-white/15 bg-ink/92 p-4 backdrop-blur sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-light">Two production specialties</p>
              <p className="mt-2 text-sm leading-6 text-white/65">Stitch-ready files and scalable master artwork.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-canvas py-20 sm:py-24" id="project-gallery">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected work"
            title="One consistent standard across stitches and scalable paths."
            description="Use the filters to compare embroidery and vector samples. Every project is a standalone image with its path and description stored in one replaceable data list."
          />
          <div className="mt-8 rounded-2xl border border-dashed border-teal/55 bg-white px-5 py-4 text-sm leading-6 text-slate sm:flex sm:items-center sm:justify-between sm:gap-6">
            <p><strong className="text-ink">Portfolio note:</strong> These are original studio-created demonstration assets, not customer projects or testimonials.</p>
            <p className="mt-2 shrink-0 font-semibold text-teal-dark sm:mt-0">Replace individually when approved work is available.</p>
          </div>
          <div className="mt-10">
            <PortfolioGallery projects={portfolioProjects} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Built for real production"
            title="The finished preview is only part of the job."
            description="Good production artwork also needs the right construction underneath—whether that means controlled stitch sequencing or clean, editable vector paths."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-line bg-canvas">
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={portfolioImages.embroideryQuality.src}
                  alt={portfolioImages.embroideryQuality.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="eyebrow text-teal-dark">Embroidery digitizing</p>
                <h2 className="mt-3 font-display text-3xl text-ink">Plan the stitch path around the final placement.</h2>
                <p className="mt-4 leading-7 text-slate">Fabric, size, density, underlay, sequencing, trims, and machine format all affect how an embroidered design performs.</p>
                <Link className="mt-7 inline-flex items-center gap-2 font-bold text-ink hover:text-teal-dark" href="/embroidery-digitizing">Explore digitizing <span aria-hidden="true">→</span></Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-3xl border border-line bg-canvas">
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={portfolioImages.vectorQuality.src}
                  alt={portfolioImages.vectorQuality.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="eyebrow text-teal-dark">Vector art conversion</p>
                <h2 className="mt-3 font-display text-3xl text-ink">Build clean curves that stay useful at every scale.</h2>
                <p className="mt-4 leading-7 text-slate">Manual redrawing creates organized artwork for print, signs, vinyl, engraving, packaging, apparel, and future editing.</p>
                <Link className="mt-7 inline-flex items-center gap-2 font-bold text-ink hover:text-teal-dark" href="/vector-art">Explore vector art <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-teal-light">What every sample represents</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A production-minded standard, not just an attractive mockup.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {qualityPrinciples.map(([title, description], index) => (
              <article className="rounded-2xl border border-white/15 bg-white/5 p-6" key={title}>
                <span className="font-display text-3xl text-teal-light">0{index + 1}</span>
                <h3 className="mt-7 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to turn your artwork into the next production-ready project?"
        description="Send the source artwork, intended size, application, required format, and deadline. We’ll review the details and confirm the right service before work begins."
      />
    </>
  );
}
