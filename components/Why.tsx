import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <div>
      <section className="more-about justify-items-center text-center section-padding-100-0">
        <div className="custom-container">
          <div className="grid grid-cols-12 md:mt-0">
            <div className="col-span-3">
              <h3 className="h-why md:text-4xl text-2xl">
                Why Travel <br /> to <span className="India">India</span>?
              </h3>
            </div>
            <div className="col-span-9">
              <p className="p-why text-left md:text-lg md:p-0 p-2">
                Patients travel to India to access specialized medical
                treatment, wellness check-ups or cosmetic surgeries taking
                advantage of the advanced medical facilities, the wealth of
                medical expertise and the relatively lower costs of medical
                treatments and other procedures.
              </p>
            </div>
            <div className="md:col-span-5 col-span-12 p-12">
              <img
                className="h-auto md:max-w-md max-w-xs"
                src="/med.png"
                alt="Surgeons Image"
              />
            </div>
            <div className="md:col-span-6 col-span-12 md:p-0 p-8 justify-content-center align-items-center text-center">
              <h2 className="p-2 mt-4 text-bg-cool rounded-md text-white text-2xl">
                DO YOU NEED?
              </h2>
              <div className="grid grid-cols-12 med-list p-8">
                <div className="col-span-6 mr-4">
                  <ul className="ll md:w-80 text-sm border border-gray-200 shadow-lg rounded-md">
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Heart, Kidney or Liver Transplant
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Bone Marrow Transplant
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Cancer Treatment and Management
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Weight loss Treatment
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Cosmetic Surgeries
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Diabetes Treatment
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Infertility Treatment
                    </li>
                  </ul>
                </div>
                <div className="col-span-6">
                  <ul className="ll text-sm border border-gray-200 shadow-lg rounded-md">
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Neurological Treatment
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Opthalmology Treatment
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Orthopedic Treatment
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Paediatric care and Treatment
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Spinal Surgeries
                    </li>
                    <li className="lll w-full px-1 py-2 border-b border-gray-200">
                      Among Others
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
