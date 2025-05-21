import Link from "next/link";
import React from "react";
import {
  LuGithub,
  LuArrowUpRight,
  LuDownload,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-11/12 md:w-full px-4 text-white flex flex-col items-center">
        <Link
          target="_blank"
          href="https://cal.com/manancodes/30min"
          className="duration-200 text-neutral-400 hover:text-neutral-100 w-full"
        >
          <div className="w-full flex items-center justify-center text-center gap-4 md:gap-6 text-5xl md:text-6xl lg:text-7xl font-bold">
            <h1>Let&apos;s work together</h1>
            <LuArrowUpRight className="text-6xl md:text-[100px]" />
          </div>
        </Link>

        <div className="flex flex-wrap justify-center gap-14 mt-6 mb-12">
          <Link
            href="https://github.com/manancodes"
            target="_blank"
            className="flex items-center text-gray-600 hover:text-white uppercase text-sm md:text-base"
          >
            <LuGithub size={18} className="mr-1" />
            Github
          </Link>
          <Link
            href="https://twitter.com/manancodes"
            target="_blank"
            className="flex items-center text-gray-600 hover:text-white uppercase text-sm md:text-base"
          >
            <LuTwitter size={18} className="mr-1" />
            Twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/manancodes"
            target="_blank"
            className="flex items-center text-gray-600 hover:text-white uppercase text-sm md:text-base"
          >
            <LuLinkedin size={18} className="mr-1" />
            LinkedIN
          </Link>
          <Link
            href="/Resume.pdf"
            target="_blank"
            download
            className="flex items-center text-gray-600 hover:text-white uppercase text-sm md:text-base"
          >
            <LuDownload size={18} className="mr-1" />
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
