import React from "react";
import "./hex.css";

function Portfolio() {
  return (
    <div className="pl-40 w-full">
      <div className="flex items-center justify-evenly">
        <hr className="w-[38%] animate__animated animate__fadeInLeft" />
        <h2 className="tracking-widest animate__animated animate__fadeInDown">
          PORTFOLIO
        </h2>
        <hr className="w-[38%] animate__animated animate__fadeInRight" />
      </div>

      {/* hexagone */}
      <div class="hexagon"></div>
    </div>
  );
}

export default Portfolio;
