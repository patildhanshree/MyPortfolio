import React from 'react';
import hero from '../assets/hero.jpeg';

function Hero() {
  return (
    <div className="bg-[#121212] h-screen flex items-center px-10" id="Skills">
      
      <div className="w-1/2">
        <h1 className="text-white text-4xl lg:text-6xl ml-8  hover:text-fuchsia-500 ">
          Hello <br />
             I'm Dhanshri Patil
        </h1>
        <p className="text-[#ADB7BE] text-lg lg:text-xl ml-8 mt-4">
            Full Stack Developer
        </p>
        <a href="/resume.pdf"  download="resume.pdf"  target='_blank' rel='noopener noreferrer'>
        <button type=" button" className="px-8 py-2 mt-5 ml-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 
        hover:text-fuchsia-500 glow hover:scale-105 text-white border-2 p-1 border-fuchsia-500">
          Download CV
        </button>
        </a>
      </div>
      
      
      <div className="w-1/2 flex justify-center">
        <img
          src={hero}
          width={800}
          height={800}
          className="w-72 h-80 rounded-full border-2 p-1 border-fuchsia-500 img_glow object-cover transition-transform duration-300 hover:scale-105"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Hero;
