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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/image/logo.svg" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
