import Link from "next/link";
import localFont from "next/font/local";
import { CallToAction } from "@/components/call-to-action";
import { HeroStitchPreview } from "@/components/hero-stitch-preview";
import { SectionHeading } from "@/components/section-heading";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const heroStats = [
  ["12+ Yrs", "Experience"],
  ["85,000+", "Files Delivered"],
  ["12 - 24h", "Fast Turnaround"],
  ["99.8%", "Approval Rate"],
];

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
      <section className={`${inter.variable} reference-hero relative overflow-hidden text-white`}>
        <div className="reference-hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[82rem] gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20 xl:min-h-[42rem]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#b98d1b]/60 bg-[#d7a915]/10 px-4 py-2 text-xs font-extrabold tracking-wide text-[#f2c329]">
              <span aria-hidden="true">♙</span> MASTER DIGITIZERS • ZERO AUTO-TRACING
            </p>
            <h1 className="mt-7 max-w-[48rem] text-[clamp(2.75rem,4.5vw,4.55rem)] font-black leading-[1.03] tracking-[-0.055em] text-white">
              Embroidery Digitizing<br className="hidden sm:block" /> &amp; Vector Art{" "}
              
            </h1>
            <p className="mt-7 max-w-[44rem] text-base leading-7 text-[#eef5ff] sm:text-lg sm:leading-8">
              We convert complex logos and graphics into flawless embroidery stitch files (DST, PES, EMB) and razor-sharp vectors. Hand-crafted by master digitizers with fast next-day turnaround.
            </p>

            <div className="mt-8 grid max-w-[42rem] grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map(([value, label], index) => (
                <div className="rounded-lg border border-[#7290ad]/30 bg-white/[0.06] px-3 py-4 text-center" key={label}>
                  <strong className={`block text-2xl font-black ${index === 3 ? "text-[#00d8a0]" : "text-[#f2c329]"}`}>{value}</strong>
                  <span className="mt-1 block text-xs font-medium text-[#e6f0fb]">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="reference-primary-cta" href="/contact">
                Get a Free Quote Now <span aria-hidden="true">→</span>
              </Link>
              <Link className="reference-secondary-cta" href="/portfolio">
                <span aria-hidden="true">▱</span> See Before &amp; After Work
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#ecf5ff]">
              <span className="flex items-center gap-2"><b className="text-[#00d8a0]" aria-hidden="true">✓</b> No credit card required</span>
              <span className="flex items-center gap-2"><b className="text-[#f2c329]" aria-hidden="true">♢</b> 100% Stitch Guarantee</span>
              <span className="flex items-center gap-2"><b className="text-[#f2c329]" aria-hidden="true">ϟ</b> Free minor revisions</span>
            </div>
          </div>

          <HeroStitchPreview />
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
