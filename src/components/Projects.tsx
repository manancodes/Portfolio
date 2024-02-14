"use client";
import React from "react";
import Image from "next/image";

type Project = {
  id: number;
  projectName: string;
  description: string;
  technologies: string[];
  imageSrc: string;
};

const ProjectsData: Project[] = [
  {
    id: 1,
    projectName: "Screenbows",
    description:
      "Screenbows is a web-based color generation tool that allows you to create and download beautiful color palettes as image files for your design and development projects",
    technologies: ["React", "CSS", "HTML", "Javascript"],
    imageSrc: "/ScreenbowsDesktop.png", // Placeholder image URL
  },
  {
    id: 2,
    projectName: "Ministry of Talent",
    description:
      "A powerful React framework for building web applications. SOme extra details, tamkyou aso micua aijnf jdnsfsd sdnfjdsnfds. A powerful React framework for building web applications. SOme extra details, tamkyou aso micua aijnf jdnsfsd sdnfjdsnfds.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    imageSrc: "/ScreenbowsDesktop.png", // Placeholder image URL
  },
  {
    id: 3,
    projectName: "Usernaminator",
    description:
      "A powerful React framework for building web applications. Hello from manan, thankyou so much for joining. THanks a lot again. Bye",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    imageSrc: "/ScreenbowsDesktop.png", // Placeholder image URL
  },
];
const Projects = () => {
  return (
    <div className="flex mt-40 flex-col items-center justify-center">
      <h1 className="z-10 text-4xl text-white cursor-default font-display sm:text-4xl md:text-6xl whitespace-nowrap mb-10">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ProjectsData.map(
          ({
            id,
            projectName,
            description,
            technologies,
            imageSrc,
          }: Project) => {
            return (
              <div
                key={id}
                className=" mx-auto flex max-w-md items-center justify-center rounded-md bg-neutral-950 border border-neutral-600"
              >
                <div className="relative p-4 h-full flex flex-col justify-between">
                  <div>
                    <Image
                      src={imageSrc}
                      alt={projectName}
                      className="w-full rounded-lg mb-4"
                      width={400}
                      height={300}
                    />
                    <h2 className="text-xl font-semibold text-gray-200">
                      {projectName}
                    </h2>
                    <p className="text-gray-400">{description}</p>
                  </div>
                  <div className="flex flex-wrap mt-4">
                    {technologies.map((tech: string, index: number) => (
                      <div key={index} className="flex items-center mr-2 mb-2">
                        <Image
                          src={`icons/${tech}.svg`}
                          alt={tech}
                          className="w-4 h-4 mr-2"
                          width={4}
                          height={4}
                        />
                        <span className="text-sm text-gray-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
