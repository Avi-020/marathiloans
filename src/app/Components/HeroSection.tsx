"use client";

import React from "react";
import en from "./translations/en";
import marathi from "./translations/marathi";
import { useLanguage } from "../Context/LanguageContext";
import Testimonials from "./Testimonials";
import { ChartBar } from "@phosphor-icons/react/dist/ssr/ChartBar";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { Bank } from "@phosphor-icons/react/dist/ssr/Bank";
import { MapTrifold } from "@phosphor-icons/react/dist/ssr/MapTrifold";
import { Building } from "@phosphor-icons/react/dist/ssr/Building";
import { FileText } from "@phosphor-icons/react/dist/ssr/FileText";
import Image from "next/image";
import {
  File,
  PhoneCall,
  ClipboardText,
  Pencil,
  // MapTrifold,
  Tag,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";

function HeroSection() {
  //   const [language, setLanguage] = useState("en");
  const { language } = useLanguage();

  // Load translations based on the selected language
  const translations = language === "en" ? en : marathi;
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/images/BG.png")`,
          backgroundSize: "cover",
        }}
        className=" md:bg-contain"
      >
        <section>
          <div className="mx-auto max-w-screen-xl px-4  md:pb-52 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-xl font-semibold text-white md:text-4xl">
                    {translations.heroSection.title}
                  </h2>
                  <p className="mt-4 text-[#D9D9D9] md:text-xl text-l">
                    {translations.heroSection.subtitle}
                  </p>
                  <button className="bg-[#FFD780] mt-4 hover:bg-[#FFD750] text-black  py-2 px-4 rounded-full inline-flex	">
                    <File size={20} className="mr-1.5 mt-1 md:mr-2" />

                    {translations.heroSection.btn1}
                  </button>{" "}
                  <br />
                  <button className="bg-white mt-4 hover:bg-slate-300 text-black  py-2 px-4 rounded-full inline-flex">
                    <PhoneCall size={20} className="mr-2 mt-1" />

                    {translations.heroSection.btn2}
                  </button>
                </div>
              </div>

              <div>
                <Image
                  src="/images/HerosectionIMG.svg"
                  alt="HerosectionIMG"
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

      {/* list start   key points  */}
      <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden antialiased">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <h2 className="text-5xl font-bold text-center mb-6">
            {translations.KeyPoints.title}
            <br />
          </h2>
          <p className="text-center text-2xl">
            {translations.KeyPoints.description}
          </p>
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <ChartBar size={32} />
                      </div>
                      <time className="text-sm font-medium text-indigo-500 md:w-28"></time>
                    </div>
                    <div className="text-slate-500 ml-14">
                      <span className="text-slate-900 font-bold">
                        {translations.KeyPoints.points[0].title}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    {translations.KeyPoints.points[0].description}
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <Check size={32} />
                      </div>
                      <time className="text-sm font-medium text-indigo-500 md:w-28"></time>
                    </div>
                    <div className="text-slate-500 ml-14">
                      <span className="text-slate-900 font-bold">
                        {translations.KeyPoints.points[1].title}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    {translations.KeyPoints.points[1].description}
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <Bank size={32} />
                      </div>
                      <time className="text-sm font-medium text-indigo-500 md:w-28"></time>
                    </div>
                    <div className="text-slate-500 ml-14">
                      <span className="text-slate-900 font-bold">
                        {translations.KeyPoints.points[2].title}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    {translations.KeyPoints.points[2].description}
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <MapTrifold size={32} />
                      </div>
                      <time className="text-sm font-medium text-indigo-500 md:w-28"></time>
                    </div>
                    <div className="text-slate-500 ml-14">
                      <span className="text-slate-900 font-bold">
                        {translations.KeyPoints.points[3].title}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    {translations.KeyPoints.points[3].description}
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <Building size={32} />
                      </div>
                      <time className="text-sm font-medium text-indigo-500 md:w-28"></time>
                    </div>
                    <div className="text-slate-500 ml-14">
                      <span className="text-slate-900 font-bold">
                        {translations.KeyPoints.points[4].title}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    {translations.KeyPoints.points[4].description}
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <FileText size={32} />
                      </div>
                      <time className="text-sm font-medium text-indigo-500 md:w-28"></time>
                    </div>
                    <div className="text-slate-500 ml-14">
                      <span className="text-slate-900 font-bold">
                        {translations.KeyPoints.points[5].title}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    {translations.KeyPoints.points[5].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* list end  */}

      {/* four boxes */}

      <div className="p-1 flex flex-wrap items-center justify-center">
        <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#80f2ff68]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
          <div className="text-center  content-center">
            <div className=" block text-center">
              <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                5
              </span>
            </div>
            <span className="block opacity-75 -mb-1">
              {language === "en" ? "Years Experience" : "वर्षांचा अनुभव"}
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#83ff735c]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
          <div className="text-center  content-center">
            <div className=" block text-center">
              <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                100+
              </span>
            </div>
            <span className="block opacity-75 -mb-1">
              {language === "en" ? "Monthly Files" : "मासिक फायली"}
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#ffea0357]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
          <div className="text-center  content-center">
            <div className=" block text-center">
              <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                20K
              </span>
            </div>
            <span className="block opacity-75 -mb-1">
              {language === "en" ? "Happy Customers" : "आनंदी ग्राहक"}
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#fe6c6c54]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
          <div className="text-center  content-center">
            <div className=" block text-center">
              <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                36
              </span>
            </div>
            <span className="block opacity-75 -mb-1">
              {language === "en" ? "District" : "जिल्हा"}
            </span>
          </div>
        </div>
      </div>

      {/* ENd  */}

      <Testimonials />

      {/* <div className="stepper ml-10  flex justify-center">
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <h1>
            "Your Trusted Partner for Perfect Business Documentation!" Services
          </h1>{" "}
          <br />
          <h3>We provide end-to-end assistance with</h3>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <svg
                className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">
              Business Plan Preparation
            </h3>
            <p className="text-sm">
              Detailed project reports and financial projections.{" "}
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">
              Document Verification{" "}
            </h3>
            <p className="text-sm">
              Income proof, identity, and address documents.{" "}
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Bank Statements </h3>
            <p className="text-sm">
              Proper format and creditworthiness support.{" "}
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
            </span>
            <h3 className="font-medium leading-tight">Scheme-Specific</h3>
            <p className="text-sm">
              Guidance – Annasaheb Patil Yojana & PMEGP documentation.{" "}
            </p>
          </li>
        </ol>
      </div> */}
    </>
  );
}

export default HeroSection;
