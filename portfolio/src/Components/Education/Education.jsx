import React,{useState} from "react";
import { ImCalendar } from "react-icons/im";


const Education = ({ mode }) => {
  const [toggle, setToggle] = useState(1);
  function handeledToggle(id) {
    setToggle(id);
  }
  return (
    <>
      <div className="flex justify-center items-center p-12" id="education">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Education</h1>
          <p className="text font-serif pb-6">what I Study</p>
          <div>
            <ul className="flex justify-center">
              <li
                className={`px-4 py-2 rounded-lg my-2 mx-4 cursor-pointer ${
                  mode == "dark-mode"
                    ? "bg-[#eee] text-black"
                    : "bg-[#222] text-white"
                }`}
                onClick={() => {
                  handeledToggle(1);
                }}
              >
                Education
              </li>
              <li
                className={`px-4 py-2 rounded-lg my-2 mx-4 cursor-pointer ${
                  mode == "dark-mode"
                    ? "bg-[#eee] text-black"
                    : "bg-[#222] text-white"
                }`}
                onClick={() => {
                  handeledToggle(2);
                }}
              >
                Expirence
              </li>
            </ul>
            <div>
              <div className={toggle == 1 ? "block" : "hidden"}>
                <ul className={`timeline timeline-vertical `}>
                  <li>
                    <div
                      className={`timeline-start timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Matriculation | X</h2>
                      <p>RBSE</p>
                      <p>
                        <ImCalendar className="inline" /> 2013 - 2014
                      </p>
                    </div>
                    <div className={`timeline-middle`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`w-5 h-5`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                  <li>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className={`timeline-end timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Intermediate | XII</h2>
                      <p>RBSE</p>
                      <p>
                        <ImCalendar className="inline" /> 2014 - 2015
                      </p>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                  <li>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                    <div
                      className={`timeline-start timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Electrical Engineer | B.Tech</h2>
                      <p>RTU University</p>
                      <p>
                        <ImCalendar className="inline" /> 2016-2020
                      </p>
                    </div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                  <li>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className={`timeline-end timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Full-Stack Development | PGP</h2>
                      <p>NIIT Stack Route</p>
                      <p>
                        <ImCalendar className="inline" /> 2022 - 2023
                      </p>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                </ul>
              </div>
              <div className={toggle == 2 ? "block" : "hidden"}>
                <ul className={`timeline timeline-vertical `}>
                  <li>
                    <div
                      className={`timeline-start timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Full-Stack Dev. | PGP</h2>
                      <p>NIIT Stack Route</p>
                      <p>
                        <ImCalendar className="inline" /> 2022 - 2023
                      </p>
                    </div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                  <li>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className={`timeline-end timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Full-Stack Dev. | PGP</h2>
                      <p>NIIT Stack Route</p>
                      <p>
                        <ImCalendar className="inline" /> 2022 - 2023
                      </p>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                  <li>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                    <div
                      className={`timeline-start timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Full-Stack Dev. | PGP</h2>
                      <p>NIIT Stack Route</p>
                      <p>
                        <ImCalendar className="inline" /> 2022 - 2023
                      </p>
                    </div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                  <li>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className={`timeline-end timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Full-Stack Dev. | PGP</h2>
                      <p>NIIT Stack Route</p>
                      <p>
                        <ImCalendar className="inline" /> 2022 - 2023
                      </p>
                    </div>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                  </li>
                  <li>
                    <hr
                      className={`${
                        mode === "dark-mode"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    />
                    <div
                      className={`timeline-start timeline-box ${
                        mode == "dark-mode"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <h2>Full-Stack Dev. | PGP</h2>
                      <p>NIIT Stack Route</p>
                      <p>
                        <ImCalendar className="inline" /> 2022 - 2023
                      </p>
                    </div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
