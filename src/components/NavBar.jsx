import React, { useState } from "react";
import "animate.css";

function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav className="w-full  h-16  drop-shadow-sm px-10 flex items-center justify-between ">
      <div className="flex gap-4 justify-center items-end">
        <p className="text-[1.3rem] tracking-widest hover:drop-shadow-lg cursor-pointer ">
          APJ
        </p>
        <p className="text-[0.8rem]">9730187072</p>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-6 tracking-wide">
          <li className="hover:text-blue-500 cursor-pointer font-[500]">
            Portfolio
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-[500]">
            Experience
          </li>
          <li className="hover:text-blue-500 cursor-pointer font-[500]">
            Contact
          </li>
        </ul>
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

          <ul className="flex flex-col gap-6 tracking-wide">
            <li className="hover:text-blue-500 cursor-pointer font-[500]">
              Portfolio
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-[500]">
              About
            </li>
            <li className="hover:text-blue-500 cursor-pointer font-[500]">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
