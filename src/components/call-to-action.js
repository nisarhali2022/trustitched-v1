import Link from "next/link";

export function CallToAction({ title = "Have artwork ready? Let’s make it production-ready.", description = "Tell us what you are creating and we’ll help you choose the right service and file format." }) {
  return (
    <section className="bg-gold">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-ink/70">{description}</p>
        </div>
        <Link className="button shrink-0 bg-ink text-white hover:bg-white hover:text-ink" href="/contact">Get free quote <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
