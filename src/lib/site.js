export const siteConfig = {
  name: "Trustitched",
  url: "https://trustitched.com",
  locale: "en_US",
  language: "en",
  description: "Professional embroidery digitizing and vector art services prepared for dependable production.",
  socialImage: {
    url: "/images/social/trustitched-social-card.png",
    width: 1200,
    height: 630,
    alt: "An original owl crest transitioning from precise vector paths into detailed embroidery",
  },
  routes: [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/embroidery-digitizing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/vector-art", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
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
      image: absoluteUrl(siteConfig.socialImage.url),
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
