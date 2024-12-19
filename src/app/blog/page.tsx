import React from "react";
import Image from "next/image";

const Blog = () => {
  const cards = [
    {
      image: "/images/BG.png",
      title: "From Dreams to Reality: How We Helped a Startup Thrive",
      linkText: "Read more",
      alt: "Unity Blog Image",
    },
    {
      image: "/images/BG.png",
      title: "Overcoming Challenges: A Success Story of Business Expansion",

      linkText: "Read more",
      alt: "Living Spaces Blog Image",
    },
    {
      image: "/images/BG.png",
      title: "Empowering Entrepreneurs: A Tale of Financial Transformation",
      linkText: "Read more",
      alt: "Atlassian Blog Image",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Real Stories, Real Success: See How We&apos;ve Made a Difference
        </h2>
        {/* <p className="mt-1 text-gray-600 dark:text-neutral-400">
        Real Stories, Real Success: See How We’ve Made a Difference
        </p> */}
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <a
            key={index}
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                className="w-full object-cover rounded-xl"
                src={card.image}
                alt={card.alt}
                width={0}
                height={0}
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
          </a>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Blog;
