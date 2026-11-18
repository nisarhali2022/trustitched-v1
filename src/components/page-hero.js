import Link from "next/link";
import { HeroBackdrop } from "@/components/hero-backdrop";

export function PageHero({ eyebrow, title, description, showQuote = true }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="eyebrow text-teal-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{description}</p>
        {showQuote ? (
          <Link className="button button-teal mt-8" href="/contact">Get a free quote <span aria-hidden="true">↗</span></Link>
        ) : null}
      </div>
    </section>
  );
}
