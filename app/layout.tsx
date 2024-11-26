import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./nav.module.css";
import Head from "next/head";

import { Navbar, Foot } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000", "https://animamedtours.com"),
  alternates: {
    canonical: "https://animamedtours.com",
  },
  title: "Anima MedTours - TRAVEL. HEAL. THRIVE",
  description:
    "At Anima MedTours (AMT), we help patients experience top-quality healthcare in India. We support our patients in their journey to access medical treatment, procedures or routine medical check-ups in India.",
  keywords: [
    "Anima MedTours",
    "Medtours Kenya",
    "anima medtours kenya",
    "medtour company kenya",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: "Anima MedTours - TRAVEL. HEAL. THRIVE",
    description:
      "At Anima MedTours (AMT), we help patients experience top-quality healthcare in India. We support our patients in their journey to access medical treatment, procedures or routine medical check-ups in India.",
    url: "https://www.animamedtours.com",
    siteName: "Anima MedTours",
    images: [
      {
        url: "/logo_all.png",
        width: 800,
        height: 600,
      },
      {
        url: "/logo_all.png",
        width: 1800,
        height: 1600,
        alt: "Anima MedTours Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-Poppins">
        <Navbar />
        {children}
        <Foot />
      </body>
    </html>
  );
}
