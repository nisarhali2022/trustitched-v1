import Image from "next/image";

export function SewOutGallery({ photos }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {photos.map((photo) => (
        <li key={photo.id}>
          <figure className="group">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-mist shadow-[0_18px_50px_rgba(12,49,61,0.08)]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1023px) 50vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-ink/88 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-teal-light backdrop-blur">
                {photo.badge ?? "Real sew-out"}
              </span>
            </div>
            <figcaption className="mt-4">
              <span className="block font-display text-xl text-ink">{photo.title}</span>
              <span className="mt-1 block text-sm leading-6 text-slate">{photo.technique}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
