import React from "react";
import { BiHome, BiSearch, BiUser } from "react-icons/bi";
import { SiHandshake } from "react-icons/si";
import { IoNavigate } from "react-icons/io5";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const Foot = () => {
  return (
    <div>
      <footer className="footer-section md:p-0 p-4">
        <div className="container mx-auto">
          <div className="footer-cta pt-5 pb-5">
            <div className="grid grid-cols-12">
              <div className="md:col-span-4 col-span-12 mb-8">
                <div className="single-cta">
                  <FaMapMarkerAlt className="fa-icon" />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>
                      Madonna House, 3rd Floor, Suite 315, Westlands Rd
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 col-span-12 mb-8">
                <div className="single-cta">
                  <FaPhone className="fa-icon" />
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+254704 208484</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 col-span-12 mb-8">
                <div className="single-cta">
                  <FaEnvelope className="fa-icon" />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>info@animamedtours.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer section */}
          <div className="footer-content pt-5 pb-5">
            <div className="grid grid-cols-12">
              <div className="md:col-span-4 col-span-12 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="/">
                      <Image
                        src="/anima_logo.png"
                        width={500}
                        height={500}
                        quality={100}
                        alt="Anima Medtours Logo"
                        className="logo_about"
                      ></Image>
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      AMT assist patients seeking medical treatment, procedures,
                      or check-ups in India. We offer advice on the process,
                      provide accurate treatment quotes, and ensure a smooth
                      experience throughout the treatment and recovery process.
                    </p>
                  </div>
                  <div className="footer-social-icon md:mb-0 mb-12">
                    <span>Follow us</span>
                    <div className="flex">
                      <a href="https://www.facebook.com/profile.php?id=100090202927867&mibextid=ZbWKwL">
                        <FaFacebook className="foot-icon" />
                      </a>
                      <a href="https://www.linkedin.com/company/anima-medtours-africa/">
                        <FaLinkedinIn className="foot-icon" />
                      </a>
                      <a href="https://www.instagram.com/p/CpHusP2IxLw/?igshid=YmMyMTA2M2Y=">
                        <FaInstagram className="foot-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Our Services</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Office Address</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      <span className="text-light">P.O BOX 8066-00100</span>
                      <br />
                      <span className="text-light">Nairobi Kenya</span>
                      <br />
                      <br />
                      <span className="text-light">
                        Madonna House, 3rd Floor, Suite 315
                      </span>
                      <br />
                      <span className="text-light">
                        Westlands Rd, Westlands
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Area */}
        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 text-center">
                <div className="copyright-text">
                  <p className="text-light">
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All Rights Reserved{" "}
                    <a href="#" className="no-underline">
                      Anima MedTours
                    </a>
                  </p>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 d-lg-block md:text-right text-center">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="/" className="text-light no-underline">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-light no-underline">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-light no-underline">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-light no-underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
