// Home hero slider (vector artwork → finished embroidery), one pair per season.
//
// To add a season: put two aligned 4:3 images in public/images/hero/
//   <theme-id>-vector.webp      (the vector artwork)
//   <theme-id>-embroidery.webp  (the same design, stitched)
// then add an entry below with the theme id from src/themes/themes.js
// (e.g. "christmas", "halloween", "thanksgiving", "valentines", "football-season").
// Themes without an entry show the default macaw pair.

export const defaultHeroSlide = {
  before: { src: "/images/home/hero-vector-before.webp", alt: "A blue-and-gold macaw portrait constructed as clean, detailed vector artwork" },
  after: { src: "/images/home/hero-embroidery-after.webp", alt: "The matching macaw portrait rendered as richly textured embroidery" },
  beforeLabel: "Vector artwork",
  afterLabel: "Finished embroidery",
  ariaLabel: "Compare the vector macaw artwork with the finished embroidery",
  caption: "Drag the comparison slider to reveal the vector artwork and its finished embroidered version.",
};

const seasonalHeroSlides = {
  // christmas: {
  //   before: { src: "/images/hero/christmas-vector.webp", alt: "…vector artwork…" },
  //   after: { src: "/images/hero/christmas-embroidery.webp", alt: "…finished embroidery…" },
  // },
};

export function getHeroSlide(themeId) {
  const seasonal = seasonalHeroSlides[themeId];
  if (!seasonal) return { ...defaultHeroSlide, seasonal: false };

  return {
    ...defaultHeroSlide,
    ariaLabel: "Compare the seasonal vector artwork with the finished embroidery",
    caption: "Drag the comparison slider to reveal the seasonal vector artwork and its finished embroidered version.",
    ...seasonal,
    seasonal: true,
  };
}
