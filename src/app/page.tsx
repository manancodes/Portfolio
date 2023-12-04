"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import Particles from "../components/particles";
import Navigation from "../components/Nav";
import Card from "../components/ProjectCard";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const Projects = [
    {
      id: 1,
      projectName: "Screenbows",
      description:
        "Screenbows is a web-based color generation tool that allows you to create and download beautiful color palettes as image files for your design and development projects",
      technologies: ["React", "CSS", "HTML", "JS"],
      imageSrc: "/ScreenbowsDesktop.png", // Placeholder image URL
      imagePosition: "left", // or 'right'
    },
    {
      id: 2,
      projectName: "Ministry of Talent",
      description: "A powerful React framework for building web applications.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      imageSrc: "public/vercel.svg", // Placeholder image URL
      imagePosition: "left", // or 'right'
    },
    {
      id: 3,
      projectName: "Usernaminator",
      description: "A powerful React framework for building web applications.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      imageSrc: "public/vercel.svg", // Placeholder image URL
      imagePosition: "left", // or 'right'
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-neutral-700/20 to-black">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="relative w-screen flex items-center justify-center">
        <div className="absolute Grid w-screen -z-10" />
        {/* <div className="pill">
          <p className="pillText">Follow me on Twitter</p>
        </div> */}
        <h1 className="z-10 mt-64 text-4xl text-gray-300 font-semibold cursor-default sm:text-5xl md:text-7xl whitespace-nowrap ">
          Transforming Ideas to Apps
        </h1>
      </div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          {"Hey, I'm Manan, A React Native Developer"}
        </h2>
      </div>
      <div className="flex w-80 justify-evenly">
        <button
          onClick={() => {
            console.log("pressed");
          }}
          className="flex items-center justify-center bg-neutral-200 text-black hover:bg-neutral-300 text-white py-2 px-4 rounded-3xl"
        >
          Hire Me
          <Image
            alt="manan"
            src={`/RightChevron.svg`}
            className="ml-1 w-2 h-2 fill-blue-100"
            width={4}
            height={4}
          />
        </button>
      </div>
      <div className="flex mt-40 flex-col items-center justify-cente">
        <h1 className="z-10 text-4xl text-white cursor-default font-display sm:text-4xl md:text-6xl whitespace-nowrap">
          Featured Projects
        </h1>
        {Projects.map((project): any => {
          return <Card key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}
