import React from "react";
import styles from "app/about_us.module.css";
import Link from "next/link";
import { Contact_page, Contact_banner } from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anima MedTours - Contact Us",
  description:
    "Contact Anima MedTours (AMT) for unparalleled healthcare experiences in India. At AMT, we guide and support patients on their medical journey, facilitating access to top-quality treatments, procedures, and routine check-ups. Our dedicated team provides comprehensive assistance, from advising on the process to offering accurate treatment quotes from preferred facilities. Experience a seamless journey from consultation to recovery with AMT, and rest assured that our commitment extends beyond treatment – we follow up post-treatment to ensure ongoing recovery based on your treating doctor's recommendations. Your well-being is our priority, and we're here to make your healthcare experience in India exceptional.",
  openGraph: {
    title: "Anima MedTours - Contact Us",
    description:
      "Contact Anima MedTours (AMT) for unparalleled healthcare experiences in India. At AMT, we guide and support patients on their medical journey, facilitating access to top-quality treatments, procedures, and routine check-ups. Our dedicated team provides comprehensive assistance, from advising on the process to offering accurate treatment quotes from preferred facilities. Experience a seamless journey from consultation to recovery with AMT, and rest assured that our commitment extends beyond treatment – we follow up post-treatment to ensure ongoing recovery based on your treating doctor's recommendations. Your well-being is our priority, and we're here to make your healthcare experience in India exceptional.",
    url: "https://www.animamedtours.com/contact",
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
      <Contact_page />
      <Contact_banner />
    </div>
  );
};

export default page;
