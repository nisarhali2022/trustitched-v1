// Seasonal decoration hanging under the sticky header:
// twinkling string lights or a bunting of little flags.
// Decorative only, never clickable, frozen for reduced motion.

const COUNT = 36;

export function HeaderGarland({ garland }) {
  if (!garland) return null;

  const { type = "lights", colors } = garland;

  return (
    <div aria-hidden="true" className={`header-garland header-garland-${type} pointer-events-none absolute inset-x-0 top-full`}>
      <div className="header-garland-row">
        {Array.from({ length: COUNT }, (_, index) => (
          <i
            className={index % 2 ? "max-sm:hidden" : undefined}
            key={index}
            style={{ "--garland-color": colors[index % colors.length], animationDelay: `${(index % 5) * 0.55}s` }}
          />
        ))}
      </div>
    </div>
  );
}
