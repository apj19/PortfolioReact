import React, { useState } from "react";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import { check } from "../utilities/logo";

function Home() {
  return (
    <main className="pt-16  ">
      <Hero />
      <section>
        <h2 className="text-[1.5rem] font-['Poppins'] py-4 text-center font-[500] text-blue-500 ">
          TECH STACK
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 text-[1.5rem] gap-y-4">
          <div className="bg-gray-50 rounded-xl">
            <img className="h-16 w-16" src="../react.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-lg flex justify-center items-center">
            <img className="h-8 w-8" src="../jslogo2.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-lg flex justify-center items-center">
            <img className="h-8 w-8" src="../html.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-lg flex justify-center items-center">
            <img className="h-14 w-14" src="../css.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-lg flex justify-center items-center">
            <img className="h-8 w-8" src="../redux.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-lg flex justify-center items-center">
            <img className="h-8 w-8" src="../tailwind.png" alt="" />
          </div>
          <div className="bg-gray-50 h-16 w-16 rounded-lg flex justify-center items-center">
            <img className="h-12 w-12" src="../msql.png" alt="" />
          </div>
        </div>
      </section>

      <section className=" py-16 px-10 ">
        <h2 className="text-[1.5rem] font-['Poppins'] py-4 text-center font-[500] text-blue-500 ">
          PORTFOLIO
        </h2>
        {/* Ecommrace Project */}

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 px-2  py-10  mb-20 rounded-xl  ">
          <div className="h-52 md:h-80 h bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../p1.JPG"
              alt=""
            />
          </div>

          <div className=" flex flex-col justify-center items-start   ">
            <h2 className="text-xl font-['Poppins'] font-[600] tracking-wider  md:text-2xl">
              COMFY
            </h2>

            <p className="mt-4   ">
              It is an E-commerce application for furniture. it allows users to
              browse through different types of furniture, User can apply
              multiple filters to sort the products. Users can add products to
              their cart. firebase authentication is used.
            </p>
            <div className="grid md:grid-cols-2 gap-x-2 gap-y-2 my-4">
              <p>
                <span className="mr-2">{check}</span> Firebase Authentication
              </p>
              <p>
                <span className="mr-2">{check}</span> Redux
              </p>
              <p>
                <span className="mr-2">{check}</span> Axios
              </p>
              <p>
                <span className="mr-2">{check}</span> Tailwind CSS
              </p>
              <p>
                <span className="mr-2">{check}</span> Protected Route
              </p>
              <p>
                <span className="mr-2">{check}</span> Product Filters
              </p>
            </div>

            <div className="  mt-4 ">
              <a
                className=" font-[500] mr-4 bg-pink-500 rounded-full px-4 py-2"
                href="https://comfyapjcr.netlify.app/"
                target="_blank"
              >
                Live Preview{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                className=" font-[500]  bg-blue-500 rounded-full px-4 py-2 "
                href="https://github.com/apj19/comfy"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        {/* netflix */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2  py-10   mb-20  ">
          <div className="h-52 md:h-80 bg-cover md:col-start-2">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../netflix.JPG"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center items-start drop-shadow-xl md:row-start-1">
            <h2 className="text-xl font-['Poppins'] font-[600] tracking-wider  md:text-2xl">
              NETFLIX UI CLONE
            </h2>

            <p className="mt-4   ">
              It is a Netflix clone. Users can search for movies or Tv with
              names. Users can see movies of different genres. for each movie,
              the user can see the cast and recommendations. For tv users can
              see all seasons with each episode's information. TMDB API is used
              here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 my-4">
              <p>
                <span className="mr-4">{check}</span> Responsive
              </p>
              <p>
                <span className="mr-4">{check}</span> Search Movie
              </p>
              <p>
                <span className="mr-4">{check}</span> Axios
              </p>
              <p>
                <span className="mr-4">{check}</span> Tailwind CSS
              </p>
              <p>
                <span className="mr-4">{check}</span> Movie/Tv Details
              </p>
              <p>
                <span className="mr-4">{check}</span> Tv Season Details
              </p>
            </div>

            <div className="  mt-4">
              <a
                className=" font-[500] mr-4 bg-pink-500 rounded-full px-4 py-2"
                href="https://netflixcloneapjcr.netlify.app/"
                target="_blank"
              >
                Live Preview{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                className=" font-[500]  bg-blue-500 rounded-full px-4 py-2 "
                href="https://github.com/apj19/Netflix-Clone"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        {/* {Ui Project} */}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 py-10   mb-20 ">
          <div className="h-52 md:h-80 bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../ui.JPG"
              alt=""
            />
          </div>

          <div className=" flex flex-col justify-center items-start drop-shadow-xl">
            <h2 className="text-xl font-['Poppins'] font-[600] tracking-wider md:text-2xl">
              UI Design{" "}
            </h2>

            <p className="mt-4  ">
              This is a UI design project. worked on frontend mentor challenges
              to build different UI using CSS and Tailwind CSS. There are a
              total of 18 Different UI designs from beginner level to advanced
              level. All designs are mobile responsive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 my-4">
              <p>
                <span className="mr-4">{check}</span> CSS
              </p>
              <p>
                <span className="mr-4">{check}</span> FlexBox
              </p>
              <p>
                <span className="mr-4">{check}</span> Grid
              </p>
              <p>
                <span className="mr-4">{check}</span> Tailwind CSS
              </p>
              <p>
                <span className="mr-4">{check}</span> CSS Positions
              </p>
              <p>
                <span className="mr-4">{check}</span> Responsive
              </p>
            </div>

            <div className="  mt-4">
              <a
                className=" font-[500] mr-4 bg-pink-500 rounded-full px-4 py-2"
                href="https://ui-design-project-apjcr.netlify.app/"
                target="_blank"
              >
                Live Preview{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                className=" font-[500]  bg-blue-500 rounded-full px-4 py-2 "
                href="https://github.com/apj19/FrontendMentorChallenges"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        {/* PokeDex  */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 py-10   mb-20   ">
          <div className="h-52 md:h-80 bg-cover md:col-start-2">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../pokemon.JPG"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center items-start drop-shadow-xl md:row-start-1">
            <h2 className="text-xl font-['Poppins'] font-[600] tracking-wider  md:text-2xl">
              POKEDEX
            </h2>

            <p className="mt-4  ">
              It is a Pokemon finder app built with Pokeapi. Users can search
              for different Pokemon. Each Pokemon detail can be seen with its
              evolution form. From the navigation bar, different types of
              Pokemon can be found.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 my-4">
              <p>
                <span className="mr-4">{check}</span> Responsive
              </p>
              <p>
                <span className="mr-4">{check}</span> Pagination
              </p>
              <p>
                <span className="mr-4">{check}</span> Error Handaling
              </p>
              <p>
                <span className="mr-4">{check}</span> Tailwind CSS
              </p>
              <p>
                <span className="mr-4">{check}</span> Search Pokemon
              </p>
              <p>
                <span className="mr-4">{check}</span> Evoluation Details
              </p>
            </div>

            <div className="  mt-4">
              <a
                className=" font-[500] mr-4 bg-pink-500 rounded-full px-4 py-2"
                href="https://pokedexapjcr.netlify.app/"
                target="_blank"
              >
                Live Preview{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                className=" font-[500]  bg-blue-500 rounded-full px-4 py-2 "
                href="https://github.com/apj19/pkemon"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        {/* {Countries Data} */}

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 px-2 md:px-10 py-10   mb-6  ">
          <div className="h-52 md:h-80 bg-cover">
            <img
              className="object-fit w-full h-full rounded-md"
              src="../dom.JPG"
              alt=""
            />
          </div>

          <div className=" flex flex-col justify-center items-start ">
            <h2 className="text-xl font-['Poppins'] font-[600] tracking-wider  md:text-2xl">
              COUNTRY DATA
            </h2>

            <p className="mt-4  ">
              Built using JS Dom manipulation. Users can search country by name
              or capital of the country. then sort the result by name, capital
              and population. The population graph is shown.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 my-4">
              <p>
                <span className="mr-4">{check}</span> JavaScript
              </p>
              <p>
                <span className="mr-4">{check}</span> Array Methods
              </p>
              <p>
                <span className="mr-4">{check}</span> HOF
              </p>
              <p>
                <span className="mr-4">{check}</span> Tailwind CSS
              </p>
              <p>
                <span className="mr-4">{check}</span> Responsive
              </p>
              <p>
                <span className="mr-4">{check}</span> Search by name or capital
              </p>
            </div>

            <div className="  mt-4">
              <a
                className=" font-[500] mr-4 bg-pink-500 rounded-full px-4 py-2"
                href="https://countriesdataapjcr.netlify.app/"
                target="_blank"
              >
                Live Preview{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                className=" font-[500]  bg-blue-500 rounded-full px-4 py-2 "
                href="https://github.com/apj19/Dom-Manipulation/tree/main/Dom%20Mega%20Project"
                target="_blank"
              >
                Code <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ///////////////////////////////////////// */}
      </section>
    </main>
  );
}

export default Home;
