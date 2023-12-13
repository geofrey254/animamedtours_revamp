import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <div>
      <section className="socials md:p-8 p-4">
        <div className="container my-5 rounded-full shadow-lg mx-auto bg-white md:p-12 p-8">
          <div className="grid">
            <div className="md:p-5 p-0 justify-content-between text-center">
              <span className="social-title uppercase text-2xl font-extrabold">
                Our Socials
              </span>
              <h1 className="mb-4 mt-2 font-bold text-4xl">FOLLOW US</h1>
              <div className="text-white flex flex-row text-center justify-center pt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100090202927867&mibextid=ZbWKwL"
                  className="mx-1 text-white"
                >
                  <Image
                    src="/facebook.svg"
                    width={500}
                    height={500}
                    quality={100}
                    alt="Facebook Logo"
                    className="social-svg"
                  ></Image>
                </a>
                <a
                  href="https://www.linkedin.com/company/anima-medtours-africa/"
                  className="mx-1 text-white"
                >
                  <Image
                    src="/linkedin.svg"
                    width={500}
                    height={500}
                    quality={100}
                    alt="LinkedIn Logo"
                    className="social-svg"
                  ></Image>
                </a>
                <a
                  href="https://www.instagram.com/p/CpHusP2IxLw/?igshid=YmMyMTA2M2Y="
                  className="mx-1 text-white"
                >
                  <Image
                    src="/instagram.svg"
                    width={500}
                    height={500}
                    quality={100}
                    alt="Instagram Logo"
                    className="social-svg"
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
