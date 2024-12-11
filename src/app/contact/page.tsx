"use client";

import React, { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";

function ContactPage() {
  const [openQuestions, setOpenQuestions] = useState<number | null>(null);
  const { language } = useLanguage();

  const toggleQuestion = (index: number) => {
    setOpenQuestions(openQuestions === index ? null : index);
  };
  const ENGfaqs = [
    {
      question: "How can I apply for a loan?",
      answer:
        "Applying for a loan is simple! Contact us with your basic details, and our team will guide you through the entire process, including documentation and submission.",
    },
    {
      question: "What documents are required for loan applications?",
      answer:
        "You will need identity proof, address proof, income proof, bank statements, and a detailed business plan. Our team will assist you in organizing and verifying these documents.",
    },
    {
      question: "Do you help with government schemes like PMEGP?",
      answer:
        "Yes, we provide comprehensive support for government schemes like Annasaheb Patil Yojana and PMEGP, including document preparation and submission.",
    },
    {
      question: "Can I get assistance with business registration?",
      answer:
        "Absolutely! We help with Udyam, GST, and MSME registrations to ensure your business is fully compliant and eligible for benefits.",
    },
    {
      question: "How long does the loan approval process take?",
      answer:
        "The loan approval timeline depends on the type of loan and the completeness of your documents. With our support, the process can be significantly faster.",
    },
    {
      question: "What if my loan application gets rejected?",
      answer:
        "If your application is rejected, we help you identify the reasons and assist in making the necessary corrections for re-application.",
    },
  ];
  const MARATHIfaqs = [
    {
      question: "मी कर्जासाठी अर्ज कसा करू शकतो?",
      answer:
        "कर्जासाठी अर्ज करणे खूप सोपे आहे! आम्हाला तुमची मूलभूत माहिती द्या आणि आमचा संघ तुम्हाला दस्तऐवज प्रक्रिया आणि अर्ज सादरीकरणासह संपूर्ण मार्गदर्शन करेल.",
    },
    {
      question: "कर्ज अर्जासाठी कोणती कागदपत्रे आवश्यक आहेत?",
      answer:
        "तुम्हाला ओळख प्रमाणपत्र, पत्ता पुरावा, उत्पन्न पुरावा, बँक स्टेटमेंट्स आणि सविस्तर व्यवसाय योजना आवश्यक आहे. आमचा संघ ही कागदपत्रे व्यवस्थित करण्यात आणि पडताळण्यात मदत करेल.",
    },
    {
      question: "तुम्ही पीएमईजीपीसारख्या सरकारी योजनांसाठी मदत करता का?",
      answer:
        "होय, आम्ही अण्णासाहेब पाटील योजना आणि पीएमईजीपीसारख्या सरकारी योजनांसाठी कागदपत्र तयार करण्यापासून ते सादरीकरणापर्यंत सर्वसमावेशक सहाय्य प्रदान करतो.",
    },
    {
      question: "तुम्ही व्यवसाय नोंदणीसाठी सहाय्य करता का?",
      answer:
        "नक्कीच! आम्ही उद्योग, जीएसटी, आणि एमएसएमई नोंदणीमध्ये मदत करतो, जेणेकरून तुमचा व्यवसाय पूर्णपणे नियमांनुसार राहील आणि लाभांसाठी पात्र ठरेल.",
    },
    {
      question: "कर्ज मंजुरी प्रक्रिया किती वेळ घेते?",
      answer:
        "कर्ज मंजुरीसाठी लागणारा वेळ कर्जाच्या प्रकारावर आणि तुमच्या कागदपत्रांच्या पूर्णतेवर अवलंबून असतो. आमच्या सहाय्याने ही प्रक्रिया लवकर पूर्ण होऊ शकते.",
    },
    {
      question: "जर माझा कर्ज अर्ज नाकारला गेला तर काय?",
      answer:
        "जर तुमचा अर्ज नाकारला गेला, तर आम्ही तुम्हाला कारणे शोधण्यात मदत करू आणि पुन्हा अर्ज करण्यासाठी आवश्यक सुधारणा करण्यात सहाय्य करू.",
    },
  ];

  const faqs = language === "en" ? ENGfaqs : MARATHIfaqs;

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
              <h1 className="text-2xl xl:text-3xl font-bold">
                {language === "en" ? "Get In Touch" : "संपर्कात रहा"}
              </h1>
              <p className="text-center">
                {" "}
                {language === "en"
                  ? "we are here to help you, How Can Help You?"
                  : "आम्ही तुम्हाला मदत करण्यासाठी येथे आहोत, तुम्हाला कशी मदत करता येईल?"}
              </p>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder={
                      language === "en"
                        ? "Enter Your Name"
                        : "आपले नाव प्रविष्ट करा"
                    }
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="textarea"
                    placeholder={
                      language === "en"
                        ? "Enter Your Email  Address"
                        : "तुमचा ईमेल पत्ता प्रविष्ट करा"
                    }
                  />

                  <textarea
                    id="message"
                    rows={7}
                    className=" mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={
                      language === "en"
                        ? "Go Ahed, We are listning..."
                        : "गो अहेड, आम्ही यादी करत आहोत..."
                    }
                  ></textarea>

                  <button className="mt-5 tracking-wide font-semibold bg-[#058AFE] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">
                      {language === "en" ? "Submit" : "सबमिट करा"}
                    </span>
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
              {language === "en"
                ? "Frequently Asked Questions"
                : "वारंवार विचारले जाणारे प्रश्न"}
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
            {language === "en"
              ? " Still have questions?"
              : "अद्याप प्रश्न आहेत?"}
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary hover-underline">
              {language === "en"
                ? "Contact our support"
                : "आमच्या समर्थनाशी संपर्क साधा"}
            </span>
          </p>
        </div>
      </section>
      {/* end  */}
    </div>
  );
}

export default ContactPage;
