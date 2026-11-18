import { GoogleAnalytics } from "@next/third-parties/google";
import { DevThemeBar } from "@/components/dev-theme-bar";
import { HashScroll } from "@/components/hash-scroll";
import { HeaderGarland } from "@/components/header-garland";
import { PromoBanner } from "@/components/promo-banner";
import { SeasonalEffect } from "@/components/seasonal-effect";
import { StructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsAppLink } from "@/components/social-links";
import { siteConfig, siteStructuredData } from "@/lib/site";
import { DEV_THEME_COOKIE, getCurrentTheme, getLiveTheme, themeDates, themeOptions } from "@/themes";
import "./globals.css";

// Re-render pages every hour so the yearly theme calendar switches on time
// while pages stay pre-rendered (fast) between updates.
export const revalidate = 3600;

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

export const viewport = {
  themeColor: "#0C313D",
};

export default async function RootLayout({ children }) {
  const theme = await getCurrentTheme();

  return (
    <html lang="en" data-theme={theme.id} data-mode={theme.mode ?? "light"}>
      <body>
        {theme.id !== "normal" ? <div aria-hidden="true" className="scroll-progress" /> : null}
        <SeasonalEffect count={theme.effectCount} kind={theme.effect} />
        <PromoBanner banner={theme.banner} />
        <StructuredData data={siteStructuredData} />
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-ink focus:shadow-xl" href="#main-content">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader decoration={<HeaderGarland garland={theme.garland} />} />
          <main className="flex-1" id="main-content" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </div>
        <FloatingWhatsAppLink />
        <HashScroll />
        {/* Development only: never included in production builds. */}
        {process.env.NODE_ENV === "development" ? (
          <DevThemeBar
            cookieName={DEV_THEME_COOKIE}
            currentTheme={theme.number}
            dates={themeDates()}
            live={getLiveTheme()}
            options={themeOptions}
          />
        ) : null}
      </body>
      {process.env.NODE_ENV === "production" && googleAnalyticsId ? (
        <GoogleAnalytics gaId={googleAnalyticsId} />
      ) : null}
    </html>
  );
}
