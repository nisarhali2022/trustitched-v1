import { GoogleAnalytics } from "@next/third-parties/google";
import { StructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig, siteStructuredData } from "@/lib/site";
import "./globals.css";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Trustitched | Embroidery Digitizing & Vector Art",
    template: "%s | Trustitched",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Trustitched | Embroidery Digitizing & Vector Art",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [siteConfig.socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trustitched | Embroidery Digitizing & Vector Art",
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={siteStructuredData} />
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-ink focus:shadow-xl" href="#main-content">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1" id="main-content" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </div>
      </body>
      {process.env.NODE_ENV === "production" && googleAnalyticsId ? (
        <GoogleAnalytics gaId={googleAnalyticsId} />
      ) : null}
    </html>
  );
}
