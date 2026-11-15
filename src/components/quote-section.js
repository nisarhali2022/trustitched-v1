import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig } from "@/lib/site";

export function QuoteSection({ title, description, idPrefix, defaultService }) {
  return (
    <section className="scroll-mt-28 bg-mist py-20 sm:py-24" id="quote-form">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20 lg:px-8">
        <div>
          <p className="eyebrow text-teal-dark">Ready to start?</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate">{description}</p>
          <div className="mt-8 border-y border-line py-6 text-sm text-slate">
            <p><strong className="text-ink">Prefer to talk?</strong> Call <a className="font-bold text-teal-dark hover:text-ink" href={siteConfig.phone.href}>{siteConfig.phone.display}</a>.</p>
            <p className="mt-3">You can also use the full <Link className="font-bold text-teal-dark hover:text-ink" href="/contact">Contact Us page</Link>.</p>
          </div>
        </div>
        <QuoteForm idPrefix={idPrefix} defaultService={defaultService} />
      </div>
    </section>
  );
}
