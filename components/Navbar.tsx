import React from "react";
import Link from "next/link";
import styles from "app/nav.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo_all.png"
              alt="Anima MedTours Logo"
              width={72}
              height={72}
            ></Image>
            <span
              className={[
                "self-center md:text-2xl font-semibold whitespace-nowrap ",
                styles.nav_logo,
              ].join(" ")}
            >
              Anima MedTours
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/+254110568310"
              className="text-sm custom_color hover:no-underline font-semibold"
            >
              <Image
                src="/whats.png"
                width={100}
                height={100}
                alt="Chat on WhatsApp"
                className="logo"
              ></Image>
            </a>
          </div>
        </div>
      </nav>
      <nav className={["", styles.nav_two].join(" ")}>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/"
                  className="text-white hover:no-underline font-normal"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:no-underline font-normal"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white hover:no-underline font-normal"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:no-underline font-normal"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
