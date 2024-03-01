import React from 'react'
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import img2 from '../../../public/assets/Ashish_photo-removebg-preview.png'

const About = ({ mode }) => {
  const PDF_FILE_URL = "http://localhost:5173/Ashish_Gupta_Resume.pdf";

  const downloadPDF = (url) => {
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <>
      <div className="flex justify-center items-center p-12" id='about'>
        <div className="text-center">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text font-serif pb-6">Introduction</p>
          <div className="flex justify-center p-4">
            <div className='max-w-[280px]'>
              <img src={img2} className="rounded-xl shadow-2xl hidden lg:block" alt="" />
            </div>
            <div className='max-w-[800px]'>
              <div className="flex justify-center flex-wrap mx-4 p-4">
                <div
                  className={`shadow-lg rounded p-4 m-4 w-[200px] ${
                    mode === "dark-mode"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <FaToolbox size={30} className="mx-auto" />
                  <h3 className="p-2 text-xl font-semibold">Experience</h3>
                  <p>Fresher</p>
                </div>
                <div
                  className={`shadow-lg rounded p-4 m-4 w-[200px] ${
                    mode === "dark-mode"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <MdIncompleteCircle size={30} className="mx-auto" />
                  <h3 className="p-2 text-xl font-semibold">Completed</h3>
                  <p>10+ Projects</p>
                </div>
                <div
                  className={`shadow-lg rounded p-4 m-4 w-[200px] ${
                    mode === "dark-mode"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <MdOutlineSupportAgent size={30} className="mx-auto" />
                  <h3 className="p-2 text-xl font-semibold">Support</h3>
                  <p>Online 24/7</p>
                </div>
              </div>
              <div className="py-4 px-8  font-mono">
                <p>
                  My name is Ashish Gupta. I am a Full Stack Web Developer. I
                  can provide clean code and pixel perfect design. I also make
                  the website more & more interactive with web animations.
                </p>
              </div>
              <div>
                <button
                  className={`font-bold py-2 px-4 rounded ${
                    mode === "dark-mode"
                      ? "bg-[#eee] text-black"
                      : "bg-[#222] text-white"
                  }`}
                  onClick={() => downloadPDF(PDF_FILE_URL)}
                  type="button"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About