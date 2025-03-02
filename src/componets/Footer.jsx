import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'
const  Footer = ()=> {
  return ( 

    <footer className=' bg-[#121212] text-white px-8 md:px-16 lg:px-24' id='Footer'>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0 ">
              <span className=' text-2xl text-white hover:text-fuchsia-500 mr-2'>Portfolio</span>
              <p className='text-[16px] my-4 -mx-3 flex'>@Dhanshree's Portfolio.com</p>
            </div>
            <div>
              <h2 className=' text-2xl text-white hover:text-fuchsia-500'>Contact</h2>
              <p className='text-white my-4'>Email:dhanashreepatil302003@gmail.com</p>
              <p className='text-white my-4'>Phone:+91-9999999999</p>
            </div>
            <div>
              <h2 className=' text-2xl text-white hover:text-fuchsia-500'>Projects</h2>
              <p className='text-white my-4'>Quiz App</p>
              <p className='text-white my-4'>Restaurant Website</p>
            </div>
            <div>
            <h2 className='text-2xl text-white hover:text-fuchsia-500'>Follow Me</h2>
            <div className="flex space-x-4 my-4 ">
          <a href="dhanashreepatil302003@gmail.com" className=' w-6 h-6 text-white hover:text-fuchsia-500 ease-in-out '><MdOutlineEmail size={20} /> </a>
           <a href="https://www.linkedin.com/in/dhanashripatil30/" className='text-white hover:text-fuchsia-500'><CiLinkedin size={20} />
           </a><a href="https://github.com/patildhanshree " className='text-white hover:text-fuchsia-500'> <FaGithub  size={20}/> </a>
       </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer
