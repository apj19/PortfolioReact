import React, { useState } from "react";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";

function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <main className="pt-16 font-['Poppins']">
      <Hero />

      <Timeline />
      <section className="bg-white py-16 px-10 ">
        <h2 className="text-[1.5rem] py-4 text-center font-[500] text-blue-500 ">
          PORTFOLIO
        </h2>
        {/* Ecommrace Project */}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 md:px-10 py-10 drop-shadow-xl bg-white mb-20 rounded-xl border-t ">
          <div className="h-64 bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../p1.JPG"
              alt=""
            />
          </div>

          <div className=" flex flex-col justify-center items-center px-6 drop-shadow-xl">
            <h2 className="text-xl font-[500]  md:text-2xl">COMFY</h2>

            <p className="mt-4 text-[0.8rem] md:text-[1rem] text-center text-gray-500 ">
              It is a E-commerace application for furtutniture. it allows users
              to browrse through differnt furnitures, User can apply differnt
              types of filters. firebase login is used.
            </p>

            <button
              onClick={() => {
                if (number != 1) {
                  setNumber(1);
                  setShowDetails(true);
                } else {
                  setNumber(1);
                  setShowDetails((s) => !s);
                }
              }}
              className="my-2"
            >
              Details
            </button>

            <div className=" md:text-[1.2rem] mt-4">
              <a
                className=" font-[500] mr-4"
                href="https://github.com/apj19/comfy"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a
                className=" font-[500]"
                href="https://comfyapjcr.netlify.app/"
                target="_blank"
              >
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {number == 1 && showDetails && (
            <div className="flex flex-col justify-center items-center px-6 ">
              Details Showing
            </div>
          )}
        </section>

        {/* netflix */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 md:px-10 py-10 drop-shadow-xl bg-white mb-20 rounded-xl border-t  ">
          <div className="h-64 bg-cover md:col-start-2">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../netflix.JPG"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center items-center px-6 drop-shadow-xl md:row-start-1">
            <h2 className="text-xl font-[500]  md:text-2xl">NETFLIX</h2>

            <p className="mt-4 text-[0.8rem] md:text-[1rem] text-center text-gray-500 ">
              It is a netflix clone. User can search for movie or Tv with name.
              alose user can see movies with different genres. for each moview
              user can see cast and recommandations. For tv user can see all
              seasons with each epsiode information.
            </p>

            <button
              onClick={() => {
                if (number != 2) {
                  setNumber(2);
                  setShowDetails(true);
                } else {
                  setNumber(2);
                  setShowDetails((s) => !s);
                }
              }}
              className="my-2"
            >
              Details
            </button>

            <div className=" md:text-[1.2rem] mt-4">
              <a
                className=" font-[500] mr-4"
                href="https://github.com/apj19/Netflix-Clone"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a
                className=" font-[500]"
                href="https://netflixcloneapjcr.netlify.app/"
                target="_blank"
              >
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {number == 2 && showDetails && (
            <div className="flex flex-col justify-center items-center px-6 ">
              Details Showing
            </div>
          )}
        </section>

        {/* {Ui Project} */}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 md:px-10 py-10 drop-shadow-xl bg-white mb-20 rounded-xl border-t ">
          <div className="h-64 bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../ui.JPG"
              alt=""
            />
          </div>

          <div className=" flex flex-col justify-center items-center px-6 drop-shadow-xl">
            <h2 className="text-xl font-[500]  md:text-2xl">UI Design </h2>

            <p className="mt-4 text-[0.8rem] md:text-[1rem] text-center text-gray-500 ">
              This is UI design project. worked on frontendmentor challanges to
              build diffrent UI using CSS and Talwind CSS. There are total 18
              Different UI design from begineer level to advance level.
            </p>

            <button
              onClick={() => {
                if (number != 3) {
                  setNumber(3);
                  setShowDetails(true);
                } else {
                  setNumber(3);
                  setShowDetails((s) => !s);
                }
              }}
              className="my-2"
            >
              Details
            </button>

            <div className=" md:text-[1.2rem] mt-4">
              <a
                className=" font-[500] mr-4"
                href="https://github.com/apj19/FrontendMentorChallenges"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a
                className=" font-[500]"
                href="https://ui-design-project-apjcr.netlify.app/"
                target="_blank"
              >
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {number == 3 && showDetails && (
            <div className="flex flex-col justify-center items-center px-6 ">
              Details Showing
            </div>
          )}
        </section>

        {/* PokeDex  */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 md:px-10 py-10 drop-shadow-xl bg-white mb-20 rounded-xl border-t  ">
          <div className="h-64 bg-cover md:col-start-2">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../pokemon.JPG"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center items-center px-6 drop-shadow-xl md:row-start-1">
            <h2 className="text-xl font-[500]  md:text-2xl">POKEDEX</h2>

            <p className="mt-4 text-[0.8rem] md:text-[1rem] text-center text-gray-500 ">
              It is a pokemon finder app built with pokeapi.User can search for
              different pokemon. Each pokemon details can be seen with the
              evolution.From nav bar diffrent types of pokemon can be found.
            </p>

            <button
              onClick={() => {
                if (number != 4) {
                  setNumber(4);
                  setShowDetails(true);
                } else {
                  setNumber(4);
                  setShowDetails((s) => !s);
                }
              }}
              className="my-2"
            >
              Details
            </button>

            <div className=" md:text-[1.2rem] mt-4">
              <a
                className=" font-[500] mr-4"
                href="https://github.com/apj19/pkemon"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a
                className=" font-[500]"
                href="https://pokedexapjcr.netlify.app/"
                target="_blank"
              >
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {number == 4 && showDetails && (
            <div className="flex flex-col justify-center items-center px-6 ">
              Details Showing
            </div>
          )}
        </section>

        {/* {Countries Data} */}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 md:px-10 py-10 drop-shadow-xl bg-white mb-20 rounded-xl border-t ">
          <div className="h-64 bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../dom.JPG"
              alt=""
            />
          </div>

          <div className=" flex flex-col justify-center items-center px-6 drop-shadow-xl">
            <h2 className="text-xl font-[500]  md:text-2xl">UI Design </h2>

            <p className="mt-4 text-[0.8rem] md:text-[1rem] text-center text-gray-500 ">
              Buitl using Js Dom manipulation.User can search country by name or
              capital of country. then sort ther result by name,capital and
              population. The population graph is shown.
            </p>

            <button
              onClick={() => {
                if (number != 5) {
                  setNumber(5);
                  setShowDetails(true);
                } else {
                  setNumber(5);
                  setShowDetails((s) => !s);
                }
              }}
              className="my-2"
            >
              Details
            </button>

            <div className=" md:text-[1.2rem] mt-4">
              <a
                className=" font-[500] mr-4"
                href="https://github.com/apj19/Dom-Manipulation/tree/main/Dom%20Mega%20Project"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
              <a
                className=" font-[500]"
                href="https://countriesdataapjcr.netlify.app/"
                target="_blank"
              >
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {number == 5 && showDetails && (
            <div className="flex flex-col justify-center items-center px-6 ">
              Details Showing
            </div>
          )}
        </section>

        {/* ///////////////////////////////////////// */}
      </section>
    </main>
  );
}

export default Home;
