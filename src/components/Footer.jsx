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

      <div>
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
