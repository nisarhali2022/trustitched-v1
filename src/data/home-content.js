// Home page content, following the approved reference design (index.html).
// Offer details (30% / XMAS30 / countdown) were removed on purpose: no live offer.
// 24/7 live chat and rush orders are confirmed services. DTF printing and monthly
// plans are no longer offered.

const sewOut = (file) => `/images/sew-outs/${file}`;
const seasonal = (file) => `/images/seasonal/${file}`;

export const homeImages = {
  // thumb: small ready-made version for the round "Recent stitches" photos in the hero
  bCap: { src: sewOut("b-monogram-3d-puff-embroidered-trucker-cap.webp"), thumb: sewOut("thumbs/b-monogram-3d-puff-embroidered-trucker-cap-thumb.webp"), alt: "Tan and orange trucker cap with an orange 3D puff B monogram" },
  amenCap: { src: sewOut("amen-3d-puff-embroidered-cap.webp"), thumb: sewOut("thumbs/amen-3d-puff-embroidered-cap-thumb.webp"), alt: "Cream and green cap with tan 3D puff AMEN lettering" },
  duck: { src: sewOut("patchwork-duck-applique-embroidered-sweatshirt.webp"), thumb: sewOut("thumbs/patchwork-duck-applique-embroidered-sweatshirt-thumb.webp"), alt: "Patchwork fabric appliqué duck stitched on a dark sweatshirt" },
  smitty: { src: sewOut("smitty-brand-co-logo-embroidered-sweatshirt.webp"), alt: "Sand sweatshirt embroidered with The Smitty Brand Co. logo and a small American flag" },
  jesusHoodie: { src: sewOut("jesus-loves-you-applique-embroidered-hoodie.webp"), alt: "Cream hoodie with large black appliqué letters spelling Jesus, a red heart, and You" },
  ccpBeanie: { src: sewOut("ccp-logo-embroidered-safety-yellow-beanie.webp"), alt: "Safety yellow knit beanie embroidered with a green and gold CCP sun badge" },
  love: { src: sewOut("love-needs-no-words-embroidered-sweatshirt.webp"), alt: "Love Needs No Words embroidery with colorful figures on a blue sweatshirt" },
  aztecCap: { src: sewOut("aztec-headdress-figure-embroidered-washed-blue-cap.webp"), alt: "Washed blue cap embroidered in light gray thread with a figure wearing a feathered Aztec headdress" },
  koroniCap: { src: sewOut("koroni-castle-greek-lettering-embroidered-navy-cap.webp"), alt: "Navy cap embroidered with Greek lettering, the Koroni castle tower, a sailboat and blue waves" },
  bohotCap: { src: sewOut("bohot-cattle-company-logo-embroidered-cap.webp"), alt: "Cream and brown cap embroidered with the Bohot Cattle Company T smile logo" },
  twistedCap: { src: sewOut("twisted-stables-logo-embroidered-trucker-cap.webp"), alt: "Charcoal trucker cap embroidered with the Twisted Stables logo in purple and lime green" },
  heartsTag: { src: sewOut("valentines-hearts-monogram-embroidered-ornament.webp"), alt: "Round cream tag embroidered in red with two hearts holding the initials R and N" },
  easterSash: { src: sewOut("easter-bunny-embroidered-door-sash.webp"), alt: "Green door sash embroidered with a bunny and an Easter basket" },
  thanksgiving: { src: seasonal("happy-thanksgiving-turkey-embroidery-design.webp"), alt: "Happy Thanksgiving embroidery design with a turkey, pumpkins, and a cornucopia" },
  giveThanks: { src: seasonal("give-thanks-autumn-wreath-embroidery-design.webp"), alt: "Give Thanks embroidery design inside an autumn leaf and pumpkin wreath" },
  thankful: { src: seasonal("thankful-grateful-blessed-embroidery-design.webp"), alt: "Thankful, Grateful, Blessed embroidery design with pumpkins and sunflowers" },
  gobble: { src: seasonal("gobble-till-you-wobble-turkey-embroidery-design.webp"), alt: "Gobble Till You Wobble embroidery design with a cartoon turkey" },
  heroBefore: { src: "/images/home/hero-vector-before.webp", alt: "A blue-and-gold macaw portrait constructed as clean, detailed vector artwork" },
  heroAfter: { src: "/images/home/hero-embroidery-after.webp", alt: "The matching macaw portrait rendered as richly textured embroidery" },
};

export const marqueeItems = ["Embroidery Digitizing", "3D Puff", "Appliqué", "Custom Embroidered Patches", "Patch Digitizing", "Vector Art"];

