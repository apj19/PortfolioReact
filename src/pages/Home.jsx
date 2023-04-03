import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <main className="pt-16 font-['Poppins']">
      <Hero />
      <section className="bg-white py-16 px-10 ">
        <h2 className="text-[1.2rem] py-4 text-center font-[500] text-blue-500 ">
          PORTFOLIO
        </h2>
        {/* Ecommrace Project */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-10 py-10 drop-shadow-xl bg-white mb-20">
          <div className="h-64 bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../p1.JPG"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center items-center px-6 drop-shadow-xl">
            <h2 className="text-xl font-[500]  md:text-2xl">COMFY</h2>

            <p className="mt-4 text-center text-gray-500 ">
              It is a E-commerace application for furtutniture. it allows users
              to browrse through differnt furnitures, User can apply differnt
              types of filters. firebase login is used.
            </p>

            <div className="text-[1.2rem] mt-4">
              <a className=" font-[500] mr-4" href="http://" target="_blank">
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a className=" font-[500]" href="http://" target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Netflix Project */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-10 py-10 drop-shadow-xl bg-white">
          <div className="h-64 bg-cover md:col-start-2 ">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../p1.JPG"
              alt=""
            />
          </div>
          <div className="md:col-start-1 md:row-start-1 flex flex-col justify-center items-center px-6 drop-shadow-xl">
            <h2 className="text-xl font-[500]  md:text-2xl">COMFY</h2>

            <p className="mt-4 text-center text-gray-500 ">
              It is a E-commerace application for furtutniture. it allows users
              to browrse through differnt furnitures, User can apply differnt
              types of filters. firebase login is used.
            </p>

            <div className="text-[1.2rem] mt-4">
              <a className=" font-[500] mr-4" href="http://" target="_blank">
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a className=" font-[500]" href="http://" target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </section>

        {/* UI Project */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-10 py-10 drop-shadow-xl bg-white mb-20">
          <div className="h-64 bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../p1.JPG"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center items-center px-6 drop-shadow-xl">
            <h2 className="text-xl font-[500]  md:text-2xl">COMFY</h2>

            <p className="mt-4 text-center text-gray-500 ">
              It is a E-commerace application for furtutniture. it allows users
              to browrse through differnt furnitures, User can apply differnt
              types of filters. firebase login is used.
            </p>

            <div className="text-[1.2rem] mt-4">
              <a className=" font-[500] mr-4" href="http://" target="_blank">
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a className=" font-[500]" href="http://" target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Js Project */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-10 py-10 drop-shadow-xl bg-white">
          <div className="h-64 bg-cover md:col-start-2 ">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../p1.JPG"
              alt=""
            />
          </div>
          <div className="md:col-start-1 md:row-start-1 flex flex-col justify-center items-center px-6 drop-shadow-xl">
            <h2 className="text-xl font-[500]  md:text-2xl">COMFY</h2>

            <p className="mt-4 text-center text-gray-500 ">
              It is a E-commerace application for furtutniture. it allows users
              to browrse through differnt furnitures, User can apply differnt
              types of filters. firebase login is used.
            </p>

            <div className="text-[1.2rem] mt-4">
              <a className=" font-[500] mr-4" href="http://" target="_blank">
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a className=" font-[500]" href="http://" target="_blank">
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
