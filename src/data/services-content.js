// Our three services and every option under them. Each service has its own page
// (see `servicePages` below), opened from the "Services" menu in the header.
// Starting prices are taken from the Pricing page (src/data/pricing-content.js),
// so every page always shows the same price.

import { formatPrice, pricingGroups } from "./pricing-content";

const baseGroups = [
  {
    id: "embroidery-digitizing",
    title: "Embroidery Digitizing",
    priceNote: "Flat rate by complexity, with reasonable minor revisions included.",
    text: "Turn artwork into a stitch file prepared for a particular fabric, size and placement. Tell us the garment first so the file is planned for the way it will be sewn.",
    image: { src: "/images/sew-outs/smitty-brand-co-logo-embroidered-sweatshirt.webp", alt: "Sand sweatshirt embroidered with The Smitty Brand Co. logo and a small American flag" },
    items: [
      { icon: "star", title: "Logo Embroidery Digitizing", text: "Logos rebuilt as clean stitch files, with the essential lettering and brand details kept clear at the finished size.", points: ["Clean underlay and density", "Brand colours matched", "Any placement"] },
      { icon: "cap", title: "Hat & Cap Digitizing", text: "Caps add curved panels, seams and frame limits, so cap files are sequenced from the center out for clean registration.", points: ["Structured & unstructured caps", "Center-out sequencing", "Front, side and back"] },
      { icon: "shirt", title: "Left Chest & Shirt Digitizing", text: "Stitch plans matched to the shirt fabric and wearing position, from lightweight tees to piqué polos.", points: ["Polos, tees and uniforms", "Compact, crisp detail", "Fabric-aware settings"] },
      { icon: "jacket", title: "Jacket Back & Hoodie Digitizing", text: "Large designs planned for smooth coverage, sensible stitch direction and efficient color changes.", points: ["Full-back designs", "Optimised color changes", "Hoop-aware sizing"] },
      { icon: "puff", title: "3D Puff Digitizing", text: "Raised lettering and shapes with sharp edges and proper foam coverage. We confirm which parts should puff and which stay flat.", points: ["Tuned for cap work", "Crisp cut-through edges", "Puff-ready stitch order"] },
      { icon: "applique", title: "Appliqué Digitizing", text: "Placement, tack-down and satin border steps built to work with the fabric pieces you plan to use.", points: ["Letters and shapes", "Smooth, covered edges", "Fabric-friendly settings"] },
      { icon: "text", title: "Small Lettering Digitizing", text: "Small text is reviewed against the size and fabric, with column widths and spacing adjusted to stay readable.", points: ["Names and taglines", "Careful compensation", "Size review included"] },
      { icon: "patch", title: "Patch Digitizing", text: "A digital, patch-ready file for when you make patches yourself. Finished physical patches are a separate service.", points: ["Merrowed-style borders", "Round, square or custom", "Production-friendly files"] },
      { icon: "towel", title: "Names, Monograms & Towels", text: "Names, initials and monograms for towels, caps and clothing, with raised towel loops considered for legibility.", points: ["Personalized names", "Monogram styles", "Towels and terrycloth"] },
      { icon: "image", title: "Image & Photo Digitizing", text: "Photos and illustrations interpreted into stitches, agreeing which features and colors stay clear at the chosen size.", points: ["Pet and portrait designs", "Detailed illustrations", "Color planning"] },
      { icon: "file", title: "Embroidery File Formats", text: "Files delivered in the format your machine or software needs. Tell us the exact model when you order.", points: ["DST, PES, EXP, EMB", "JEF, VP3, XXX and more", "Production or editable files"] },
      { icon: "repair", title: "File Editing & Repair", text: "Fixes for existing files. Send the file and a sew-out photo so changes address the stitching, not just the preview.", points: ["Density and trims", "Resizing and edits", "Format conversion"] },
    ],
  },
  {
    id: "vector-art",
    title: "Vector Art Conversion",
    priceNote: "Delivered in AI, EPS, SVG and PDF.",
    text: "Rebuild image-based artwork as clean, editable vector shapes for the print or cutting workflow it is going to. The final files match your printer or machine requirements.",
    image: { src: "/images/home/service-vector-after.webp", alt: "A seated fox redrawn as clean full-color vector artwork" },
    items: [
      { icon: "pen", title: "Logo Vectorization & Redraw", text: "Recover a clean vector master when the original logo file is missing, using any brand reference you have.", points: ["Accurate proportions", "Editable paths", "Brand colours kept"] },
      { icon: "image", title: "Image to Vector Conversion", text: "JPG and PNG artwork rebuilt as vector shapes, agreeing how to handle shadows, textures and small details.", points: ["JPG, PNG, PDF sources", "Scans and photos", "Low-resolution images"] },
      { icon: "text", title: "Vector Line Art", text: "Outlined shapes or single paths, depending on whether the art is for illustration, cutting or engraving.", points: ["Engraving-ready", "Laser and CNC files", "Clean single paths"] },
      { icon: "layers", title: "Screen Print Color Separations", text: "Artwork separated into spot colors for screen printing, prepared around your press and ink setup.", points: ["Spot color layers", "Simplified color counts", "Print-ready output"] },
      { icon: "shield", title: "Silhouette & Stencil Art", text: "Subjects reduced to clear shapes, with bridges and gaps reviewed for the cutting material and method.", points: ["Vinyl and stencil cutting", "Connected bridges", "Clear outlines"] },
      { icon: "star", title: "Vector Illustration", text: "Mascots, emblems and illustrations redrawn in a defined style, with the parts that must stay editable agreed up front.", points: ["Mascots and badges", "Style-matched redraws", "Fully editable"] },
    ],
  },
  {
    id: "custom-patches",
    title: "Custom Embroidered Patches",
    priceNote: "Send your artwork, size, quantity and finish. Minimums and timelines are confirmed with your quote.",
    text: "Finished embroidered patches made from your design, digitized in-house and stitched for uniforms, teams, caps, bags and brand merchandise.",
    image: { src: "/images/patches/hug-teddy-bear-hat-embroidered-patch-4x3.webp", alt: "Embroidered patch of a brown teddy bear in a tan hat holding the word HUG, with a black outline border" },
    items: [
      { icon: "patch", title: "Custom Embroidered Patches", text: "Thread embroidery gives logos and badges a visible stitched texture. We review the design at actual size first.", points: ["Logos and badges", "Full or partial coverage", "Your colors"] },
      { icon: "puff", title: "3D Puff Patches", text: "Raised details add dimension. We keep the raised areas clearly defined and the small elements flat.", points: ["Raised lettering", "Bold logos", "Cap-friendly"] },
      { icon: "tag", title: "Custom Name Patches", text: "Name patches for uniforms, workwear, bags and team gear, with spelling and lettering confirmed before production.", points: ["Uniform and work shirts", "Team gear", "Clear lettering"] },
      { icon: "shield", title: "Patch Shapes & Borders", text: "The outline and edge finish are chosen together, with intricate corners reviewed for production.", points: ["Round, square, shield", "Custom outlines", "Merrowed or satin edge"] },
      { icon: "layers", title: "Patch Backing Options", text: "Attachment chosen around the item, the expected use and whether the patch needs to come off.", points: ["Iron-on", "Sew-on", "Hook-and-loop"] },
      { icon: "jacket", title: "Patches for Teams & Businesses", text: "Uniform, club and team orders with consistent artwork and a clear approval step before production.", points: ["Uniforms and workwear", "Clubs and teams", "Brand merchandise"] },
      { icon: "cap", title: "Patches for Hats, Jackets & Bags", text: "Sized for the space on the actual item, so the patch sits well on a curved cap or across a seam.", points: ["Caps and hats", "Jackets and vests", "Bags and backpacks"] },
    ],
  },
];

