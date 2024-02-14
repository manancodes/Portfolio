"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const NavBar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent "
            : "bg-zinc-900/500  border-zinc-800 backdrop-blur"
        }`}
      >
        <div className="container flex flex-row items-center justify-between p-6 mx-auto">
          <Link
            href="/"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Manan
          </Link>
          <div className="flex items-center justify-between gap-8">
            <Link
              href="/"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>
            <button
              onClick={() => {
                console.log("pressed");
              }}
              className="flex items-center justify-center bg-neutral-200 text-black hover:bg-neutral-300 py-2 px-4 rounded-3xl"
            >
              Hire Me
              <ChevronRight size={18} className="ml-1" color="#777" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
