import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div>
      <section className="partners section-padding-100-70 md:p-28 p-4">
        <div className="custom-container">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 lg:col-span-6 col-span-12">
              <Image
                src="/partner.png"
                width={500}
                height={500}
                quality={100}
                alt="People Shaking Hands"
                className="logo_anima"
              ></Image>
            </div>
            <div className="partners-text md:col-span-8 lg:col-span-6 col-span-12">
              <h1 className="partners-head md:text-6xl text-3xl font-bold lh-1 mb-3">
                Our Partnerships
              </h1>
              <p className="partners-p">
                AMT has partnered with local medical treatment support providers
                with a shared goal of assisting our clients access the treatment
                they need quickly, effectively and affordably. Our local
                partners have an excellent track record in excellent client
                service with well-established relationships in several African
                countries. This partnership offers our clients the expertise and
                know-how in an environment of trust and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
