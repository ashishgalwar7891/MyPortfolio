import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="text-center">
        <div className="text-2xl font-bold">Ashish Gupta</div>
        <div className="flex justify-around">
          <div className="text-lg">
            <ul>
              <li className="hover:text-green-500 font-semibold">
                <Link>Home</Link>
              </li>
              <li className="hover:text-green-500 font-semibold">
                <Link>Skills</Link>
              </li>
              <li className="hover:text-green-500 font-semibold">
                <Link>About</Link>
              </li>
            </ul>
          </div>
          <div className="text-lg">
            <ul>
              <li className="hover:text-green-500 font-semibold">
                <Link>Services</Link>
              </li>
              <li className="hover:text-green-500 font-semibold">
                <Link>Educations</Link>
              </li>
              <li className="hover:text-green-500 font-semibold">
                <Link>Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="text-lg m-3">
            <ul>
              <li className="hover:text-green-500 font-semibold">
                <Link>
                  <FaFacebookF className='m-1'size={20}/>
                </Link>
              </li>
              <li className="hover:text-green-500 font-semibold">
                <Link>
                  <FaLinkedin className='m-1' size={20}/>
                </Link>
              </li>
              <li className="hover:text-green-500 font-semibold">
                <Link>
                  <FaGithub className='m-1' size={20}/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
            <div>
                Copyright © Ashish. All rigths reserved 2023
            </div>
      </div>
    </footer>
  );
}

export default Footer