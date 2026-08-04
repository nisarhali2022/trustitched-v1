"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Home", "/"],
  ["Embroidery Digitizing", "/embroidery-digitizing"],
  ["Vector Art", "/vector-art"],
  ["Portfolio", "/portfolio"],
  ["Contact Us", "/contact"],
];

function Brand() {
  return (
    <Link className="group inline-flex items-center gap-3" href="/" aria-label="Trustitched home">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-ink font-display text-lg text-gold-light transition group-hover:border-gold">
        T
      </span>
      <span>
        <strong className="block font-display text-[1.35rem] leading-none tracking-tight text-ink">Trustitched</strong>
        <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.2em] text-gold-dark">Digitizing studio</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-md">
      <div className="hidden border-b border-line/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2.5 text-xs">
          <p className="font-semibold uppercase tracking-[0.16em] text-slate">Professional embroidery digitizing & vector art</p>
          <a className="font-semibold text-ink transition hover:text-gold-dark" href="tel:+1800123456">
            Call our studio&nbsp;&nbsp; <span className="text-gold-dark">+1 (800) 123456</span>
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link className={`text-sm font-semibold transition hover:text-ink ${pathname === href ? "text-ink" : "text-slate"}`} href={href} aria-current={pathname === href ? "page" : undefined} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <Link className="button button-ink !min-h-11 !px-5" href="/contact">
            Get free quote <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="relative xl:hidden">
          <button
            ref={menuButtonRef}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-ink"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          </button>
          {mobileMenuOpen ? (
            <div className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-line bg-canvas p-3 shadow-2xl" id="mobile-navigation">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navigation.map(([label, href]) => (
                  <Link className={`rounded-xl px-4 py-3 text-sm font-semibold text-ink hover:bg-white ${pathname === href ? "bg-white" : ""}`} href={href} aria-current={pathname === href ? "page" : undefined} key={href} onClick={() => setMobileMenuOpen(false)}>
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="mt-2 border-t border-line p-3">
                <a className="block text-sm font-semibold text-ink" href="tel:+1800123456">+1 (800) 123456</a>
                <Link className="button button-ink mt-4 w-full" href="/contact" onClick={() => setMobileMenuOpen(false)}>Get free quote</Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
