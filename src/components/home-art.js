// Illustrations and icons for the home page service cards (from the reference design).

export function VectorArt() {
  return (
    <svg aria-hidden="true" className="h-full w-full transition-transform duration-700 group-hover:scale-[1.07]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 320 176">
      <defs>
        <pattern height="16" id="home-vector-grid" patternUnits="userSpaceOnUse" width="16">
          <path d="M16 0H0V16" fill="none" stroke="rgba(212,175,106,.12)" />
        </pattern>
        <linearGradient id="home-vector-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f6e3a8" />
          <stop offset="1" stopColor="#b88a3e" />
        </linearGradient>
      </defs>
      <rect fill="#0b1a14" height="176" width="320" />
      <rect fill="url(#home-vector-grid)" height="176" width="320" />
      <path d="M160 138C100 104 84 78 100 56c14-18 44-14 60 8 16-22 46-26 60-8 16 22 0 48-60 82z" fill="rgba(212,175,106,.14)" stroke="url(#home-vector-gold)" strokeLinejoin="round" strokeWidth="3" />
      <g opacity=".9" stroke="#c8102e" strokeWidth="1.2">
        <path d="M100 56L72 44M160 64L160 30M220 56L248 44M160 138L130 160M160 138L190 160" />
      </g>
      <g fill="#fff" stroke="#c8102e" strokeWidth="1.5">
        <rect height="10" width="10" x="95" y="51" />
        <rect height="10" width="10" x="155" y="59" />
        <rect height="10" width="10" x="215" y="51" />
        <rect height="10" width="10" x="155" y="133" />
      </g>
      <g fill="#c8102e">
        <circle cx="72" cy="44" r="4" />
        <circle cx="160" cy="30" r="4" />
        <circle cx="248" cy="44" r="4" />
        <circle cx="130" cy="160" r="4" />
        <circle cx="190" cy="160" r="4" />
      </g>
    </svg>
  );
}

const icons = {
  star: <path d="M12 3l2.2 6.3L21 12l-6.8 2.7L12 21l-2.2-6.3L3 12l6.8-2.7z" />,
  puff: (
    <>
      <path d="M12 4l8 14H4z" />
      <path d="M8 18l4-7 4 7" />
    </>
  ),
  applique: (
    <>
      <path d="M12 3l7 7-7 7-7-7z" />
      <path d="M12 8l3 3-3 3-3-3z" />
    </>
  ),
  patch: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" strokeDasharray="2 2" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l1-4L16 5l3 3L8 19z" />
      <path d="M14 7l3 3" />
    </>
  ),
  drop: <path d="M12 3C9 8 6 11 6 15a6 6 0 0012 0c0-4-3-7-6-12z" />,
  cap: (
    <>
      <path d="M4 15a8 8 0 0 1 16 0z" />
      <path d="M20 15h2.5M12 7V5" />
    </>
  ),
  shirt: <path d="M8 3 3 6l2 4 2-1v12h10V9l2 1 2-4-5-3c-.5 1.5-2 2.5-4 2.5S8.5 4.5 8 3z" />,
  jacket: (
    <>
      <path d="M8 3 3 6v15h7V8M16 3l5 3v15h-7V8" />
      <path d="M8 3c1 2 2.5 3 4 3s3-1 4-3" />
    </>
  ),
  text: <path d="M5 6V4h14v2M12 4v16M9 20h6" />,
  towel: (
    <>
      <rect height="16" rx="2" width="12" x="6" y="4" />
      <path d="M6 15h12" />
    </>
  ),
  image: (
    <>
      <rect height="16" rx="2" width="18" x="3" y="4" />
      <circle cx="9" cy="10" r="2" />
      <path d="m21 16-5-5-9 9" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H6v18h12V7z" />
      <path d="M14 3v4h4M9 13h6M9 17h6" />
    </>
  ),
  repair: <path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5L16 12l-3-3z" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />,
  check: <path d="M5 12.5 10 17 19 7" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8z" />
      <circle cx="7.5" cy="8.5" r="1.5" />
    </>
  ),
};

export function ServiceIcon({ name }) {
  return (
    <svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="24">
      {icons[name]}
    </svg>
  );
}
