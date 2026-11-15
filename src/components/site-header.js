"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/site";

const { navigation, phone } = siteConfig;

function Brand() {
  return (
    <Link className="inline-flex shrink-0 items-center" href="/" aria-label="Trustitched home">
      <Image
        alt="Trustitched"
        className="h-auto w-44 sm:w-52 lg:w-60"
        height={60}
        loading="eager"
        sizes="(min-width: 1024px) 240px, (min-width: 640px) 208px, 176px"
        src="/images/brand/trustitched-logo-horizontal.webp"
        width={336}
      />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  // The menu remembers the page it was opened on, so it closes by itself on any
  // navigation (including the browser back button).
  const [menuOpenOnPath, setMenuOpenOnPath] = useState(null);
  const mobileMenuOpen = menuOpenOnPath === pathname;
  const menuButtonRef = useRef(null);
  const menuContainerRef = useRef(null);

  function setMobileMenuOpen(open) {
    setMenuOpenOnPath(open ? pathname : null);
  }

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpenOnPath(null);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event) {
      if (!menuContainerRef.current?.contains(event.target)) {
        setMenuOpenOnPath(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-mist">
      <div className="hidden border-b border-line/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2.5 text-xs">
          <p className="font-semibold uppercase tracking-[0.16em] text-slate">Professional embroidery digitizing & vector art</p>
          <div className="flex items-center gap-4">
            <SocialLinks />
            <a className="font-semibold text-ink transition hover:text-teal-dark" href={phone.href}>
              Call our studio&nbsp;&nbsp; <span className="text-teal-dark">{phone.display}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navigation.map(({ label, href }) => (
            <Link className={`text-sm font-semibold transition hover:text-teal-dark ${pathname === href ? "text-ink" : "text-slate"}`} href={href} aria-current={pathname === href ? "page" : undefined} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <Link className="button button-ink !min-h-11 !px-5" href="/contact">
            Get free quote <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="relative xl:hidden" ref={menuContainerRef}>
          <button
            ref={menuButtonRef}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-teal/50"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          </button>
          {mobileMenuOpen ? (
            <div className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-line bg-mist p-3 shadow-2xl" id="mobile-navigation">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navigation.map(({ label, href }) => (
                  <Link className={`rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-white ${pathname === href ? "bg-white text-teal-dark" : "text-ink"}`} href={href} aria-current={pathname === href ? "page" : undefined} key={href} onClick={() => setMobileMenuOpen(false)}>
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="mt-2 border-t border-line p-3">
                <div className="flex flex-col items-start gap-3">
                  <a className="block text-sm font-semibold text-teal-dark" href={phone.href}>{phone.display}</a>
                  <SocialLinks />
                </div>
                <Link className="button button-ink mt-4 w-full" href="/contact" onClick={() => setMobileMenuOpen(false)}>Get free quote</Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
