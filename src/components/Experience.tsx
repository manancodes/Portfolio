import React from "react";
import SectionTitle from "@/components/SectionTitle";

type Experience = {
  id: number;
  time: string;
  designation: string;
  points: string[];
  technologies: string[];
};

const Experiences: Experience[] = [
  {
    id: 1,
    time: "10/2024 – Present",
    designation: "Freelance Frontend Developer • Independent Contractor",
    points: [
      "Developed PulseFit, a fitness app with workout and nutrition tracking, deployed on App Store/Play Store.",
      "Built HudHudHub, a grocery e-commerce app with cart and order management, deployed regionally in Qatar.",
    ],
    technologies: ["React Native", "TypeScript", "AWS", "Firebase"],
  },
  {
    id: 2,
    time: "09/2022 – 09/2024",
    designation: "Software Developer • Akivna Technologies (CNHi, Makro Pro)",
    points: [
      "Led end-to-end e-commerce platform development using Next.js and GraphQL, driving scalability.",
      "Self-taught Next.js in 2 days to contribute to a major e-commerce project.",
      "Translated business requirements into technical specifications for efficient development.",
      "Developed a Bluetooth-based app using React Native, TypeScript, and WatermelonDB to stream and store tractor bale data offline, enabling real-time monitoring.",
      "Created a BLE simulator app with React Native to mimic tractor data streams, facilitating testing without hardware.",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "GraphQL",
      "WatermelonDB",
    ],
  },
  {
    id: 3,
    time: "10/2021 – 09/2022",
    designation:
      "Associate Experience Technology L2 • goHarness (Publicis Sapient)",
    points: [
      "Developed e-commerce websites for 3 brands using React.js and VTEX, enhancing client engagement.",
      "Led 5+ proof-of-concepts with React and TypeScript, securing client approvals.",
      "Built responsive UI from Figma designs using React and Sass for cross-device compatibility.",
      "Followed Agile and Scrum methodologies using Git/GitHub for timely delivery.",
    ],
    technologies: [
      "React.js",
      "VTEX",
      "Redux",
      "TypeScript",
      "Sass",
      "Git",
      "GitHub",
      "Figma",
    ],
  },
  {
    id: 4,
    time: "05/2019 – 09/2021",
    designation: "Lead Mentor and Full-Stack Developer • goHarness",
    points: [
      "Led teams of 3–6 to deliver 5+ projects using React.js and React Native, ensuring client satisfaction.",
      "Implemented Elasticsearch for efficient text-based search across 10,000+ records.",
      "Developed responsive e-commerce platforms with Redux and Magento.",
      "Engaged with clients from Canada, USA, and Dubai to meet business requirements.",
    ],
    technologies: [
      "React.js",
      "React Native",
      "Firebase",
      "Redux",
      "Magento",
      "Elasticsearch",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 5,
    time: "01/2020 – 03/2020 & 01/2021 – 03/2021",
    designation: "Lead Full-Stack Trainer • goHarness (Xceedance)",
    points: [
      "Delivered 2 full-stack bootcamps, training 60 employees with hands-on exercises.",
      "Designed comprehensive capstone projects to enhance trainee skills.",
    ],
    technologies: [],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="pt-24">
      <SectionTitle title="WORK EXPERIENCE" />
      {Experiences.map((experience) => (
        <div
          className="leading-[1.8] md:leading-[1.5] text-sm md:text-base text-text-300 mb-8 mt-16"
          key={experience.id}
        >
          <p className="text-xs md:text-sm text-neutral-500">
            {experience.time}
          </p>
          <h3 className="text-white my-1 text-lg font-semibold">
            {experience.designation}
          </h3>
          <ul className="flex flex-col gap-1 mt-3 md:mt-1 text-md list-disc list-inside text-neutral-400">
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="flex flex-wrap items-center gap-[6px] mt-3 md:mt-2">
            {experience.technologies.map((technology) => (
              <li
                className="shadow bg-neutral-800 text-neutral-200 py-1 px-2 border border-neutral-600 text-sm rounded"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
