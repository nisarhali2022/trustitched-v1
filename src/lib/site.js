export const siteConfig = {
  name: "Trustitched",
  url: "https://trustitched.com",
  locale: "en_US",
  language: "en",
  contactEmail: "contact@trustitched.com",
  phone: {
    display: "+1 757-906-8220",
    href: "tel:+17579068220",
  },
  whatsappHref: "https://wa.me/17579068220",
  // Public profiles: shown as icons and listed in structured data (sameAs).
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592558164198",
    instagram: "https://www.instagram.com/trustitched/",
    etsy: "https://www.etsy.com/shop/TruStitched",
  },
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      children: [
        { label: "Embroidery Digitizing", href: "/embroidery-digitizing" },
        { label: "Custom Embroidered Patches", href: "/custom-embroidered-patches" },
        { label: "Vector Art Conversion", href: "/vector-art" },
      ],
    },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  description: "Professional embroidery digitizing and vector art services prepared for dependable production.",
  logo: {
    url: "/images/brand/trustitched-icon.webp",
    width: 262,
    height: 262,
    alt: "Trustitched needle and thread monogram",
  },
  socialImage: {
    url: "/images/social/trustitched-social-card.jpg",
    width: 1200,
    height: 630,
    alt: "A macaw portrait split between clean vector artwork and finished embroidery",
  },
  routes: [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/embroidery-digitizing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/custom-embroidered-patches", changeFrequency: "monthly", priority: 0.9 },
    { path: "/vector-art", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "yearly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({ title, description, path, absoluteTitle = false }) {
  const brandedTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: brandedTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: brandedTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [siteConfig.socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [siteConfig.socialImage],
    },
  };
}

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      email: siteConfig.contactEmail,
      telephone: siteConfig.phone.href.replace("tel:", ""),
      sameAs: Object.values(siteConfig.social),
      image: absoluteUrl(siteConfig.socialImage.url),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo.url),
        width: siteConfig.logo.width,
        height: siteConfig.logo.height,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export function createServiceStructuredData({ name, description, path }) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": `${siteConfig.url}/#organization` },
  };
}
