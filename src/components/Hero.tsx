"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="relative w-screen flex flex-col items-center justify-center ">
        <div className="absolute Grid w-screen -z-10" />
        <div className="border border-neutral-700 bg-opacity-20 mt-56 rounded-3xl p-1 pl-6 pr-6">
          <p className=" text-sm  text-neutral-400">FOLLOW MY JOURNEY</p>
        </div>
        <h1 className="z-10 mt-10 text-5xl text-gray-300 font-semibold cursor-default sm:text-5xl md:text-7xl whitespace-nowrap text-center">
          Transforming ideas to apps
        </h1>
      </div>
      <div className="my-10 text-center animate-fade-in">
        <h2 className=" text-xl text-zinc-500 ">
          I build mobile and web apps using React and React Native
        </h2>
      </div>
      <div className="flex w-80 justify-evenly mb-40">
        <button
          onClick={() => {
            console.log("pressed");
          }}
          className="flex items-center justify-center bg-neutral-200 text-black hover:bg-neutral-300 py-3 px-6 rounded-3xl"
        >
          Hire Me
          <ChevronRight size={18} className="ml-1" color="#777" />
        </button>
      </div>
    </>
  );
};

export default Hero;
