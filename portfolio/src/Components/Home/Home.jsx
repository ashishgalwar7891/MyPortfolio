import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HashLink as Link } from 'react-router-hash-link';
import { CiLocationArrow1 } from "react-icons/ci";
import img1 from '../../../public/assets/Ashish_-removebg-preview.png'

const Home = ({ mode }) => {
  return (
    <>
      <div className="flex justify-center items-center p-12" id="home">
        <div>
          <Link to={"https://www.facebook.com/profile.php?id=100012270379201"}>
            <FaFacebookF className="m-8 hover:text-green-500" size={20} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/ashish-kumar-gupta-34855a260/"}
          >
            <FaLinkedin className="m-8 hover:text-green-500" size={20} />
          </Link>
          <Link to={"https://github.com/ashishgalwar7891"}>
            <FaGithub className="m-8 hover:text-green-500" size={20} />
          </Link>
        </div>
        <div className="text-center w-[550px] p-2">
          <h1 className="text-3xl font-bold p-2">Ashish Gupta</h1>
          <h3 className="text-lg font-serif p-2">Full Stack Web Developer</h3>
          <p className="text font-mono py-4 px-8">
            I am a Full Stack Web Developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations.
          </p>
          <Link to={"#contact"} 
            className={`text-xl font-bold m-4 py-2 px-4 rounded ${
              mode === "dark-mode"
                ? "bg-[#eee] text-black"
                : "bg-[#222] text-white"
            }`}
          >
            Hire me <CiLocationArrow1 size={25} className="inline" />
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={img1}
            className="rounded-full hidden lg:block"
            alt="profile"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default Home