import React from "react";
import bannerImg from '../assets/bannerImg.jpeg'
const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-8 flex flex-col w-50 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img src={bannerImg} className="p-4  w-72 h-80 rounded object-cover mb-8 md:mb-0 border-2 p-1 border-fuchsia-500 img_glow hover:scale-105 "/>
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        
        <button className="md:mt-10 text-white py-2 px-3 text-sm hover:text-fuchsia-500 glow hover:scale-105  md:text-lg md:py-2 md:px-4 rounded-full 
        bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white border-2 p-1 border-fuchsia-500">
          Source Code
        </button>
      </div>
    </div>
  );  
}
export default ProjectCard;




