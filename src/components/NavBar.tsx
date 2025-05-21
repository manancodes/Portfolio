"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick, className = "" }) => (
  <div className={className}>
    <Link
      href="#projects"
      onClick={onClick}
      className="text-neutral-400 hover:text-neutral-100 duration-200"
    >
      Projects
    </Link>
    <Link
      href="#experience"
      onClick={onClick}
      className="text-neutral-400 hover:text-neutral-100 duration-200"
    >
      Experience
    </Link>
    <Link
      target="_blank"
      href="https://cal.com/manancodes/30min"
      onClick={onClick}
      className="flex items-center justify-center bg-white text-black hover:bg-neutral-300 py-3 px-6 rounded-lg font-semibold"
      style={{ boxShadow: "inset 0 -4px 0 0 rgba(0, 0, 0, .25)" }}
    >
      Book a Call with Me!
    </Link>
  </div>
);

const NavBar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
        className={`fixed inset-x-0 top-0 z-50 duration-200 border-b backdrop-blur  ${
          !menuOpen && !isIntersecting
            ? "border-neutral-800"
            : "border-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link
            href="/"
            className="text-neutral-400 hover:text-neutral-100 duration-200 text-lg font-semibold"
          >
            Manan
          </Link>

          {/* Desktop Nav */}
          <NavLinks className="hidden md:flex items-center gap-8" />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neutral-400 hover:text-neutral-100 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <NavLinks
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center p-4 gap-4"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
