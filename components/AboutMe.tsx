import Image from 'next/image';
import React from 'react';
import userData from '../constants/data';


export const AboutMe = () => {
    return (
        <section className="bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              Sobre Mi.
            </h1>
          </div>
          <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
            <div className="text-container max-w-6xl mx-auto pt-20">
              <p
                className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
                style={{ lineHeight: "3rem" }}
              >
                {userData.about.title}. Actualemete trabajando en
                <a
                  className="bg-red-500 rounded-md px-2 py-1 text-white"
                  href={userData.about.currentProjectUrl}
                >
                  {userData.about.currentProject} ✈️
                </a>
              </p>
            </div>
          </div>
          <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
            <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
              {/* Social Buttons */}
              <div className="inline-flex flex-col">
                <div>
                  <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Contacto
                  </h1>
                  <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                    Ante cualquier consulta enviame un
                    <a
                      href={`mailto:${userData.email}`}
                      className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                    >
                       {" "}mail{" "}
                    </a>
                    y en la brevedad te contesto.
                  </p>
                </div>
                <div className="mt-8">
                  <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Oportunidades Laborales
                  </h1>
                  <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                    Actualmente buscando trabajo, si te interesa mi perfil te dejo mi 
                    <a
                      href={userData.resumeUrl}
                      target="__blank"
                      className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                    >
                      {" "}CV{" "}
                    </a>
                    seria un gusto trabajar con ustedes.
                  </p>
                </div>
                {/* Social Links */}
                <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                  Redes Sociales
                </h1>
                <div className="mt-4 ml-4">
                  <div className="flex flex-row justify-start items-center ">
                    <a
                      href={userData.socialLinks.facebook}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                        Facebook
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={userData.socialLinks.twitter}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                        Twitter
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={userData.socialLinks.github}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                        GitHub
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={userData.socialLinks.linkedin}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                        LinkedIn
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={userData.socialLinks.twitter}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                        Instagram
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* Text area */}
              <div className="col-span-1 md:col-span-2">
                {userData.about.description?.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                  >
                    {desc}
                  </p>
                ))}
    
                <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                  Tecnologias y Herramientas
                </h1>
                <div className="flex flex-row flex-wrap mt-4">
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/firebase.png"
                    className="h-20 w-20 mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/nextjs.jpg"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/react.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/nest.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/javascript.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/php.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/html.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/css.jpg"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/tailwind.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/bootstrap.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/scrum.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                  <img width="auto" height="auto"
                    alt="technologie"
                    src="/jira.png"
                    className="h-20 w-auto mx-4 my-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
