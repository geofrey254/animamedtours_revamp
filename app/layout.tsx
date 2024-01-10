import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./nav.module.css";
import Head from "next/head";

import { Navbar, Foot } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anima MedTours - TRAVEL. HEAL. THRIVE",
  description:
    "At Anima MedTours (AMT), we help patients experience top-quality healthcare in India. We support our patients in their journey to access medical treatment, procedures or routine medical check-ups in India.",
  verification: {
    google: "A01B7AwUh3cR0jbM7YNA_uzGaA69Ygj9LvrW0f6hQYI",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        alt: "My custom alt",
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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>{" "}
      <Foot />
    </html>
  );
}
