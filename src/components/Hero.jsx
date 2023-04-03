import React from "react";

function Hero() {
  return (
    <div className="grid min-h-full place-items-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-[2.3rem] font-bold tracking-tight md:text-[3.2rem]">
          Let simplifiy Front-End Developement
        </h1>
        <p className="mt-6 text-[1.5rem] md:text-[1.8rem]  leading-7 text-gray-600">
          Hi, I'm Akshay Jadhav. A frontend developer
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6 text-[1.5rem]">
          <a
            className="hover:text-blue-500"
            href="https://www.linkedin.com/in/akshay-jadhav-01737711b/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="hover:text-blue-500"
            href="https://github.com/apj19"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 text-[1.5rem] gap-y-4">
          <div className="bg-white rounded-full">
            <img className="h-16 w-16" src="../react.png" alt="" />
          </div>
          <div className="bg-white h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../jslogo2.png" alt="" />
          </div>
          <div className="bg-white h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../html.png" alt="" />
          </div>
          <div className="bg-white h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-14 w-14" src="../css.png" alt="" />
          </div>
          <div className="bg-white h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../redux.png" alt="" />
          </div>
          <div className="bg-white h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../tailwind.png" alt="" />
          </div>
          <div className="bg-white h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-12 w-12" src="../msql.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
