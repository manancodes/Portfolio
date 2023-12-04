"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navigation: React.FC = () => {
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
        // backdrop-blur
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex items-center justify-between gap-8">
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>
            <button
              onClick={() => {
                console.log("pressed");
              }}
              className="flex items-center justify-center bg-neutral-200 text-black hover:bg-neutral-300 text-white py-2 px-4 rounded-3xl"
            >
              Hire Me
              <Image
                alt="manan"
                src={`/RightChevron.svg`}
                className="ml-1 w-2 h-2 fill-blue-100"
                width={4}
                height={4}
              />
            </button>
          </div>
          <Link
            href="/contact"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Manan
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
