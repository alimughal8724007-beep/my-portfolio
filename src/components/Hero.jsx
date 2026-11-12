import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='flex items-center px-15 pt-35'>
    <div className='grid grid-cols-2 w-full gap-10 items-center'>
    <div>
    <p className='fade-up text-fuchsia-300 text-xl'>👋 Welcome to my portfolio</p>
    <h1 style={{animationDelay:'0.2s'}} className='text-amber-50 fade-up text-6xl font-bold fot-mono mt-7'>Hi, I'm<br/>
        <span className='text-fuchsia-400'>Bisma Naaz</span>
    </h1>
    <h2 style={{animationDelay:'0.4s'}} className='fade-up text-2xl mt-5 text-amber-50/90'>Full Stack Developer</h2>
    <p style={{animationDelay:'0.6s'}}
    className='fade-up text-amber-50/70 mt-2'>I am a BS Information Technology student and aspiring Full-Stack Developer with a strong interest in web development and emerging technologies. I have experience with HTML, CSS, JavaScript, React.js, and backend development, and I enjoy building creative, user-friendly web applications while continuously learning new skills.</p>
    <div style={{animationDelay:'0.6s'}} className='fade-up flex gap-4 mt-8'>
        <a href='#projects' className='bg-fuchsia-400 text-blue-50 border-2 px-6 py-3 rounded-full'>
            View Projects
        </a>
        <a href='#qualifications' className='border-2 px-6 py-3 rounded-full border-fuchsia-400 text-amber-50'>
            Contact Me
        </a>
    </div>
    </div>
    <div style={{animationDelay:'0.5s'}} className='fade-up flex justify-center'>
       <div className='relative w-64 h-64 rounded-full border-4 border-fuchsia-400 bg-fuchsia-900/40 flex items-center justify-center text-7xl font-bold font-serif text-amber-50 transition duration-500 hover:scale-105 hover:rotate-3'>
       <div className='border-blink absolute -inset-1 rounded-full border-4 border-fuchsia-400'></div>
            BN
        </div>
    </div>
</div>
   </section>
  )
}

export default Hero