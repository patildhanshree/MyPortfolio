import React from 'react';
import about from '../assets/about.jpeg';

function About() {
    return (
        <div className="bg-[#121212] text-white py-20" id="About">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl  text-center mb-12 hover:text-fuchsia-500">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={about}
            alt=""
            className="w-72 h-80 rounded hover:scale-105 object-cover mb-8 md:mb-0 border-2 p-1 border-fuchsia-500 img_glow "
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
           
            <div className="flex items-center space-x-4 mb-4">
  <label htmlFor="htmlandcss" className="w-2/12 text-lg font-semibold">HTML & CSS</label>
  <div className="grow bg-gray-200 rounded-full h-3.5">
    <div
      className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-1  border-2 border-transparent transform transition-all duration-500 hover:scale-110 w-10/12 rounded-full'
      style={{ width: '90%' }}
    >
      <span className="absolute text-center w-full top-0 left-0 font-bold text-white"></span>
    </div>
  </div>
</div>

<div className="flex items-center space-x-4 mb-4">
  <label htmlFor="reactjs" className="w-2/12 text-lg font-semibold">React JS</label>
  <div className="grow bg-gray-200 rounded-full h-3.5">
    <div
      className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-1 border-2 border-transparent transform transition-all duration-500 hover:scale-110 w-10/12 rounded-full'
      style={{ width: '40%' }}
    >
      <span className="absolute text-center w-full top-0 left-0 font-bold text-white"></span>
    </div>
  </div>
</div>

<div className="flex items-center space-x-4 mb-4">
  <label htmlFor="reactjs" className="w-2/12 text-lg font-semibold">Python</label>
  <div className="grow bg-gray-200 rounded-full h-3.5">
    <div
      className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-1 border-2 border-transparent transform transition-all duration-500 hover:scale-110 w-10/12 rounded-full'
      style={{ width: '80%' }}
    >
      <span className="absolute text-center w-full top-0 left-0 font-bold text-white"></span>
    </div>
  </div>
</div>

<div className="flex items-center space-x-4 mb-4">
  <label htmlFor="reactjs" className="w-2/12 text-lg font-semibold">JavaScript</label>
  <div className="grow bg-gray-200 rounded-full h-3.5">
    <div
      className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-1 border-2 border-transparent transform transition-all duration-500 hover:scale-110 w-10/12 rounded-full'
      style={{ width: '70%' }}
    >
      <span className="absolute text-center w-full top-0 left-0 font-bold text-white"></span>
    </div>
  </div>
</div>

<div className="flex items-center space-x-4 mb-4">
  <label htmlFor="mysql" className="w-2/12 text-lg font-semibold">MySQL</label>
  <div className="grow bg-gray-200 rounded-full h-3.5">
    <div
      className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-1 border-2 border-transparent transform transition-all duration-500 hover:scale-110 w-10/12 rounded-full'
      style={{ width: '90%' }}
    >
      <span className="absolute text-center w-full top-0 left-0 font-bold text-white"></span>
    </div>
  </div>
</div>

</div>
           
                
          </div>
        </div>
      </div>
  
    );
}

export default About;

