import React from "react";
import Image from "next/image";

function page() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/images/ServicesBG.svg")`,
          backgroundSize: "cover",
        }}
      >
        <section>
          <div className="mx-auto max-w-screen-xl px-4  md:pb-80 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none text-white">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                    <span className="md:bg-[#2e69c79a] md:pl-9">
                      Your Trusted
                    </span>{" "}
                    Marathi Loan Consultancy{" "}
                    <span className=" pr-9 md:bg-[#2e69c79a]">& Services</span>
                  </h1>
                </div>
              </div>

              <div>
                <Image
                  src="/images/ServicesIMG.svg"
                  alt="ServicesIMG"
                  className="h-auto w-auto"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* map img  */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <Image
          src="/images/mapIMG.svg"
          alt="ServicesIMG"
          className="h-auto w-auto"
          width={0}
          height={0}
        />

        <div className="text-3xl">
          <h1>Business Loan Documents </h1>
          <h1> We Provide</h1>
          <h1>
            In All Over Maharashtra , So Start Your New Business / Extend your
            Business
          </h1>
        </div>
      </div>
    </>
  );
}

export default page;
