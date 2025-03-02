{/*import React from 'react'

function Contact() {
  return (
    <div className=' bg-[#121212] text-white flex items-center justify-center min-h-screen py-20 ' id='Contact me' >
            
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
              <h2 className="text-4xl text-center hover:text-fuchsia-500 " >Contact</h2>
                
                <div className='flex flex-col md-flex-row items-center md:space-x-12 justify-center '>
            <form className='space-y-6 w-full max-w-lg'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full h-8 px-4 py-2 rounded bg-[#121212] border   border  border-fuchsia-500  glow hover:scale-105  focus:outline-none
                    '
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='p-2  w-full h-8 px-4 py-2 rounded bg-[#121212] border  object-cover text-white glow hover:scale-105 glow border-2 p-1 border-fuchsia-500 focus:outline-none
                     '
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='p-8  w-full h-8 px-4   text-white rounded bg-[#121212] border  border-fuchsia-500 glow hover:scale-105  focus:outline-none
                    '
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button className="w-15 md:w-auto mt-6 md:mt-10 text-white py-2 px-4 text-sm hover:text-fuchsia-500 glow hover:scale-105  md:text-lg md:py-2 md:px-4 rounded-full 
        bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white border-2 p-1 border-fuchsia-500">
          Send
        </button>
            </form>
          </div>
                
                </div>
            
    </div>
    
  )
}

export default Contact*/}
import React from 'react';

function Contact() {
  return (
    <div className="bg-[#121212] text-white flex items-center justify-center min-h-screen py-20" id="Contact">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl text-center hover:text-fuchsia-500 mb-8">Contact</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12 justify-center">
          <form className="space-y-6 w-full max-w-lg">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block mb-2">Your Name</label>
              <input 
                type="text"
                className="w-full h-10 px-4 py-2 rounded bg-[#121212] border border-fuchsia-500 glow hover:scale-105 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Enter Your Name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email"
                className="w-full h-10 px-4 py-2 rounded bg-[#121212] border border-fuchsia-500 glow hover:scale-105 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Enter Your Email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                className="w-full h-32 px-4 py-2 rounded bg-[#121212] border border-fuchsia-500 glow hover:scale-105 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                rows="5"
                placeholder="Enter Your Message"
              />
            </div>

            {/* Send Button */}
            <button className="w-full md:w-auto mt-6 text-white py-2 px-4 text-sm md:text-lg rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 border-2 border-fuchsia-500 hover:text-fuchsia-500 transition-transform transform hover:scale-105">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
