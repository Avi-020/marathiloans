"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../Context/LanguageContext";

const Blog = () => {
  const { language } = useLanguage();

  const english = [
    {
      image: "/images/blog1.jpg",
      title: "From Loan to Livelihood: A Success Story in Fashion",
      linkText: "Read more",
      alt: " Image",
    },
    {
      image: "/images/blog2.jpg",
      title: "Turning Dreams into Reality: From Loan to Grocery Store",
      linkText: "Read more",
      alt: " Image",
    },
    {
      image: "/images/blog3.jpg",
      title: "Empowering Livelihood: From Loan to Buffalo Shelter",
      linkText: "Read more",
      alt: " Image",
    },
  ];
  const marathi = [
    {
      image: "/images/blog1.jpg",
      title: "कर्जापासून व्यवसायापर्यंत: फॅशन क्षेत्रातील यशोगाथा",
      linkText: "अधिक वाचा",
      alt: "not fount",
    },
    {
      image: "/images/blog2.jpg",
      title: "स्वप्नांची पूर्तता: कर्जापासून किराणा दुकानापर्यंत",
      linkText: "अधिक वाचा",
      alt: "not found",
    },
    {
      image: "/images/blog3.jpg",
      title: "उपजीविकेचा पाया: कर्जापासून म्हशींच्या निवाऱ्यापर्यंत",
      linkText: "अधिक वाचा",
      alt: "not found",
    },
  ];
  const cards = language === "en" ? english : marathi;

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Real Stories, Real Success: See How We&apos;ve Made a Difference
        </h2>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href="/singleBlog"
          >
            <div className="relative aspect-w-16 aspect-h-10">
              <Image
                className="w-full rounded-xl"
                src={card.image}
                alt={card.alt}
                layout="responsive"
                width={800} // Provide an appropriate width for responsive scaling
                height={500} // Provide an appropriate height for responsive scaling
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              {card.title}
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              {card.linkText}
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Blog;
