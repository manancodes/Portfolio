import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" md:w-5/6 w-full px-4 text-white flex flex-col">
        <Link
          href="/"
          className="duration-200 text-zinc-400 hover:text-zinc-100"
        >
          <div className="w-full flex items-center justify-center text-7xl font-bold">
            <h1 className="">Let&apos;s work together</h1>
            <ArrowUpRight size={100} />
          </div>
        </Link>

        <div className="flex flex-col mt-6">
          <div className="flex mb-12 flex-row justify-center">
            <Link
              href="https://github.com/manancodes"
              className="px-4 flex items-center cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              <Github size={18} className="mr-1" />
              Github
            </Link>
            <Link
              href="https://twitter.com/manancodes"
              className="px-4 flex items-center cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              <Twitter size={18} className="mr-1" />
              Twitter
            </Link>
            <Link
              href="https://www.linkedin.com/in/manancodes"
              className="px-4 flex items-center cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              <Linkedin size={18} className="mr-1" />
              LinkedIN
            </Link>
            <Link
              href="/"
              className="px-4 flex items-center cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              <Download size={18} className="mr-1" />
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
