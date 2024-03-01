import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = ({ mode }) => {
  return (
    <>
      <div className={`flex justify-center items-center p-12`} id='contact'>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Get in touch</h1>
          <p className="text font-serif pb-6">Contact Me</p>
          <div className="flex justify-center flex-wrap">
            <div className="m-4 ">
              <div
                className={`card md:min-w-[450px] min-w-[260px] shadow-xl m-2 ${
                  mode === "dark-mode"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="card-body">
                  <MdOutlineMail size={30} className="mx-auto" />
                  <h2>Email</h2>
                  <p>ashishgalwar7891@gmail.com</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishgalwar7891@gmail">
                    Contact Me <FaArrowRightLong size={20} className="inline" />
                  </a>
                </div>
              </div>
              <div
                className={`card md:min-w-[450px] min-w-[260px] shadow-xl m-2 ${
                  mode === "dark-mode"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="card-body">
                  <FaWhatsapp size={30} className="mx-auto" />
                  <h2>WhatsApp</h2>
                  <p>7891929637</p>
                  <a href="https://wa.me/7891929637">
                    Contact Me <FaArrowRightLong size={20} className="inline" />
                  </a>
                </div>
              </div>
              <div
                className={`card md:min-w-[450px] min-w-[260px] shadow-xl m-2 ${
                  mode === "dark-mode"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="card-body">
                  <FaLinkedin size={30} className="mx-auto" />
                  <h2>Linkedin</h2>
                  <p>ashish-kumar-gupta-34855a260</p>
                  <a href="https://www.linkedin.com/in/ashish-kumar-gupta-34855a260/">
                    Contact Me <FaArrowRightLong size={20} className="inline" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-4 self-center">
              <h1 className="text-3xl font-semibold pb-6">
                Write me your Query
              </h1>
              <label
                className={`input md:min-w-[450px] input-bordered input-lg flex items-center gap-2 ${
                  mode === "dark-mode"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Insert your Name"
                />
              </label>
              <label
                className={`input md:min-w-[450px] input-bordered input-lg flex items-center gap-2 my-10 ${
                  mode === "dark-mode"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="Insert your Email"
                />
              </label>
              <textarea
                placeholder="Ask me anything..."
                className={`textarea textarea-bordered textarea-lg w-full ${
                  mode === "dark-mode"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              />
              <button
                className={`btn block my-4 text-xl font-semibold ${
                  mode === "dark-mode"
                    ? "bg-white hover:[#222] text-black hover:text-white"
                    : "bg-black hover:bg-[#eee] text-white hover:text-black"
                }`}
              >
                Send Message <FaLocationArrow size={30} className="inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact