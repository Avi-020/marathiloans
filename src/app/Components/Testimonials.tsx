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
    <div>
      <div className="max-w-5xl  mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          What Client Says About Us
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide border rounded-lg shadow-lg px-30 overflow-hidden md:max-w-2xl "
            >
              {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl "> */}
              <div className="md:flex bg-[#1a37508e] p-5 md:p-20 ">
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
                {/* </div> */}
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
