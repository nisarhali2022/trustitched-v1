export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? <p className="eyebrow text-gold-dark">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-4xl leading-tight tracking-[-0.025em] text-ink sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-xl text-lg leading-8 text-slate">{description}</p> : null}
    </div>
  );
}
