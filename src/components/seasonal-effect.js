// Light, CSS-only seasonal particles (snow, leaves, bats, confetti, hearts, petals).
// Decorative only: hidden from screen readers, never blocks clicks,
// fewer on small screens, and switched off for reduced motion (see globals.css).

const COUNT = 18; // default number of particles
const MAX = 44; // e.g. heavier snow for Christmas (theme.effectCount)

// Fixed pseudo-random layout so server and browser render the same markup.
const particles = Array.from({ length: MAX }, (_, i) => ({
  left: (i * 37 + 11 + Math.floor(i / 27) * 13) % 100,
  delay: -((i * 1.7) % 14),
  duration: 11 + ((i * 2.3) % 9),
  size: 0.6 + ((i * 7) % 5) / 6,
  drift: ((i % 2 ? 1 : -1) * (20 + ((i * 13) % 40))),
}));

const leafColors = ["#c2671b", "#e8902a", "#9a3a12", "#d4a017"];
const confettiColors = ["#d9b45a", "#c0c0c8", "#f6e3a8", "#8e8e99"];
const heartColors = ["#e0213f", "#f48aa8", "#ffffff", "#b0143a"];
const petalColors = ["#f9cfe0", "#f6e7a1", "#c9e7d4", "#d9cdf2"];

function Shape({ kind, index }) {
  if (kind === "confetti") {
    return <span className="block h-full w-full rounded-[2px] shadow-[0_0_2px_rgba(0,0,0,0.3)]" style={{ background: confettiColors[index % confettiColors.length] }} />;
  }

  if (kind === "hearts") {
    return (
      <svg viewBox="0 0 24 22" width="100%" height="100%">
        <path d="M12 21 2.6 11.6A5.6 5.6 0 0 1 12 3.9a5.6 5.6 0 0 1 9.4 7.7Z" fill={heartColors[index % heartColors.length]} stroke="rgba(122,15,38,.35)" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === "clovers") {
    return (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <g fill={index % 3 === 0 ? "#e8c768" : "#2e9e5b"} stroke="rgba(15,77,46,.4)" strokeWidth=".8">
          <circle cx="12" cy="7" r="4.2" />
          <circle cx="7" cy="12" r="4.2" />
          <circle cx="17" cy="12" r="4.2" />
          <circle cx="12" cy="17" r="4.2" />
        </g>
      </svg>
    );
  }

  if (kind === "stars") {
    const colors = ["#c8102e", "#ffffff", "#2b4fa3"];
    return (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6Z" fill={colors[index % colors.length]} stroke="rgba(19,40,79,.45)" strokeWidth=".8" />
      </svg>
    );
  }

  if (kind === "petals") {
    return (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M12 2c5 4 7 9 4 15-1 2-3 4-4 5-1-1-3-3-4-5-3-6-1-11 4-15Z" fill={petalColors[index % petalColors.length]} stroke="rgba(31,77,58,.3)" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === "leaves") {
    return (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M12 2c4 3 8 7 8 12a8 8 0 0 1-16 0c0-5 4-9 8-12Zm0 4v16" fill={leafColors[index % leafColors.length]} stroke="rgba(60,30,10,.35)" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === "bats") {
    return (
      <svg viewBox="0 0 32 16" width="100%" height="100%">
        <path d="M16 5c1-2 2-2 3 0 2-2 5-3 9-2-2 1-3 3-3 5-2-1-4 0-5 2-1-1-3-1-4 1-1-2-3-2-4-1-1-2-3-3-5-2 0-2-1-4-3-5 4-1 7 0 9 2 1-2 2-2 3 0Z" fill="#140a22" stroke="#fb923c" strokeWidth=".9" opacity=".9" />
      </svg>
    );
  }

  return <span className="block h-full w-full rounded-full bg-white shadow-[0_0_3px_rgba(0,0,0,0.35)]" />;
}

export function SeasonalEffect({ kind, count = COUNT }) {
  const visible = particles.slice(0, Math.min(count, MAX));
  if (!kind) return null;

  const base = { snow: 8, bats: 30, confetti: 9, hearts: 18, petals: 16, clovers: 16, stars: 16 }[kind] ?? 20;

  return (
    <div aria-hidden="true" className="seasonal-effect pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {visible.map((particle, index) => (
        <span
          className={`seasonal-particle absolute -top-12 ${index >= visible.length / 2 ? "max-sm:hidden" : ""}`}
          key={index}
          style={{
            left: `${particle.left}%`,
            width: `${base * particle.size}px`,
            height: `${(kind === "bats" ? base / 2 : base) * particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            "--drift": `${particle.drift}px`,
          }}
        >
          <Shape index={index} kind={kind} />
        </span>
      ))}
    </div>
  );
}
