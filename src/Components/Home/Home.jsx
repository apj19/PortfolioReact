import React from "react";
import "animate.css";

function Home() {
  return (
    <div className="px-44 w-full h-full grid grid-cols-2 ">
      <div className=" ">
        <h2 className="text-[2rem] animate__animated animate__pulse">
          Let me help you to ease your{" "}
          <span className=" text-[#D85C36]">Development</span> Experience
        </h2>
        <hr className="border border-[#D85C36] w-[70%]" />
        <p>
          Hi Akshay Jadhav (APJCR) here Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Omnis, sapiente.
        </p>
      </div>
      <div className="border border-red-500">1000</div>
    </div>
  );
}

export default Home;
