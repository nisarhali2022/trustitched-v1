import Link from "next/link";
import { CallToAction } from "@/components/call-to-action";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    number: "01",
    eyebrow: "Thread-ready files",
    title: "Embroidery Digitizing",
    description:
      "Clean, production-ready stitch files shaped for smooth runs, crisp details, and the fabric you plan to use.",
    href: "/embroidery-digitizing",
    accent: "needle",
  },
  {
    number: "02",
    eyebrow: "Scalable artwork",
    title: "Vector Art",
    description:
      "Sharp, editable vector artwork for screen printing, signage, packaging, and every size your brand needs.",
    href: "/vector-art",
    accent: "vector",
  },
];

const benefits = [
  ["12–24 hr", "Standard turnaround"],
  ["Quality", "Manually checked files"],
  ["Flexible", "Major machine formats"],
  ["Helpful", "Revisions included"],
];

const process = [
  ["01", "Share your artwork", "Send your logo, reference, size, fabric, and preferred file format."],
  ["02", "We craft the file", "A specialist prepares and quality-checks every stitch path or vector curve."],
  ["03", "Download & produce", "Receive clean files that are ready for your embroidery or print workflow."],
];

const portfolio = [
  { title: "Heritage Crest", type: "Cap digitizing", style: "crest" },
  { title: "Northstar Athletics", type: "Jacket embroidery", style: "northstar" },
  { title: "Harvest & Co.", type: "Vector redraw", style: "harvest" },
];

export const metadata = {
  title: "Professional Embroidery Digitizing & Vector Art",
  description:
    "Production-ready embroidery digitizing and vector art services for apparel decorators, print shops, and growing brands.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="stitch-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="eyebrow text-gold-light">Crafted for flawless production</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Artwork refined.<br />Every stitch considered.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Professional embroidery digitizing and vector conversion for decorators who need dependable files, thoughtful details, and quick turnaround.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-gold" href="/contact">
                Get a free quote <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-ghost" href="/portfolio">
                Explore our work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/65">
              {['Fast turnaround', 'Revisions included', 'Quality checked'].map((item) => (
                <span className="flex items-center gap-2" key={item}>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-4 rotate-2 rounded-[2rem] border border-dashed border-gold/45" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light">File preparation</p>
                  <p className="mt-1 text-sm text-white/55">Built around your production needs</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 font-display text-xl text-gold-light">T</div>
              </div>
              <div className="my-8 flex items-center justify-center">
                <div className="thread-emblem" aria-hidden="true">
                  <span>TS</span>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center text-sm">
                <div className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-4">
                  <span className="block text-white/45">Input</span>
                  <strong className="mt-1 block font-medium">Your artwork</strong>
                </div>
                <span className="text-gold" aria-hidden="true">→</span>
                <div className="rounded-xl border border-gold/30 bg-gold/10 px-3 py-4">
                  <span className="block text-white/45">Output</span>
                  <strong className="mt-1 block font-medium">Ready to run</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Two specialties. One production-minded studio."
            description="From the first path to the last anchor point, every file is prepared by hand for reliable output."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article className="group overflow-hidden rounded-3xl border border-line bg-white" key={service.title}>
                <div className={`service-art service-art-${service.accent}`} aria-hidden="true">
                  <span>{service.number}</span>
                </div>
                <div className="p-7 sm:p-9">
                  <p className="eyebrow text-gold-dark">{service.eyebrow}</p>
                  <h2 className="mt-3 font-display text-4xl text-ink">{service.title}</h2>
                  <p className="mt-4 max-w-xl leading-7 text-slate">{service.description}</p>
                  <Link className="mt-7 inline-flex items-center gap-2 font-semibold text-ink transition hover:text-gold-dark" href={service.href}>
                    View service <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {benefits.map(([value, label]) => (
            <div className="border-line px-3 py-9 text-center even:border-l lg:border-l lg:first:border-l-0" key={label}>
              <strong className="block font-display text-3xl text-ink sm:text-4xl">{value}</strong>
              <span className="mt-2 block text-sm text-slate">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionHeading
              eyebrow="Simple by design"
              title="From artwork to production in three steps."
              description="Clear communication, thoughtful file preparation, and no complicated handoffs."
            />
            <ol className="divide-y divide-line border-y border-line">
              {process.map(([number, title, description]) => (
                <li className="grid gap-3 py-7 sm:grid-cols-[3.5rem_1fr]" key={number}>
                  <span className="font-display text-2xl text-gold-dark">{number}</span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{title}</h3>
                    <p className="mt-2 leading-7 text-slate">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Selected work" title="Craft that holds up close." />
            <Link className="inline-flex items-center gap-2 font-semibold text-ink hover:text-gold-dark" href="/portfolio">
              View the portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {portfolio.map((item) => (
              <article key={item.title}>
                <div className={`portfolio-art portfolio-${item.style}`} aria-hidden="true"><span>{item.title.slice(0, 1)}</span></div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">{item.type}</p>
                <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
