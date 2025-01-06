import React, { useEffect, useRef, useState } from "react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import Image from "next/image";
import KeenSlider from "keen-slider"; // Ensure correct import
import "keen-slider/keen-slider.min.css"; // Include styles
import { KeenSliderInstance } from "keen-slider";
import { useLanguage } from "../Context/LanguageContext";

function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState<KeenSliderInstance | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (sliderRef.current) {
      const keenInstance = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: { perView: 1 },
      });
      setSlider(keenInstance);

      return () => {
        keenInstance.destroy();
      };
    }
  }, []);

  const ENGtestimonials = [
    {
      name: "John Doe",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "Excellent service and friendly staff! The documentation process was very simple and fast. Received proper guidance for my business. I will definitely use their service again!",
    },
    {
      name: "Jane Smith",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "They helped me a lot in getting a loan for my business. Everything went smoothly with their guidance. I am very impressed with their expertise.",
    },
    {
      name: "Emily Johnson",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "Very professional and seamless service! They checked my documents and assisted with the application. Their service gave me the opportunity to expand my business.",
    },
    {
      name: "Robert Brown",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "Extremely helpful service! They provided detailed information about the schemes and made the application process very easy. I am very happy with the support.",
    },
  ];
  const MARATHItestimonials = [
    {
      name: "जॉन डो",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "उत्कृष्ट सेवा आणि मैत्रीपूर्ण कर्मचारी! कागदपत्रांची प्रक्रिया खूप सोपी आणि वेगवान होती. व्यवसायासाठी योग्य मार्गदर्शन मिळाले. मी नक्कीच पुन्हा सेवा घेईन!",
    },
    {
      name: "जेन स्मिथ",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "माझ्या व्यवसायासाठी कर्ज मिळवण्यात खूप मदत झाली. त्यांच्या मार्गदर्शनामुळे सर्व गोष्टी सहजतेने पार पडल्या. त्यांच्या अनुभवाबद्दल खूप प्रभावित आहे.",
    },
    {
      name: "एमिली जॉन्सन",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "खूपच व्यावसायिक आणि सुलभ सेवा! कागदपत्रे तपासून फॉर्म भरून दिला. मला त्यांच्या सेवेमुळे व्यवसाय विस्ताराची संधी मिळाली.",
    },
    {
      name: "रॉबर्ट ब्राउन",
      image: "/images/HerosectionIMG.svg",
      feedback:
        "अत्यंत उपयुक्त सेवा! त्यांनी योजनांबद्दल सविस्तर माहिती दिली आणि अर्ज प्रक्रिया खूपच सोपी बनवली. मी खूप आनंदी आहे.",
    },
  ];

  const testimonials =
    language === "en" ? ENGtestimonials : MARATHItestimonials;

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <div className="max-w-5xl  mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {language === "en"
            ? "What Client Says About Us"
            : "क्लायंट आमच्याबद्दल काय म्हणतो"}
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide  rounded-lg overflow-hidden md:max-w-2xl "
            >
              {/* <div className="md:flex bg-[#1a37508e] p-5 md:p-20 ">
                <div className="md:shrink-0">
                  <Image
                    className="h-48 w-full object-cover md:h-full md:w-48 bg-black"
                    src={testimonial.image}
                    width={0}
                    height={0}
                    alt="not found"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-black-500 font-semibold">
                    {testimonial.name}
                  </div>

                  <p className="mt-2 text-slate-700">{testimonial.feedback}</p>
                </div>
              </div> */}

              {/* <div className="space-y-4 max-w-full mx-auto px-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 fill-teal-500"
                  viewBox="0 0 35 30"
                  fill="none"
                >
                  <path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"></path>
                </svg>
                <p className="md:text-lg leading-relaxed">
                  It's incredibly easy to integrate into our applications, and
                  it has saved us countless hours of development time.
                </p>
                <div className="flex items-center gap-2">
                  <img
                    alt="Yifan testimonial for ShipFast"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDB8MXx8fDE2OTYxNzE4MzN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  />
                  <p>
                    Yifan, <span className="font-bold">John Doe</span>
                  </p>
                </div>
              </div> */}

              <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-slate-800 dark:text-white ">
                <div className="md:flex">
                  <div className="md:shrink-0 p-10">
                    <Image
                      width={0}
                      height={0}
                      className="h-48 w-full object-cover md:h-full md:w-48 bg-black"
                      src={testimonial.image}
                      alt="User profile picture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Customer Testimonial
                    </div>
                    <p className="mt-2 text-slate-500">
                      {testimonial.feedback}
                    </p>
                    <div className="mt-4">
                      <span className="text-slate-900 font-bold">
                        Sarah Johnson
                      </span>
                      <span className="text-slate-600 text-sm ml-2">
                        CEO, TechInnovate
                      </span>
                    </div>
                    <div className="mt-4 flex items-center">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={() => slider?.prev()}
            className=" bg-[#1a37508e] focus:ring-4 focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2  "
          >
            <CaretLeft size={25} />
          </button>

          <button
            type="button"
            onClick={() => slider?.next()}
            className=" bg-[#1a37508e] focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2  "
          >
            <CaretRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
