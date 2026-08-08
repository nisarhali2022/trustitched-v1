"use client";

import Image from "next/image";
import { useState } from "react";

const filters = [
  { value: "all", label: "All work" },
  { value: "embroidery", label: "Embroidery digitizing" },
  { value: "vector", label: "Vector art" },
];

export function PortfolioGallery({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filter portfolio projects">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${isActive ? "border-ink bg-ink text-white" : "border-line bg-white text-slate hover:border-teal hover:text-teal-dark"}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
                key={filter.value}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <p className="text-sm font-semibold text-slate" aria-live="polite">
          Showing {visibleProjects.length} original studio {visibleProjects.length === 1 ? "sample" : "samples"}
        </p>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article className="group" key={project.id}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-line bg-mist shadow-[0_18px_50px_rgba(12,49,61,0.08)]">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/88 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-light backdrop-blur">
                Original studio sample
              </span>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-dark">{project.service}</p>
            <h3 className="mt-2 font-display text-2xl text-ink">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate">{project.technique}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
