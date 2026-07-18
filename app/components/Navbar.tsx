"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0d1117]/80 backdrop-blur-md border-b border-slate-800" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
        >
          VT.
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
