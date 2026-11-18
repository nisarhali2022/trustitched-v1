// Animated seasonal backdrop for the dark hero banners.
// Pure SVG + CSS (no client JavaScript). Decorative only: hidden from
// screen readers, never clickable, and frozen for reduced motion (globals.css).
// Colours follow the active theme through CSS variables (--ink, --teal, …).

const dark = (amount) => `color-mix(in srgb, var(--ink) ${100 - amount}%, black)`;

// ── Sky layers ─────────────────────────────────────────────

function Stars() {
  return (
    <>
      <div className="scene-stars absolute inset-0" />
      <div className="scene-stars scene-stars-b absolute inset-0" />
    </>
  );
}

function Moon({ tone = "silver" }) {
  return <div className={`scene-moon scene-moon-${tone} absolute`} />;
}

function Glow() {
  return (
    <>
      <div className="scene-glow scene-glow-a absolute" />
      <div className="scene-glow scene-glow-b absolute" />
    </>
  );
}

function Bokeh({ colors }) {
  const lights = [[8, 62, 18], [22, 38, 24], [41, 72, 12], [63, 55, 18], [78, 70, 20], [92, 46, 14]];
  return (
    <div className="scene-bokeh absolute inset-0">
      {lights.map(([x, y, r], i) => (
        <span
          key={i}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: r * 2,
            height: r * 2,
            animationDelay: `${-i * 1.4}s`,
            ...(colors ? { background: colors[i % colors.length] } : {}),
          }}
        />
      ))}
    </div>
  );
}

// ── Flyers ─────────────────────────────────────────────────

function Reindeer({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="22" cy="20" rx="17" ry="7" />
      <path d="M8 22 2 34M14 24l-4 12M30 24l6 11M34 22l8 10" strokeWidth="3" stroke="currentColor" strokeLinecap="round" fill="none" />
      <path d="M36 16 44 6" strokeWidth="6" stroke="currentColor" strokeLinecap="round" />
      <ellipse cx="48" cy="5" rx="6" ry="4" />
      <path d="M45 1 41-8M41-4 36-6M49 0l4-9M52-5l5-1" strokeWidth="1.6" stroke="currentColor" strokeLinecap="round" fill="none" />
    </g>
  );
}

function Sleigh() {
  return (
    <div className="scene-flyer scene-flyer-sleigh absolute">
      <svg viewBox="0 -14 300 70" width="100%" className="scene-bob" style={{ color: "var(--teal-light)" }} fill="currentColor">
        <path d="M6 22h44l8-14h8l-6 22q-4 10-16 10H14Q4 40 6 22Z" />
        <path d="M2 48h62q10 0 14-8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="34" cy="8" r="8" />
        <path d="M27 4q7-14 18-2l-3 4H28Z" />
        <path d="M60 20Q120 10 150 18M60 20Q160 0 238 10" stroke="currentColor" strokeWidth="1.2" fill="none" opacity=".7" />
        <Reindeer x={104} y={6} />
        <Reindeer x={176} y={-2} />
        <Reindeer x={244} y={-10} />
        <circle className="scene-blink" cx="294" cy="-6" r="3" fill="#ff4d5e" />
      </svg>
    </div>
  );
}

// Santa, sleigh and reindeer (from the Christmas reference design)
function SantaReindeer() {
  return (
    <g id="scene-reindeer">
      <ellipse cx="40" cy="42" rx="26" ry="12" fill="#7a4a2b" transform="rotate(-8 40 42)" />
      <ellipse cx="42" cy="48" rx="20" ry="6" fill="#a8764a" opacity=".7" transform="rotate(-8 40 42)" />
      <path d="M14 38l-8-5 5 9z" fill="#f4efe6" />
      <path d="M24 48L8 64l-4 7M31 50L19 68" stroke="#5e3a20" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M56 48L74 55l8-2M50 50L68 63l7-1" stroke="#5e3a20" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M56 36L70 20" stroke="#7a4a2b" strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="78" cy="17" rx="9" ry="6.5" fill="#7a4a2b" transform="rotate(-20 78 17)" />
      <circle cx="86" cy="19" r="2.4" fill="#2a1a10" />
      <path d="M72 12l-5-6 8 3z" fill="#5e3a20" />
      <path d="M74 10L68-4M70 2L62 0M70-2L66-10M80 9L88-3M85 1L93-1M86-3L90-11" stroke="#d9c9a3" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M58 34L61 50" stroke="#e0213f" strokeWidth="4" />
      <path d="M30 31Q40 28 52 32" stroke="#e0213f" strokeWidth="3" fill="none" />
      <circle cx="61" cy="52" r="2.8" fill="#d4af6a" />
    </g>
  );
}

