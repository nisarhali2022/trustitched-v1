import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { ServiceIcon } from "@/components/home-art";
import { QuoteSection } from "@/components/quote-section";
import { StructuredData } from "@/components/structured-data";
import { formatPrice, pricingGroups } from "@/data/pricing-content";
import { servicePages } from "@/data/services-content";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

export function serviceMetadata(service) {
  return createPageMetadata({ title: service.metaTitle, description: service.metaDescription, path: service.path });
}

// One service page: Embroidery Digitizing, Custom Embroidered Patches or Vector Art Conversion.
export function ServiceDetailPage({ service }) {
  const pricing = pricingGroups.find((group) => group.id === service.id);
  const otherServices = servicePages.filter((page) => page.id !== service.id);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.path)}#service`,
    name: service.title,
    description: service.metaDescription,
    url: absoluteUrl(service.path),
    provider: { "@id": `${siteConfig.url}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} pricing`,
      itemListElement: pricing.tiers.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        price: tier.price.toFixed(2),
        priceCurrency: "USD",
      })),
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: service.title, item: absoluteUrl(service.path) },
    ],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <HeroBackdrop />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
              <Link className="transition-colors hover:text-teal-light" href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Services</span>
              <span aria-hidden="true">/</span>
              <span className="text-teal-light">{service.title}</span>
            </nav>
            <p className="eyebrow mt-7 text-teal-light">{service.eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-[-0.02em] sm:text-6xl">{service.title}</h1>
            <p className="mt-5 font-display text-3xl font-bold text-teal-light">{service.price}</p>
            <p className="mt-1 text-sm text-white/65">{service.priceNote}</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">{service.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-teal" href="#quote-form">Get a free quote <span aria-hidden="true">↓</span></Link>
              <Link className="button button-ghost" href={service.href}>{service.cta} <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/15 bg-black shadow-2xl">
            <Image alt={service.image.alt} className="object-cover" fill preload sizes="(max-width: 1024px) 100vw, 45vw" src={service.image.src} />
          </div>
        </div>
      </section>

      {/* Every option */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-teal-dark">Services & options</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Everything we offer for {service.title.toLowerCase()}.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {service.items.map((item) => (
              <article className="flex flex-col rounded-[18px] border border-line bg-white p-6 transition duration-300 hover:-translate-y-1.5" key={item.title}>
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-teal-light/40 bg-ink text-teal-light">
                  <ServiceIcon name={item.icon} />
                </span>
                <h3 className="text-lg font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate">{item.text}</p>
                <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-slate">
                  {item.points.map((point) => (
                    <li className="flex gap-2.5" key={point}><span className="text-teal-dark" aria-hidden="true">✓</span>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sample work for this service */}
      {service.gallery.length ? (
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-teal-dark">Recent work</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">{service.title} samples.</h2>
            </div>
            <ul className={`mt-12 grid grid-cols-2 gap-4 sm:gap-6 ${service.gallery.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {service.gallery.map((item) => (
                <li key={item.src}>
                  <figure className="group">
                    <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_rgba(12,49,61,0.08)]">
                      <Image alt={item.alt} className={`transition-transform duration-500 group-hover:scale-[1.04] ${item.fit === "contain" ? "object-contain p-3" : "object-cover"}`} fill sizes="(max-width: 1023px) 50vw, 400px" src={item.src} />
                      <span className="absolute left-3 top-3 rounded-full bg-ink/88 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-teal-light backdrop-blur">{item.badge}</span>
                    </div>
                    <figcaption className="mt-4 font-display text-xl text-ink">{item.title}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Price preview (same numbers as the Pricing page) */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-teal-dark">Pricing</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">{service.title} prices</h2>
              <p className="mt-4 text-lg leading-8 text-slate">{pricing.note}</p>
            </div>
            <Link className="button button-outline shrink-0" href={service.href}>See full pricing <span aria-hidden="true">↗</span></Link>
          </div>
          <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${pricing.tiers.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"} ${pricing.tiers.length === 5 ? "xl:grid-cols-5" : ""} ${pricing.tiers.length === 6 ? "xl:grid-cols-6" : ""}`}>
            {pricing.tiers.map((tier) => (
              <div className={`rounded-2xl border p-5 text-center ${tier.featured ? "border-teal-light bg-canvas" : "border-line bg-white"}`} key={tier.name}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-dark">{tier.name}</p>
                <p className="mt-2 font-display text-3xl font-bold text-ink">{formatPrice(tier.price)}</p>
                <p className="mt-1 text-xs text-slate">{pricing.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="eyebrow text-center text-teal-light">Explore our other services</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {otherServices.map((other) => (
              <Link className="group flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-teal-light" href={other.path} key={other.id}>
                <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-black">
                  <Image alt={other.image.alt} className="object-cover" fill sizes="96px" src={other.image.src} />
                </span>
                <span>
                  <span className="block font-display text-2xl">{other.title}</span>
                  <span className="mt-1 block text-sm text-white/65">{other.price}</span>
                </span>
                <span className="ml-auto text-teal-light transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        className="bg-canvas"
        description="Have a question that is not covered here? Include it with your quote request and we will answer it directly."
        faqs={service.faqs}
        title={`${service.title} questions.`}
      />

      <QuoteSection
        defaultService={service.quoteService}
        description="Tell us the finished size, fabric or product, placement, file format or quantity, and your deadline. We confirm the price before work begins."
        idPrefix={service.id}
        title={`Get a free ${service.title.toLowerCase()} quote.`}
      />
    </>
  );
}
