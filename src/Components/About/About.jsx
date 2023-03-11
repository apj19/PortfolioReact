import React from "react";
import "animate.css";

function About() {
  return (
    <div className="px-44 w-full">
      <div className="flex items-center justify-evenly">
        <hr className="w-[40%] animate__animated animate__fadeInLeft" />
        <h2 className=" tracking-widest  animate__animated animate__fadeInDown">
          ABOUT ME
        </h2>
        <hr className="w-[40%] animate__animated animate__fadeInRight" />
      </div>
      <div className="flex items-center justify-evenly">
        <hr className="w-[38%] animate__animated animate__fadeInLeft" />
        <h2 className="tracking-widest animate__animated animate__fadeInDown">
          EXPERIANCE
        </h2>
        <hr className="w-[38%] animate__animated animate__fadeInRight" />
      </div>
      <div className="flex items-center justify-evenly">
        <hr className="w-[38%] animate__animated animate__fadeInLeft" />
        <h2 className="tracking-widest animate__animated animate__fadeInDown">
          TECHNOLOGIES
        </h2>
        <hr className="w-[38%] animate__animated animate__fadeInRight" />
      </div>
      {/* skills section */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-[150px] h-[150px] border border-gray-600 backdrop-blur-sm rounded-[1rem]">
            <img src="./react.png" alt="React" />
          </div>
          <div className="w-[150px] h-[150px] border backdrop-blur-sm rounded-[1rem]">
            <img src="./msql.png" alt="React" />
          </div>
          <div className="w-[150px] h-[150px] border backdrop-blur-sm rounded-[1rem] flex justify-center items-center">
            <img className="w-24 h-24" src="./js3.png" alt="React" />
          </div>
          <div className="w-[150px] h-[150px] border backdrop-blur-sm rounded-[1rem] flex justify-center items-center">
            <img className="" src="./css.png" alt="React" />
          </div>

          <div className="w-[150px] h-[150px] border backdrop-blur-sm rounded-[1rem] flex justify-center items-center">
            <img className="w-24 h-24" src="./tailwind.png" alt="React" />
          </div>

          <div className="w-[150px] h-[150px] border backdrop-blur-sm rounded-[1rem] flex justify-center items-center">
            <img src="./Bootstrap.png" alt="React" />
          </div>
          <div className="w-[150px] h-[150px] border backdrop-blur-sm rounded-[1rem] flex justify-center items-center">
            <img className="w-20 h-20" src="./redux.png" alt="React" />
          </div>
          <div className="w-[150px] h-[150px] border border-gray-600 backdrop-blur-sm rounded-[1rem] flex justify-center items-center">
            <img className="w-20 h-20" src="./html.png" alt="React" />
          </div>
          <div className="w-[150px] h-[150px] border border-gray-600 backdrop-blur-sm rounded-[1rem] flex justify-center items-center">
            <img className="w-20 h-20" src="./angular.png" alt="React" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
