import { portfolioProjects } from "@/data/portfolio-projects";
import { sewOutPhotos } from "@/data/sew-out-photos";
import { servicePages } from "@/data/services-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

// Image sitemap entries help Google find and index the portfolio photos.
const pageImages = {
  "/portfolio": [...sewOutPhotos, ...portfolioProjects].map((item) => absoluteUrl(item.src)),
  // Each service page lists its hero image and sample work.
  ...Object.fromEntries(servicePages.map((service) => [service.path, [service.image, ...service.gallery].map((item) => absoluteUrl(item.src))])),
};

export default function sitemap() {
  return siteConfig.routes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(pageImages[route.path] ? { images: pageImages[route.path] } : {}),
  }));
}
