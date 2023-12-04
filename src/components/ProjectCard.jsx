// components/Card.js

import Image from "next/image";
import React from "react";

const Card = ({
  projectName,
  description,
  technologies,
  imageSrc,
  imagePosition,
}) => {
  const isImageOnRight = imagePosition === "right";

  return (
    <div
      className={`flex flex-col lg:flex-row bg-black border-2 border-neutral-900 rounded-xl m-5 lg:m-10 text-white overflow-hidden ${
        isImageOnRight ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-[500px] p-5 lg:p-10 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-4">{projectName}</h3>
        <p className="mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap justify-self-end">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 flex items-center"
            >
              <Image
                src={`public/next.svg`}
                alt={tech}
                className="w-4 h-4 mr-2"
                width={4}
                height={4}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex overflow-hidden items-center justify-center p-4 lg:p-6">
        <Image
          src={imageSrc}
          alt="Project"
          className="object-cover rounded-2xl"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Card;
