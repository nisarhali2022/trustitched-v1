import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://trustitched.com"),
  title: {
    default: "Trustitched | Embroidery Digitizing & Vector Art",
    template: "%s | Trustitched",
  },
  description:
    "Professional embroidery digitizing and vector art services prepared for dependable production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
