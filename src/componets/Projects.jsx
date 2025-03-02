{/*import React from 'react'
import ProjectCard from './projectsCard'

const Projects = () =>  {
  return (
    <div id='Projects' className='p-20 md:p-24  text-white bg-[#121212]'>
        <h1 className="text-2xl md:text-4xl text-white text-center hover:text-fuchsia-500">Projects</h1>
        <div className="py-12 px-8  justify-center h-screen flex flex-wrap gap-15 ">
            
           <a href=''> <ProjectCard title=" Quiz App"/></a>
           <a href=''> <ProjectCard title=" Web Page" /></a>
            <a href="http://localhost:5173/"><ProjectCard title=" Portfolio"/></a>
        </div>
      
    </div>
  )
}

export default Projects*/}
import React from 'react'
import ProjectCard from './projectsCard'

const Projects = () => {
  return (
    <div id="Projects" className="py-32 px-8 md:py-40 md:px-24 text-white bg-[#121212]">
      <h1 className="text-2xl md:text-4xl text-white text-center hover:text-fuchsia-500">
        Projects
      </h1>
      
      {/* Removed h-screen and adjusted spacing */}
      <div className="py-12 flex flex-wrap justify-center gap-10">
        <a href=""> <ProjectCard title="Quiz App" /> </a>
        <a href=""> <ProjectCard title="Web Page" /> </a>
        <a href="http://localhost:5173/"> <ProjectCard title="Portfolio" /> </a>
      </div>
    </div>
  )
}

export default Projects
