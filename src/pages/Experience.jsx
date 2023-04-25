import React from "react";

function Experience() {
  return (
    <>
      <section className="flex justify-center mt-10">
        <section className=" flex flex-col   h-[100vh]  w-[60%]">
          <section className="flex justify-between pb-4 border-b ">
            <div className="flex flex-col justify-start">
              <h2 className="text-[1.6rem] mb-4">Akshay Pandurang Jadhav</h2>
              <p className="hover:text-pink-500 mb-2">
                <i className="fa-regular fa-envelope text-pink-500 mr-4"></i>
                akshayjadhav2133@gmail.com
              </p>
              <p className="hover:text-pink-500">
                <i className="fa-solid fa-phone text-pink-500 mr-4"></i>
                9730187072
              </p>
            </div>
            <div className="w-[30%]">
              <img className="w-40 h-40" src="../APJCR2.png" alt="" />
            </div>
          </section>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">Career Objective</h3>
            <p>
              Seeking a position that will improve my expertise in React and
              related technologies, while contributing to the development of
              innovative and impactful web solutions.
            </p>
            <ul className="pl-5">
              <li className="text-blue-200 font-bold">Frontend</li>
              <li className="text-blue-200 font-bold">Database</li>
              <li className="text-blue-200 font-bold">Other Technologies</li>
            </ul>
          </div>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">Key Skills</h3>
          </div>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">Experience</h3>
          </div>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">
              Personal Development
            </h3>
          </div>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">
              Educational Qualification
            </h3>
          </div>
        </section>
      </section>
    </>
  );
}

export default Experience;
