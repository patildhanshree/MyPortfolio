import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] text-white px-8 md:px-16 lg:px-24"> 
      <div className="container py-4 flex justify-center md:justify-between items-center">
        {/* Portfolio Logo - Hidden on Mobile */}
                  
        <div className="text-3xl block md:text-2xl lg:text-2xl hover:text-fuchsia-500 hover:border-b-2 hover:border-fuchsia-500 lg:text-4xl">
  Portfolio
</div>


        {/* Navigation Links */}
        <div className="space-x-6 md:space-x-8 mt-2 md:mt-0 md:text-2xl lg:text-2xl text-sm md:text-base flex flex-wrap justify-center">
          <a href="#home" className="hover:text-fuchsia-500 glow">Home</a>
          <a href="#About" className="hover:text-fuchsia-500 glow">About</a>
          <a href="#Skills" className="hover:text-fuchsia-500 glow">Skills</a>
          <a href="#Projects" className="hover:text-fuchsia-500 glow">Projects</a>
          <a href="#Contact" className="hover:text-fuchsia-500 glow">Contact</a>
          <a href="#Footer" className="hover:text-fuchsia-500 glow">Footer</a>
        </div>

        {/* Connect Me Button */}
        <a href="#Contact">
          <button className="text-white hover:text-fuchsia-500 glow p-2 md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full border-2 border-fuchsia-500">
            Connect Me
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

