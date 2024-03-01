import React from 'react'
import { HiMiniCheckBadge } from "react-icons/hi2";

const Skills = ({ mode }) => {
  return (
    <>
      <div className="flex justify-center items-center p-12" id="skills">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Skills</h1>
          <p className="text font-serif pb-6">My Technical Level</p>
          <div className="flex justify-around flex-wrap">
            <div
              className={`text-center p-3 m-4 rounded-lg shadow-2xl min-w-[400px] xl:min-w-[500px] ${
                mode === "dark-mode"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <h1 className="text-2xl p-2">Frontend Developer</h1>
              <div className="flex justify-around ">
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      HTML
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      CSS
                    </h1>
                    <p className="text-sm font-thin ml-8">Advanced</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      JavaScript
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      React
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Angular
                    </h1>
                    <p className="text-sm font-thin ml-8">Advanced</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      BootStrap
                    </h1>
                    <p className="text-sm font-thin ml-8">Advanced</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`text-center p-3 m-4 rounded-lg shadow-2xl min-w-[400px] xl:min-w-[500px] flex-wrap ${
                mode === "dark-mode"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <h1 className="text-2xl p-2">Backend Developer</h1>
              <div className="flex justify-around ">
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Java
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Node js
                    </h1>
                    <p className="text-sm font-thin ml-8">Advance</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Spring Boot
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Express js
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`text-center p-3 m-4 rounded-lg shadow-2xl min-w-[400px] xl:min-w-[500px] flex-wrap ${
                mode === "dark-mode"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <h1 className="text-2xl p-2">Databases</h1>
              <div className="flex justify-around ">
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      MYSQL
                    </h1>
                    <p className="text-sm font-thin ml-8">Advance</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      MongoDB
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      ElasticSearch
                    </h1>
                    <p className="text-sm font-thin ml-8">Basic</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Neo4j
                    </h1>
                    <p className="text-sm font-thin ml-8">Basic</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`text-center p-3 m-4 rounded-lg shadow-2xl min-w-[400px] xl:min-w-[500px] flex-wrap ${
                mode === "dark-mode"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <h1 className="text-2xl p-2">DevOps</h1>
              <div className="flex justify-around ">
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Git
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      GitHub
                    </h1>
                    <p className="text-sm font-thin ml-8">Basic</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      Docker
                    </h1>
                    <p className="text-sm font-thin ml-8">Intermediate</p>
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">
                      <HiMiniCheckBadge className="inline mr-2" size={20} />
                      GitLab
                    </h1>
                    <p className="text-sm font-thin ml-8">Basic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills