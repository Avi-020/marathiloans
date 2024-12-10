"use client";

import React, { useState } from "react";

function page() {
  const [openQuestions, setOpenQuestions] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(openQuestions === index ? null : index);
  };
  const faqs = [
    {
      question: "How can I get started?",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
    },
    {
      question: "What is the pricing structure?",
      answer:
        "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
    },
  ];

  return (
    <div>
      <div
        className="min-h-screen pb-32   flex justify-center"
        style={{
          backgroundImage: `url("/images/contactBG.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white  shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 md:bg-white bg-[#011D49]  text-[#058AFE]">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-bold">Get In Touch</h1>
              <p className="text-center">
                {" "}
                we are here to help you, How Can Help You?
              </p>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="textarea"
                    placeholder="Enter Your Email  Address"
                  />

                  <textarea
                    id="message"
                    rows={7}
                    className=" mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Go Ahed, We are listning..."
                  ></textarea>

                  <button className="mt-5 tracking-wide font-semibold bg-[#058AFE] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            />
          </div>
        </div>
      </div>

      {/* FAQ start  */}
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Explore Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      openQuestions === index ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestions === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-base mt-9">
            Still have questions?{" "}
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary hover-underline">
              Contact our support
            </span>
          </p>
        </div>
      </section>
      {/* end  */}
    </div>
  );
}

export default page;
