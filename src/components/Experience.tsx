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
    designation: "Senior Software Engineer — Independent Contractor",
    points: [
      "Migrated a live production platform from React.js to Next.js in 2 weeks, enabling SSR and improving SEO and Lighthouse performance scores by 40%.",
      "Rescued a legacy React Native app and successfully unblocked App Store and Play Store publishing.",
      "Delivered and published 7+ mobile apps, web apps, and landing pages for clients.",
      "Managed development of an AI guardrails project to validate and fact-check LLM-generated responses.",
      "Contributed to production NestJS APIs during team capacity gaps, improving stability and delivery speed.",
    ],
    technologies: [
      "Next.js",
      "React",
      "React Native",
      "Redux",
      "NestJS",
      "Node",
      "AI / LLM APIs",
    ],
  },
  {
    id: 2,
    time: "09/2022 – 09/2024",
    designation: "Software Developer — Akivna Technologies (CNHi, Makro Pro)",
    points: [
      "Created a BLE simulator saving ~$10,000 in hardware testing costs.",
      "Shipped features for a large-scale e-commerce platform using Next.js and GraphQL.",
      "Built a Bluetooth-enabled monitoring app with offline-first data storage using WatermelonDB.",
      "Self-learned Next.js in 2 days to deliver production features in an enterprise codebase.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "React Native",
      "Redux",
      "SQL",
      "WatermelonDB",
    ],
  },
  {
    id: 3,
    time: "10/2021 – 09/2022",
    designation:
      "Associate Experience Technology L2 — goHarness (Publicis Sapient)",
    points: [
      "Developed production e-commerce websites for 2 industry-leading brands using React and VTEX.",
      "Led 5 proof-of-concepts with React, helping secure client approvals.",
      "Converted Figma designs into responsive, accessible, production-ready UIs.",
    ],
    technologies: ["React.js", "VTEX", "Redux", "Git/GitHub"],
  },
  {
    id: 4,
    time: "05/2019 – 09/2021",
    designation: "Lead Mentor & Full-Stack Developer — goHarness",
    points: [
      "Led teams of 3–6 engineers to deliver 5+ client projects using React.js and React Native.",
      "Implemented Elasticsearch for 10,000+ record datasets, improving text search performance.",
      "Built responsive e-commerce platforms with Redux and Magento for international clients.",
    ],
    technologies: [
      "React.js",
      "React Native",
      "Firebase",
      "Redux",
      "Magento",
      "Elasticsearch",
    ],
  },
  {
    id: 5,
    time: "01/2020 – 03/2020 & 01/2021 – 03/2021",
    designation: "Lead Full-Stack Trainer — goHarness (Xceedance)",
    points: [
      "Delivered 2 full-stack bootcamps teaching 60+ employees with hands-on exercises.",
      "Trained 20+ in-office engineers in 2020 and 40+ remote engineers in 2021.",
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
