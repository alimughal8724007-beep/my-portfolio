import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='py-20 px-6'>

      {/* Heading */}
      <div className='scroll-fade-up text-center'>
        <h2 className='text-5xl md:text-6xl font-bold text-amber-50'>
          My <span className='text-fuchsia-400'>Projects</span>
        </h2>
        <p className='text-amber-50/60 mt-3 text-sm'>
          A few things I've built while learning to ship real products
        </p>
      </div>

      {/* 4 Cards */}
      <div className='mt-16 flex flex-wrap justify-center gap-6'>

        {/* Card 1: pink-purple, left tilt */}
        <div className='scroll-fade-up'>
          <div className='w-64 -rotate-3 rounded-2xl border border-white/70 bg-linear-to-b from-fuchsia-600 to-purple-950 p-5'>
            <h3 className='text-xl font-bold font-serif text-white'>Buffer Project</h3>
            <img src='/buffer.png' alt='Buffer Project' className='h-44 w-full object-cover rounded-xl border border-white/20 mt-4' />
            <p className='text-white/70 text-sm mt-3'>Scheduling dashboard.</p>
          </div>
        </div>

        {/* Card 2: grey-purple, right tilt */}
        <div className='scroll-fade-up'>
          <div className='w-64 rotate-2 rounded-2xl border border-white/70 bg-linear-to-b from-violet-400/60 to-purple-950 p-5'>
            <h3 className='text-xl font-bold font-serif text-white'>Food Delivery</h3>
            <img src='/delivery.png' alt='Food Delivery' className='h-44 w-full object-cover rounded-xl border border-white/20 mt-4' />
            <p className='text-white/70 text-sm mt-3'>Food ordering website.</p>
          </div>
        </div>

        {/* Card 3: pink-purple, left tilt */}
        <div className='scroll-fade-up'>
          <div className='w-64 -rotate-3 rounded-2xl border border-white/70 bg-linear-to-b from-fuchsia-600 to-purple-950 p-5'>
            <h3 className='text-xl font-bold font-serif text-white'>Tiramisu Cafe</h3>
            <img src='/tiramisu.png' alt='Tiramisu Cafe' className='h-44 w-full object-cover rounded-xl border border-white/20 mt-4' />
            <p className='text-white/70 text-sm mt-3'>Dessert cafe website.</p>
          </div>
        </div>

        {/* Card 4: grey-purple, right tilt */}
        <div className='scroll-fade-up'>
          <div className='w-64 rotate-2 rounded-2xl border border-white/70 bg-linear-to-b from-violet-400/60 to-purple-950 p-5'>
            <h3 className='text-xl font-bold font-serif text-white'>MoodBrew Cafe</h3>
            <img src='/moodbrew.png' alt='MoodBrew Cafe' className='h-44 w-full object-cover rounded-xl border border-white/20 mt-4' />
            <p className='text-white/70 text-sm mt-3'>Coffee by your mood.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects