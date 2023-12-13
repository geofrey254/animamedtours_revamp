import React from "react";
import Link from "next/link";
import styles from "app/hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className={["section-padding-100-0", styles.bg_top].join(" ")}>
        <div className="custom_container">
          <div className={["", styles.shape].join(" ")}></div>
          <div className={["", styles.shape_two].join(" ")}></div>
          <div className="md:grid md:grid-cols-12">
            <div
              className={[
                "col-span-12 md:col-span-12 lg:col-span-9",
                styles.tagline,
              ].join(" ")}
            >
              <h2 className={["mb-8", styles.hero_heading].join(" ")}>
                Experience <br />
                <span className={["", styles.top_line].join(" ")}>
                  Top-Quality
                </span>
                <br />
                Healthcare <br />
                <span className={["", styles.abroad].join(" ")}>Abroad</span>
              </h2>
              <a href="#" className="btn-who">
                Who we are
              </a>
            </div>
            <div
              className={[
                "col-span-12 md:col-span-12 lg:col-span-3",
                styles.flower_png,
              ].join("")}
            >
              <Image
                src="/flower.png"
                width={500}
                height={500}
                quality={100}
                alt="Flower Emblem Anima"
                className="logo_flower"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

{
  /* <h2>Experience <br> <span className={["", styles.top-line].join(" ")}>Top-Quality</span><br>Healthcare<br><span className={["", styles.abroad].join(" ")}>Abroad</span></h2>
    <a href="#" className="">Who we are</a> */
}
