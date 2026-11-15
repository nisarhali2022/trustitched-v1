import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  // Pages are pre-rendered, so this is the year of the latest build/deploy.
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link className="inline-flex rounded-2xl bg-canvas p-3" href="/" aria-label="Trustitched home">
              <Image
                alt="Trustitched"
                className="h-auto w-40"
                height={1043}
                sizes="160px"
                src="/images/brand/trustitched-logo.webp"
                width={1600}
              />
            </Link>
            <p className="mt-4 max-w-sm leading-7 text-white/60">
              Production-minded embroidery digitizing and vector artwork for decorators, print shops, and growing brands.
            </p>
          </div>
          <div>
            <p className="eyebrow text-teal-light">Navigate</p>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
              {siteConfig.navigation.map(({ label, href }) => (
                <Link className="w-fit text-sm text-white/65 transition hover:text-white" href={href} key={href}>{label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="eyebrow text-teal-light">Talk to the studio</p>
            <a className="mt-5 block font-display text-2xl text-white hover:text-teal-light" href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
            <a className="mt-3 block w-fit text-sm font-semibold text-white/70 transition hover:text-teal-light" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-light hover:text-white" href="/contact">
              Request a quote <span aria-hidden="true">→</span>
            </Link>
            <SocialLinks className="mt-6" variant="footer" />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Professional embroidery digitizing & vector art.</p>
        </div>
      </div>
    </footer>
  );
}
