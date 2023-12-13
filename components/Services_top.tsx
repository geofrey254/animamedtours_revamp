import React from "react";

const Services_top = () => {
  return (
    <div>
      <section className="services md:section-padding-100-0 bg-gray-200">
        <div className="container mx-auto md:pb-12 md:p-0 p-6">
          <div className="grid grid-cols-12">
            <div className="md:col-span-6 col-span-12">
              <h1 className="serv-how md:text-8xl text-5xl md:mb-0 mb-12">
                How we <br /> can help you
              </h1>
            </div>
            <div className="md:col-span-6 col-span-12">
              <p className="text-black">
                At times you may be required to get your documents
                authenticated, notarized and legalised at various Government
                offices, embassies or consulates in Kenya before you can access
                medical treatment abroad. At AMT, we understand exactly what
                needs to be done to ensure you have all the necessary paperwork
                completed in a timely manner. We have streamlined our processes
                and established working arrangements with local partners
                ensuring to guarantee you a smooth process. Our trusted partners
                in India guide you through the processes required to access
                medical treatment in India including:
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services_top;
