// Event themes. Colours live in src/app/globals.css under [data-theme="…"].
// Everything here is optional: leave a field null and that feature is off.
//
// banner.offer: add a real, confirmed offer only (e.g. "30% off your first order, code XMAS30").
// collection:   optional seasonal section on the home page (real work or seasonal designs).
// scene:        animated hero banner layers (src/components/hero-scene.js).
// garland:      lights or bunting under the header (src/components/header-garland.js).
// mode:         "dark" turns the whole site into the night skin (see globals.css).
// effectCount:  how many snowflakes/particles (default 18).
// badge:        greeting pill in the home hero (e.g. "Happy Thanksgiving").
// holiday:      true = home headline "Stitch-perfect files, wrapped for the holidays."

const sewOut = (file) => `/images/sew-outs/${file}`;
const seasonal = (file) => `/images/seasonal/${file}`;

const collections = {
  halloween: {
    eyebrow: "Halloween sew-outs & designs",
    title: "Spooky season, stitched for real.",
    description: "Halloween pieces from the studio. Send your own spooky designs and we will digitize them for your machine.",
    cta: "Send Halloween artwork",
    items: [
      { src: sewOut("spooky-ghost-halloween-embroidered-sweatshirt.webp"), title: "Spooky Ghost Sweatshirt", badge: "Real sew-out", alt: "Gray sweatshirt embroidered with a ghost in a witch hat, bats, stars, and yellow SPOOKY lettering" },
      { src: sewOut("feeling-spooky-halloween-embroidered-cap.webp"), title: "Feeling Spooky Cap", badge: "Real sew-out", alt: "White cap with black script feeling and orange SPOOKY lettering" },
      { src: seasonal("spooky-ghost-witch-hat-halloween-embroidery-design.webp"), title: "Spooky Ghost", badge: "Design", fit: "contain", alt: "Spooky embroidery design with a smiling ghost in a purple-banded witch hat, bats, stars and orange SPOOKY lettering" },
      { src: seasonal("halloween-skull-witch-hat-embroidery-design.webp"), title: "Halloween Skull", badge: "Design", fit: "contain", alt: "Halloween embroidery design with a grinning skull in a witch hat between two bats, above orange HALLOWEEN lettering and purple scrollwork" },
      { src: seasonal("trick-or-treat-jack-o-lantern-embroidery-design.webp"), title: "Trick or Treat", badge: "Design", fit: "contain", alt: "Trick or Treat embroidery design with a grinning jack-o-lantern, bats and green swirling vines" },
    ],
  },
  thanksgiving: {
    eyebrow: "Thanksgiving collection",
    title: "Seasonal designs, ready to stitch.",
    description: "Thanksgiving embroidery designs from the studio. Send your own holiday artwork and we will digitize it for your machine.",
    cta: "Send holiday artwork",
    items: [
      { src: seasonal("happy-thanksgiving-turkey-embroidery-design.webp"), title: "Happy Thanksgiving", fit: "contain", alt: "Happy Thanksgiving embroidery design with a turkey, pumpkins, and a cornucopia" },
      { src: seasonal("give-thanks-autumn-wreath-embroidery-design.webp"), title: "Give Thanks", fit: "contain", alt: "Give Thanks embroidery design inside an autumn leaf and pumpkin wreath" },
      { src: seasonal("thankful-grateful-blessed-embroidery-design.webp"), title: "Thankful · Grateful · Blessed", fit: "contain", alt: "Thankful, Grateful, Blessed embroidery design with pumpkins and sunflowers" },
      { src: seasonal("gobble-till-you-wobble-turkey-embroidery-design.webp"), title: "Gobble Till You Wobble", fit: "contain", alt: "Gobble Till You Wobble embroidery design with a cartoon turkey" },
    ],
  },
  valentines: {
    eyebrow: "Valentine's sew-outs & patches",
    title: "Hearts, initials, and gifts with love.",
    description: "Valentine's pieces from the studio. Send names, initials, or heart designs for a free quote.",
    cta: "Send Valentine's artwork",
    items: [
      { src: sewOut("valentines-hearts-monogram-embroidered-ornament.webp"), title: "Hearts Monogram Tag", badge: "Real sew-out", alt: "Round cream tag embroidered in red with two hearts holding the initials R and N under a bow" },
      { src: sewOut("jesus-loves-you-applique-embroidered-hoodie.webp"), title: "Jesus ♥ You Hoodie", badge: "Real sew-out", alt: "Cream hoodie with large black appliqué letters spelling Jesus, a red heart, and You" },
      { src: "/images/patches/hug-mama-and-baby-bear-embroidered-patch.webp", title: "Hug Bears Patch", badge: "Patch design", alt: "Embroidered patch of a brown bear hugging a cream baby bear above the word HUG, with a black merrowed outline" },
      { src: "/images/patches/hug-teddy-bear-hat-embroidered-patch.webp", title: "Teddy Bear Hug Patch", badge: "Patch design", alt: "Embroidered patch of a brown teddy bear in a tan hat holding the word HUG, with a black outline border" },
    ],
  },
  football: {
    eyebrow: "Game day sew-outs",
    title: "Ready for football season.",
    description: "Game day and team pieces from the studio. Send your team or fan artwork for a free quote.",
    cta: "Send team artwork",
    items: [
      { src: sewOut("football-season-embroidered-wreath-door-sash.webp"), title: "Football Season Door Sash", badge: "Real sew-out", alt: "Grapevine wreath with a cream door sash embroidered with It's Football Season Y'all beside football-print fabric" },
      { src: sewOut("letter-c-3d-puff-embroidered-flat-bill-cap.webp"), title: "Letter C Flat-Bill Cap", badge: "Real sew-out", alt: "Black flat-bill cap with a black 3D puff letter C outlined in green" },
    ],
  },
};

