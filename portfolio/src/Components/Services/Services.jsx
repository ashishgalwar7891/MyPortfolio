import React from 'react'
import { MdOutlineDesktopMac } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { SiGoogleslides } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import './../../App.css'

const Services = ({ mode }) => {
  const [show, setShow] = React.useState(false)
  const[heading, setHeading] = React.useState('')
  return (
    <>
      <div className="flex justify-center items-center p-12" id='services'>
        <div className="text-center w-[80%]">
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text font-serif pb-6">what I offer</p>
          <div className="flex justify-around flex-wrap">
            <div
              className={`w-[250px] pt-4 m-4 rounded-xl shadow-2xl  ${
                mode === "dark-mode"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <MdOutlineDesktopMac size={50} className="mx-auto" />
              <h1 className="text-xl font-bold p-4">Product Designer</h1>
              <p
                className={`cursor-pointer w-[100%] p-2 rounded-lg ${
                  mode === "dark-mode"
                    ? "hover:bg-white hover:text-black"
                    : "hover:bg-black hover:text-white"
                }`}
                onClick={() =>[ setShow(true), setHeading('Product Designer')] }
              >
                view More
                <span className="mx-3">
                  <FaArrowRight size={20} className="inline" />
                </span>
              </p>
            </div>
            <div
              className={`w-[250px] pt-4 m-4 rounded-xl shadow-2xl ${
                mode === "dark-mode"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <IoCodeSlash size={50} className="mx-auto" />
              <h1 className="text-xl font-bold p-4">UI/UX Designer</h1>
              <p
                className={`cursor-pointer w-[100%] p-2 rounded-lg ${
                  mode === "dark-mode"
                    ? "hover:bg-white hover:text-black"
                    : "hover:bg-black hover:text-white"
                }`}
                onClick={() => [setShow(true), setHeading('UI/UX Designer')] }
              >
                view More
                <span className="mx-3">
                  <FaArrowRight size={20} className="inline" />
                </span>
              </p>
            </div>
            <div
              className={`w-[250px] pt-4 m-4 rounded-xl shadow-2xl ${
                mode === "dark-mode"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <SiGoogleslides size={50} className="mx-auto" />
              <h1 className="text-xl p-4 font-bold">Visual Designer</h1>
              <p
                className={`cursor-pointer w-[100%] rounded-lg p-2 ${
                  mode === "dark-mode"
                    ? "hover:bg-white hover:text-black"
                    : "hover:bg-black hover:text-white"
                }`}
                onClick={() => [setShow(true), setHeading('Visual Designer')] }
              >
                view More
                <span className="mx-3">
                  <FaArrowRight size={20} className="inline" />
                </span>
              </p>
            </div>
          </div>
        </div>
            <WhatIOffer whatIOffer={show} setWhatIOffer={setShow} heading={heading} mode={mode}/>
      </div>
    </>
  );
}

export default Services


function WhatIOffer({whatIOffer, setWhatIOffer, heading,mode}) {
  console.log(whatIOffer);
  return whatIOffer ? (
    <div className="whatIOffer">
      <div
        className={`${
          mode === "dark-mode"
            ? "modal1 bg-black text-[#eee]"
            : "modal1 bg-white text-[#222]"
        }`}
      >
        <div>
          <h1 className="text-2xl font-semibold text-center pb-2">{heading}</h1>
          <div>
            <h5 className="text-lg font-normal pb-6 text-center">
              Experienced Full Stack Developer with 1-3 years of hands-on
              expertise in Java, MERN Stack, and frontend development. Dedicated
              to delivering quality work to clients.
            </h5>
            <button
              type="button"
              className={`${
                mode === "dark-mode"
                  ? "btn-close rounded-full hover:bg-gray-800 text-white"
                  : "btn-close rounded-full hover:bg-gray-100  text-black"
              }`}
              aria-label="Close"
              onClick={() => setWhatIOffer(false)}
            >
              x
            </button>
          </div>
          <ul className="text font-serif">
            <li className="py-2">
              {" "}
              <FaHandPointRight size={20} className="inline mx-2" /> I develop
              the user interface.{" "}
            </li>
            <li className="py-2">
              {" "}
              <FaHandPointRight size={20} className="inline mx-2" /> Web page
              development.
            </li>
            <li className="py-2">
              {" "}
              <FaHandPointRight size={20} className="inline mx-2" /> I create ux
              element interactions.
            </li>
            <li className="py-2">
              {" "}
              <FaHandPointRight size={20} className="inline mx-2" /> I position
              your company brand.
            </li>
            <li className="py-2">
              {" "}
              <FaHandPointRight size={20} className="inline mx-2" /> Design and
              mockups of products for companies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}