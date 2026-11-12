import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='py-20 px-10'>
      <div className='grid grid-cols-2 gap-12 items-center'>

        {/* LEFT: heading + skills */}
        <div>
          <h2 className='scroll-fade-up text-6xl font-bold text-amber-50'>
            My <span className='text-fuchsia-400'>Skills</span>
          </h2>

          <div className='mt-10 space-y-6'>

            <div className='scroll-fade-up group'>
              <div className='flex justify-between text-amber-50 mb-2 transition duration-300 group-hover:text-fuchsia-300'>
                <span className='font-medium'>React</span>
                <span>80%</span>
              </div>
              <div className='h-3 rounded-full bg-white/10 overflow-hidden'>
                <div className='bar-grow h-full w-[80%] rounded-full bg-linear-to-r from-fuchsia-900 to-fuchsia-400 transition duration-300 group-hover:brightness-125'></div>
              </div>
            </div>

            <div className='scroll-fade-up group'>
              <div className='flex justify-between text-amber-50 mb-2 transition duration-300 group-hover:text-fuchsia-300'>
                <span className='font-medium'>Node.js</span>
                <span>70%</span>
              </div>
              <div className='h-3 rounded-full bg-white/10 overflow-hidden'>
                <div className='bar-grow h-full w-[70%] rounded-full bg-linear-to-r from-fuchsia-900 to-fuchsia-400 transition duration-300 group-hover:brightness-125'></div>
              </div>
            </div>

            <div className='scroll-fade-up group'>
              <div className='flex justify-between text-amber-50 mb-2 transition duration-300 group-hover:text-fuchsia-300'>
                <span className='font-medium'>Express.js</span>
                <span>70%</span>
              </div>
              <div className='h-3 rounded-full bg-white/10 overflow-hidden'>
                <div className='bar-grow h-full w-[70%] rounded-full bg-linear-to-r from-fuchsia-900 to-fuchsia-400 transition duration-300 group-hover:brightness-125'></div>
              </div>
            </div>

            <div className='scroll-fade-up group'>
              <div className='flex justify-between text-amber-50 mb-2 transition duration-300 group-hover:text-fuchsia-300'>
                <span className='font-medium'>Backend (REST APIs)</span>
                <span>70%</span>
              </div>
              <div className='h-3 rounded-full bg-white/10 overflow-hidden'>
                <div className='bar-grow h-full w-[70%] rounded-full bg-linear-to-r from-fuchsia-900 to-fuchsia-400 transition duration-300 group-hover:brightness-125'></div>
              </div>
            </div>

            <div className='scroll-fade-up group'>
              <div className='flex justify-between text-amber-50 mb-2 transition duration-300 group-hover:text-fuchsia-300'>
                <span className='font-medium'>MongoDB</span>
                <span>70%</span>
              </div>
              <div className='h-3 rounded-full bg-white/10 overflow-hidden'>
                <div className='bar-grow h-full w-[70%] rounded-full bg-linear-to-r from-fuchsia-900 to-fuchsia-400 transition duration-300 group-hover:brightness-125'></div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT: chhota card */}
        <div className='pop-up rounded-3xl border border-white/10 bg-white/5 p-8 text-center  hover:border-fuchsia-400'>
        <div className='border-blink absolute inset-0 rounded-3xl border-2 border-fuchsia-400'></div>
          <p className='text-5xl'>💻</p>
          <h3 className='text-2xl font-bold text-amber-50 mt-4'>Full Stack Developer</h3>
          <p className='text-amber-50/60 mt-2'>Frontend, Backend, MongoDB full web application.</p>
          <div className='flex flex-wrap justify-center gap-2 mt-6'>
            <span className='px-4 py-1 rounded-full bg-fuchsia-900/60 text-fuchsia-200 text-sm'>React</span>
            <span className='px-4 py-1 rounded-full bg-fuchsia-900/60 text-fuchsia-200 text-sm'>Node.js</span>
            <span className='px-4 py-1 rounded-full bg-fuchsia-900/60 text-fuchsia-200 text-sm'>Express</span>
            <span className='px-4 py-1 rounded-full bg-fuchsia-900/60 text-fuchsia-200 text-sm'>MongoDB</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills