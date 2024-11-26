import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg_top flex justify-center items-center h-[90vh] md:h-[100vh] px-3 md:px-0 pt-[200px] md:pt-[150px]">
      <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* <div className="shapes">
          <div className="shape"></div>
          <div className="shape_two"></div>
        </div> */}
        <div className="left mb-8 md:mb-0">
          <div className="flex flex-col gap-3 mb-6">
            <h2 className="text-white tracking-normal md:tracking-wide text-4xl leading-tight md:text-6xl font-bold">
              Experience{" "}
              <span className="text-[#ffcc2f] font-extrabold">Top-Quality</span>
            </h2>
            <h2 className="text-white tracking-normal md:tracking-wide text-4xl md:text-6xl font-bold leading-tight">
              Healthcare
            </h2>
            <h2 className="text-white tracking-normal md:tracking-wide text-4xl md:text-5xl font-bold leading-tight">
              Abroad
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-white text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              We connect you with top-rated healthcare providers in world-class
              destinations, offering treatments and experiences tailored to your
              needs.
            </p>
          </div>

          <a
            href="/about"
            className="btn-who text-white py-2 px-4 rounded hover:bg-[#ffcc2f] transition duration-200 mx-auto md:mx-0"
          >
            Who we are
          </a>
        </div>
        <div className="right-side">
          <Image
            src="/flower.png"
            width={500}
            height={500}
            quality={100}
            alt="Flower Emblem Anima"
            className="logo_flower w-[300px] md:w-[600px]"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
