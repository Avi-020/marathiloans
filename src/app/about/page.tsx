import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";

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
                      <Image
                        src="/images/LOGO.svg"
                        alt="Feature 1"
                        className="object-cover w-full h-full"
                        width={0}
                        height={0}
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
                      <Image
                        src="/images/LOGO.svg"
                        alt="Feature 2"
                        className="object-cover w-full h-full"
                        width={0}
                        height={0}
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
                      <Image
                        src="/images/LOGO.svg"
                        alt="Feature 3"
                        className="object-cover w-full h-full"
                        width={0}
                        height={0}
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
      <>
        <div></div>
        <div className="font-poppins text-black relative">
          <div id="container" className="p-20 flex justify-center">
            {/* Main Wrapper */}
            <div className="p-20 sm:p-16 md:p-20 lg:p-24 flex flex-col md:flex-row px-4 sm:px-8 lg:px-24">
              {/* Image Section */}
              <div className="mr-10 flex text-center justify-center items-center w-full md:w-1/2">
                <Image
                  className="rounded-lg min-w-[100px] w-full h-auto md:w-auto"
                  src="/images/owner.svg"
                  alt="Image of myself"
                  width={0}
                  height={0}
                />
              </div>

              {/* Content Section */}
              <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                <h1 className="text-black font-bold text-3xl mt-6 mb-8">
                  Hey, its me, Mr. Prashant Bhakare
                </h1>
                <p className="text-black w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                  tenetur illum odit labore illo cum inventore optio eum, fugit
                  odio iste atque, doloremque magni laboriosam, hic est amet eos
                  debitis tempore dicta eveniet. Itaque adipisci neque eveniet
                  sequi? Similique molestiae accusamus consequatur neque officia
                  vel quos, reiciendis placeat architecto sit. <br /> Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                  corporis recusandae cumque possimus debitis voluptas quidem
                  praesentium quia fugiat nihil aliquam repudiandae iusto
                  expedita nesciunt eos unde dicta deleniti officiis quis
                  obcaecati quam ipsum, explicabo provident omnis? Ducimus
                  expedita alias sapiente sit dolores quibusdam, similique
                  tempora autem maiores nostrum animi.br <br /> <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
                  aliquid. Quos labore ad beatae dolores magnam minus incidunt,
                  dolorem quod maiores non nemo veniam modi eius tempora
                  nesciunt corporis atque blanditiis debitis nam quibusdam esse.
                  Cupiditate vero, dolorum quo culpa nobis nulla ea quos,
                  adipisci officia tempora voluptate asperiores illo! <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, quibusdam amet quae maxime accusantium obcaecati
                  voluptate at nihil molestiae ducimus architecto, debitis quos
                  explicabo earum!
                </p>

                {/* Social Links Section */}
                <div
                  id="social"
                  className="flex flex-wrap justify-start items-center gap-4"
                >
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                  >
                    <InstagramLogo size={32} />
                    <span>Visit my Instgram</span>
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                  >
                    <LinkedinLogo size={32} />

                    <span>Follow me on Linkedin</span>
                  </Link>
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                  >
                    <TwitterLogo size={32} />

                    <span>Follow me on Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* four boxes */}

        <div className="p-1 flex flex-wrap items-center justify-center">
          <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#80f2ff68]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
            <div className="text-center  content-center">
              <div className=" block text-center">
                <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                  5
                </span>
              </div>
              <span className="block opacity-75 -mb-1">Years Experience</span>
            </div>
          </div>

          <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#83ff735c]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
            <div className="text-center  content-center">
              <div className=" block text-center">
                <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                  100+
                </span>
              </div>
              <span className="block opacity-75 -mb-1">Monthly Files</span>
            </div>
          </div>

          <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#ffea0357]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
            <div className="text-center  content-center">
              <div className=" block text-center">
                <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                  20K
                </span>
              </div>
              <span className="block opacity-75 -mb-1">Happy Customers</span>
            </div>
          </div>

          <div className="flex-shrink-0 m-10 relative overflow-hidden bg-[#fe6c6c54]  max-w-2xs shadow-lg w-72 h-60  flex items-center justify-center">
            <div className="text-center  content-center">
              <div className=" block text-center">
                <span className="block font-semibold text-7xl text-center  text-[#3b5631]">
                  36
                </span>
              </div>
              <span className="block opacity-75 -mb-1">District</span>
            </div>
          </div>
        </div>

        {/* ENd  */}

        {/* why us start  */}
        <div className="bg-white">
          <section
            id="features"
            className="relative block px-6 py-10 md:py-20 md:px-10 "
          >
            <div className="relative mx-auto max-w-5xl text-center">
              <span className="text-black-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                Why choose us
              </span>
              <h2 className="block w-full bg-gradient-to-b from-black to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Build a Website That Your Customers Love
              </h2>
              <p className="mx-auto my-4 w-full max-w-xl bg-white text-center font-medium leading-relaxed tracking-wide text-gray-400">
                Our templates allow for maximum customization. No technical
                skills required our intuitive design tools let you get the job
                done easily.
              </p>
            </div>

            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-md    p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-color-swatch"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                    <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                    <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                    <line x1="17" y1="17" x2="17" y2="17.01"></line>
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-400">Customizable</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  Tailor your landing page s look and feel, from the color
                  scheme to the font size, to the design of the page.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-md    p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bolt"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-400">Fast Performance</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  We build our templates for speed in mind, for super-fast load
                  times so your customers never waver.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-md   p-8 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-tools"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                    <polyline points="12 8 7 3 3 7 8 12"></polyline>
                    <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                    <polyline points="16 12 21 17 17 21 12 16"></polyline>
                    <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                  </svg>
                </div>
                <h3 className="mt-6 text-gray-400">Fully Featured</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  Everything you need to succeed and launch your landing page,
                  right out of the box. No need to install anything else.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* why us end  */}
      </>
    </>
  );
}
