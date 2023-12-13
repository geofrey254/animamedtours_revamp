import React from "react";

const Service_one = () => {
  return (
    <div>
      <section className="serv-list section-padding-100-0">
        <div className="container mx-auto md:pb-12 md:p-0 p-6">
          <h3 className="serv-bef text-3xl mb-4">Before Deciding to Travel</h3>
          <div className="grid grid-cols-12 p-4">
            <div className="card block col-span-12 md:col-span-4 max-w-sm md:mb-0 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <p className="card-text">
                Getting you a second opinion from a doctor/specialist in India
                regarding your medical condition
              </p>
            </div>
            <div className="card block col-span-12 md:col-span-4 max-w-sm md:mb-0 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <p className="card-text">
                Getting you a quote for medical treatment services from a
                hospital of your choice
              </p>
            </div>
            <div className="card block col-span-12 md:col-span-4 max-w-sm md:mb-0 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <p className="card-text">
                Advising you on any travel requirements to India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service_one;
