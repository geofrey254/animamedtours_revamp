import React from "react";
import Image from "next/image";

const Activities = () => {
  return (
    <section className="activities section-padding-100-70 md:p-28 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="activities-text md:col-span-6 col-span-12 md:p-6 p-0">
            <h1 className="activities-head md:text-6xl text-4xl font-bold mb-3">
              Our Activities
            </h1>
            <p className="activities-p text-justify">
              AMT maintains a competitive advantage over its competitors by
              leveraging its network of local partners to ensure that we can
              offer our clients the best service in the market. We strive to
              establish strong working relationships with our clients, following
              up and accompanying them before, during and after their treatment
              process. This strategy would allow us to attract client loyalty
              and improve our future engagements with potential clients through
              personal recommendations. In Kenya, AMT will establish and
              maintain reliable relationships with a wide network of medical
              practitioners who are able to recommend our services to their
              patients. This would be a win-win outcome for all parties
              involved: the patients access the much-needed support, the
              referring medical practitioners are better assured that their
              patients would access quality medical care and return to their
              care as quickly and effectively as possible.
            </p>
          </div>
          <div className="md:col-span-4 col-span-12 md:mt-0 mt-16 md:p-6 p-0">
            <Image
              src="/activity.png"
              width={500}
              height={500}
              quality={100}
              alt="Anima Medtours Logo"
              className="logo_anima"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
