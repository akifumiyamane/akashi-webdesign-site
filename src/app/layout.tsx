import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "アカシWeb制作 | 明石市発のWeb制作・全国オンライン対応",
    template: "%s | アカシWeb制作",
  },
  description:
    "明石市発・全国対応のWeb制作サービス。コーポレートサイト5ページ、LP、Shopify ECをオンライン完結で制作します。",
  keywords: [
    "Web制作",
    "明石市 Web制作",
    "ホームページ制作",
    "LP制作",
    "Shopify構築",
    "コーポレートサイト制作",
  ],
  openGraph: {
    title: "アカシWeb制作 | 明石市発のWeb制作・全国オンライン対応",
    description:
      "コーポレート5ページ、LP、Shopify ECをオンライン完結で制作。無料相談は48時間以内に返信します。",
    url: siteUrl,
    locale: "ja_JP",
    type: "website",
    siteName: "アカシWeb制作",
  },
  twitter: {
    card: "summary",
    title: "アカシWeb制作 | 明石市発のWeb制作",
    description:
      "コーポレート5ページ、LP、Shopify ECをオンライン完結で制作。無料相談受付中。",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
