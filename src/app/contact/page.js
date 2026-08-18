import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: "Request a free quote for professional embroidery digitizing or vector artwork and share your production requirements with the Trustitched studio.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact the studio"
        title="Tell us what you’re making."
        description="Share your artwork and production details for a free quote. Your request will be sent directly to the Trustitched studio for review."
        showQuote={false}
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
          <aside>
            <p className="eyebrow text-teal-dark">Studio details</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink">A straightforward start to every project.</h2>
            <p className="mt-5 leading-7 text-slate">The more production information you can share, the more accurately we can prepare your quote and file.</p>

            <div className="mt-9 divide-y divide-line border-y border-line">
              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-dark">Call our studio</p>
                <a className="mt-2 block font-display text-2xl text-ink hover:text-teal-dark" href="tel:+17579068220">+1 757-906-8220</a>
              </div>
              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-dark">Typical turnaround</p>
                <p className="mt-2 text-ink">12–24 hours for standard projects</p>
              </div>
              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-dark">Helpful details</p>
                <p className="mt-2 leading-7 text-slate">Finished size, fabric or application, color count, deadline, and preferred file format.</p>
              </div>
            </div>
          </aside>

          <QuoteForm idPrefix="contact" />
        </div>
      </section>
    </>
  );
}
