import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const BRAND_NAME = "Latelier des Boucles";
const BRAND_TAGLINE = "Tunis · Hair Artistry";
const BRAND_DESCRIPTION =
  "Discover personalized haircuts, dimensional color, balayage, and signature styling at Latelier des Boucles Tunis. Explore our services and request your salon appointment.";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-dm-sans",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | Luxury Hair Salon & Hair Artistry — Tunis`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  applicationName: BRAND_NAME,
  keywords: [
    "luxury hair salon",
    "hair artistry",
    "balayage",
    "dimensional color",
    "precision haircuts",
    "Latelier des Boucles",
    "Tunis hair salon",
  ],
  openGraph: {
    title: `${BRAND_NAME} | Luxury Hair Salon & Hair Artistry — Tunis`,
    description: BRAND_DESCRIPTION,
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US",
    images: [
      {
        url: "/images/hero-hair-editorial.jpg",
        width: 1200,
        height: 800,
        alt: `${BRAND_NAME} — luxury hair artistry`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Luxury Hair Salon & Hair Artistry — Tunis`,
    description: BRAND_DESCRIPTION,
    images: ["/images/hero-hair-editorial.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ed",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      style={
        {
          "--font-serif": "var(--font-cormorant), Georgia, serif",
          "--font-sans": "var(--font-dm-sans), -apple-system, sans-serif",
        } as React.CSSProperties
      }
    >
      <body>{children}</body>
    </html>
  );
}
