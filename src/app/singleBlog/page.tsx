"use client";

import React from "react";
import { useLanguage } from "../Context/LanguageContext";

const Page = () => {
  const { language } = useLanguage();

  const english = [
    {
      id: 1,
      title: "From Loan to Livelihood: A Success Story in Fashion",
      author: "Joshi ",
      categories: ["Business", "Success Stories"],
      content: `Starting a business often requires more than just an idea; it needs financial support and proper guidance. This is the story of a determined entrepreneur who sought help from Marathi Loan Consultancy to make his dream a reality. With their expert assistance, he secured a business loan and successfully launched a thriving clothing business, creating opportunities for himself and others.`,
      image: "/images/blog1.jpg",
      tags: [
        "#BusinessLoan",
        "#Entrepreneurship",
        "#SuccessStory",
        "#MarathiLoan",
      ],
    },

    {
      id: 2,
      title: "Turning Dreams into Reality: From Loan to Grocery Store",
      author: "Deshpande",
      categories: ["Business", "Success Stories"],
      content: `A determined individual took the first step toward financial independence with the help of Marathi Loan Consultancy. By securing a business loan, he transformed his vision into reality and opened a well-stocked grocery store. Today, his store serves the local community and stands as a testament to his hard work and Marathi Loan's support.`,
      image: "/images/blog2.jpg",
      tags: [
        "#BusinessLoan",
        "#Entrepreneurship",
        "#GroceryStore",
        "#MarathiLoan",
      ],
    },

    {
      id: 3,
      title: "Empowering Livelihood: From Loan to Buffalo Shelter",
      author: "Tambe",
      categories: ["Business", "Success Stories"],
      content: `With the support of Marathi Loan Consultancy, a visionary entrepreneur secured a business loan to open a buffalo shelter. This shelter not only provides a safe space for the animals but also serves as a hub for producing and selling fresh buffalo milk. His journey highlights the power of determination and the role of Marathi Loan in enabling small businesses to thrive.`,
      image: "/images/blog3.jpg",
      tags: [
        "#BusinessLoan",
        "#Entrepreneurship",
        "#BuffaloMilk",
        "#MarathiLoan",
      ],
    },
  ];

  const marathi = [
    {
      id: 1,
      title: "कर्जापासून व्यवसायापर्यंत: फॅशन क्षेत्रातील यशोगाथा",
      author: "जोशी  ",
      categories: ["व्यवसाय", "यशोगाथा"],
      content: `व्यवसाय सुरू करण्यासाठी केवळ कल्पना पुरेशी नसते; त्यासाठी आर्थिक मदत आणि योग्य मार्गदर्शन आवश्यक असते. ही एका जिद्दी उद्योजकाची कथा आहे, ज्याने मराठी लोन कन्सल्टन्सीकडे मदतीसाठी धाव घेतली. त्यांच्या तज्ज्ञ मार्गदर्शनामुळे त्यांनी व्यवसाय कर्ज घेतले आणि एक यशस्वी कपड्यांचा व्यवसाय सुरू केला, ज्यामुळे स्वतःसाठी आणि इतरांसाठीही संधी निर्माण झाल्या.`,
      image: "/images/blog1.jpg",
      tags: ["#व्यवसायकर्ज", "#उद्योजकता", "#यशोगाथा", "#मराठीलोन"],
    },
    {
      id: 2,
      title: "स्वप्नांची पूर्तता: कर्जापासून किराणा दुकानापर्यंत",
      author: "देशपांडे ",
      categories: ["व्यवसाय", "यशोगाथा"],
      content: `मराठी लोन कन्सल्टन्सीच्या मदतीने एका जिद्दी व्यक्तीने आर्थिक स्वावलंबनाकडे पहिले पाऊल टाकले. व्यवसाय कर्ज मिळवून त्यांनी आपले स्वप्न साकार केले आणि एक सुसज्ज किराणा दुकान सुरू केले. आज हे दुकान स्थानिक समाजाची सेवा करत असून त्यांच्या मेहनतीचे आणि मराठी लोनच्या पाठिंब्याचे प्रतीक ठरले आहे.`,
      image: "/images/blog2.jpg",
      tags: ["#व्यवसायकर्ज", "#उद्योजकता", "#किराणादुकान", "#मराठीलोन"],
    },
    {
      id: 3,
      title: "उपजीविकेचा पाया: कर्जापासून म्हशींच्या निवाऱ्यापर्यंत",
      author: "तांबे ",
      categories: ["व्यवसाय", "यशोगाथा"],
      content: `मराठी लोन कन्सल्टन्सीच्या मदतीने एका दूरदृष्टी असलेल्या उद्योजकाने व्यवसाय कर्ज मिळवून म्हशींच्या निवाऱ्याची उभारणी केली. या निवाऱ्यात म्हशींना सुरक्षित जागा मिळते आणि तिथे ताजे म्हशीचे दूध उत्पादन व विक्रीही होते. ही यशोगाथा जिद्दीचे आणि मराठी लोनने लघु व्यवसायांना उभे करण्यासाठी दिलेल्या पाठिंब्याचे उदाहरण आहे.`,
      image: "/images/blog3.jpg",
      tags: ["#व्यवसायकर्ज", "#उद्योजकता", "#म्हशीचेदूध", "#मराठीलोन"],
    },
  ];

  const blogs = language === "en" ? english : marathi;

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-16">
          {/* Blog Header with Background Image */}
          <div
            className="bg-cover bg-center text-center overflow-hidden"
            style={{
              minHeight: "600px",
              backgroundImage: `url(${blog.image})`,
            }}
            title={blog.title}
          ></div>

          <div className="max-w-3xl mx-auto">
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 className="text-gray-900 font-bold text-3xl mb-2">
                  {blog.title}
                </h1>
                <p className="text-gray-700 text-xs mt-2">
                  Written By:{" "}
                  <a
                    href="#"
                    className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    {blog.author}
                  </a>{" "}
                  In{" "}
                  {blog.categories.map((category, index) => (
                    <span key={index}>
                      <a
                        href="#"
                        className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                      >
                        {category}
                      </a>
                      {index < blog.categories.length - 1 && ", "}
                    </span>
                  ))}
                </p>

                <p className="text-base leading-8 my-5">{blog.content}</p>

                <div className="mt-5">
                  {blog.tags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
