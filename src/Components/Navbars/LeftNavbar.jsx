import React, { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

function LeftNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  function shownav() {
    setShowMenu(true);
  }
  function hidenav() {
    setShowMenu(false);
  }
  return (
    <div className="hidden md:block">
      <div className="fixed w-[50px] h-full left-0 top-2 border-r border-dotted border-[#e3d6be] z-10 flex justify-center  ">
        <div>
          {!showMenu && (
            <svg
              onClick={shownav}
              className="w-[1rem] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          )}

          {showMenu && (
            <div className="">
              <svg
                onClick={hidenav}
                className="w-[1rem] fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>

              <div
                className={`absolute top-8  bg-[#D85C36] animate__animated animate__fadeInLeft rounded-lg `}
              >
                <ul className="">
                  <Link to="/home">
                    <li className="flex items-center gap-4 px-4 py-2 ">
                      <i className="fa-solid fa-house"></i>Home
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="flex items-center gap-4 px-4 py-2 ">
                      <i className="fa-regular fa-address-book"></i>About
                    </li>
                  </Link>

                  <Link to="/portfolio">
                    <li className="flex items-center gap-4 px-4 py-2 ">
                      <i className="fa-regular fa-lightbulb pr-1"></i>Portfolio
                    </li>
                  </Link>

                  <Link to="/contact">
                    <li className="flex items-center gap-4 px-4 py-2 ">
                      <i className="fa-regular fa-envelope"></i>Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="fixed flex justify-center items-start gap-2 flex-col w-[50px] h-full left-[49px] top-0 ">
        <Link to="/home">
          <button className="group p-2 bg-[#D85C36] rounded-tr-sm rounded-br-sm  flex justify-center items-center gap-2 transition duration-700 group-hover:scale-110">
            {" "}
            <i className="fa-solid fa-house py-1"></i>
            <span className="hidden group-hover:block  animate__animated animate__fadeInLeft      ">
              Home
            </span>
          </button>
        </Link>
        <Link to="/about">
          <button className="group p-2 bg-[#D85C36] rounded-tr-sm rounded-br-sm  flex justify-center items-center gap-2 transition duration-700 group-hover:scale-110">
            {" "}
            <i className="fa-regular fa-address-book py-1"></i>
            <span className="hidden group-hover:block animate__animated animate__fadeInLeft   ">
              About
            </span>
          </button>
        </Link>

        <Link to="/portfolio">
          <button className="group p-2 bg-[#D85C36] rounded-tr-sm rounded-br-sm  flex justify-center items-center gap-2 transition duration-700 group-hover:scale-110">
            {" "}
            <i className="fa-regular fa-lightbulb pr-1 py-1"></i>
            <span className="hidden group-hover:block animate__animated animate__fadeInLeft   ">
              Portfolio
            </span>
          </button>
        </Link>
        <Link to="/contact">
          <button className="group p-2 bg-[#D85C36] rounded-tr-sm rounded-br-sm  flex justify-center items-center gap-2 transition duration-700 group-hover:scale-110">
            {" "}
            <i className="fa-regular fa-envelope py-1"></i>
            <span className="hidden group-hover:block animate__animated animate__fadeInLeft   ">
              Contact
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LeftNavbar;
