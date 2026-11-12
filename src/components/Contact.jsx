import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='py-20 px-6'>
  <div className='fade-up text-center'>
    <h1 className='text-blue-200 font-bold text-7xl'>
      STAY <br /> <span className='text-fuchsia-400'>CONNECTED</span>
    </h1>

    {/* Box: center me, top me space, andar space, sara text white */}
    <div className="mx-auto mt-16 w-full max-w-md rounded-2xl border border-fuchsia-400/40 bg-black/40 p-10 text-left text-white shadow-[0_0_40px_rgba(232,121,249,0.15)] backdrop-blur">
    <div className='border-blink absolute inset-0 rounded-2xl border-2 border-fuchsia-400'></div>
      <h3 className="text-center text-2xl font-bold text-white">Let's Build Together</h3>
      <p className="mt-2 mb-8 text-center text-sm text-white">
        If u have any idea contact me.<br/><span className='text-blue-300 text-2xl font-mono'> WE WILL CREATE TOGETHER.</span>
      </p>

      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4">
          <span className="text-2xl">✉️</span>
          <div className="flex flex-col text-left">
            <span className="text-xs text-white">Gmail</span>
            <a href="mailto:yourname@gmail.com" className="text-white hover:text-fuchsia-400">yourname@gmail.com</a>
          </div>
        </li>

        <li className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4">
          <span className="text-2xl">💼</span>
          <div className="flex flex-col text-left">
            <span className="text-xs text-white">LinkedIn</span>
            <a href="https://linkedin.com/in/yourname" className="text-white hover:text-fuchsia-400">linkedin.com/in/yourname</a>
          </div>
        </li>

        <li className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4">
          <span className="text-2xl">💻</span>
          <div className="flex flex-col text-left">
            <span className="text-xs text-white">GitHub</span>
            <a href="https://github.com/yourname" className="text-white hover:text-fuchsia-400">github.com/yourname</a>
          </div>
        </li>

        <li className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4">
          <span className="text-2xl">📞</span>
          <div className="flex flex-col text-left">
            <span className="text-xs text-white">Phone</span>
            <a href="tel:+923001234567" className="text-white hover:text-fuchsia-400">+92 300 1234567</a>
          </div>
        </li>

        <li className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4">
          <span className="text-2xl">📍</span>
          <div className="flex flex-col text-left">
            <span className="text-xs text-white">Location</span>
            <span className="text-white">Gujranwala, Punjab, Pakistan</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
  )
}

export default Contact
