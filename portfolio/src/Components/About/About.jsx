import React from 'react'
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center p-12">
        <div className="text-center w-[80%]">
          <h1 className="text-3xl p-2">About Me</h1>
          <p className="text-lg p-2">Introduction</p>
          <div className="flex justify-center">
            <div className="w-[50%] flex justify-center">
              <img
                src="https://www.bing.com/th?id=OIP.iAhcp6m_91O-ClK79h8EQQHaFj&w=131&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt=""
              />
            </div>
            <div>
              <div className="flex justify-center mx-4 p-4">
                <div className="border-2 shadow-lg rounded p-4 mx-4">
                  <FaToolbox size={30} className="mx-auto" />
                  <h3 className="p-2 text-xl font-semibold">Experience</h3>
                  <p>Fresher</p>
                </div>
                <div className="border-2 shadow-lg rounded p-4 mx-4">
                  <MdIncompleteCircle size={30} className="mx-auto" />
                  <h3 className="p-2 text-xl font-semibold">Completed</h3>
                  <p>10+ Projects</p>
                </div>
                <div className="border-2 shadow-lg rounded p-4 mx-4">
                  <MdOutlineSupportAgent size={30} className="mx-auto" />
                  <h3 className="p-2 text-xl font-semibold">Support</h3>
                  <p>Online 24/7</p>
                </div>
              </div>
              <div className="p-4">
                <p>
                  My name is Ashish Gupta. I am a Full Stack Web Developer. I
                  can provide clean code and pixel perfect design. I also make
                  the website more & more interactive with web animations.
                </p>
              </div>
              <div>
                <button className=" font-bold py-2 px-4 rounded">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About