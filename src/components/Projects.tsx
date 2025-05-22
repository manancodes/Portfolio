"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
  SiAppstore,
  SiRedux,
  SiMongodb,
  SiNuxtdotjs,
} from "react-icons/si";
import { TbBrandReactNative, TbExternalLink } from "react-icons/tb";
import { IoCodeSlash, IoLogoGooglePlaystore } from "react-icons/io5";

type Project = {
  id: number;
  projectName: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  links: { label: string; url: string }[];
};

const ProjectsData: Project[] = [
  {
    id: 1,
    projectName: "Guardrail AI",
    description:
      "Guardrail is a fact checker for your AI chatbots. It provides feedback on the accuracy of the information provided by AI models like chatGPT and Gemini.",
    technologies: ["React", "Nuxt.js", "Tailwind CSS", "Redux", "MongoDB"],
    imageSrc: "/Guardrail.png",
    links: [
      {
        label: "Demo",
        url: "https://app.azdev.guardrail.tech",
      },
    ],
  },
  {
    id: 2,
    projectName: "Hud Hud Hub",
    description:
      "Hud Hud is a Qatar based e-commerce app for grocery delivery, features include cart, order management, favourites, product catalog, and secure checkout",
    technologies: ["React-Native", "Expo", "Tailwind CSS", "Redux"],
    imageSrc: "/HudHudApp.png",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/sg/app/hudhudhub/id6499540516",
      },
    ],
  },
  {
    id: 3,
    projectName: "Screenbows",
    description:
      "Screenbows is a web-based color generation tool that allows you to create and download beautiful color palettes as image files for your design and development projects.",
    technologies: ["React", "CSS", "HTML", "Javascript"],
    imageSrc: "/ScreenbowsDesktop.png",
    links: [
      { label: "Code", url: "https://github.com/manancodes/Screenbows" },
      { label: "Demo", url: "https://manancodes.github.io/Screenbows/" },
    ],
  },
  {
    id: 4,
    projectName: "PixelCast",
    description: "PixelCast is a simple weather app with Pixel Design.",
    technologies: ["React-Native", "Expo"],
    imageSrc: "/PixelCastDesktop.png",
    links: [
      { label: "Code", url: "https://github.com/manancodes/PixelCast" },
      { label: "Demo", url: "https://pixel-cast.vercel.app/" },
    ],
  },
  {
    id: 5,
    projectName: "Usernaminator",
    description:
      "Usernaminator searches major social media platforms to find the perfect username for you.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    imageSrc: "/UserminatorDesktop.png",
    links: [
      { label: "Code", url: "https://github.com/manancodes/userminator" },
      { label: "Demo", url: "https://userminator.vercel.app/" },
    ],
  },
  {
    id: 6,
    projectName: "Wellpaper",
    description:
      "Awesome outfits for your phone. A wallpaper app with Search, Sort, Filters, and Quick-Filters.",
    technologies: ["React-Native", "Expo", "Tailwind CSS"],
    imageSrc: "/WellpaperDesktop.png",
    links: [
      { label: "Code", url: "https://github.com/manancodes/Wellpaper" },
      { label: "Demo", url: "https://wellpaper.vercel.app/" },
    ],
  },
  {
    id: 7,
    projectName: "Ministry of Talent",
    description:
      "A proof-of-concept SaaS platform to empower job seekers with AI-driven, customized resumes via MOT-Profile, helping craft professional resumes to impress employers.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    imageSrc: "/MotDesktop.png",
    links: [
      {
        label: "Code",
        url: "https://github.com/manancodes/Ministry-of-talent",
      },
      { label: "Demo", url: "https://ministry-of-talent.netlify.app/" },
    ],
  },
];

const techIcons: { [key: string]: React.ReactNode } = {
  React: <SiReact className="text-blue-500" />,
  CSS: <SiCss3 className="text-blue-400" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  Javascript: <SiJavascript className="text-yellow-500" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "React-Native": <TbBrandReactNative className="text-blue-500" />,
  Expo: <SiExpo className="text-white" />,
  Redux: <SiRedux className="text-white" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  "Nuxt.js": <SiNuxtdotjs className="text-green-400" />,
};

const linkIcons: { [key: string]: React.ReactNode } = {
  Code: <IoCodeSlash size={16} className="mr-1" />,
  Demo: <TbExternalLink size={16} className="mr-1" />,
  "App Store": <SiAppstore size={16} className="mr-1" />,
  "Play Store": <IoLogoGooglePlaystore size={16} className="mr-1" />,
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center pt-24"
    >
      <SectionTitle title="FEATURED PROJECTS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
        {ProjectsData.map(
          ({
            id,
            projectName,
            description,
            technologies,
            imageSrc,
            links,
          }: Project) => {
            return (
              <div
                key={id}
                className="mx-auto flex max-w-lg w-full items-center justify-center rounded-lg bg-neutral-900 bg-opacity-30 border border-neutral-800"
              >
                <div className="relative p-4 h-full w-full flex flex-col justify-between">
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
                    <p className="text-gray-400 w-full">{description}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap mt-4">
                      {technologies.map((tech: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center mr-4 mb-2"
                        >
                          {techIcons[tech] ? (
                            <>
                              <span className="h-4 w-4">{techIcons[tech]}</span>
                              <span className="ml-2 text-sm text-gray-400">
                                {tech}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm text-gray-400">
                              {tech}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap mt-4 gap-2">
                      {links.map(({ label, url }, index) => (
                        <Link
                          key={index}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-1 text-sm text-gray-400 bg-neutral-800 border border-neutral-700 rounded-md hover:bg-neutral-700 transition-colors"
                        >
                          {linkIcons[label] || null}
                          {label}
                        </Link>
                      ))}
                    </div>
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
