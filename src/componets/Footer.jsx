import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white px-6 md:px-16 lg:px-24" id="Footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-semibold hover:text-fuchsia-500">Portfolio</h2>
          <p className="text-[16px] mt-4">@Dhanshri's Portfolio.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold hover:text-fuchsia-500">Contact</h2>
          <p className="mt-4">Email: dhanashreepatil302003@gmail.com</p>
          <p className="mt-2">Phone: +91-9999999999</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold hover:text-fuchsia-500">Projects</h2>
          <p className="mt-4">Quiz App</p>
          <p className="mt-2">Restaurant Website</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold hover:text-fuchsia-500">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="mailto:dhanashreepatil302003@gmail.com" className="hover:text-fuchsia-500 transition">
              <MdOutlineEmail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanashripatil30/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-500 transition"
            >
              <CiLinkedin size={24} />
            </a>
            <a
              href="https://github.com/patildhanshree"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-500 transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} Dhanshri's Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

