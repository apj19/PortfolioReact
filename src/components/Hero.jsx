import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mb-8 place-items-center px-10 py-6  ">
      <div className="text-center md:text-start row-start-2 md:row-start-1 md:col-start-1 ">
        <h1 className="mt-4  text-[1.8rem] font-bold tracking-tight md:text-[2.5rem] font-['Poppins'] ">
          React Developer with strong JavaScript skills.
        </h1>
        <p className="mt-6  md:text-[1.2rem] leading-7 ">
          Hi, I'm Akshay Jadhav. I build frontend web applications that are
          highly performant, efficient and fully documented for seamless
          integration into any environment.
        </p>

        <div className="   mt-8 flex items-center justify-center md:justify-start ">
          <Link to="portfolio">
            <p className=" font-[500] mr-4 bg-pink-500 rounded-full px-4 py-2">
              Portfolio{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </p>
          </Link>
          <Link to="experience">
            <p className=" font-[500]  bg-blue-500 rounded-full px-4 py-2 ">
              Resume <i className="fa-regular fa-file"></i>
            </p>
          </Link>
        </div>
      </div>
      <div className="row-start-1">
        <img className="rounded-xl" src="../hero-img.webp" alt="" />
      </div>
    </div>
  );
}

export default Hero;
