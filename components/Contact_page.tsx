"use client";
import React, { useRef, LegacyRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact_page = () => {
  const form: LegacyRef<HTMLFormElement> = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      if (
        typeof form.current === "string" ||
        form.current instanceof HTMLFormElement
      ) {
        emailjs
          .sendForm(
            "service_prn0ocl",
            "template_se2nhjj",
            form.current,
            "FLU8REVzRelnwg6TZ"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    }
  };

  const goto = () => {
    alert("Form submitted succesfully");
    window.open("/", "_self");
  };

  return (
    <div>
      <section className="contacting justify-center bg-med">
        <div className="container px-4 py-5">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <h4 className="text-white font-black text-center text-xl">
                  Anima MedTours
                </h4>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body p-8">
              <div className="screen-body-item left">
                <div className="app-title md:text-4xl text-3xl font-black">
                  <span>Start Your</span>
                  <span className="text-white">Journey</span>
                </div>
                <span className="mt-4">
                  <Image
                    src="/logo_white.png"
                    alt="Anima MedTours Logo"
                    width={200}
                    height={200}
                  ></Image>
                </span>
              </div>
              <div className="screen-body-item">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        name="user_name"
                        type="text"
                        placeholder="Enter your Name..."
                        required
                        className="app-form-control block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md bg-custom  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="johndoe@example.com"
                        required
                        className="app-form-control block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md bg-custom focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="+254 701 234567"
                        required
                        className="app-form-control block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md bg-custom focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        type="text"
                        name="subject"
                        placeholder="subject"
                        required
                        className="app-form-control block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md bg-custom focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="app-form-group message">
                      <textarea
                        className="app-form-control block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 bg-custom  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="app-form-group buttons">
                      <button
                        className="app-form-button"
                        type="submit"
                        value="send"
                        onClick={goto}
                      >
                        <div className="svg-wrapper">
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_page;
