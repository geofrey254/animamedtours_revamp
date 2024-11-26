import React from "react";

const CTA = () => {
  return (
    <section className="about w-full section-padding-100-70 bg-gray-200">
      <div className="container p-8 md:p-0">
        <div className="grid grid-cols-12 bg-sell md:p-4 rounded-lg border shadow-lg">
          <div className="selling col-span-12 text-center">
            <h4 className="sell md:text-5xl text-2xl p-12">
              {`Don't`} wait any longer <br /> to prioritize your health.
            </h4>
            <a href="/contact" className="btn-contact no-underline">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
