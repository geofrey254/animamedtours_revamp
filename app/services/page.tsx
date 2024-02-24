import React from "react";
import {
  Services_top,
  Service_one,
  Service_two,
  Service_three,
} from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anima MedTours - How We Can Help You",
  description:
    "Discover excellence in healthcare with Anima MedTours (AMT). Embark on a transformative journey to top-quality medical care in India, guided by our dedicated team. From consultations to treatment quotes, we seamlessly support you every step of the way. Experience a stress-free process, from arrival to recovery, as we prioritize your well-being. Trust AMT to not only facilitate your medical procedures but also to ensure a smooth post-treatment recovery, staying connected until you're back home and on the path to complete well-being. Your health, our priority at Anima MedTours.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: `https://www.andegogachagua.com/services`,
  },
  openGraph: {
    title: "Anima MedTours - How We Can Help You",
    description:
      "Discover excellence in healthcare with Anima MedTours (AMT). Embark on a transformative journey to top-quality medical care in India, guided by our dedicated team. From consultations to treatment quotes, we seamlessly support you every step of the way. Experience a stress-free process, from arrival to recovery, as we prioritize your well-being. Trust AMT to not only facilitate your medical procedures but also to ensure a smooth post-treatment recovery, staying connected until you're back home and on the path to complete well-being. Your health, our priority at Anima MedTours.",
    url: "https://www.animamedtours.com/services",
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
      <Services_top />
      <Service_one />
      <Service_two />
      <Service_three />
    </div>
  );
};

export default page;
