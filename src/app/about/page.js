import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { ServiceIcon } from "@/components/home-art";
import { QuoteSection } from "@/components/quote-section";
import { StructuredData } from "@/components/structured-data";
import { servicePages } from "@/data/services-content";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/site";

// About page. It covers every topic a typical competitor About page has (story,
// mission, vision, why choose us, values) but with concrete, checkable details.
// Every claim matches what the site already offers (prices, turnaround, formats,
// support). Add a founding year, team names or order totals only once confirmed.

export const metadata = createPageMetadata({
  title: "About Trustitched: Embroidery Digitizing & Vector Art Studio",
  description: "Trustitched hand-digitizes embroidery files, makes custom embroidered patches and redraws vector art for shops worldwide. Sew-out tested files, 12–24 hour turnaround, prices confirmed before work begins.",
  path: "/about",
});

const quickFacts = [
  ["3", "core services"],
  ["12–24 hr", "standard turnaround"],
  ["24/7", "email & live chat"],
  ["100%", "hand-digitized"],
];

const audiences = [
  { icon: "cap", title: "Embroidery shops", text: "Production files for caps, polos and jackets, ready for your machine and your thread." },
  { icon: "shirt", title: "Print & screen print shops", text: "Clean vector art and colour separations for screen printing, cutting and signage." },
  { icon: "jacket", title: "Uniform & workwear suppliers", text: "Consistent logos across shirts, jackets and hats, sized for every placement." },
  { icon: "tag", title: "Promo product companies", text: "Fast, repeatable files for bags, towels, beanies and branded giveaways." },
  { icon: "patch", title: "Teams, clubs & brands", text: "Finished custom embroidered patches for uniforms, merch and events." },
  { icon: "star", title: "Small businesses & makers", text: "Etsy sellers, home embroiderers and new brands who need a file that just works." },
];

const reasons = [
  { icon: "star", title: "Hand-built, never auto-converted", text: "A digitizer plans every stitch direction, density and underlay for your fabric. No push-button auto-digitizing." },
  { icon: "check", title: "Tested on real sew-outs", text: "We check designs as stitched pieces, not just on screen, so small text and fine detail run clean the first time." },
  { icon: "clock", title: "12–24 hour turnaround", text: "Most standard designs are delivered within a day, with rush turnaround available when you are on a deadline." },
  { icon: "tag", title: "Clear, flat pricing", text: `${servicePages.map((s) => `${s.title} ${s.price.charAt(0).toLowerCase()}${s.price.slice(1)}`).join(", ")}. Your exact price is confirmed before we start.` },
  { icon: "repair", title: "Minor revisions included", text: "Reasonable minor edits are part of the price, so small fixes never become a new invoice." },
  { icon: "layers", title: "Every format you need", text: "DST, PES, EXP, EMB and more for embroidery; AI, EPS, SVG and PDF for vector art." },
  { icon: "chat", title: "Real people, 24/7", text: "Email and live chat around the clock, plus phone and WhatsApp when you want to talk a design through." },
  { icon: "shield", title: "Your artwork stays private", text: "Your files are used only for your order, and we never show a client logo without permission." },
];

const standards = [
  ["Experience", "Caps, 3D puff, appliqué, left chest, jacket backs, patches and vector redraws are what we do every day, so we know how each one behaves on the machine."],
  ["Precision", "We plan every file around the real fabric, size and placement, and check it as a sew-out before it reaches you."],
  ["Reliability", "Clear prices, honest timelines and quick answers, on the first order and the hundredth."],
];

const steps = [
  ["Send your artwork", "A photo, sketch, PDF or old logo file. Tell us the size, fabric and product."],
  ["Get a clear quote", "We confirm the exact price and delivery time before any work starts."],
  ["We build the file", "A digitizer creates your stitch file or vector artwork by hand."],
  ["Check and approve", "You receive a preview with your file. Minor revisions are included."],
  ["Stitch with confidence", "Run it on your machine, send it to print, or receive finished patches."],
];

const values = [
  ["Production first", "A file is only good if it runs well on the machine. That is the standard we work to."],
  ["Straight answers", "Clear prices, honest timelines, and we tell you early if a design needs changes to stitch well."],
  ["Every customer counts", "A one-off cap and a 1,000-patch order get the same care and the same checks."],
  ["Respect for your work", "Your artwork, logos and files stay yours and are handled with care."],
  ["Always learning", "Every sew-out teaches us something, and we feed it back into the next file."],
];

