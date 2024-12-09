import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";

function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState<KeenSlider | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderInstance = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: { perView: 1, spacing: 10 },
      });
      setSlider(sliderInstance);

      return () => sliderInstance.destroy();
    }
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzAzNzd8MHwxfGFsbHwyfHx8fHx8fHwxNjgxODk3MTM2&ixlib=rb-4.0.3&q=80&w=400",
      feedback: "Excellent service and friendly staff! lorem20 ",
    },
    {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzAzNzd8MHwxfGFsbHwxfHx8fHx8fHwxNjgxODk3MTM2&ixlib=rb-4.0.3&q=80&w=400",
      feedback: "Very satisfied with the quick turnaround time.",
    },
    {
      name: "Emily Johnson",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzAzNzd8MHwxfGFsbHwzfHx8fHx8fHwxNjgxODk3MTM2&ixlib=rb-4.0.3&q=80&w=400",
      feedback: "Highly recommend them for their expertise.",
    },
    {
      name: "Robert Brown",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzAzNzd8MHwxfGFsbHw0fHx8fHx8fHwxNjgxODk3MTM2&ixlib=rb-4.0.3&q=80&w=400",
      feedback: "Professional team and great communication.",
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
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={testimonial.image}
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
