import Image from "next/image";
import Link from "next/link";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { HeroComparisonSlider } from "@/components/hero-comparison-slider";
import { ServiceIcon, VectorArt } from "@/components/home-art";
import { QuoteForm } from "@/components/quote-form";
import { SeasonalCollection } from "@/components/seasonal-collection";
import { StructuredData } from "@/components/structured-data";
import {
  homeFaqs,
  homeImages,
  marqueeItems,
  recentWork,
  reviews,
  services,
  steps,
  stitchOn,
  whyItems,
} from "@/data/home-content";
import { getHeroSlide } from "@/data/hero-slides";
import { servicePages } from "@/data/services-content";
import { createPageMetadata } from "@/lib/site";
import { getCurrentTheme } from "@/themes";

export const metadata = createPageMetadata({
  title: "Embroidery Digitizing & Vector Art",
  description: "Professional embroidery digitizing for caps, left chest, full back, 3D puff and appliqué, custom embroidered patches, and vector art conversion, with clear per-design, per-patch and per-file pricing.",
  path: "/",
  absoluteTitle: true,
});

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

// ── Small building blocks ───────────────────────────────────

function Heading({ eyebrow, title, lead, dark = false }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <p className={`eyebrow ${dark ? "text-teal-light" : "text-teal-dark"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl leading-tight tracking-[-0.01em] sm:text-[2.9rem] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead ? <p className={`mt-4 max-w-xl text-lg leading-8 ${dark ? "text-white/70" : "text-slate"}`}>{lead}</p> : null}
    </div>
  );
}

function Chips({ items, tone = "light" }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {items.map((item) => (
        <span className={`rounded-full border px-4 py-2 text-[0.8rem] font-semibold ${tone === "light" ? "border-teal-light/45 text-teal-light" : "border-white/30 text-white"}`} key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

// ── Sections ───────────────────────────────────────────────

function Hero({ theme, slide }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white" id="top">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-24">
        <div>
          {theme.badge ? (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-light/60 bg-teal-light/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-teal-light">
              <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24"><path d="M12 2C7 6 5 10 7 15c1 2.5 3 4.5 5 7 2-2.5 4-4.5 5-7 2-5 0-9-5-13z" fill="currentColor" /></svg>
              {theme.badge}
            </span>
          ) : null}
          <p className="eyebrow text-teal-light">Premium Embroidery Digitizing</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
            Professional Embroidery Digitizing &amp; Vector Art, <span className="hero-accent">Built for Production.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            Professional digitizing for caps, left chest, full back, 3D puff and appliqué, plus custom embroidered patches and vector art — crafted by experts, delivered fast to embroiderers around the world.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button button-teal" href="#order">Get Your Design Digitized</Link>
            <Link className="button button-ghost" href="#work">View Our Work</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-7 text-[0.82rem] text-white/65">
            {[["Worldwide", "clients served"], ["Fast", "turnaround"], ["Sew-out", "tested quality"]].map(([big, small]) => (
              <div key={big}><b className="block font-display text-2xl text-teal-light">{big}</b>{small}</div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3.5">
            {[homeImages.bCap, homeImages.amenCap, homeImages.duck].map((image) => (
              <span className="relative block h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full border-4 border-[#c9a46a] bg-black shadow-[0_0_0_2px_#6e5424,0_10px_24px_rgba(0,0,0,0.55)] transition-transform hover:-translate-y-1 hover:-rotate-3 sm:h-[78px] sm:w-[78px]" key={image.src}>
                {/* Small ready-made thumbnail, served as-is and loaded right away (above the fold) */}
                <Image alt={image.alt} className="h-full w-full object-cover" height={160} loading="eager" src={image.thumb} unoptimized width={160} />
              </span>
            ))}
            <span className="ml-1.5 hidden text-xs font-semibold uppercase tracking-[0.18em] text-white/65 sm:inline">Recent stitches</span>
          </div>
        </div>

        {/* Vector → embroidery slider; images change per season (src/data/hero-slides.js) */}
        <HeroComparisonSlider
          after={slide.after}
          afterLabel={slide.afterLabel}
          ariaLabel={slide.ariaLabel}
          before={slide.before}
          beforeLabel={slide.beforeLabel}
          caption={slide.caption}
          key={slide.before.src}
        />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div aria-label="Our services" className="home-marquee overflow-hidden border-y border-teal-light/25 bg-black py-4">
      <div className="home-marquee-track">
        {items.map((item, index) => (
          <span aria-hidden={index >= marqueeItems.length ? "true" : undefined} key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ThanksgivingWeek() {
  return (
    <section className="thanksgiving-week relative overflow-hidden py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="eyebrow text-[#ffb96b]">Thanksgiving Week</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Thankful for every stitch and <em className="italic text-[#ffb96b]">every client</em>.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">This Thanksgiving week we say thank you. Send your design and get a file that sews out beautifully.</p>
          <div className="mb-7 mt-6 flex flex-wrap gap-3">
            {["Clean stitches", "Fast turnaround", "Friendly support", "Holiday orders, ready early"].map((chip) => (
              <span className="rounded-full border border-[#e8721a]/55 bg-[#e8721a]/10 px-4 py-2 text-sm font-semibold text-[#ffcf99]" key={chip}>{chip}</span>
            ))}
          </div>
          <Link className="button button-teal" href="#order">Send Us Your Design</Link>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[420px] drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]">
          <Image alt={homeImages.thanksgiving.alt} className="scene-bob object-contain" fill sizes="420px" src={homeImages.thanksgiving.src} />
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl px-6 lg:px-8">
        <p className="eyebrow text-center text-[#ffb96b]">Thanksgiving Collection</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[[homeImages.giveThanks, "Give Thanks"], [homeImages.thankful, "Thankful · Grateful · Blessed"], [homeImages.gobble, "Gobble Till You Wobble"]].map(([image, caption]) => (
            <figure className="rounded-[22px] border border-[#e8721a]/50 bg-[radial-gradient(circle_at_50%_35%,#fff7e6,#f0dfbb_75%)] p-4 text-center shadow-[0_16px_36px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1" key={caption}>
              <div className="relative aspect-square"><Image alt={image.alt} className="object-contain" fill sizes="(max-width: 640px) 100vw, 33vw" src={image.src} /></div>
              <figcaption className="mt-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#7a3510]">{caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-white/60">Seasonal design concepts. Ask us to digitize your own holiday designs.</p>
      </div>
    </section>
  );
}

function BlackFridayStrip() {
  return (
    <section className="black-friday-strip border-y border-teal-light/25 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 lg:px-8">
        <div>
          <p className="eyebrow text-teal-light">Black Friday Week</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Get your stitches ready for <span className="text-teal-light">Black Friday</span>.</h2>
          <Chips items={["Free quote", "Free minor edits", "Rush options", "Fast turnaround"]} />
        </div>
        <Link className="button button-teal" href="#order">Get Started Now</Link>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-canvas py-20 sm:py-24" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading eyebrow="Our Services" lead="Stitch files that run clean on your machine, finished patches made from your design, and vector art ready for production." title="Digitizing, patches and vector art" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link className="group relative block overflow-hidden rounded-[20px] border border-line bg-white transition duration-300 hover:-translate-y-2" href={service.href} key={service.n}>
              <div className="relative h-[196px] overflow-hidden bg-black">
                {service.image ? (
                  <Image alt={service.image.alt} className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" src={service.image.src} style={{ objectPosition: service.imagePosition ?? "50% 40%" }} />
                ) : <VectorArt />}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
                <span className="absolute left-3.5 top-3.5 z-10 rounded-full border border-teal-light/50 bg-black/60 px-3 py-1 text-xs font-bold tracking-[0.12em] text-teal-light">{service.n}</span>
              </div>
              <div className="relative z-10 px-6 pb-7">
                <span className="-mt-6 mb-4 grid h-12 w-12 place-items-center rounded-xl border border-teal-light/40 bg-ink text-teal-light shadow-[0_8px_22px_rgba(0,0,0,0.5)]">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="font-display text-xl text-ink">{service.title}</h3>
                <p className="mb-3 mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-teal-dark">{service.meta}</p>
                <p className="leading-7 text-slate">{service.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-teal-dark">Learn more <span className="inline-block transition-transform group-hover:translate-x-1.5" aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Starting prices come from the Pricing page data, so they always match it.
function PricingPreview() {
  return (
    <section className="bg-white py-20 sm:py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading eyebrow="Simple Pricing" lead="Flat prices by design, patch or file. We confirm the exact price before work begins." title="Clear prices, no surprises" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {servicePages.map((service) => (
            <div className="flex flex-col rounded-[20px] border border-line bg-white p-7 text-center" key={service.id}>
              <h3 className="font-display text-2xl text-ink">{service.title}</h3>
              <p className="mt-4 font-display text-3xl font-bold text-teal-dark">{service.price.replace(/ per \w+$/, "")}</p>
              <p className="mt-1 text-sm text-slate">{service.price.match(/per \w+$/)?.[0]}</p>
              <div className="mt-6 flex flex-1 flex-col justify-end gap-2.5">
                <Link className="button button-ink w-full" href={service.path}>View service <span aria-hidden="true">→</span></Link>
                <Link className="button button-outline w-full" href={service.href}>See all prices</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24" id="why">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading dark eyebrow="Why Choose Trustitched?" title="Craft you can trust, thread after thread." />
        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyItems.map(([title, text]) => (
            <div className="rounded-b-2xl border-t-2 border-teal-light bg-white/[0.04] px-5 py-6" key={title}>
              <h3 className="text-[1.05rem] font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentWork() {
  return (
    <section className="bg-canvas py-20 sm:py-24" id="work">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading eyebrow="Recent Work" lead="A taste of the caps, puff and appliqué files our clients run every week." title="Stitched to perfection" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {recentWork.map(([image, caption]) => (
            <figure className="group relative aspect-square overflow-hidden rounded-[18px] border border-teal-light/30 bg-black transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]" key={image.src}>
              <Image alt={image.alt} className="object-cover transition-transform duration-500 group-hover:scale-[1.06]" fill sizes="(max-width: 1024px) 50vw, 300px" src={image.src} />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.85))] px-3.5 pb-3 pt-8 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal-light">{caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center"><Link className="button button-outline" href="/portfolio">View Full Portfolio</Link></div>
      </div>
    </section>
  );
}

function StitchOn() {
  return (
    <section className="bg-white py-20 sm:py-24" id="stitch-on">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading eyebrow="What We Stitch On" lead="One digitizer for everything your machine runs. Pick your product and we build the file to suit the fabric." title="From caps to hoodies to gifts" />
        <div className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stitchOn.map(([image, title, text]) => (
            <Link className="group block rounded-[20px] border border-line bg-white px-3.5 pb-6 pt-3.5 text-center transition duration-300 hover:-translate-y-2" href="/portfolio" key={title}>
              <span className="relative mx-auto mb-4 mt-1.5 block aspect-square max-w-[170px] overflow-hidden rounded-full border-[5px] border-[#c9a46a] bg-black shadow-[0_0_0_2px_#6e5424,0_10px_24px_rgba(0,0,0,0.35)]">
                <Image alt={image.alt} className="object-cover transition-transform duration-500 group-hover:scale-110" fill sizes="170px" src={image.src} />
              </span>
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="mt-1 text-[0.82rem] leading-5 text-slate">{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24" id="difference">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading dark eyebrow="The Digitizing Difference" lead="Drag the slider to see flat artwork turn into a rich, thread-ready embroidered design." title="From flat artwork to real stitches" />
        <div className="mx-auto mt-11 max-w-xl">
          <HeroComparisonSlider
            after={homeImages.heroAfter}
            afterLabel="Digitized & stitched"
            ariaLabel="Compare the original macaw artwork with the digitized and stitched version"
            before={homeImages.heroBefore}
            beforeLabel="Original artwork"
            caption="Drag the slider to compare the original macaw artwork with its digitized, stitched version."
            preloadImages={false}
            sizes="(max-width: 640px) 100vw, 576px"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-canvas py-20 sm:py-24" id="how">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading eyebrow="How It Works" title="From artwork to sew-out in four steps" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <li className="px-2 text-center" key={title}>
              <span className="mx-auto mb-4 grid h-[60px] w-[60px] place-items-center rounded-full border border-teal-dark bg-[radial-gradient(circle,color-mix(in_srgb,var(--teal-light)_18%,transparent),transparent_70%)] font-display text-2xl font-bold text-teal-dark">{index + 1}</span>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Reviews() {
  if (!reviews.length) return null; // shown only once real reviews are added

  return (
    <section className="bg-white py-20 sm:py-24" id="reviews">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading eyebrow="Testimonials" lead="Real sew-outs, real results. See what our clients stitched with our files." title="Loved by embroiderers" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-white" key={review.name + review.text}>
              <div className="relative aspect-[4/3] bg-black">
                <Image alt={review.photo.alt} className="object-cover" fill sizes="(max-width: 768px) 100vw, 400px" src={review.photo.src} />
                <span className="absolute bottom-3.5 left-3.5 rounded-full border border-teal-light/50 bg-black/75 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-teal-light">{review.chip}</span>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <p className="tracking-[3px] text-teal-dark" aria-label="5 out of 5 stars">★★★★★</p>
                <p className="mb-5 mt-3 flex-1 italic leading-7 text-ink">“{review.text}”</p>
                <p className="border-t border-line pt-4 text-sm"><b className="block text-ink">{review.name}</b><span className="text-slate">{review.order}</span></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white py-20 sm:py-24" id="faq">
      <StructuredData data={faqStructuredData} />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Heading eyebrow="Good to Know" title="Quick answers" />
        <div className="mt-11">
          {homeFaqs.map(([question, answer]) => (
            <details className="group border-b border-line px-1 py-5" key={question}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[1.05rem] font-semibold text-ink">
                {question}<span className="text-2xl font-normal leading-none text-teal-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-7 text-slate">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Order({ theme }) {
  return (
    <section className="home-order relative scroll-mt-28 overflow-hidden bg-ink py-20 text-white sm:py-24" id="order">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8" id="quote-form">
        <Heading dark eyebrow={theme.holiday ? "Holiday Orders" : "Free Quote"} lead="Send us your design today. Get a quote fast and a file that stitches beautifully." title="Send your design for a free quote" />
        <div className="mt-10">
          <QuoteForm idPrefix="home" />
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────

export default async function Home() {
  const theme = await getCurrentTheme();
  const slide = getHeroSlide(theme.id);

  return (
    <>
      <Hero slide={slide} theme={theme} />
      <Marquee />
      {theme.id === "thanksgiving" ? <ThanksgivingWeek /> : null}
      {theme.id === "black-friday" ? <BlackFridayStrip /> : null}
      <SeasonalCollection collection={theme.collection} />
      <Services />
      <PricingPreview />
      <Why />
      <RecentWork />
      <StitchOn />
      {/* Same macaw as the hero by default, so shown only when the hero has a seasonal pair */}
      {slide.seasonal ? <Difference /> : null}
      <HowItWorks />
      <Reviews />
      <Faq />
      <Order theme={theme} />
    </>
  );
}