const gallery = [
  { src: "/images/sew-outs/aztec-headdress-figure-embroidered-washed-blue-cap.webp", alt: "Washed blue cap embroidered in light gray thread with a figure wearing a feathered Aztec headdress", title: "Detailed cap embroidery" },
  { src: "/images/sew-outs/koroni-castle-greek-lettering-embroidered-navy-cap.webp", alt: "Navy cap embroidered with Greek lettering, the Koroni castle tower, green trees, a sailboat and blue waves", title: "Scene & lettering cap" },
  { src: "/images/sew-outs/jesus-loves-you-applique-embroidered-hoodie.webp", alt: "Cream hoodie with large black appliqué letters spelling Jesus, a red heart, and You", title: "Appliqué lettering" },
  { src: "/images/patches/hug-mama-and-baby-bear-embroidered-patch.webp", alt: "Embroidered patch of a brown bear hugging a cream baby bear above the word HUG", title: "Custom patch design" },
];

const aboutFaqs = [
  ["Who is Trustitched?", "Trustitched is an embroidery digitizing and vector art studio. We create machine-ready stitch files, finished custom embroidered patches and clean vector artwork for embroidery shops, print shops, uniform suppliers, promo companies and brands."],
  ["Who digitizes my design?", "A Trustitched digitizer builds your file by hand. We do not run artwork through auto-digitizing software and send it out unchecked."],
  ["Do you work with clients outside the United States?", "Yes. We work with embroiderers and businesses around the world. Files are delivered online, and prices are in US dollars; you can pay in your local currency at the current exchange rate."],
  ["How do I know the price before I order?", "Every service has flat, published prices on our Pricing page, and your quote confirms the exact price and delivery time before any work begins."],
  ["What if the file needs a change?", "Reasonable minor revisions are included. If the artwork, size or technique changes a lot, we confirm any new price with you first."],
  ["Will you show my logo on your website?", "Only with your permission. Client logos appear in our portfolio only when the client has agreed to it."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl("/about")}#about`,
  url: absoluteUrl("/about"),
  name: "About Trustitched",
  description: metadata.description,
  about: { "@id": `${siteConfig.url}/#organization` },
  isPartOf: { "@id": `${siteConfig.url}/#website` },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "About Us", item: absoluteUrl("/about") },
  ],
};

