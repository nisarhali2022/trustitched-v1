import { CallToAction } from "@/components/call-to-action";
import { PageHero } from "@/components/page-hero";

const work = [
  { title: "Heritage Crest", type: "Cap digitizing", style: "crest", letter: "H" },
  { title: "Northstar Athletics", type: "Jacket embroidery", style: "northstar", letter: "N" },
  { title: "Harvest & Co.", type: "Vector redraw", style: "harvest", letter: "H" },
  { title: "Coastal Supply", type: "Screen print vector", style: "wave", letter: "C" },
  { title: "Maison Florale", type: "Monogram digitizing", style: "monogram", letter: "M" },
  { title: "Ridgeway Makers", type: "Patch digitizing", style: "badge", letter: "R" },
];

export const metadata = {
  title: "Portfolio",
  description: "Explore a starter selection of embroidery digitizing and vector art work from the Trustitched studio.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A closer look at thoughtful production artwork."
        description="A starter selection representing the kind of embroidery and vector work we prepare. Final client imagery can be added as the portfolio grows."
        showQuote={false}
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3" aria-label="Portfolio categories">
            <span className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white">All work</span>
            <span className="rounded-full border border-line bg-white px-5 py-2 text-sm font-bold text-slate">Embroidery digitizing</span>
            <span className="rounded-full border border-line bg-white px-5 py-2 text-sm font-bold text-slate">Vector art</span>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {work.map((item) => (
              <article key={item.title}>
                <div className={`portfolio-art portfolio-${item.style}`} aria-hidden="true"><span>{item.letter}</span></div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">{item.type}</p>
                <h2 className="mt-2 font-display text-2xl text-ink">{item.title}</h2>
              </article>
            ))}
          </div>

          <p className="mt-14 rounded-2xl border border-dashed border-gold/50 bg-white p-6 text-center text-sm leading-6 text-slate">
            These visual studies are presentation placeholders. Replace them with approved client sew-outs and artwork previews when available.
          </p>
        </div>
      </section>

      <CallToAction title="Have a project that belongs here?" description="Share the artwork and production details. We’ll help turn it into a file you can use with confidence." />
    </>
  );
}
