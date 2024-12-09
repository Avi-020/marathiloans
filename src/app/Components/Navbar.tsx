"use client";

import React from "react";
import Image from "next/image";
import en from "./translations/en";
import marathi from "./translations/marathi";
import { useLanguage } from "../Context/LanguageContext";
import Link from "next/link";

function Navbar() {
  const { setLanguage, language } = useLanguage();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  const translations = language === "en" ? en : marathi;

  return (
    <div className="bg-[#011D49] text-white">
      <nav className=" border-gray-200 bg-[#011D49] text-white ">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/LOGO.svg"
              alt="logo"
              width={200}
              height={200}
              // className="md:w-1/2"
            />
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#011D49] text-white md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:hover:text-blue-700 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  {translations.navbar.title1}
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {translations.navbar.title2}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {translations.navbar.title3}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {translations.navbar.title4}
                </Link>
              </li>
              <li>
                <div className="">
                  <label htmlFor="language" className="sr-only">
                    Select Language
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-[#011D49] text-white  rounded"
                  >
                    <option value="en">English</option>
                    <option value="marathi">Marathi</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
