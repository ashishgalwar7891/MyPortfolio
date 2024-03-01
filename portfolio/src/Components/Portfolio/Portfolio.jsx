import React from "react";
import { project } from "../../data";
import { FaArrowRight } from "react-icons/fa";
const Portfolio = ({mode}) => {
  const [toggleState, setToggleState] = React.useState(1);


  function handeledToggle(id) {
    if (id === 1) {
      document.getElementById("2").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("3").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("4").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("5").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("6").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("1").className = `px-4 py-2 rounded-lg m-1 cursor-pointer ${mode === "dark-mode" ? "bg-[#eee] text-black" : "bg-[#222] text-white"}`;
    }else if (id === 2) {
      document.getElementById("1").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("3").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("4").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("5").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("6").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("2").className = `px-4 py-2 rounded-lg m-1 cursor-pointer ${mode === "dark-mode" ? "bg-[#eee] text-black" : "bg-[#222] text-white"}`;
    }else if (id === 3) {
      document.getElementById("1").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("2").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("4").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("5").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("6").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("3").className = `px-4 py-2 rounded-lg m-1 cursor-pointer ${mode === "dark-mode" ? "bg-[#eee] text-black" : "bg-[#222] text-white"}`;
    }else if (id === 4) {
      document.getElementById("1").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("2").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("3").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("5").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("6").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("4").className = `px-4 py-2 rounded-lg m-1 cursor-pointer ${mode === "dark-mode" ? "bg-[#eee] text-black" : "bg-[#222] text-white"}`;
    }else if (id === 5) {
      document.getElementById("1").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("2").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("3").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("4").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("6").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("5").className = `px-4 py-2 rounded-lg m-1 cursor-pointer ${mode === "dark-mode" ? "bg-[#eee] text-black" : "bg-[#222] text-white"}`;
    }else if(id===6){
      document.getElementById("1").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("2").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("3").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("4").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("5").className = `px-4 py-2 rounded-lg m-1 cursor-pointer`;
      document.getElementById("6").className = `px-4 py-2 rounded-lg m-1 cursor-pointer ${mode === "dark-mode" ? "bg-[#eee] text-black" : "bg-[#222] text-white"}`;
    }


    setToggleState(id);
  }
  return (
    <>
      <div className="flex justify-center items-center p-12" id="portfolio">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text font-serif pb-6">Most Recent Work</p>
          <div>
            <ul className="flex justify-center flex-wrap">
              <li
                id="1"
                className={`px-4 py-2 rounded-lg m-1 cursor-pointer active ${
                  mode === "dark-mode"
                    ? "bg-[#eee] text-black"
                    : "bg-[#222] text-white"
                }`}
                onClick={() => {
                  handeledToggle(1);
                }}
              >
                All
              </li>
              <li
                id="2"
                className={`px-4 py-2 rounded-lg m-1 cursor-pointer `}
                onClick={() => {
                  handeledToggle(2);
                }}
              >
                Java
              </li>
              <li
                id="3"
                className={`px-4 py-2 rounded-lg m-1 cursor-pointer `}
                onClick={() => {
                  handeledToggle(3);
                }}
              >
                MERN
              </li>
              <li
                id="4"
                className={`px-4 py-2 rounded-lg m-1 cursor-pointer `}
                onClick={() => {
                  handeledToggle(4);
                }}
              >
                MEAN
              </li>
              <li
                id="5"
                className={`px-4 py-2 rounded-lg m-1 cursor-pointer `}
                onClick={() => {
                  handeledToggle(5);
                }}
              >
                Angular/SpringBoot
              </li>
              <li
                id="6"
                className={`px-4 py-2 rounded-lg m-1 cursor-pointer `}
                onClick={() => {
                  handeledToggle(6);
                }}
              >
                ReactJS/Springboot
              </li>
            </ul>
            <div>
              <div
                className={
                  toggleState === 1
                    ? `block flex flex-wrap justify-center`
                    : "hidden"
                }
              >
                {project.map((item) => {
                  return (
                    <div
                      className={`rounded-lg w-[300px] m-4 p-4 ${item.id} ${
                        mode === "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <div className="flex justify-center items-center py-2 rounded-lg">
                        <img src={item.img} className="h-[130px] w-[270px]" />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold">{item.name}</h1>
                        <p className="py-3">
                          {item.description.substring(0, 90)}...
                        </p>
                        <a
                          href={item.url}
                          className={`${
                            mode === "dark-mode"
                              ? "bg-[#eee] text-black p-2 rounded-lg hover:bg-white"
                              : "bg-[#222] text-white p-2 rounded-lg hover:bg-black"
                          }`}
                        >
                          Demo <FaArrowRight className="inline" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className={
                  toggleState === 2
                    ? "block flex flex-wrap justify-center"
                    : "hidden"
                }
              >
                {project.map((item) => {
                  if (item.mytype === "Java") {
                    return (
                      <div
                        className={`rounded-lg w-[300px] m-4 p-4  ${
                          mode === "dark-mode"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        <div className="flex justify-center items-center py-2 rounded-lg">
                          <img src={item.img} className="h-[130px] w-[270px]" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">{item.name}</h1>
                          <p className="py-3">
                            {item.description.substring(0, 90)}...
                          </p>
                          <a
                            href={item.url}
                            className={`${
                              mode === "dark-mode"
                                ? "bg-[#eee] text-black p-2 rounded-lg hover:bg-white"
                                : "bg-[#222] text-white p-2 rounded-lg hover:bg-black"
                            }`}
                          >
                            Demo <FaArrowRight className="inline" />
                          </a>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className={
                  toggleState === 3
                    ? "block flex flex-wrap justify-center"
                    : "hidden"
                }
              >
                {project.map((item) => {
                  if (item.mytype === "MERN") {
                    return (
                      <div
                        className={`rounded-lg w-[300px] m-4 p-4 ${
                          mode === "dark-mode"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        <div className="flex justify-center items-center py-2 rounded-lg">
                          <img src={item.img} className="h-[130px] w-[270px]" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">{item.name}</h1>
                          <p className="py-3">
                            {item.description.substring(0, 90)}...
                          </p>
                          <a
                            href={item.url}
                            className={`${
                              mode === "dark-mode"
                                ? "bg-[#eee] text-black p-2 rounded-lg hover:bg-white"
                                : "bg-[#222] text-white p-2 rounded-lg hover:bg-black"
                            }`}
                          >
                            Demo <FaArrowRight className="inline" />
                          </a>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className={
                  toggleState === 4
                    ? "block flex flex-wrap justify-center"
                    : "hidden"
                }
              >
                {project.map((item) => {
                  if (item.mytype === "MEAN") {
                    return (
                      <div
                        className={`rounded-lg w-[300px] m-4 p-4 ${
                          mode === "dark-mode"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        <div className="flex justify-center items-center py-2 rounded-lg">
                          <img src={item.img} className="h-[130px] w-[270px]" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">{item.name}</h1>
                          <p className="py-3">
                            {item.description.substring(0, 90)}...
                          </p>
                          <a
                            href={item.url}
                            className={`${
                              mode === "dark-mode"
                                ? "bg-[#eee] text-black p-2 rounded-lg hover:bg-white"
                                : "bg-[#222] text-white p-2 rounded-lg hover:bg-black"
                            }`}
                          >
                            Demo <FaArrowRight className="inline" />
                          </a>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className={
                  toggleState === 5
                    ? "block flex flex-wrap justify-center"
                    : "hidden"
                }
              >
                {project.map((item) => {
                  if (item.mytype === "Angular/Springboot") {
                    return (
                      <div
                        className={`rounded-lg w-[300px] m-4 p-4  ${
                          mode === "dark-mode"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        <div className="flex justify-center items-center py-2 rounded-lg">
                          <img src={item.img} className="h-[130px] w-[270px]" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">{item.name}</h1>
                          <p className="py-3">
                            {item.description.substring(0, 90)}...
                          </p>
                          <a
                            href={item.url}
                            className={`${
                              mode === "dark-mode"
                                ? "bg-[#eee] text-black p-2 rounded-lg hover:bg-white"
                                : "bg-[#222] text-white p-2 rounded-lg hover:bg-black"
                            }`}
                          >
                            Demo <FaArrowRight className="inline" />
                          </a>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className={
                  toggleState === 6
                    ? "block flex flex-wrap justify-center"
                    : "hidden"
                }
              >
                {project.map((item) => {
                  if (item.mytype === "ReactJS/Springboot") {
                    return (
                      <div
                        className={`rounded-lg w-[300px] m-4 p-4 ${
                          mode === "dark-mode"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        <div className="flex justify-center items-center py-2 rounded-lg">
                          <img src={item.img} className="h-[130px] w-[270px]" />
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">{item.name}</h1>
                          <p className="py-3">
                            {item.description.substring(0, 90)}...
                          </p>
                          <a
                            href={item.url}
                            className={`${
                              mode === "dark-mode"
                                ? "bg-[#eee] text-black p-2 rounded-lg hover:bg-white"
                                : "bg-[#222] text-white p-2 rounded-lg hover:bg-black"
                            }`}
                          >
                            Demo <FaArrowRight className="inline" />
                          </a>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
