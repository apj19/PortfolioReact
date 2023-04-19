import React from "react";
import { Tooltip } from "@material-tailwind/react";
function Footer() {
  return (
    <footer className=" px-10 bg-[#0c001e] flex justify-center md:justify-between items-center h-[50px] text-center  py-4">
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

      <div className="flex justify-center items-center gap-2">
        <svg
          className="w-4 h-4  fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
        </svg>
        2023 Made with <i className="fa-solid fa-heart text-red-600"></i> by APJ
      </div>
      <div className="hidden md:block">
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
    </footer>
  );
}

export default Footer;
