import React from "react";

const Us = () => {
  return (
    <div>
      <section className="us section-padding-100-70">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="md:col-span-6 col-span-12 p-4">
              <div className="my-container"></div>
            </div>

            <div className="us-cont md:col-span-6 col-span-12 p-12">
              <h2 className="us-head">About Us</h2>
              <p className="text-white">
                At Anima MedTours (AMT), we help patients experience top-quality
                healthcare in India. We support our patients in their journey to
                access medical treatment, procedures or routine medical
                check-ups in India. We advise our patients about the process,
                provide them with accurate treatment quotes from desired
                facilities, and ensure they have a seamless experience
                throughout the treatment and recovery process. After their
                treatment and return back home, we follow-up to ensure they
                continue their recovery process based on the treating doctor’s
                prescription/recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Us;
