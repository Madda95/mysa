/* eslint-disable @next/next/next-script-for-ga */
import { Layout } from "@/components";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mysa Massaggi | Ronchi dei Legionari",
  description:
    "Centro specializzato in massaggi terapeutici e benessere psicofisico, offrendo una varietà di trattamenti personalizzati.",
  keywords:
    "massaggi, benessere, Ronchi dei Legionari, massaggi terapeutici, centro massaggi, trattamenti personalizzati, massaggi connettivali, massaggi decontratturanti, massaggi in gravidanza",
  authors: [{ name: "Mysa Massaggi" }],
  creator: "Mysa Massaggi",
  publisher: "Mysa Massaggi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mysamassaggi.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mysa Massaggi | Ronchi dei Legionari",
    description:
      "Centro specializzato in massaggi terapeutici e benessere psicofisico, offrendo una varietà di trattamenti personalizzati.",
    url: "https://mysamassaggi.it",
    siteName: "Mysa Massaggi",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/image/logo.svg",
        width: 800,
        height: 600,
        alt: "Mysa Massaggi Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysa Massaggi | Ronchi dei Legionari",
    description:
      "Centro specializzato in massaggi terapeutici e benessere psicofisico, offrendo una varietà di trattamenti personalizzati.",
    images: ["/image/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#CB997E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/image/logo.svg" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mysa Massaggi" />
        <meta name="application-name" content="Mysa Massaggi" />
        <meta name="msapplication-TileColor" content="#CB997E" />
        <meta name="theme-color" content="#CB997E" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
