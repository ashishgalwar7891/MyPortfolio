import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex justify-center items-center p-12'>
        <div className=' w-[10%]'>
          <Link>
            <FaFacebookF className="m-2 " size={20} />
          </Link>
          <Link>
            <FaLinkedin className="m-2" size={20} />
          </Link>
          <Link>
            <FaGithub className="m-2" size={20} />
          </Link>
        </div>
        <div className="text-center w-[45%] p-2">
          <h1 className="text-3xl font-bold p-2">Ashish Gupta</h1>
          <h3 className='text-xl font-bold p-2'>Full Stack Web Developer</h3>
          <p className='text-lg p-2'>
            I am a Full Stack Web Developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations.
          </p>
          <button className=' font-bold py-2 px-4 rounded'>Hire me</button>
        </div>
        <div className='flex justify-center w-[25%]'>
          <img
            src="https://www.bing.com/th?id=OIP.iAhcp6m_91O-ClK79h8EQQHaFj&w=131&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
}

export default Home