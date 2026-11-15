"use client";

import Link from "next/link";
import { useEffect } from "react";
import { siteConfig } from "@/lib/site";

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-canvas py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow text-teal-dark">Something went wrong</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">We could not load this page.</h1>
        <p className="mt-5 text-lg leading-8 text-slate">
          Please try again. If you were sending a quote request, you can also call{" "}
          <a className="font-bold text-teal-dark hover:text-ink" href={siteConfig.phone.href}>{siteConfig.phone.display}</a>{" "}
          or email{" "}
          <a className="font-bold text-teal-dark hover:text-ink" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="button button-ink" type="button" onClick={() => unstable_retry()}>Try again</button>
          <Link className="button border border-line bg-white text-ink" href="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
