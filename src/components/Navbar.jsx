import React, { useState } from 'react'

const Navbar = () => {
  return (
    <nav className='fixed z-50 w-full backdrop-blur-md bg-black/20'>
    <div className='flex justify-between items-center px-10 py-4'>
    <ul style={{animationDelay:'0.2s'}} className='fade-up flex gap-10'>
        <li><a href='#home'className='text-blue-100'>Home</a></li>
        <li><a href='#about' className='text-blue-100'>About</a></li>
        <li><a href='#skills' className='text-blue-100'>Skills</a></li>
    </ul>
    <h1 className='fade-up text-fuchsia-400 text-3xl font-bold font-serif'>Portfolio</h1>
     <a href='#contact' style={{animationDelay:'0.8s'}} className='fade-up bg-fuchsia-900 text-blue-50 border-2 px-6 py-2 rounded-2xl transition duration-300 hover:scale-110'>Hire Me
        <span className='absolute -top-1 -right-1 flex size-3'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75'></span>
            <span className='relative inline-flex size-3 rounded-full bg-fuchsia-500'></span>
          </span>
     </a>
    </div>

    </nav>
  )
}

export default Navbar