import React from "react";
import styles from "app/about_us.module.css";
import Link from "next/link";
import { Contact_page, Contact_banner } from "@/components";

const page = () => {
  return (
    <div>
      <Contact_page />
      <Contact_banner />
    </div>
  );
};

export default page;
