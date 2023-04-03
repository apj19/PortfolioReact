import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <main className="pt-16 font-['Poppins']">
      <Hero />
      <section className="bg-white pt-16 px-10">
        <h2 className="text-[1.2rem] text-center font-[500] text-blue-500 ">
          PORTFOLIO
        </h2>
        <section className="lg:py-12 lg:flex lg:justify-center">
          <div className="overflow-hidden lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
            <div className="lg:w-1/2">
              <div className="h-64 bg-cover lg:h-full">
                <img
                  className="object-fit w-full h-full"
                  src="../p1.JPG"
                  alt=""
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-xl font-[500]  md:text-2xl">COMFY</h2>

              <p className="mt-4 text-center text-gray-500 ">
                It is a E-commerace application for furtutniture. it allows
                users to browrse through differnt furnitures, User can apply
                differnt types of filters. firebase login is used.
              </p>

              <div className="text-[1.2rem] mt-4">
                <a className=" font-[500] mr-4" href="http://" target="_blank">
                  Code <i className="fa-brands fa-github"></i>
                </a>
                <a className=" font-[500]" href="http://" target="_blank">
                  Live Demo{" "}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
