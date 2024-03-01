import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = ({ mode }) => {
  return (
    <footer
      className={`${
        mode === "dark-mode" ? "bg-black text-white" : "bg-white text-black"
      }}`}
    >
      <div className="text-center py-4">
        <div className="text-2xl font-bold">Ashish Gupta</div>
        <div className="flex justify-around">
          <div className="text-lg">
            <ul>
              <li className="hover:text-green-500 font-semibold m-4">
                <Link to="#" smooth>
                  Home
                </Link>
              </li>
              <li className="hover:text-green-500 font-semibold m-4">
                <Link to="#skills" smooth>
                  Skills
                </Link>
              </li>
              <li className="hover:text-green-500 font-semibold m-4">
                <Link to="#about" smooth>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-lg">
            <ul>
              <li className="hover:text-green-500 font-semibold m-4">
                <Link to="#services" smooth>
                  Services
                </Link>
              </li>
              <li className="hover:text-green-500 font-semibold m-4">
                <Link to="#education" smooth>
                  Educations
                </Link>
              </li>
              <li className="hover:text-green-500 font-semibold m-4">
                <Link to="#portfolio" smooth>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-lg m-3">
            <ul>
              <li
                className={`hover:text-green-500 font-semibold m-2 p-1 rounded-md ${
                  mode === "dark-mode"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <Link
                  to={"https://www.facebook.com/profile.php?id=100012270379201"}
                >
                  <FaFacebookF className="m-1" size={20} />
                </Link>
              </li>
              <li
                className={`hover:text-green-500 font-semibold m-2 p-1 rounded-md ${
                  mode === "dark-mode"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <Link
                  to={
                    "https://www.linkedin.com/in/ashish-kumar-gupta-34855a260/"
                  }
                >
                  <FaLinkedin className="m-1" size={20} />
                </Link>
              </li>
              <li
                className={`hover:text-green-500 font-semibold m-2 p-1 rounded-md ${
                  mode === "dark-mode"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                <Link to={"https://github.com/ashishgalwar7891"}>
                  <FaGithub className="m-1" size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>Copyright © Ashish. All rigths reserved 2023</div>
      </div>
    </footer>
  );
}

export default Footer