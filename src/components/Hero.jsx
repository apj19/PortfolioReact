import React from "react";

function Hero() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-4  place-items-center px-10 py-6  ">
      <div className="text-center md:text-start row-start-2 md:row-start-1 md:col-start-1 ">
        <h1 className="mt-4  text-[1.8rem] font-bold tracking-tight md:text-[2.5rem] ">
          React Developer with strong JavaScript skills.
        </h1>
        <p className="mt-6  md:text-[1.2rem] leading-7 ">
          Hi, I'm Akshay Jadhav. I build frontend web applications that are
          highly performant, efficient and fully documented for seamless
          integration into any environment.
        </p>
        <div className="mt-8 flex items-center justify-center md:justify-start gap-x-6 text-[1.5rem]">
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
      </div>
      <div className="row-start-1">
        <img className="rounded-xl" src="../hero-img.webp" alt="" />
      </div>
    </div>
  );
}

export default Hero;
