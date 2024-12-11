"use client";

import React from "react";
import Image from "next/image";
import en from "../Components/translations/en";
import marathi from "../Components/translations/marathi";
import { useLanguage } from "../Context/LanguageContext";
import {
  File,
  ClipboardText,
  Pencil,
  MapTrifold,
  Tag,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";

function Page() {
  //   const [language, setLanguage] = useState("en");
  const { language } = useLanguage();

  // Load translations based on the selected language
  const translations = language === "en" ? en : marathi;
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
                      {language === "en"
                        ? " Your Trusted"
                        : "  तुमचा विश्वासू  "}
                    </span>{" "}
                    {language === "en"
                      ? "  Marathi Loan Consultancy"
                      : "मराठी लोण कन्सल्टन्सी "}
                    <span className=" pr-9 md:bg-[#2e69c79a]">
                      {language === "en" ? " & Services" : "आणि सर्विसेस"}
                    </span>
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

      {/* feature start */}
      {/* feature start */}
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {translations.features.title}
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              {translations.features.coTitle}
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <ClipboardText size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {translations.features.point1.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {translations.features.point1.description}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Pencil size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {" "}
                {translations.features.point6.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {translations.features.point6.description}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <File size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {translations.features.point2.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {translations.features.point2.description}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <MapTrifold size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {translations.features.point3.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {translations.features.point3.description}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Tag size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {" "}
                {translations.features.point4.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {translations.features.point4.description}
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Handshake size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {" "}
                {translations.features.point5.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {translations.features.point5.description}
              </p>
            </div>
            {/* Additional cards omitted for brevity */}
          </div>
        </div>
      </section>

      {/* feature end  */}

      {/* feature end  */}

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
          <h1>
            {language === "en"
              ? "Business Loan Documents"
              : "व्यवसाय कर्ज दस्तऐवज"}{" "}
          </h1>
          <h1>{language === "en" ? "We Provide " : "  आम्ही पुरवतो"}</h1>

          <h1>
            {language === "en"
              ? "In All Over Maharashtra , So Start Your New Business / Extend your Business"
              : "संपूर्ण महाराष्ट्रात, म्हणून तुमचा नवीन व्यवसाय सुरू करा / तुमचा व्यवसाय वाढवा"}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Page;
