import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap() {
  return siteConfig.routes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
