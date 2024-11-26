"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "app/nav.module.css";
import Image from "next/image";

import { BiMenuAltRight } from "react-icons/bi";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleNav() {
    setMenuOpen(!menuOpen);
  }

  function hideNav() {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="fixed w-full h-20 nav_two z-10 top-0 font-semibold">
      <div className="flex justify-between items-center h-full w-full px-4 md:px-20">
        <div className="left-nav">
          <Image
            src="/anima_logo.png"
            width={80}
            height={80}
            alt="Maxtech Logo"
          />
        </div>
        <div className="middle-nav hidden md:flex">
          <ul className="flex gap-12 text-white font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <Link
            href="#"
            className="text-white bg-[#ffcc2f] rounded-3xl py-2 px-4 items-center hidden md:flex gap-2"
          >
            Get Started
            <FaArrowAltCircleRight />
          </Link>
          <div>
            <BiMenuAltRight
              size={50}
              className="text-white md:hidden"
              onClick={handleNav}
            />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={
          menuOpen
            ? "nav_anim fixed w-[100%] h-[26rem] bg-[#1F7FA9]"
            : "transition ease-in-out delay-150 duration-300 collapse"
        }
      >
        <ul className="flex flex-col gap-6 text-white font-medium mt-12 ml-12">
          <li>
            <Link href="#" onClick={hideNav}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={hideNav}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="#serv" onClick={hideNav}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#cont" onClick={hideNav}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="mt-12">
          <ul className="flex justify-around items-center text-4xl text-white">
            <li>
              <Link href="#">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
