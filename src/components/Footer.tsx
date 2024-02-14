import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" md:w-5/6 w-full px-4 text-white flex flex-col">
        <Link
          href="/contact"
          className="duration-200 text-zinc-400 hover:text-zinc-100"
        >
          <div className="w-full flex items-center text-6xl font-bold">
            <h1 className="w-full">Let's work together</h1>
            <ArrowUpRight size={120} />
          </div>
        </Link>

        <div className="flex flex-col mt-6">
          <div className="flex  mb-12 flex-row justify-between">
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              About
            </a>
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Projects
            </a>
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Experience
            </a>
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
