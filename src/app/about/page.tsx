import React from "react";

export default function About() {
  return (
    <>
      <section className="relative ">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-100">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url("/images/aboutBG.svg")`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="md:pr-12">
                  <h1 className="text-white font-semibold md:text-5xl text-3xl">
                    About Us
                  </h1>
                  <p className="mt-4 md:text-lg text-xs text-blueGray-200 text-white">
                    Welcome! We at Marathi Loan Consultancy & Servises are a
                    trusted consultancy, committed to helping entrepreneurs and
                    business owners achieve their financial goals. Specializing
                    exclusively in business loans, our mission is to simplify
                    the often-complicated loan process and make financial
                    support accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {/* Feature 1 */}
              <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 max-w-sm text-center mt-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className=" flex-auto">
                    <div className="aspect-[4/5] w-full rounded-lg overflow-hidden">
                      <img
                        src="https://img.freepik.com/premium-photo/house-model-coin-vertical-image-saving-money-buy-new-house-loan-plan-business-inve_253401-6866.jpg?w=360"
                        alt="Feature 1"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 max-w-sm text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className=" flex-auto">
                    <div className="aspect-[4/5] w-full rounded-lg overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?cs=srgb&dl=pexels-rickyrecap-1662159.jpg&fm=jpg"
                        alt="Feature 2"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 max-w-sm text-center mt-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className=" flex-auto">
                    <div className="aspect-[4/5] w-full rounded-lg overflow-hidden">
                      <img
                        src="https://w0.peakpx.com/wallpaper/513/93/HD-wallpaper-business-life-man-thumbnail.jpg"
                        alt="Feature 3"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* profile */}
    </>
  );
}
