import React, { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="w-full z-10 h-16  drop-shadow-sm px-10 flex items-center justify-between ">
      <div className="flex gap-4 justify-center items-end">
        <div className=" flex gap-4 justify-center items-center text-[1.3rem] tracking-widest hover:drop-shadow-lg cursor-pointer font-bold ">
          <Link to="/">
            <img className="h-8" src="./logo.svg" alt="" />
          </Link>
          APJ
        </div>
      </div>

      <div className="hidden md:block">
        <Tooltip content="Click to Copy" placement="top-start">
          <p
            className="mb-2 hover:text-pink-500"
            onClick={(e) => {
              navigator.clipboard.writeText(e.target.innerText);
            }}
          >
            <i className="fa-solid fa-phone"></i> +91 <span>9730187072</span>
          </p>
        </Tooltip>
      </div>

      <button
        className="md:hidden cursor-pointer"
        onClick={() => setShowMobileNav(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {showMobileNav && (
        <div
          onClick={() => setShowMobileNav(false)}
          className="fixed animate__animated animate__fadeInLeft top-0 left-0 w-full h-[100vh] bg-[#090c10] text-white flex flex-col justify-start items-center pt-4 px-10"
        >
          <div className="mb-8 w-full flex justify-end text-[1.5rem] cursor-pointer">
            <button onClick={() => setShowMobileNav(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="border-b pb-4 mb-4">
            <Tooltip content="Click to Copy" placement="top-start">
              <p
                className="mb-2 hover:text-pink-500"
                onClick={(e) => {
                  navigator.clipboard.writeText(e.target.innerText);
                }}
              >
                <i className="fa-solid fa-phone"></i> +91{" "}
                <span>9730187072</span>
              </p>
            </Tooltip>
            <Tooltip content="Click to Copy" placement="top-start">
              <p
                className="hover:text-pink-500"
                onClick={(e) => {
                  navigator.clipboard.writeText(e.target.innerText);
                }}
              >
                <i className="fa-solid fa-envelope"></i>{" "}
                <span>akshayjadhav2133@gmail.com</span>{" "}
              </p>
            </Tooltip>
          </div>
          <ul className="flex flex-col items-start gap-6 tracking-wide">
            <Link to="portfolio">
              <li className="hover:text-blue-500 cursor-pointer font-[500]">
                Portfolio
              </li>
            </Link>
            <Link to="experience">
              <li className="hover:text-blue-500 cursor-pointer font-[500]">
                Resume
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