function Santa() {
  return (
    <div className="scene-flyer scene-flyer-santa absolute">
      <svg viewBox="0 -34 470 170" width="100%" className="scene-bob">
        <defs>
          <SantaReindeer />
        </defs>
        <rect x="8" y="22" width="24" height="22" fill="#e0213f" />
        <path d="M20 22v22M8 33h24" stroke="#d4af6a" strokeWidth="2.5" />
        <rect x="30" y="8" width="22" height="34" fill="#1f7a4d" />
        <path d="M41 8v34M30 24h22" stroke="#d4af6a" strokeWidth="2.5" />
        <rect x="50" y="26" width="18" height="16" fill="#d4af6a" />
        <path d="M59 26v16" stroke="#e0213f" strokeWidth="2.5" />
        <path d="M66 72V44Q66 30 84 30Q102 30 102 44V72Z" fill="#e0213f" />
        <circle cx="84" cy="21" r="9" fill="#f2c9a0" />
        <path d="M74 23Q84 50 94 23Z" fill="#fff" />
        <path d="M73 17Q84-4 98 13L96 19H74Z" fill="#e0213f" />
        <rect x="73" y="16" width="25" height="5" rx="2.5" fill="#fff" />
        <circle cx="99" cy="13" r="4" fill="#fff" />
        <path d="M94 40L120 32" stroke="#e0213f" strokeWidth="8" strokeLinecap="round" />
        <circle cx="121" cy="32" r="4" fill="#fff" />
        <path d="M8 42Q4 72 40 80H130Q146 80 150 60Q132 68 122 58V40Z" fill="#c4152f" stroke="#d4af6a" strokeWidth="2.5" />
        <path d="M122 58Q146 56 154 38" stroke="#d4af6a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M12 90H134Q160 90 162 66" stroke="#d4af6a" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M42 80v10M104 80v10" stroke="#d4af6a" strokeWidth="3" />
        <circle cx="72" cy="64" r="9" fill="none" stroke="#1f7a4d" strokeWidth="5" />
        <circle cx="72" cy="55" r="2.5" fill="#e0213f" />
        <path d="M121 32Q175 24 211 40M121 32Q230 8 306 30M121 32Q270-6 401 18" stroke="#e0213f" strokeWidth="2" fill="none" />
        <use href="#scene-reindeer" x="150" y="4" />
        <use href="#scene-reindeer" x="245" y="-6" />
        <use href="#scene-reindeer" x="340" y="-18" />
        <circle className="scene-blink" cx="426" cy="1" r="3.4" fill="#ff3b4e" />
      </svg>
    </div>
  );
}