// Lowest price on the Pricing page, e.g. "From $10.00 per design".
function startingPrice(id) {
  const group = pricingGroups.find((item) => item.id === id);
  const lowest = Math.min(...group.tiers.map((tier) => tier.price));
  return { price: `From ${formatPrice(lowest)} ${group.unit}`, minPrice: lowest };
}

// Page-specific details for each service (order = Services dropdown order).
// Sample work shown on each service page ("Recent work" section).
// badge: "Real sew-out" for photos of finished pieces, otherwise what the image is.
const galleries = {
  "embroidery-digitizing": [
    { src: "/images/sew-outs/aztec-headdress-figure-embroidered-washed-blue-cap.webp", title: "Aztec Headdress Cap", badge: "Real sew-out", alt: "Washed blue cap embroidered in light gray thread with a figure wearing a feathered Aztec headdress above two spirals" },
    { src: "/images/sew-outs/koroni-castle-greek-lettering-embroidered-navy-cap.webp", title: "Koroni Castle Cap", badge: "Real sew-out", alt: "Navy cap embroidered with Greek lettering, the Koroni castle tower, green trees, a sailboat and blue waves" },
    { src: "/images/sew-outs/b-monogram-3d-puff-embroidered-trucker-cap.webp", title: "B Monogram 3D Puff Cap", badge: "Real sew-out", alt: "Tan and orange trucker cap with an orange 3D puff B monogram" },
    { src: "/images/seasonal/spooky-ghost-witch-hat-halloween-embroidery-design.webp", title: "Spooky Ghost Design", badge: "Embroidery design", fit: "contain", alt: "Spooky embroidery design with a smiling ghost in a purple-banded witch hat, bats, stars and orange SPOOKY lettering" },
  ],
  "custom-patches": [
    { src: "/images/patches/hug-mama-and-baby-bear-embroidered-patch.webp", title: "Hug Bears Patch", badge: "Patch design", alt: "Embroidered patch of a brown bear hugging a cream baby bear above the word HUG, with a black merrowed outline" },
    { src: "/images/patches/hug-teddy-bear-hat-embroidered-patch.webp", title: "Teddy Bear Hug Patch", badge: "Patch design", alt: "Embroidered patch of a brown teddy bear in a tan hat holding the word HUG, with a black outline border" },
  ],
  "vector-art": [
    { src: "/images/vector/peeking-kitten-vector-art-illustration.webp", title: "Peeking Kitten", badge: "Vector art", fit: "contain", alt: "Vector illustration of an orange and white kitten with green eyes peeking around a wall" },
    { src: "/images/vector/cute-lamb-ornament-vector-art-illustration.webp", title: "Lamb Ornament", badge: "Vector art", fit: "contain", alt: "Vector illustration of a cream lamb ornament with a hanging loop, stitched-look outlines and small leaf details" },
    { src: "/images/portfolio/vector-fox-mascot.webp", title: "Fox Mascot", badge: "Vector art", alt: "Original geometric fox mascot built from clean gold, ivory, teal, and coral vector shapes" },
  ],
};

