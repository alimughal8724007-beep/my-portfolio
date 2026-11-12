import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-20'>
         <div className='overflow-hidden border-y border-fuchsia-400/30 py-4 mt-14'>
        <div className='marquee text-2xl font-bold text-amber-50/50'>
          <span className='mx-6'>✦ HTML</span>
          <span className='mx-6'>✦ CSS</span>
          <span className='mx-6'>✦ Tailwind</span>
          <span className='mx-6'>✦ JavaScript</span>
          <span className='mx-6'>✦ React</span>
          <span className='mx-6'>✦ Node.js</span>

          <span className='mx-6'>✦ HTML</span>
          <span className='mx-6'>✦ CSS</span>
          <span className='mx-6'>✦ Tailwind</span>
          <span className='mx-6'>✦ JavaScript</span>
          <span className='mx-6'>✦ React</span>
          <span className='mx-6'>✦ Node.js</span>
        </div>
      </div>
      <div className='px-10 mt-16 grid grid-cols-2 gap-5 items-center'>

  {/* LEFT: text */}
  <div className='fade-in'>
    <h2 className='text-6xl font-bold px-20 text-amber-50'>
      About <br/>
      <span className='text-fuchsia-400'>Me</span>
    </h2>
  </div>
    {/* RIGHT: about me text */}
    <div className='fade-in max-w-xl'>
      <p className='text-amber-50/80 leading-8'>
        <span className='text-4xl text-fuchsia-500 font-bold'>BS Information Technology</span><br/>
         student and an aspiring
        Full Stack Developer. I enjoy turning ideas into clean, modern and
        user-friendly web applications.
      </p>

      <p className='text-amber-50/70 leading-8 mt-4'>
        I work with HTML, CSS, Tailwind CSS, JavaScript and React on the frontend,
        and I am building my backend skills with Node.js, Express and MongoDB.
        I love learning new technologies and improving my skills with every project I build.
      </p>

      <a
        href='#contact'
        className='inline-block mt-6 bg-fuchsia-900 text-blue-50 border-2 px-6 py-3 rounded-full transition duration-300 hover:scale-110 hover:bg-fuchsia-700'
      >
        Let’s Talk
      </a>
    </div>
   </div>
</section>
  )
}

export default About
  
