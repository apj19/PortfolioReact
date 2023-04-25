import React from "react";
import { Link } from "react-router-dom";
import FileSaver from "file-saver";

function Experience() {
  return (
    <>
      <section className="flex  justify-center mt-10">
        <section className=" flex flex-col  w-[80%]  md:w-[60%]">
          <section className="flex flex-col md:flex-row justify-between pb-4 border-b ">
            <div className="flex flex-col justify-start text-center md:text-start">
              <h2 className="text-[1.6rem] mb-4 ">Akshay Pandurang Jadhav</h2>
              <p className="hover:text-pink-500 mb-2">
                <i className="fa-regular fa-envelope text-pink-500 mr-4"></i>
                akshayjadhav2133@gmail.com
              </p>
              <p className="hover:text-pink-500">
                <i className="fa-solid fa-phone text-pink-500 mr-4"></i>
                9730187072
              </p>
            </div>
          </section>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">Career Objective</h3>
            <p>
              Seeking a position that will improve my expertise in React and
              related technologies, while contributing to the development of
              innovative and impactful web solutions.
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">Key Skills</h3>
            <ul className="md:pl-5">
              <li>
                {" "}
                <span className="text-blue-200 font-bold">Frontend: </span>{" "}
                HTML, CSS, Tailwind CSS, JavaScript, React
              </li>
              <li>
                {" "}
                <span className="text-blue-200 font-bold">Database: </span> SQL
              </li>
              <li>
                {" "}
                <span className="text-blue-200 font-bold">
                  Other Technologies:{" "}
                </span>{" "}
                Basic understanding of: - Angular, WebApi, C#, Microsoft Azure,
                Node Js, Mango DB, Express
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">Experience</h3>
            <p>
              Associate in{" "}
              <span className="font-bold">
                Cognizant technology Solutions India Private Limited
              </span>{" "}
              . Pune (Nov 2020- Till Now) 2 years 5 months
            </p>
            <h4 className="text-blue-200 font-bold ">Work Experience</h4>
            <h5 className="font-bold pl-5"> Pet Parent Look Up Tool</h5>
            <p className="pl-5">
              Description: Design and Develop the Customer data look up tool
              that shows the customer related data that can be used by operation
              team to resolve the customer account related issues. Built
              variations of this tool as per need of different teams that work
              on different applications. Closely work on operation team to
              understand the requirement and build customized UI for that team.
            </p>

            <p className="pl-8 my-2">
              1.<span className="underline">MDM Look Up Tool : </span>
              Worked on the MDM tool that fetches customer data from MDM
              database and show customers details and its keys related to all
              applications that helps operation team to resolve the customer
              related issues.
            </p>
            <p className="pl-8">
              2.<span className="underline">MERGE Look Up Tool : </span>
              Worked with operation team to understand the customer account
              merge issue. To understand the requirements manually resolved the
              merge issue which need understanding of multiple application data.
              With that requirements built the tool that shows merge account
              information and indicators whether to merge the accounts or not.
              It significantly reduces incident resolution time.
            </p>
            <p className="pl-5">
              <span className="text-blue-200 font-bold ">
                {" "}
                Tools and Technologies used:
              </span>{" "}
              React, Postman, VS code, GitHub, Tailwind CSS, JavaScript, SQL
              Server 2017
            </p>
            <p className="pl-5">
              <span className="text-blue-200 font-bold ">
                Role & Responsibilities:{" "}
              </span>{" "}
              Development, Design
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-blue-500 text-[1.2rem]">
              Personal Development
            </h3>
            <Link to="portfolio">
              <p className=" font-[500]  mr-4 bg-pink-500 inline-block rounded-full px-4 py-2">
                Portfolio{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </p>
            </Link>
          </div>
          <div className="my-4 py-2 border-b">
            <h3 className="text-blue-500 text-[1.2rem]">
              Educational Qualification
            </h3>
            <p>
              Master of Technology (MTech) Embedded control System – College of
              Engineering Pune (2018-20)
            </p>
          </div>
          <div className="mb-4 mx-auto">
            <button
              onClick={() => {
                FileSaver.saveAs(
                  "../resume.pdf",
                  "Akshay_Jadhav_9730187072.pdf"
                );
              }}
              className=" font-[500]  bg-blue-500 rounded-full px-4 py-2 "
            >
              Download Resume <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Experience;
