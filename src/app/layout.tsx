import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

// Both fonts are self-hosted (no request to Google at build or page load).
const geist = GeistSans; // exposes --font-geist-sans

const jakarta = localFont({
  src: "../fonts/PlusJakartaSans-latin-variable.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software built around what you actually need`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    url: "/",
    title: `${site.name} | Software built around what you actually need`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Organization structured data for search engines.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/solveon-icon-512.png`,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${jakarta.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-green focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
