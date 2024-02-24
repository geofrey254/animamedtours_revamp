import React from "react";
import { About_top, Partner, Activities } from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anima MedTours - About Us",
  description:
    "Discover exceptional healthcare in India with Anima MedTours (AMT). We guide patients through every step of their medical journey, from consultations and treatment quotes to seamless experiences during procedures and recovery. Our dedicated team ensures that patients receive top-quality care, providing ongoing support even after they return home. Trust AMT to make your medical travel experience worry-free and focused on your well-being.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: `https://www.andegogachagua.com/about`,
  },
  openGraph: {
    title: "Anima MedTours - About Us",
    description:
      "Discover exceptional healthcare in India with Anima MedTours (AMT). We guide patients through every step of their medical journey, from consultations and treatment quotes to seamless experiences during procedures and recovery. Our dedicated team ensures that patients receive top-quality care, providing ongoing support even after they return home. Trust AMT to make your medical travel experience worry-free and focused on your well-being.",
    url: "https://www.animamedtours.com/about",
    siteName: "Anima MedTours",
    images: [
      {
        url: "logo_all.png",
        width: 800,
        height: 600,
      },
      {
        url: "logo_all.png",
        width: 1800,
        height: 1600,
        alt: "Anima MedTours Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <About_top />
      <Partner />
      <Activities />
    </div>
  );
};

export default page;
