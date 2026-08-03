import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Contact Us",
  description: "Request a free quote for embroidery digitizing or vector artwork from the Trustitched studio.",
};

function FormLabel({ htmlFor, children, optional = false }) {
  return (
    <label className="mb-2 block text-sm font-bold text-ink" htmlFor={htmlFor}>
      {children} {optional ? <span className="font-normal text-slate">(optional)</span> : null}
    </label>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact the studio"
        title="Tell us what you’re making."
        description="Share your artwork and production details for a free quote. This starter form is ready to connect to your preferred email or form service."
        showQuote={false}
      />

      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
          <aside>
            <p className="eyebrow text-gold-dark">Studio details</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink">A straightforward start to every project.</h2>
            <p className="mt-5 leading-7 text-slate">The more production information you can share, the more accurately we can prepare your quote and file.</p>

            <div className="mt-9 divide-y divide-line border-y border-line">
              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">Call our studio</p>
                <a className="mt-2 block font-display text-2xl text-ink hover:text-gold-dark" href="tel:+1800123456">+1 (800) 123456</a>
              </div>
              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">Typical turnaround</p>
                <p className="mt-2 text-ink">12–24 hours for standard projects</p>
              </div>
              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">Helpful details</p>
                <p className="mt-2 leading-7 text-slate">Finished size, fabric or application, color count, deadline, and preferred file format.</p>
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_60px_rgba(16,40,61,0.08)] sm:p-9">
            <div className="flex flex-col gap-2 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-gold-dark">Free quote request</p>
                <h2 className="mt-2 font-display text-3xl text-ink">Project details</h2>
              </div>
              <p className="text-xs text-slate">Fields marked * are required</p>
            </div>

            <form className="mt-7" aria-describedby="form-note">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <FormLabel htmlFor="name">Name *</FormLabel>
                  <input className="form-field" id="name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
                </div>
                <div>
                  <FormLabel htmlFor="email">Email *</FormLabel>
                  <input className="form-field" id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                </div>
                <div>
                  <FormLabel htmlFor="phone" optional>Phone</FormLabel>
                  <input className="form-field" id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
                </div>
                <div>
                  <FormLabel htmlFor="service">Service *</FormLabel>
                  <select className="form-field" id="service" name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option value="digitizing">Embroidery digitizing</option>
                    <option value="vector">Vector art</option>
                    <option value="both">Both services</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <FormLabel htmlFor="details">Project details *</FormLabel>
                  <textarea className="form-field min-h-36 resize-y" id="details" name="details" placeholder="Tell us about the artwork, size, fabric or application, deadline, and file format you need." required />
                </div>
                <div className="sm:col-span-2">
                  <FormLabel htmlFor="artwork" optional>Artwork file</FormLabel>
                  <input className="form-field file:mr-4 file:rounded-full file:border-0 file:bg-canvas file:px-4 file:py-2 file:text-sm file:font-bold file:text-ink" id="artwork" name="artwork" type="file" accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.svg,.cdr,.zip" />
                  <p className="mt-2 text-xs leading-5 text-slate">Accepted examples: JPG, PNG, PDF, AI, EPS, SVG, CDR, or ZIP.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-slate" id="form-note">This first structure does not send or upload data yet. Connect a form service before launch.</p>
                <button className="button button-ink shrink-0" type="button">Request free quote <span aria-hidden="true">→</span></button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
