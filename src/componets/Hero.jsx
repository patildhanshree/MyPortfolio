import React from 'react';
import hero from '../assets/hero.jpeg';

function Hero() {
  return (
    <div
      className="bg-[#121212] min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-10 py-12 gap-6"
      id="Skills"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl hover:text-fuchsia-500">
          Hello <br />
          I'm Dhanshri Patil
        </h1>
        <p className="text-[#ADB7BE] text-md md:text-lg lg:text-xl mt-4">
          Full Stack Developer
        </p>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="px-6 py-2 mt-5 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 
              hover:text-fuchsia-500 text-white border-2 border-fuchsia-500 transition-transform hover:scale-105"
          >
            Download CV
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={hero}
          alt="Profile"
          className="w-52 h-52 md:w-72 md:h-80 rounded-full border-2 p-1 border-fuchsia-500 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Hero;
