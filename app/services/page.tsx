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
  openGraph: {
    title: "Anima MedTours - How We Can Help You",
    description:
      "Discover excellence in healthcare with Anima MedTours (AMT). Embark on a transformative journey to top-quality medical care in India, guided by our dedicated team. From consultations to treatment quotes, we seamlessly support you every step of the way. Experience a stress-free process, from arrival to recovery, as we prioritize your well-being. Trust AMT to not only facilitate your medical procedures but also to ensure a smooth post-treatment recovery, staying connected until you're back home and on the path to complete well-being. Your health, our priority at Anima MedTours.",
    url: "https://www.animamedtours.com/services",
    siteName: "Anima MedTours",
    images: [
      {
        url: "https://www.animamedtours.com/_next/image?url=%2Fanima_logo.png&w=640&q=100",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.animamedtours.com/_next/image?url=%2Fanima_logo.png&w=640&q=100",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
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
