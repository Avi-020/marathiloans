"use client";

import React, { useState } from "react";
import Image from "next/image";
import en from "./translations/en";
import marathi from "./translations/marathi";
import { useLanguage } from "../Context/LanguageContext";
import Link from "next/link";

function Navbar() {
  const { setLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  const translations = language === "en" ? en : marathi;

  return (
    <div className="bg-[#011D49] text-white">
      <nav className="border-gray-200 bg-[#011D49] text-white md:pt-5 md:px-20 dark:bg-slate-800 dark:text-gray-300">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/images/LOGO.svg" alt="logo" width={230} height={230} />
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)} // Open the menu
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
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

          {/* Desktop Menu */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#011D49] text-white md:bg-transparent">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:hover:text-blue-700 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {translations.navbar.title1}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {translations.navbar.title2}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {translations.navbar.title3}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {translations.navbar.title4}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {language === "en" ? "EMI CALCULATOR" : "ईएमआय कॅल्क्युलेटर"}
                </Link>
              </li>
              <li>
                <div>
                  <label htmlFor="language" className="sr-only">
                    Select Language
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-[#011D49] text-white rounded"
                  >
                    <option value="en">English</option>
                    <option value="marathi">Marathi</option>
                  </select>
                </div>
              </li>
              <li>
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-1 rounded focus:outline-none"
                >
                  {isDarkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3.75V3.75M18.364 5.636L18.364 5.636M21 12H21M18.364 18.364L18.364 18.364M12 20.25V20.25M5.636 18.364L5.636 18.364M3 12H3M5.636 5.636L5.636 5.636M15.75 12A3.75 3.75 0 1112 8.25a3.75 3.75 0 013.75 3.75z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 019.91 3.348 7.5 7.5 0 0021.752 15z"
                      />
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#011D49] text-white md:hidden">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)} // Close the menu
                className="text-white text-2xl focus:outline-none"
              >
                &times;
              </button>
            </div>

            <ul className="font-medium flex flex-col p-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded"
                  aria-current="page"
                  onClick={() => setIsMenuOpen(false)} // Close on link click
                >
                  {translations.navbar.title1}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-white rounded"
                  onClick={() => setIsMenuOpen(false)} // Close on link click
                >
                  {translations.navbar.title2}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-white rounded"
                  onClick={() => setIsMenuOpen(false)} // Close on link click
                >
                  {translations.navbar.title3}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-white rounded"
                  onClick={() => setIsMenuOpen(false)} // Close on link click
                >
                  {translations.navbar.title4}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 text-white rounded"
                  onClick={() => setIsMenuOpen(false)} // Close on link click
                >
                  {language === "en" ? "EMI CALCULATOR" : "ईएमआय कॅल्क्युलेटर"}
                </Link>
              </li>
              <li>
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-1 rounded focus:outline-none"
                >
                  {isDarkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3.75V3.75M18.364 5.636L18.364 5.636M21 12H21M18.364 18.364L18.364 18.364M12 20.25V20.25M5.636 18.364L5.636 18.364M3 12H3M5.636 5.636L5.636 5.636M15.75 12A3.75 3.75 0 1112 8.25a3.75 3.75 0 013.75 3.75z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 019.91 3.348 7.5 7.5 0 0021.752 15z"
                      />
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <div>
                  <label htmlFor="language" className="sr-only">
                    Select Language
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-[#011D49] text-white rounded"
                  >
                    <option value="en">English</option>
                    <option value="marathi">Marathi</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
