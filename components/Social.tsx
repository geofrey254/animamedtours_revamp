import React from "react";

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
                  <img className="social-svg" src="/facebook.svg" alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/anima-medtours-africa/"
                  className="mx-1 text-white"
                >
                  <img className="social-svg" src="/linkedin.svg" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/p/CpHusP2IxLw/?igshid=YmMyMTA2M2Y="
                  className="mx-1 text-white"
                >
                  <img className="social-svg" src="/instagram.svg" alt="" />
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