export const services = [
  { n: "01", title: "Embroidery Digitizing", meta: "Caps · Left chest · Full back", text: "Clean, efficient stitch files for caps, left chest, full back and custom designs.", href: "/embroidery-digitizing", image: homeImages.smitty, icon: "star" },
  { n: "02", title: "3D Puff Digitizing", meta: "Raised letters · Cap logos", text: "Bold, raised lettering and logos with sharp edges that sew out beautifully.", href: "/embroidery-digitizing", image: homeImages.bCap, icon: "puff" },
  { n: "03", title: "Appliqué Digitizing", meta: "Letters · Shapes · Borders", text: "Smooth placement, tack-down and satin borders without the fraying.", href: "/embroidery-digitizing", image: homeImages.jesusHoodie, icon: "applique" },
  { n: "04", title: "Patch Digitizing", meta: "Round · Square · Custom", text: "Merrowed-style borders and patch-ready files built for tidy edges.", href: "/embroidery-digitizing", image: homeImages.ccpBeanie, imagePosition: "50% 78%", icon: "patch" },
  { n: "05", title: "Custom Embroidered Patches", meta: "Iron-on · Sew-on · Custom shapes", text: "Finished embroidered patches made from your design for teams, uniforms, caps and jackets.", href: "/custom-embroidered-patches", image: { src: "/images/patches/hug-teddy-bear-hat-embroidered-patch-wide.webp", alt: "Embroidered patch of a brown teddy bear in a tan hat holding the word HUG, with a black outline border" }, icon: "patch" },
  { n: "06", title: "Vector Art", meta: "AI · SVG · EPS · PDF", text: "Redrawn, scalable artwork from low-quality images, ready for production.", href: "/vector-art", art: "vector", icon: "pen" },
];

export const whyItems = [
  ["Professional Digitizing", "Hand-built files, never auto-converted."],
  ["Quality Stitch Results", "Tested sew-outs for clean, smooth finishes."],
  ["Fast Turnaround", "Quick delivery, with rush available."],
  ["Affordable Pricing", "Clear, direct quotes. No surprises."],
  ["Customer Support", "Real people who help when you get stuck."],
];

export const recentWork = [
  [homeImages.bCap, "3D Puff Cap"],
  [homeImages.aztecCap, "Cap Embroidery"],
  [homeImages.jesusHoodie, "Appliqué Hoodie"],
  [homeImages.duck, "Appliqué"],
  [homeImages.love, "Sweatshirt"],
  [homeImages.smitty, "Sweatshirt"],
  [homeImages.koroniCap, "Scene & Lettering Cap"],
  [homeImages.bohotCap, "Cap Embroidery"],
];

export const stitchOn = [
  [homeImages.twistedCap, "Caps & Hats", "Flat, curved, trucker, snapback, puff"],
  [homeImages.love, "Hoodies & Sweatshirts", "Left chest, full back, appliqué"],
  [homeImages.heartsTag, "Towels & Gifts", "Golf towels, napkins, monograms"],
  [homeImages.ccpBeanie, "Beanies", "Patches and small badges"],
  [homeImages.easterSash, "Home Decor", "Sashes, linens, seasonal pieces"],
];

export const steps = [
  ["Upload your design", "Send your logo or idea in any format."],
  ["Get a quote", "Fast, direct pricing for your project."],
  ["Receive your file", "Production-ready file in your format."],
  ["Stitch with confidence", "Sew it out and love the result."],
];

// Real client reviews only. The section stays hidden until at least one is added.
// Format: { photo: homeImages.bCap, chip: "3D Puff Cap", text: "…", name: "Jane D.", order: "Cap order" }
export const reviews = [];

export const homeFaqs = [
  ["What file formats do I get?", "Your digitized file arrives in the format your machine runs, such as DST, PES, EMB and more. Just tell us your machine when you order."],
  ["How fast is the turnaround?", "Most standard designs are delivered within 12–24 hours, and your quote shows the exact time. Rush turnaround is available when you’re on a deadline."],
  ["Can you digitize 3D puff and caps?", "Yes. Caps, 3D puff, appliqué, left chest and full back are what we do every day."],
  ["Do you make custom embroidered patches?", "Yes. We make finished embroidered patches from your design, with iron-on or sew-on backing and custom shapes and borders. Patches are priced per piece, and the price drops as the quantity goes up."],
  ["What is the difference between patch digitizing and custom patches?", "Patch digitizing gives you a patch-ready embroidery file to stitch yourself. Custom patches are finished physical patches that we make and send to you."],
  ["How much do your services cost?", "Embroidery digitizing is priced per design, vector art per file and custom patches per piece. See the Pricing page for every tier; we confirm the exact price before work begins."],
  ["Are revisions included?", "Reasonable minor revisions are included when they stay within the confirmed brief. Major changes to the artwork, size, placement, application, or technique may require a revised quote."],
];
