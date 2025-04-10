'use client'; // Essential for useState and onClick

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className="flex justify-between items-center py-4 px-4 md:px-8 relative z-50 bg-white shadow-sm">
      {/* Logo/Brand */}
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-[#ff5e1a] rounded-full" />
        <span className="text-sm font-semibold tracking-widest">
          {/* Use closeMenu here too in case logo is clicked while menu is open */}
          <Link href="/" style={{ fontFamily: 'Montserrat', fontWeight: 900 }} onClick={closeMenu}>
            OLUWATOBI OLANIPEKUN
          </Link>
        </span>
      </div>

      {/* --- Desktop Navigation --- */}
      <div className="hidden lg:flex gap-12 text-md text-zinc-400">
        {/* Desktop links remain unchanged */}
        <Link style={{ fontFamily: 'Montserrat' }} href="#about" className="hover:text-[#ff5e1a] active:text-black font-medium">
          About
        </Link>
        <Link style={{ fontFamily: 'Montserrat' }} href="#projects" className="hover:text-[#ff5e1a] font-medium">
          Projects
        </Link>
        <Link style={{ fontFamily: 'Montserrat' }} href="#contact" className="hover:text-[#ff5e1a] font-medium">
          Contact
        </Link>
      </div>

      {/* --- Hamburger Button --- */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-zinc-700 hover:text-[#ff5e1a] focus:outline-none text-2xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      <div
        className={`
          lg:hidden fixed inset-0 // Use inset-0 for full screen coverage (top-0, left-0, right-0, bottom-0)
          bg-white z-40
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col items-center justify-center gap-8 // Center content
        `}
        // Add onClick={closeMenu} to the overlay itself if you want clicking the background to close the menu
        // onClick={closeMenu} // Optional: close on overlay click
      >
         {/* Explicit close button inside menu */}
         <button
            onClick={closeMenu}
            className="absolute top-5 right-5 text-zinc-700 hover:text-[#ff5e1a] text-3xl z-50" // Ensure button is clickable
            aria-label="Close menu"
          >
            <AiOutlineClose />
         </button>

        {/* Mobile Navigation Links - check styling and href targets */}
        <Link
          style={{ fontFamily: 'Montserrat' }}
          href="#about"
          className="text-2xl text-zinc-700 hover:text-[#ff5e1a] active:text-black font-medium"
          onClick={closeMenu} // Close menu when link is clicked
        >
          About
        </Link>
        <Link
          style={{ fontFamily: 'Montserrat' }}
          href="#projects"
          className="text-2xl text-zinc-700 hover:text-[#ff5e1a] font-medium"
          onClick={closeMenu} // Close menu when link is clicked
        >
          Projects
        </Link>
        <Link
          style={{ fontFamily: 'Montserrat' }}
          href="#contact"
          className="text-2xl text-zinc-700 hover:text-[#ff5e1a] font-medium"
          onClick={closeMenu} // Close menu when link is clicked
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;