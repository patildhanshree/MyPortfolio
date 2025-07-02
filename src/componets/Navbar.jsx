import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // icons for menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212] text-white px-4 md:px-16 lg:px-24 shadow-md">
      <div className="flex items-center justify-between py-2">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold hover:text-fuchsia-500 hover:border-b-2 hover:border-fuchsia-500">
          Portfolio
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex space-x-6 text-base md:text-lg lg:text-xl">
          <a href="#home" className="hover:text-fuchsia-500">Home</a>
          <a href="#About" className="hover:text-fuchsia-500">About</a>
          <a href="#Skills" className="hover:text-fuchsia-500">Skills</a>
          <a href="#Projects" className="hover:text-fuchsia-500">Projects</a>
          <a href="#Contact" className="hover:text-fuchsia-500">Contact</a>
          <a href="#Footer" className="hover:text-fuchsia-500">Footer</a>
        </div>

        {/* Connect Me - Desktop */}
        <a href="#Contact" className="hidden md:inline">
          <button className="ml-6 text-white hover:text-fuchsia-500 border-2 border-fuchsia-500 px-4 py-2 rounded-full hover:scale-105 transition-transform">
            Connect Me
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 pb-4 px-4 text-base">
          <a href="#home" className="hover:text-fuchsia-500" onClick={toggleMenu}>Home</a>
          <a href="#About" className="hover:text-fuchsia-500" onClick={toggleMenu}>About</a>
          <a href="#Skills" className="hover:text-fuchsia-500" onClick={toggleMenu}>Skills</a>
          <a href="#Projects" className="hover:text-fuchsia-500" onClick={toggleMenu}>Projects</a>
          <a href="#Contact" className="hover:text-fuchsia-500" onClick={toggleMenu}>Contact</a>
          <a href="#Footer" className="hover:text-fuchsia-500" onClick={toggleMenu}>Footer</a>
          <a href="#Contact">
            <button className="text-white border-2 border-fuchsia-500 px-4 py-2 rounded-full hover:text-fuchsia-500 mt-2">
              Connect Me
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
