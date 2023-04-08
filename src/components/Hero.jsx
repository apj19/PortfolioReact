import React from "react";

function Hero() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2  place-items-center bg-white px-6 py-12  ">
      <div className="text-center">
        <h1 className="mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500  text-[2rem] bg-clip-text font-bold tracking-tight md:text-[3rem] text-transparent">
          Learning is obsession , Codeing is Tool
        </h1>
        <p className="mt-6 text-[1.3rem] md:text-[1.5rem]  leading-7 text-gray-600">
          Hi, I'm Akshay Jadhav. A React developer
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
          <div className="bg-gray-50 rounded-full">
            <img className="h-16 w-16" src="../react.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../jslogo2.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../html.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-14 w-14" src="../css.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../redux.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-8 w-8" src="../tailwind.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-full flex justify-center items-center">
            <img className="h-12 w-12" src="../msql.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img className="rounded-xl" src="../jshero.jpg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
