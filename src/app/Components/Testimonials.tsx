import React, { useEffect, useRef, useState } from "react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import Image from "next/image";
import KeenSlider from "keen-slider"; // Ensure correct import
import "keen-slider/keen-slider.min.css"; // Include styles
import { KeenSliderInstance } from "keen-slider";

function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState<KeenSliderInstance | null>(null);

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

  const testimonials = [
    {
      name: "John Doe",
      image: "/images/HerosectionIMG.svg",
      feedback:
        " Excellent service and friendly staff! lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, alias dolor repudiandae a magni id nesciunt nobis pariatur maiores inventore eius, debitis blanditiis. Atque labore ratione culpa, tenetur sed inventore!      ",
    },
    {
      name: "Jane Smith",
      image: "/images/HerosectionIMG.svg",
      feedback:
        " Excellent service and friendly staff! lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, alias dolor repudiandae a magni id nesciunt nobis pariatur maiores inventore eius, debitis blanditiis. Atque labore ratione culpa, tenetur sed inventore!      ",
    },
    {
      name: "Emily Johnson",
      image: "/images/HerosectionIMG.svg",
      feedback:
        " Excellent service and friendly staff! lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, alias dolor repudiandae a magni id nesciunt nobis pariatur maiores inventore eius, debitis blanditiis. Atque labore ratione culpa, tenetur sed inventore!      ",
    },
    {
      name: "Robert Brown",
      image: "/images/HerosectionIMG.svg",
      feedback:
        " Excellent service and friendly staff! lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, alias dolor repudiandae a magni id nesciunt nobis pariatur maiores inventore eius, debitis blanditiis. Atque labore ratione culpa, tenetur sed inventore!      ",
    },
  ];

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
                  <p className="block mt-1 text-lg leading-tight font-medium text-black">
                    Incredible accommodation for your team
                  </p>
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
