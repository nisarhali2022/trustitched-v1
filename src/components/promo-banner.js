import Link from "next/link";

export function PromoBanner({ banner }) {
  if (!banner) return null;

  return (
    <div className="promo-banner bg-teal-action text-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-x-4 gap-y-1 px-6 py-2.5 text-center text-sm font-semibold sm:flex-row lg:px-8">
        <p>
          {banner.text}
          {banner.offer ? <strong className="ml-2 font-extrabold">{banner.offer}</strong> : null}
        </p>
        {banner.cta ? (
          <Link className="shrink-0 font-extrabold underline underline-offset-4 hover:no-underline" href={banner.cta.href}>
            {banner.cta.label} <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
