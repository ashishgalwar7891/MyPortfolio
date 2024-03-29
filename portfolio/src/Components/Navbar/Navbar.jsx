import React,{useState} from "react";
import {HashLink as Link} from 'react-router-hash-link';
import '../../App.css'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = ({ mode, setMode}) => {
    const toggleMode = () => {
      setMode(mode === "light-mode" ? "dark-mode" : "light-mode");
    };

    const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`flex lg:justify-evenly justify-between items-center p-3 ${
          mode === "dark-mode" ? "bg-black" : "bg-white"
        }`}
      >
        <div>
          <Link to="/" className="text-3xl">
            Ashish Gupta
          </Link>
        </div>
        <div className="text-xl hidden lg:block">
          <ul className="flex">
            <li className="px-4 hover:text-green-500 font-semibold">
              <Link to="#" smooth>
                Home
              </Link>
            </li>
            <li className="px-4 hover:text-green-500 font-semibold">
              <Link to="#about" smooth>
                About
              </Link>
            </li>
            <li className="px-4 hover:text-green-500 font-semibold">
              <Link to="#skills" smooth>
                Skills
              </Link>
            </li>
            <li className="px-4 hover:text-green-500 font-semibold">
              <Link to="#services" smooth>
                Services
              </Link>
            </li>
            <li className="px-4 hover:text-green-500 font-semibold">
              <Link to="#education" smooth>
                Education
              </Link>
            </li>
            <li className="px-4 hover:text-green-500 font-semibold">
              <Link to="#portfolio" smooth>
                Portfolio
              </Link>
            </li>
            <li className="px-4 hover:text-green-500 font-semibold">
              <Link to="#contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleMode} />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* mobile view */}
        <div className="absolute top-4 right-4 lg:hidden">
          <IoMdMenu
            size={30}
            className="cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        </div>
        <div>
          {toggleMenu && (
            <div
              className={`flex flex-col z-50 absolute top-0 left-0 w-full h-screen ${mode==="dark-mode" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              <div className="flex justify-end p-4">
                <IoMdClose
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <ul className="flex flex-col justify-center items-center h-full text-3xl">
                <li className="p-4 border-b border-gray-500 w-full">
                  <Link to="#" smooth onClick={() => setToggleMenu(false)}>
                    Home
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-500 w-full">
                  <Link to="#about" smooth onClick={() => setToggleMenu(false)}>
                    About
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-500 w-full">
                  <Link
                    to="#skills"
                    smooth
                    onClick={() => setToggleMenu(false)}
                  >
                    Skills
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-500 w-full">
                  <Link
                    to="#services"
                    smooth
                    onClick={() => setToggleMenu(false)}
                  >
                    Services
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-500 w-full">
                  <Link
                    to="#education"
                    smooth
                    onClick={() => setToggleMenu(false)}
                  >
                    Education
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-500 w-full">
                  <Link
                    to="#portfolio"
                    smooth
                    onClick={() => setToggleMenu(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="p-4 border-b border-gray-500 w-full">
                  <Link
                    to="#contact"
                    smooth
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
