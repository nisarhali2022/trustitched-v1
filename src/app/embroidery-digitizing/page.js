import { CallToAction } from "@/components/call-to-action";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const capabilities = [
  ["Left chest & polos", "Balanced density and clean detail for everyday uniforms and branded apparel."],
  ["Caps & headwear", "Digitizing built around cap structure, center-out sewing, and registration."],
  ["Jacket backs", "Thoughtful underlay and pathing for large, detailed designs with smooth production."],
  ["Patches & appliqué", "Crisp borders, clean placement lines, and efficient coverage for specialty work."],
  ["Small lettering", "Careful column widths and spacing to preserve readability at compact sizes."],
  ["3D puff", "Purpose-built sequencing and support for strong, dimensional cap embroidery."],
];

const formats = ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX", "PDF run sheet"];

export const metadata = {
  title: "Embroidery Digitizing",
  description: "Custom embroidery digitizing for caps, polos, jackets, patches, appliqué, small lettering, and 3D puff designs.",
};

export default function EmbroideryDigitizingPage() {
  return (
    <>
      <PageHero
        eyebrow="Embroidery digitizing"
        title="Stitch files built for the way you produce."
        description="Every design is digitized by hand around its size, fabric, placement, and production method—so it looks considered on screen and dependable on the machine."
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="From fine details to bold dimensional work."
            description="Tell us where the design will be stitched and how it should feel. We’ll prepare the file around the finished piece."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, description], index) => (
              <article className="bg-white p-7 sm:p-8" key={title}>
                <span className="font-display text-2xl text-gold-dark">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-8 text-lg font-bold text-ink">{title}</h2>
                <p className="mt-3 leading-7 text-slate">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="service-art service-art-needle h-[22rem] rounded-3xl" aria-hidden="true">
            <span>TS</span>
          </div>
          <div>
            <p className="eyebrow text-gold-dark">Production-minded files</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">The details behind a cleaner sew-out.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Good digitizing is more than tracing a logo. We consider stitch direction, sequencing, underlay, pull compensation, trims, and density as one complete system.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Efficient stitch paths", "Fabric-aware underlay", "Color sequence planning", "Clean starts and finishes"].map((item) => (
                <li className="flex items-center gap-3 text-sm font-semibold text-ink" key={item}>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-canvas text-gold-dark" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="eyebrow text-center text-gold-dark">Common delivery formats</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {formats.map((format) => <span className="rounded-full border border-line bg-white px-5 py-2 text-sm font-bold text-ink" key={format}>{format}</span>)}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready for a cleaner first sew-out?"
        description="Send your artwork, finished size, fabric, and preferred machine format for a quick quote."
      />
    </>
  );
}
