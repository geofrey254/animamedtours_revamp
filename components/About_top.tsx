import React from "react";

const About_top = () => {
  return (
    <div>
      <section className="about-us section-padding-100-70 ">
        <div className="container p-4">
          <div className="grid grid-cols-12 gap-5">
            <div className="md:col-span-4 col-span-12">
              <img
                src="/anima_logo.png"
                className="logo_about img-fluid"
                alt="Anima MedTours Logo"
                loading="lazy"
              />
            </div>
            <div className="about-text md:col-span-8 col-span-12">
              <h1 className="about-head md:text-5xl text-2xl font-bold mb-3">
                About Us
              </h1>
              <div className="grid grid-cols-12 p-2">
                <div className="md:col-span-6 col-span-12">
                  <p className="about-p">
                    At Anima MedTours (AMT), we help patients experience
                    top-quality healthcare in India. We support our patients in
                    their journey to access medical treatment, procedures or
                    routine medical check-ups in India. We advise our patients
                    about the process, provide them with accurate treatment
                    quotes from desired facilities, and ensure they have a
                    seamless experience throughout the treatment and recovery
                    process. After their treatment and return back home, we
                    follow-up to ensure they continue their recovery process
                    based on the treating doctor’s prescription/recommendation.
                  </p>
                </div>

                <div className="md:col-span-6 col-span-12">
                  <p className="about-p">
                    At AMT, we understand that the treatment process in a
                    foreign country can be daunting for first-time or even
                    repeat patients. AMT’s primary concern is the patient and
                    their family’s peace of mind. We focus on the logistics and
                    administrative tasks allowing our patients to focus entirely
                    on treatment and recovery. By carrying this burden for them,
                    we ensure that the treatment progresses much more
                    effectively, quickly and with higher chances of successful
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_top;
