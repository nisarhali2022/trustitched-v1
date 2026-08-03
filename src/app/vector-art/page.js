import { CallToAction } from "@/components/call-to-action";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const capabilities = [
  ["Logo redraws", "Rebuild low-resolution logos as crisp, scalable artwork with clean curves and accurate proportions."],
  ["Screen print artwork", "Production-conscious separations and simplified artwork suited to apparel printing workflows."],
  ["Line art & silhouettes", "Sharp, controlled shapes for engraving, vinyl cutting, signage, and specialty applications."],
  ["Color cleanup", "Consistent brand colors, refined edges, and organized layers that are easier to edit and reuse."],
  ["Complex illustrations", "Careful manual tracing that preserves the character and important details of the source."],
  ["Print-ready exports", "Useful file packages prepared for vendors, internal teams, and common production software."],
];

const formats = ["AI", "EPS", "SVG", "PDF", "CDR", "PNG preview", "JPG preview"];

export const metadata = {
  title: "Vector Art",
  description: "Professional vector redraws and artwork conversion for screen printing, signage, engraving, vinyl cutting, and brand production.",
};

export default function VectorArtPage() {
  return (
    <>
      <PageHero
        eyebrow="Vector art"
        title="Crisp artwork at every size and on every surface."
        description="We manually rebuild rough, pixelated, or hand-drawn artwork into clean vector files that are easier to edit and ready for real production."
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vector capabilities"
            title="Clean curves. Organized artwork. Practical files."
            description="Whether the destination is a shirt, sign, package, or laser cutter, the artwork is rebuilt around how it will be used."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, description], index) => (
              <article className="rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg" key={title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink font-display text-gold-light">{index + 1}</div>
                <h2 className="mt-7 text-lg font-bold text-ink">{title}</h2>
                <p className="mt-3 leading-7 text-slate">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="eyebrow text-gold-dark">Built to scale</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">One clean master file, many production possibilities.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Vector shapes use editable paths instead of pixels. That means your artwork stays sharp from a small woven label to a large storefront sign.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {formats.map((format) => <span className="rounded-full border border-line bg-canvas px-5 py-2 text-sm font-bold text-ink" key={format}>{format}</span>)}
            </div>
          </div>
          <div className="service-art service-art-vector h-[22rem] rounded-3xl" aria-hidden="true">
            <span>∞</span>
          </div>
        </div>
      </section>

      <CallToAction
        title="Turn the artwork you have into the file you need."
        description="Share the source image and intended application. We’ll recommend the right vector deliverables."
      />
    </>
  );
}
