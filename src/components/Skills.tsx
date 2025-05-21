import Image from "next/image";
import React from "react";

import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiFirebase,
  SiFigma,
  SiExpo,
  SiTypescript,
  SiJavascript,
  SiVtex,
  SiMagento,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";

const skills = [
  { name: "React", icon: SiReact },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Nuxt.js", icon: SiNuxtdotjs },
  { name: "SQL", icon: PiFileSql },
  { name: "Firebase", icon: SiFirebase },
  { name: "React-Native", icon: TbBrandReactNative },
  { name: "Figma", icon: SiFigma },
  { name: "Expo", icon: SiExpo },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux", icon: SiRedux },
  { name: "JavaScript", icon: SiJavascript },
  { name: "VTEX", icon: SiVtex },
  { name: "Magento", icon: SiMagento },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: IoIosGitBranch },
];

const Skills = () => {
  return (
    <div className="lg:pt-4 flex flex-col items-center justify-center space-y-6">
      <div className="container max-w-[800px] flex flex-wrap justify-center items-center">
        <div className="carousel-container-clients carousel-fade-clients">
          <div className="carousel-clients space-x-7 w-max">
            {skills.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center justify-center transition"
              >
                <Icon size={32} className="text-white mx-2" />
                <span className="text-sm text-center text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
