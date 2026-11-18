import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

// Seasonal section on the home page. Shown only when the active theme
// has a `collection` (see src/themes/themes.js).
export function SeasonalCollection({ collection }) {
  if (!collection?.items?.length) return null;

  const wide = collection.items.length >= 4;

  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow={collection.eyebrow} title={collection.title} description={collection.description} />
          <Link className="button button-ink shrink-0" href="/contact">{collection.cta ?? "Send your artwork"}</Link>
        </div>
        <ul className={`mt-12 grid grid-cols-2 gap-4 sm:gap-6 ${wide ? (collection.items.length === 5 ? "sm:grid-cols-3 lg:grid-cols-5" : "lg:grid-cols-4") : "max-w-3xl"}`}>
          {collection.items.map((item) => (
            <li key={item.src}>
              <figure className="group">
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_50px_rgba(12,49,61,0.08)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={wide ? "(max-width: 1023px) 50vw, 300px" : "(max-width: 767px) 50vw, 380px"}
                    className={`transition-transform duration-500 group-hover:scale-[1.04] ${item.fit === "contain" ? "object-contain p-3" : "object-cover"}`}
                  />
                  {item.badge ? (
                    <span className="absolute left-3 top-3 rounded-full bg-ink/88 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-teal-light backdrop-blur">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <figcaption className="mt-4 font-display text-xl text-ink">{item.title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
