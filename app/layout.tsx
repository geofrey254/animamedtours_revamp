import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./nav.module.css";

import { Navbar, Foot } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anima MedTours - TRAVEL. HEAL. THRIVE",
  description:
    "At Anima MedTours (AMT), we help patients experience top-quality healthcare in India. We support our patients in their journey to access medical treatment, procedures or routine medical check-ups in India.",
  verification: {
    google: "zUhK1LifkKZBI8vvFhwNbGknoIo-CUafRWL3ijty0D4",
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
