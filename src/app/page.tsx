import React from "react";

import Particles from "@/components/particles";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-neutral-700/10 to-black lg:px-48 md:px-24 sm:px-10 px-4">
      <NavBar />
      <Particles quantity={100} />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <div className="relative mt-16 mb-8 w-full">
        <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>
      <Footer />
    </div>
  );
}
