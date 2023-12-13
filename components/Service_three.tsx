import React from "react";

const Service_three = () => {
  return (
    <div>
      <section className="serv-list section-padding-100-0">
        <div className="container mx-auto md:pb-12 md:p-0 p-6">
          <h3 className="serv-bef text-3xl mb-4 p-2">After your recovery</h3>
          <div className="grid grid-cols-12 p-4">
            <div className="card block col-span-12 md:col-span-4 max-w-sm md:mb-0 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <p className="card-text">
                Experience the best that India has to offer, helping you to plan
                touristic activities in India such as visits to the Taj Mahal,
                the Delhi National Zoo, the Mahatma Gandhi memorial and burial
                site and several other historical sites that you may be
                interested in
              </p>
            </div>
            <div className="card block col-span-12 md:col-span-4 max-w-sm md:mb-0 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <p className="card-text">
                Arrange for your medication to be delivered to you at affordable
                rates depending on your post-recovery plan
              </p>
            </div>
            <div className="card block col-span-12 md:col-span-4 max-w-sm md:mb-0 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <p className="card-text">
                Provide any other support that you may require before, during
                and after your stay in India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service_three;