const pageDetails = {
  "embroidery-digitizing": {
    path: "/embroidery-digitizing",
    metaTitle: "Embroidery Digitizing Services",
    metaDescription: "Professional embroidery digitizing for logos, caps, left chest, jacket backs, 3D puff, appliqué and small lettering. Machine-ready DST, PES, EXP and EMB files, priced per design.",
    quoteService: "digitizing",
    faqs: [
      ["What file formats do I get?", "Your digitized file arrives in the format your machine runs, such as DST, PES, EXP, EMB, JEF or VP3. Tell us your machine model when you order."],
      ["How fast is the turnaround?", "Most standard designs are delivered within 12–24 hours, and your quote shows the exact time. Rush turnaround is available on request."],
      ["Can you digitize caps and 3D puff?", "Yes. Cap files are sequenced from the center out for clean registration, and 3D puff designs are planned for the foam so edges cut cleanly."],
      ["Are revisions included?", "Reasonable minor revisions are included when they stay within the confirmed brief. Major changes to the artwork, size or technique may need a revised quote."],
    ],
  },
  "custom-patches": {
    path: "/custom-embroidered-patches",
    metaTitle: "Custom Embroidered Patches",
    metaDescription: "Custom embroidered patches made from your design for uniforms, teams, caps, jackets and bags. Choose the shape, border and backing. Typical 3-inch patches priced by quantity.",
    quoteService: "patches",
    faqs: [
      ["How is patch pricing calculated?", "Patches are priced per piece by quantity: the more you order, the lower the price per patch. Prices on the Pricing page are for a typical 3-inch embroidered patch with iron-on or sew-on backing."],
      ["Which backing should I choose?", "Iron-on backing is quick to apply on many cotton and blended fabrics, sew-on is the most durable for heavy use, and hook-and-loop lets you remove and swap patches."],
      ["Can I order only the digitized patch file?", "Yes. If you make patches yourself, choose patch digitizing under Embroidery Digitizing and we will send a patch-ready stitch file."],
      ["How long does patch production take?", "Production and delivery times depend on the quantity and options you choose. Your quote confirms the exact timeline before production begins."],
    ],
  },
  "vector-art": {
    path: "/vector-art",
    metaTitle: "Vector Art Conversion Services",
    metaDescription: "Raster to vector conversion for logos, images, line art, color separations and illustrations. Clean, editable AI, EPS, SVG and PDF files, priced per file by complexity.",
    quoteService: "vector",
    faqs: [
      ["Which file formats do I receive?", "Vector artwork is delivered in AI, EPS, SVG and PDF, with previews on request."],
      ["Can you convert a blurry or low-resolution logo?", "Yes. We redraw the logo by hand as clean vector shapes, using any brand reference you have to resolve unclear lettering or details."],
      ["Do you prepare files for screen printing or cutting?", "Yes. We can separate spot colors for screen printing and prepare single-path or outlined artwork for vinyl, laser and engraving."],
      ["How is vector pricing calculated?", "Vector conversion is priced per file by complexity, from simple one-color artwork to detailed multicolor designs. See the Pricing page for every tier."],
    ],
  },
};

// The three service pages, in dropdown order: Embroidery, Patches, Vector.
export const servicePages = ["embroidery-digitizing", "custom-patches", "vector-art"].map((id, index) => {
  const base = baseGroups.find((group) => group.id === id);
  return { ...base, ...pageDetails[id], ...startingPrice(id), gallery: galleries[id] ?? [], eyebrow: `Service 0${index + 1}`, href: `/pricing#${id}`, cta: "See all prices" };
});

export function getServicePage(id) {
  return servicePages.find((page) => page.id === id);
}

