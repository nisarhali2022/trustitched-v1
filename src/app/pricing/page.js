import Link from "next/link";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { QuoteSection } from "@/components/quote-section";
import { StructuredData } from "@/components/structured-data";
import { formatPrice, pricingGroups } from "@/data/pricing-content";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Pricing — Embroidery Digitizing, Vector Art & Custom Patches",
  description: "Clear flat pricing: embroidery digitizing from $10 per design, vector art from $10 per file, and custom 3-inch embroidered patches from $1.50 each. All prices in US dollars.",
  path: "/pricing",
});

// Search engines: every price tier as an offer.
const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Trustitched pricing",
  url: absoluteUrl("/pricing"),
  itemListElement: pricingGroups.map((group) => ({
    "@type": "OfferCatalog",
    name: group.title,
    itemListElement: group.tiers.map((tier) => ({
      "@type": "Offer",
      name: `${group.title}: ${tier.name}`,
      price: tier.price.toFixed(2),
      priceCurrency: "USD",
      itemOffered: { "@type": "Service", name: group.title, provider: { "@id": `${siteConfig.url}/#organization` } },
    })),
  })),
};

function PriceCard({ tier, unit }) {
  return (
    <article className={`relative flex flex-col rounded-[20px] border bg-white px-6 pb-6 pt-7 ${tier.featured ? "border-teal-light shadow-[0_20px_50px_color-mix(in_srgb,var(--teal)_22%,transparent)]" : "border-line"}`}>
      {tier.featured ? <span className="plan-popular absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-teal-action px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink">Most Popular</span> : null}
      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-teal-dark">{tier.name}</h3>
      <p className="mt-3 font-display text-[2.6rem] font-bold leading-none text-ink">{formatPrice(tier.price)}</p>
      <p className="mt-1 text-sm text-slate">{unit}</p>
      <div className="mt-5 flex-1 space-y-2 border-t border-line pt-5 text-sm leading-6 text-slate">
        {tier.text ? <p className="text-ink">{tier.text}</p> : null}
        {tier.example ? <p><span className="font-semibold text-ink">e.g.</span> {tier.example}</p> : null}
        {tier.points?.map((point) => (
          <p className="flex gap-2.5" key={point}><span className="font-bold text-[#2fa36b]" aria-hidden="true">✓</span>{point}</p>
        ))}
        {tier.excluded?.map((point) => (
          <p className="flex gap-2.5" key={point}><span className="font-bold text-[#e0213f]" aria-hidden="true">✕</span>{point}</p>
        ))}
        {tier.includes ? <p className="flex gap-2.5"><span className="font-bold text-[#2fa36b]" aria-hidden="true">✓</span>{tier.includes}</p> : null}
      </div>
      <Link className="button button-outline mt-6 w-full" href="#quote-form">Order Now</Link>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <StructuredData data={pricingStructuredData} />

      <section className="relative overflow-hidden bg-ink text-white">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
            <Link className="transition-colors hover:text-teal-light" href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-teal-light">Our Pricing</span>
          </nav>
          <p className="eyebrow mt-7 text-teal-light">Plan Your Project</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">Our Pricing</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">Clear, flat prices for embroidery digitizing, vector art and custom embroidered patches, so you know the cost before work begins.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3" aria-label="Jump to a price list">
            {pricingGroups.map((group) => (
              <Link className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-teal-light hover:text-teal-light" href={`#${group.id}`} key={group.id}>
                {group.title} <span className="font-normal text-white/60">· from {formatPrice(Math.min(...group.tiers.map((tier) => tier.price)))}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-12">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="eyebrow text-teal-dark">Our prices depend on…</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">The complexity of your artwork</h2>
          <p className="mt-4 leading-7 text-slate">Each service is priced in clear tiers below. Pick the one closest to your design, or send your artwork and we will confirm the exact price before we start.</p>
        </div>
      </section>

      {pricingGroups.map((group, index) => (
        <section className={`scroll-mt-28 py-20 sm:py-24 ${index % 2 === 0 ? "bg-canvas" : "bg-white"}`} id={group.id} key={group.id}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{group.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate">{group.note}</p>
              </div>
              <Link className="inline-flex shrink-0 items-center gap-2 font-bold text-teal-dark hover:text-ink" href={group.href}>View service <span aria-hidden="true">→</span></Link>
            </div>
            <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${group.tiers.length >= 5 ? "lg:grid-cols-3 xl:grid-cols-5" : "lg:grid-cols-4"} ${group.tiers.length === 6 ? "xl:grid-cols-6" : ""}`}>
              {group.tiers.map((tier) => <PriceCard key={tier.name} tier={tier} unit={group.unit} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="eyebrow text-teal-light">Need a custom price?</p>
            <p className="mt-3 leading-7 text-white/75">Send your artwork, the finished size and the quantity, and we will reply with an exact price and delivery time.</p>
            <Link className="button button-teal mt-5" href="#quote-form">Get a Free Quote</Link>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="eyebrow text-teal-light">Turnaround</p>
            <p className="mt-3 leading-7 text-white/75">Most standard designs are delivered within 12–24 hours, and your quote shows the exact time. Rush turnaround is available on request.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="eyebrow text-teal-light">Note</p>
            <p className="mt-3 leading-7 text-white/75">All prices are in US dollars. You can pay in your local currency, converted at the current US dollar rate.</p>
          </div>
        </div>
      </section>

      <QuoteSection
        description="Send the artwork, finished size and quantity. Your quote shows the exact price and delivery time."
        idPrefix="pricing"
        title="Send your artwork for an exact price."
      />
    </>
  );
}