function Witch() {
  return (
    <div className="scene-flyer scene-flyer-witch absolute">
      <svg viewBox="0 0 200 90" width="100%" className="scene-bob">
        <path d="M10 62 170 44" stroke="#2a1608" strokeWidth="4" strokeLinecap="round" />
        <path d="M4 56q-8 6 2 14 4-6 6-8l-6-2q4 0 8-2Z" fill="#7a4a1c" />
        <path d="M70 58q10-24 32-24 10 0 14 10l-6 10q-14-6-40 4Z" fill="#140a22" stroke="#fb923c" strokeWidth="1.2" />
        <circle cx="106" cy="30" r="8" fill="#140a22" stroke="#fb923c" strokeWidth="1.2" />
        <path d="M94 26 128 20 104 -2Z" fill="#140a22" stroke="#fb923c" strokeWidth="1.2" />
        <path d="M90 26h40" stroke="#140a22" strokeWidth="4" strokeLinecap="round" />
        <path d="M96 52q20 12 40 2" stroke="#140a22" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function Balloons() {
  const balloons = [[6, "#e0213f", 0], [28, "#f48aa8", -5], [57, "#ffffff", -10], [86, "#b0143a", -3]];
  return (
    <>
      {balloons.map(([x, color, delay], i) => (
        <div className={`scene-balloon absolute ${i === 2 ? "max-sm:hidden" : ""}`} key={i} style={{ left: `${x}%`, animationDelay: `${delay}s` }}>
          <svg viewBox="0 0 40 90" width="100%">
            <path d="M20 34 8.6 22.6A7.4 7.4 0 0 1 20 13a7.4 7.4 0 0 1 11.4 9.6Z" transform="translate(-20 -16) scale(2)" fill={color} stroke="rgba(0,0,0,.25)" strokeWidth=".6" />
            <path d="M20 52q-6 12 2 22t-2 16" stroke="rgba(255,255,255,.6)" strokeWidth="1" fill="none" />
          </svg>
        </div>
      ))}
    </>
  );
}

function Fireworks({ colors = ["var(--teal-light)", "var(--teal-action)", "#ffffff", "var(--teal)"] }) {
  const bursts = [[14, 20, 0], [44, 12, -1.1], [70, 24, -2.2], [90, 10, -0.6]];
  return (
    <>
      {bursts.map(([x, y, delay], i) => (
        <div className={`scene-firework absolute ${i === 2 ? "max-sm:hidden" : ""}`} key={i} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s`, color: colors[i % colors.length] }}>
          {Array.from({ length: 12 }, (_, s) => (
            <span key={s} style={{ transform: `rotate(${s * 30}deg)`, animationDelay: `${delay}s` }} />
          ))}
        </div>
      ))}
    </>
  );
}

// ── Hanging decorations ────────────────────────────────────

const hangerSpots = [
  { left: "4%", len: 70 },
  { left: "11%", len: 38, hideMobile: true },
  { left: "47%", len: 30, hideMobile: true },
  { left: "86%", len: 84 },
  { left: "95%", len: 44 },
];

function HangerShape({ kind, index }) {
  if (kind === "hearts") {
    const fill = ["#e0213f", "#f48aa8", "#ffffff"][index % 3];
    return <path d="M0 26-11.3 14.7A7 7 0 0 1 0 5.6a7 7 0 0 1 11.3 9.1Z" fill={fill} stroke="rgba(0,0,0,.25)" />;
  }
  if (kind === "stars") {
    return <path d="m0 0 4.4 9.5 10.4 1-7.8 7 2.3 10.2L0 22.4l-9.3 5.3L-7 17.5l-7.8-7 10.4-1Z" fill="var(--teal-light)" stroke="rgba(0,0,0,.25)" />;
  }
  if (kind === "spiders") {
    return (
      <g fill="#140a22" stroke="#140a22">
        <circle cx="0" cy="10" r="7" />
        <path d="M-6 6-14 0M-6 10h-10M-6 14l-8 6M6 6l8-6M6 10h10M6 14l8 6" strokeWidth="1.6" fill="none" />
        <circle cx="-2.5" cy="9" r="1.2" fill="#fb923c" stroke="none" />
        <circle cx="2.5" cy="9" r="1.2" fill="#fb923c" stroke="none" />
      </g>
    );
  }
  // baubles: glossy red, green and gold balls (as in the Christmas reference)
  const [light, mid, deep] = [
    ["#ff7a90", "#b3122b", "#5a0a16"],
    ["#4fd195", "#0b5a3d", "#04241a"],
    ["#f6e3a8", "#b88a3e", "#5e4416"],
  ][index % 3];
  const id = `scene-bauble-${index}`;
  return (
    <g>
      <defs>
        <radialGradient cx="30%" cy="30%" id={id} r="75%">
          <stop offset="0%" stopColor={light} />
          <stop offset="60%" stopColor={mid} />
          <stop offset="100%" stopColor={deep} />
        </radialGradient>
      </defs>
      <rect x="-4" y="0" width="8" height="5" rx="1" fill="#c9a46a" />
      <circle cx="0" cy="21" r="17" fill={`url(#${id})`} stroke="rgba(212,175,106,.55)" strokeWidth="2" />
    </g>
  );
}

function Hangers({ kind }) {
  return (
    <>
      {hangerSpots.map((spot, index) => (
        <div
          className={`scene-hanger absolute top-0 ${spot.hideMobile ? "max-sm:hidden" : ""}`}
          key={index}
          style={{ left: spot.left, animationDelay: `${-index * 1.3}s` }}
        >
          <svg width="40" height={spot.len + 44} viewBox={`-20 0 40 ${spot.len + 44}`} overflow="visible">
            <line x1="0" y1="0" x2="0" y2={spot.len} stroke="rgba(255,255,255,.45)" strokeWidth="1" />
            <g transform={`translate(0 ${spot.len})`}>
              <HangerShape index={index} kind={kind} />
            </g>
          </svg>
        </div>
      ))}
    </>
  );
}

// ── Ground silhouettes (bottom of the banner) ──────────────

function Pine({ x, y, s = 1, snow = true }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <polygon points="0,-46 15,-20 7,-20 20,4 -20,4 -7,-20 -15,-20" fill="#0d4a35" />
      {snow ? <polygon points="0,-46 7,-34 -7,-34" fill="#f2f7f5" /> : null}
    </g>
  );
}

function House({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-18" y="-22" width="36" height="24" fill="#2b2320" />
      <polygon points="-23,-22 0,-40 23,-22" fill="#eef4f2" />
      <rect x="-12" y="-15" width="7" height="8" fill="#ffd27a" className="scene-window" />
      <rect x="5" y="-15" width="7" height="8" fill="#ffc15a" className="scene-window" />
      <rect x="8" y="-36" width="5" height="9" fill="#3a2e29" />
    </g>
  );
}

function Pumpkin({ x, y, s = 1, face = false }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="16" ry="12" fill="#e8721a" />
      <path d="M-6-11v22M6-11v22" stroke="rgba(120,50,5,.35)" strokeWidth="2" />
      <rect x="-2" y="-17" width="4" height="7" rx="1" fill="#4a6b2a" />
      {face ? <path d="M-8-3h5l-2.5-4ZM3-3h5L5.5-7ZM-8 3q8 6 16 0l-3 1-2-2-3 2-3-2-2 2Z" fill="#ffd27a" className="scene-window" /> : null}
    </g>
  );
}

function Ground({ kind, fieldColors }) {
  if (kind === "snow-village") {
    return (
      <svg className="scene-ground absolute inset-x-0 bottom-0" viewBox="0 0 1440 170" preserveAspectRatio="xMidYMax slice">
        <path d="M0 80Q240 30 520 72T1040 60T1440 50V170H0Z" fill={dark(35)} />
        {[[170, 82, 1], [560, 86, 1.15], [850, 80, 0.9], [1130, 72, 1.2], [1310, 68, 0.85]].map(([x, y, s]) => <House key={x} x={x} y={y} s={s} />)}
        {[[90, 92, 1], [250, 88, 0.8], [430, 94, 1.1], [690, 84, 0.9], [990, 82, 1.1], [1240, 72, 0.85], [1385, 74, 1]].map(([x, y, s]) => <Pine key={x} x={x} y={y} s={s} />)}
        <path d="M0 126Q300 92 620 120T1440 106V170H0Z" fill="#e9f1ee" />
        <path d="M0 150Q360 128 760 148T1440 140V170H0Z" fill="#cfdcd8" />
        <Pine x={36} y={140} s={1.5} />
        <Pine x={1404} y={134} s={1.6} />
      </svg>
    );
  }

  if (kind === "pumpkin-patch" || kind === "spooky-patch") {
    const spooky = kind === "spooky-patch";
    return (
      <svg className="scene-ground absolute inset-x-0 bottom-0" viewBox="0 0 1440 170" preserveAspectRatio="xMidYMax slice">
        <path d="M0 86Q260 46 560 80T1100 66T1440 58V170H0Z" fill={dark(30)} />
        {spooky ? (
          <path d="M1210 70v-46m0 22-22-18m22 6 18-20m-18 34 26-10M1196 34l-12-6" stroke={dark(55)} strokeWidth="6" strokeLinecap="round" fill="none" />
        ) : null}
        <path d="M0 112h1440" stroke={dark(55)} strokeWidth="3" />
        {Array.from({ length: 25 }, (_, i) => <rect key={i} x={i * 60 + 10} y="98" width="6" height="22" fill={dark(55)} />)}
        <path d="M0 122Q320 100 700 120T1440 112V170H0Z" fill={dark(50)} />
        {[[90, 136, 1.1], [180, 146, 0.8], [520, 140, 1], [930, 144, 0.9], [1260, 136, 1.2], [1350, 148, 0.75]].map(([x, y, s], i) => (
          <Pumpkin face={spooky && i % 2 === 0} key={x} s={s} x={x} y={y} />
        ))}
      </svg>
    );
  }

  if (kind === "skyline") {
    const buildings = [[0, 70, 60], [64, 40, 50], [118, 88, 40], [162, 56, 70], [236, 30, 46], [286, 76, 58], [348, 50, 44], [396, 96, 64], [464, 62, 52], [520, 36, 40], [564, 84, 70], [638, 52, 48], [690, 104, 56], [750, 66, 60], [814, 44, 42], [860, 90, 66], [930, 58, 50], [984, 34, 44], [1032, 80, 62], [1098, 48, 50], [1152, 98, 58], [1214, 64, 46], [1264, 40, 60], [1328, 82, 52], [1384, 56, 56]];
    return (
      <svg className="scene-ground absolute inset-x-0 bottom-0" viewBox="0 0 1440 170" preserveAspectRatio="xMidYMax slice">
        <defs>
          <pattern id="scene-windows" width="12" height="14" patternUnits="userSpaceOnUse">
            <rect x="3" y="3" width="5" height="6" fill="var(--teal-light)" opacity=".55" />
          </pattern>
        </defs>
        {buildings.map(([x, h, w]) => (
          <g key={x}>
            <rect x={x} y={170 - h} width={w - 4} height={h} fill={dark(45)} />
            <rect x={x + 4} y={174 - h} width={w - 12} height={h - 10} fill="url(#scene-windows)" className="scene-window" />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "meadow") {
    const flowers = [[60, 140, "#f9cfe0"], [140, 150, "#f6e7a1"], [260, 138, "#ffffff"], [420, 152, "#d9cdf2"], [610, 144, "#f9cfe0"], [780, 150, "#f6e7a1"], [930, 140, "#ffffff"], [1090, 150, "#f9cfe0"], [1230, 142, "#d9cdf2"], [1380, 148, "#f6e7a1"]];
    return (
      <svg className="scene-ground absolute inset-x-0 bottom-0" viewBox="0 0 1440 170" preserveAspectRatio="xMidYMax slice">
        <path d="M0 90Q260 50 560 84T1100 70T1440 62V170H0Z" fill="#2f6b40" opacity=".85" />
        <path d="M0 122Q320 96 700 118T1440 108V170H0Z" fill="#3d7a4e" />
        {flowers.map(([x, y, c]) => (
          <g key={x} transform={`translate(${x} ${y})`}>
            <path d="M0 0v14" stroke="#2f6b40" strokeWidth="2" />
            {[0, 72, 144, 216, 288].map((r) => <ellipse key={r} cx="0" cy="-5" rx="3" ry="5" fill={c} transform={`rotate(${r})`} />)}
            <circle r="2.4" fill="#f2c94c" />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "field") {
    const [turf, stripe] = fieldColors ?? ["#1f5a2c", "#24663a"];
    return (
      <svg className="scene-ground absolute inset-x-0 bottom-0" viewBox="0 0 1440 170" preserveAspectRatio="xMidYMax slice">
        {[110, 1330].map((x) => (
          <g key={x}>
            <path d={`M${x} 110V30`} stroke={dark(40)} strokeWidth="6" />
            <rect x={x - 26} y="16" width="52" height="16" rx="3" fill={dark(30)} />
            <rect x={x - 22} y="19" width="44" height="10" rx="2" fill="#fffbe8" className="scene-window" />
            <path d={`M${x - 22} 30 ${x - 120} 170H${x + 120}L${x + 22} 30Z`} fill="#fffbe8" opacity=".06" />
          </g>
        ))}
        <path d="M0 110H1440V170H0Z" fill={turf} />
        {Array.from({ length: 12 }, (_, i) => <rect key={i} x={i * 120} y="110" width="60" height="60" fill={stripe} />)}
        {Array.from({ length: 13 }, (_, i) => <path key={i} d={`M${i * 120} 110v60`} stroke="rgba(255,255,255,.55)" strokeWidth="2" />)}
        <path d="M0 110H1440" stroke="rgba(255,255,255,.7)" strokeWidth="3" />
      </svg>
    );
  }

  return null;
}

// ── Scene ──────────────────────────────────────────────────

export function HeroScene({ scene }) {
  // Optional per-theme colours: sky gradient and the two aurora glows.
  const style = {
    ...(scene.sky ? { "--scene-sky": scene.sky } : {}),
    ...(scene.glowColors ? { "--glow-a": scene.glowColors[0], "--glow-b": scene.glowColors[1] } : {}),
  };

  return (
    <div className="hero-scene absolute inset-0" style={style}>
      {scene.sky ? <div className="scene-sky-custom absolute inset-0" /> : null}
      {scene.glow !== false ? <Glow /> : null}
      {scene.stars ? <Stars /> : null}
      {scene.moon ? <Moon tone={scene.moon} /> : null}
      {scene.bokeh ? <Bokeh colors={scene.bokehColors} /> : null}
      {scene.flyer === "santa" ? <Santa /> : null}
      {scene.flyer === "sleigh" ? <Sleigh /> : null}
      {scene.flyer === "witch" ? <Witch /> : null}
      {scene.flyer === "balloons" ? <Balloons /> : null}
      {scene.flyer === "fireworks" ? <Fireworks colors={scene.fireworkColors} /> : null}
      {scene.hangers ? <Hangers kind={scene.hangers} /> : null}
      {scene.ground ? <Ground fieldColors={scene.fieldColors} kind={scene.ground} /> : null}
    </div>
  );
}
