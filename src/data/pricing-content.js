// Pricing page content. Prices set by the owner (price list updated 2026-11-18).
// Descriptions are our own wording.
// All prices are in US dollars.

export const pricingGroups = [
  {
    id: "embroidery-digitizing",
    title: "Embroidery Digitizing",
    unit: "per design",
    note: "Flat per-design pricing by complexity. Reasonable minor revisions are included, and your file comes in the machine formats you need.",
    href: "/embroidery-digitizing",
    service: "digitizing",
    tiers: [
      { name: "Small / Left-chest", price: 10, text: "Simple marks up to about 3.5 inches.", example: "Left-chest logo or a name drop", includes: "Minor revisions · all machine formats" },
      { name: "Standard logo", price: 15, text: "A typical multi-color brand logo.", example: "3–4 color chest or cap logo", includes: "Minor revisions · all machine formats" },
      { name: "Cap / 3D puff", price: 18, text: "Curved-front cap files or raised foam designs.", example: "Cap front with 3D puff lettering", includes: "Minor revisions · all machine formats", featured: true },
      { name: "Jacket back / large", price: 25, text: "Large-format designs with a high stitch count.", example: "12-inch varsity jacket back", includes: "Minor revisions · all machine formats" },
      { name: "Photo / complex", price: 70, text: "Portraits and densely detailed artwork.", example: "Pet portrait or realistic photo", includes: "Minor revisions · all machine formats" },
    ],
  },
  {
    id: "vector-art",
    title: "Vector Art Conversion",
    unit: "per file",
    note: "Flat per-file pricing by complexity. Reasonable minor revisions are included, and your artwork comes in AI, EPS, SVG and PDF.",
    href: "/vector-art",
    service: "vector",
    tiers: [
      { name: "Basic", price: 10, text: "Single-color artwork.", points: ["1 color"], excluded: ["Color separation not included"] },
      { name: "Simplistic", price: 15, text: "Clean, simple shapes.", points: ["1–2 colors", "Simple silhouette designs"] },
      { name: "Average", price: 20, text: "Everyday logos and graphics.", points: ["Multiple, limited colors", "Fairly simple designs"], featured: true },
      { name: "Intermediate", price: 30, text: "Detailed, multi-color artwork.", points: ["Multicolor", "Detail-oriented designs", "Minimal shading"] },
    ],
  },
  {
    id: "custom-patches",
    title: "Custom Embroidered Patches",
    unit: "per patch",
    note: "Prices for a typical 3-inch embroidered patch: the more you order, the lower the price per patch. Iron-on or sew-on backing is included. Other sizes and hook-and-loop backing are quoted with your order.",
    href: "/custom-embroidered-patches",
    service: "patches",
    tiers: [
      { name: "25 pcs", price: 4.75, includes: "Typical 3″ embroidered patch · iron-on or sew-on backing" },
      { name: "50 pcs", price: 3.75, includes: "Typical 3″ embroidered patch · iron-on or sew-on backing" },
      { name: "100 pcs", price: 3.25, includes: "Typical 3″ embroidered patch · iron-on or sew-on backing", featured: true },
      { name: "250 pcs", price: 2.55, includes: "Typical 3″ embroidered patch · iron-on or sew-on backing" },
      { name: "500 pcs", price: 2, includes: "Typical 3″ embroidered patch · iron-on or sew-on backing" },
      { name: "1000 pcs", price: 1.5, includes: "Typical 3″ embroidered patch · iron-on or sew-on backing" },
    ],
  },
];

export const formatPrice = (value) => `$${value.toFixed(2)}`;