export const themes = {
  0: {
    id: "normal",
    label: "Normal days",
    banner: null,
    effect: null,
  },
  1: {
    id: "christmas",
    label: "Christmas",
    badge: "Merry Christmas",
    holiday: true,
    mode: "dark",
    banner: {
      text: "Merry Christmas from Trustitched! Send holiday artwork early so it's ready for production.",
      offer: null,
      cta: { label: "Get free quote", href: "/contact" },
    },
    effect: "snow",
    scene: {
      stars: true,
      moon: "silver",
      bokeh: true,
      bokehColors: ["rgba(255,210,120,.55)", "rgba(224,33,63,.5)", "rgba(255,235,170,.45)", "rgba(60,200,130,.4)"],
      flyer: "santa",
      hangers: "baubles",
      ground: "snow-village",
      sky: "radial-gradient(ellipse at 80% 25%, rgba(179,18,43,.3), transparent 55%), linear-gradient(180deg, #020913 0%, #05211a 58%, #0b3a2a 100%)",
      glowColors: ["#1fa36b", "#b3122b"],
    },
    effectCount: 40,
    garland: { type: "lights", colors: ["#e0213f", "#d4af6a", "#ffffff", "#2fa36b"] },
  },
  2: {
    id: "black-friday",
    label: "Black Friday",
    badge: "Black Friday Week",
    holiday: true,
    mode: "dark",
    banner: {
      text: "Black Friday week: send your artwork today for a free quote.",
      offer: null,
      cta: { label: "Get free quote", href: "/contact" },
    },
    effect: null,
    scene: { bokeh: true, hangers: "stars", ground: "skyline" },
    garland: { type: "lights", colors: ["#f2c94c", "#ffffff", "#c9a227"] },
  },
  3: {
    id: "halloween",
    label: "Halloween",
    badge: "Happy Halloween",
    mode: "dark",
    banner: {
      text: "Happy Halloween! Spooky-season designs? Send your artwork for a free quote.",
      offer: null,
      cta: { label: "Get free quote", href: "/contact" },
    },
    effect: "bats",
    scene: { stars: true, moon: "harvest", flyer: "witch", hangers: "spiders", ground: "spooky-patch" },
    garland: { type: "lights", colors: ["#f97316", "#7c3aed", "#84cc16", "#fb923c"] },
    collection: collections.halloween,
  },
  4: {
    id: "thanksgiving",
    label: "Thanksgiving",
    badge: "Happy Thanksgiving",
    holiday: true,
    banner: {
      text: "Happy Thanksgiving! Thank you to every customer who trusts us with their artwork.",
      offer: null,
      cta: { label: "Get free quote", href: "/contact" },
    },
    effect: "leaves",
    scene: { bokeh: true, ground: "pumpkin-patch" },
    garland: { type: "bunting", colors: ["#e8902a", "#9a3a12", "#f6b26b", "#c2671b"] },
  },
  5: {
    id: "new-year",
    label: "New Year",
    badge: "Happy New Year",
    holiday: true,
    mode: "dark",
    banner: {
      text: "Happy New Year from Trustitched! Start the year with production-ready files.",
      offer: null,
      cta: { label: "Get free quote", href: "/contact" },
    },
    effect: "confetti",
    scene: { stars: true, flyer: "fireworks", hangers: "stars", ground: "skyline", fireworkColors: ["#e6c66a", "#c0c0c8", "#ffffff", "#d9b45a"] },
    garland: { type: "lights", colors: ["#e6c66a", "#c0c0c8", "#ffffff"] },
  },
  6: {
    id: "valentines",
    label: "Valentine's Day",
    badge: "Happy Valentine's Day",
    banner: {
      text: "Happy Valentine's Day! Planning hearts, names, or monograms? Send your artwork for a free quote.",
      offer: null,
      cta: { label: "Get free quote", href: "/contact" },
    },
    effect: "hearts",
    scene: { bokeh: true, flyer: "balloons", hangers: "hearts" },
    garland: { type: "lights", colors: ["#e0213f", "#f48aa8", "#ffffff"] },
    collection: collections.valentines,
  },
  7: {
    id: "spring",
    label: "Spring",
    badge: "Hello Spring",
    banner: {
      text: "Spring is here! Send your seasonal artwork for a free quote.",
      offer: null,
      cta: { label: "Get free quote", href: "/contact" },
    },
    effect: "petals",
    scene: { bokeh: true, ground: "meadow" },
    garland: { type: "bunting", colors: ["#f9cfe0", "#f6e7a1", "#c9e7d4", "#d9cdf2"] },
  },

  // ── Added holidays ──
  8: {
    id: "st-patricks",
    label: "St. Patrick's Day",
    badge: "Happy St. Patrick's Day",
    banner: { text: "Happy St. Patrick's Day! Send your green designs for a free quote.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: "clovers",
    scene: { bokeh: true, ground: "meadow" },
    garland: { type: "bunting", colors: ["#1b7a43", "#ffffff", "#e8c768"] },
  },
  9: {
    id: "mothers-day",
    label: "Mother's Day",
    badge: "Happy Mother's Day",
    banner: { text: "Mother's Day is coming! Order names, monograms, and gifts early so they're ready on time.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: "petals",
    scene: { bokeh: true, hangers: "hearts", ground: "meadow" },
    garland: { type: "bunting", colors: ["#f6c1d9", "#a8346d", "#fff8fb", "#d9cdf2"] },
  },
  10: {
    id: "fathers-day",
    label: "Father's Day",
    badge: "Happy Father's Day",
    banner: { text: "Father's Day is coming! Caps, polos, and gifts: send your artwork early.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: null,
    scene: { stars: true, ground: "field" },
    garland: { type: "bunting", colors: ["#1b2a41", "#d9c3a0", "#6b4f2a"] },
  },
  11: {
    id: "july-4th",
    label: "4th of July",
    badge: "Happy 4th of July",
    banner: { text: "Happy 4th of July! Red, white, and blue designs? Send your artwork for a free quote.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: "stars",
    scene: { stars: true, flyer: "fireworks", ground: "skyline", fireworkColors: ["#ff4d5e", "#ffffff", "#5b8cff", "#ffffff"] },
    garland: { type: "bunting", colors: ["#c8102e", "#ffffff", "#2b4fa3"] },
  },
  12: {
    id: "back-to-school",
    label: "Back to School",
    badge: "Back to School",
    banner: { text: "Back to school! School, club, and team logos digitized for uniforms and spirit wear.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: null,
    scene: { bokeh: true, ground: "skyline" },
    garland: { type: "bunting", colors: ["#ffd166", "#e63946", "#1d3557", "#ffffff"] },
  },

  // ── Sports seasons ──
  // Generic names on purpose ("Big Game", "Basketball tournament season"):
  // league and event names are trademarks.
  13: {
    id: "big-game",
    label: "Big Game",
    badge: "Big Game Season",
    banner: { text: "Big Game season! Get team caps, jerseys, and fan gear designs digitized before kickoff.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: null,
    scene: { stars: true, ground: "field" },
    garland: { type: "bunting", colors: ["#14361f", "#ffffff", "#7a4a24"] },
  },
  14: {
    id: "basketball",
    label: "Basketball",
    badge: "Tournament Season",
    banner: { text: "Basketball tournament season! Send team and fan designs for a free quote.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: null,
    scene: { stars: true, ground: "field", fieldColors: ["#a8642c", "#b8723a"] },
    garland: { type: "bunting", colors: ["#ff8a3d", "#161616", "#ffffff"] },
  },
  15: {
    id: "baseball",
    label: "Baseball",
    badge: "Baseball Season",
    banner: { text: "Baseball season! Caps, jerseys, and patches: send your team artwork for a free quote.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: null,
    scene: { stars: true, ground: "field" },
    garland: { type: "bunting", colors: ["#0e2240", "#c8102e", "#f4e9d0"] },
  },
  16: {
    id: "football-season",
    label: "Football Season",
    badge: "Football Season",
    banner: { text: "Football season is here! Team caps, hoodies, and patches: send your artwork for a free quote.", offer: null, cta: { label: "Get free quote", href: "/contact" } },
    effect: null,
    scene: { stars: true, ground: "field" },
    garland: { type: "bunting", colors: ["#1e3a24", "#f2c94c", "#ffffff"] },
    collection: collections.football,
  },
};
