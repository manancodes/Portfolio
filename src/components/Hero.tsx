import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const Hero = () => {
  return (
    <>
      <div className="relative w-screen flex flex-col items-center justify-center ">
        <div className="absolute Grid w-screen -z-10" />
        <div className="md:mt-56 mt-32">
          <SectionTitle title="INTRODUCTION" />
        </div>
        <h1 className="z-10 mt-10 text-5xl text-white font-semibold sm:text-5xl md:text-7xl text-center">
          Transforming ideas to apps
        </h1>
      </div>
      <div className="my-10 text-center animate-fade-in">
        <h2 className=" text-xl text-neutral-400 ">
          I build high-performance, scalable apps using React, Next.js and React
          Native.
        </h2>
      </div>
      <div className="flex w-80 justify-evenly md:mb-40 mb-28">
        <Link
          target="_blank"
          href="https://cal.com/manancodes/30min"
          className="flex items-center justify-center bg-white text-black hover:bg-neutral-300 py-3 px-6 rounded-lg font-semibold"
          style={{ boxShadow: "inset 0 -4px 0 0 rgba(0, 0, 0, .25)" }}
        >
          Book a Call with Me!
        </Link>
      </div>
    </>
  );
};

export default Hero;
