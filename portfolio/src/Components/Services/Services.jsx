import React from 'react'
import { MdOutlineDesktopMac } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { SiGoogleslides } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="flex justify-center items-center p-12">
        <div className="text-center w-[80%]">
          <h1 className="text-3xl">Services</h1>
          <p className="text-lg">what I offer</p>
          <div className="flex justify-around">
            <div className="w-[25%] p-4 rounded-xl shadow-2xl">
              <MdOutlineDesktopMac size={50} className="mx-auto" />
              <h1 className="text-xl font-bold p-4">Product Designer</h1>
              <p className="hover:text-2xl hover:font-bold hover:text-green-500">
                view More
                <span className="mx-3">
                  <FaArrowRight size={20} className="inline" />
                </span>
              </p>
            </div>
            <div className="w-[25%] p-4 rounded-xl shadow-2xl">
              <IoCodeSlash size={50} className="mx-auto" />
              <h1 className="text-xl font-bold p-4">UI/UX Designer</h1>
              <p className="hover:text-2xl hover:font-bold hover:text-green-500">
                view More
                <span className="mx-3">
                  <FaArrowRight size={20} className="inline" />
                </span>
              </p>
            </div>
            <div className="w-[25%] p-4 rounded-xl shadow-2xl">
              <SiGoogleslides size={50} className="mx-auto" />
              <h1 className="text-xl p-4 font-bold">Visual Designer</h1>
              <p className="hover:text-2xl hover:font-bold hover:text-green-500">
                view More
                <span className="mx-3">
                  <FaArrowRight size={20} className="inline" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services