function SectionTitle({ eyebrow, title, lead, dark = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`eyebrow ${dark ? "text-teal-light" : "text-teal-dark"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl leading-tight sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead ? <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/70" : "text-slate"}`}>{lead}</p> : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <HeroBackdrop />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55">
              <Link className="transition-colors hover:text-teal-light" href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-teal-light">About Us</span>
            </nav>
            <p className="eyebrow mt-7 text-teal-light">About Trustitched</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-[-0.02em] sm:text-6xl">The digitizing studio that builds every file to stitch right the first time.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Trustitched hand-digitizes embroidery files, makes custom embroidered patches and redraws vector art for shops and brands around the world. Every file is planned for your fabric, tested as a real sew-out, and priced before we start.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-teal" href="#quote-form">Get a free quote <span aria-hidden="true">↓</span></Link>
              <Link className="button button-ghost" href="/portfolio">See our work <span aria-hidden="true">↗</span></Link>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {quickFacts.map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd><b className="block font-display text-2xl text-teal-light">{value}</b><span className="text-xs text-white/65">{label}</span></dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/15 bg-black shadow-2xl">
            <Image alt="Tan and orange trucker cap with an orange 3D puff B monogram" className="object-cover" fill preload sizes="(max-width: 1024px) 100vw, 45vw" src="/images/sew-outs/b-monogram-3d-puff-embroidered-trucker-cap.webp" />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-black shadow-[0_24px_60px_rgba(12,49,61,0.18)]">
            <Image alt="Sand sweatshirt embroidered with The Smitty Brand Co. logo and a small American flag" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src="/images/sew-outs/smitty-brand-co-logo-embroidered-sweatshirt.webp" />
          </div>
          <div>
            <p className="eyebrow text-teal-dark">Our story</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Built around one question: will it sew out well?</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate">
              <p>Too many stitch files look fine on screen and fail on the machine: thread breaks, puckered fabric, small letters that fill in. Trustitched started to fix that, by digitizing every design by hand and planning it for the real fabric, size and placement.</p>
              <p>Shops kept asking for more, so we added vector art conversion for printing, cutting and engraving, and finished custom embroidered patches for teams, uniforms and brands that want ready-to-wear pieces rather than files.</p>
              <p>Today we work with embroidery shops, print shops, uniform suppliers, promo companies and makers around the world, with the same goal on every order: a file you can run with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-line bg-canvas p-8 sm:p-10">
            <p className="eyebrow text-teal-dark">Our mission</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">Save every shop from bad files.</h2>
            <p className="mt-4 text-lg leading-8 text-slate">We deliver production-ready embroidery files, patches and vector art that stitch and print right the first time, so you spend less time fixing designs, wasting thread and blank garments, and more time filling orders.</p>
          </div>
          <div className="rounded-3xl border border-line bg-canvas p-8 sm:p-10">
            <p className="eyebrow text-teal-dark">Our vision</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">The partner shops trust with every logo.</h2>
            <p className="mt-4 text-lg leading-8 text-slate">We want to be the first studio embroiderers and printers call: the one that answers quickly, prices clearly, and turns any artwork into a file that runs perfectly, order after order.</p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="What we do" lead="Three specialist services, one standard of quality." title="Digitizing, patches and vector art." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {servicePages.map((service) => (
              <Link className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-white transition duration-300 hover:-translate-y-1.5" href={service.path} key={service.id}>
                <span className="relative block aspect-[4/3] overflow-hidden bg-black">
                  <Image alt={service.image.alt} className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" fill sizes="(max-width: 768px) 100vw, 400px" src={service.image.src} />
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="font-display text-2xl text-ink">{service.title}</span>
                  <span className="mt-1 text-sm font-semibold text-teal-dark">{service.price}</span>
                  <span className="mt-3 flex-1 leading-7 text-slate">{service.text}</span>
                  <span className="mt-5 text-sm font-semibold text-teal-dark">Explore service <span aria-hidden="true">→</span></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Who we work with" lead="From one-off caps to large uniform programs, we build files for every kind of decorator." title="Made for the people who stitch and print." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div className="flex gap-4 rounded-2xl border border-line bg-white p-6" key={item.title}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-teal-light/40 bg-ink text-teal-light"><ServiceIcon name={item.icon} /></span>
                <span>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate">{item.text}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle dark eyebrow="Why choose Trustitched" lead="No vague claims. These are the things you can hold us to on every order." title="Specific promises, not slogans." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6" key={item.title}>
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-teal-light/40 text-teal-light"><ServiceIcon name={item.icon} /></span>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience, precision, reliability */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Our standards" title="Experience, precision, reliability." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {standards.map(([title, text], index) => (
              <div className="rounded-3xl border border-line bg-white p-8" key={title}>
                <span className="font-display text-5xl font-bold text-teal-dark/30">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-slate">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="How we work" title="From artwork to finished file in five steps." />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([title, text], index) => (
              <li className="rounded-2xl border border-line bg-canvas p-6" key={title}>
                <span className="font-display text-3xl font-bold text-teal-dark">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Real work */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-teal-dark">Proof in thread</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">Real pieces from the studio.</h2>
            </div>
            <Link className="button button-outline shrink-0" href="/portfolio">View full portfolio <span aria-hidden="true">↗</span></Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {gallery.map((item) => (
              <li key={item.src}>
                <figure>
                  <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-white">
                    <Image alt={item.alt} className="object-cover" fill sizes="(max-width: 1023px) 50vw, 300px" src={item.src} />
                  </div>
                  <figcaption className="mt-3 font-display text-lg text-ink">{item.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="What we stand for" title="Our core values." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(([title, text]) => (
              <div className="rounded-b-2xl border-t-2 border-teal-dark bg-canvas px-6 py-6" key={title}>
                <h3 className="text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to us */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Talk to a real person.</h2>
          <p className="max-w-xl text-lg leading-8 text-white/75">Questions about a design, a deadline or a bulk order? Reach us the way that suits you.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="button button-teal" href={siteConfig.phone.href}>Call {siteConfig.phone.display}</a>
            <a className="button button-ghost" href={siteConfig.whatsappHref} rel="noopener noreferrer" target="_blank">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href={`mailto:${siteConfig.contactEmail}`}>Email us</a>
          </div>
        </div>
      </section>

      <FaqSection
        className="bg-canvas"
        description="Anything else you want to know? Ask with your quote request, call, or message us on WhatsApp."
        faqs={aboutFaqs}
        title="About Trustitched, answered."
      />

      <QuoteSection
        description="Send your artwork with the size, product and deadline. We reply with an exact price and delivery time."
        idPrefix="about"
        title="Let's make something together."
      />
    </>
  );
}
