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
    time: "09/2022 – 10/2024 (Employee), 11/2024 – Present (Contractor)",
    designation: "Senior Software Developer • Akivna Technologies (CNHi)",
    points: [
      "Led end-to-end development of key features, reducing project delivery timelines by 20%.",
      "Developed scalable e-commerce platforms using Next.js and GraphQL.",
      "Used TailwindCSS extensively to build modular and responsive UI components.",
      "Delivered complex modules within the first 10 days of joining, speeding up release cycles by 15%.",
      "Transitioned from full-time employee to independent contractor while maintaining full-time workload.",
    ],
    technologies: [
      "Next.js",
      "React-Native",
      "TypeScript",
      "GraphQL",
      "TailwindCSS",
      "Redux",
      "SQL",
      "WatermelonDB",
      "Bluetooth",
      "Git",
      "Azure DevOps",
    ],
  },
  {
    id: 2,
    time: "10/2021 – 09/2022",
    designation: "Full Stack Developer • goHarness (Publicis Sapient)",
    points: [
      "Developed and optimized React.js + VTEX based e-commerce websites for 3 major brands.",
      "Built 5+ POCs that contributed to client wins worth $500K+.",
      "Delivered all sprints on time, achieving 98% punctuality under Agile/Scrum methodology.",
    ],
    technologies: [
      "React.js",
      "VTEX",
      "Redux",
      "JavaScript",
      "Sass",
      "Git",
      "Figma",
    ],
  },
  {
    id: 3,
    time: "05/2019 – 09/2021",
    designation: "Lead Mentor and Full-Stack Developer • goHarness",
    points: [
      "Delivered 5+ web/mobile projects with 100% client retention.",
      "Managed teams of 3–6 developers, reducing average project timelines by 30%.",
      "Integrated Elasticsearch for search across 10,000+ records.",
      "Converted 80% of client leads from Canada, USA, and Dubai into long-term engagements.",
    ],
    technologies: [
      "React.js",
      "React Native",
      "Firebase",
      "Redux",
      "Magento",
      "JavaScript",
      "Elasticsearch",
      "Git",
    ],
  },
  {
    id: 4,
    time: "01/2020 – 03/2020 & 01/2021 – 03/2021",
    designation: "Lead Full-Stack Trainer • goHarness (Xceedance)",
    points: [
      "Delivered two 60-day full-stack bootcamps with hands-on capstone projects.",
      "Managed 20 in-office and 40 remote trainees with 1-on-1 support and customized content.",
      "Achieved a 100% bootcamp completion rate and strong client feedback.",
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
          <h3 className=" text-white my-1 text-lg font-semibold">
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
