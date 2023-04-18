import React from "react";

function Card(data) {
  // console.log(data.data.typesrc);
  return (
    <div className="flex flex-col    cursor-pointer items-center justify-start overflow-hidden transition-shadow shadow-xl shadow-black/30 rounded-[10px] h-[20rem] w-72  bg-[#0c001e] ">
      <div className="h-[55%] w-[100%]  rounded-[10px]  mb-4 ">
        <img
          className="h-full w-full object-cover transition-transform duration-700  "
          src="../p1.JPG"
          alt=""
        />
      </div>
      <div className="bg-gray-50 rounded-xl">
        <img className="h-8 w-8" src={data.data.typesrc} alt="" />
      </div>
      <h3 className="px-4  mt-2">Curved Section Landing Page</h3>

      <div className="text-[0.8rem] mt-4">
        <a
          className=" font-[500] mr-4 bg-blue-500 rounded-full px-4 py-2 "
          href="https://github.com/apj19/pkemon"
          target="_blank"
        >
          Code <i className="fa-brands fa-github"></i>
        </a>
        <a
          className=" font-[500] bg-pink-500 rounded-full px-4 py-2"
          href="https://pokedexapjcr.netlify.app/"
          target="_blank"
        >
          Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
