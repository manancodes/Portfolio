"use client";
import React from "react";

import Particles from "@/components/particles";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-neutral-700/10 to-black pl-40 pr-40">
      <NavBar />
      <Particles quantity={100} />
      <Hero />
      <Projects />
    </div>
  );
}
