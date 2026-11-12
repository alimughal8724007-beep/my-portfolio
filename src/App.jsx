import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='min-h-screen bg-[#101210] bg-[radial-gradient(circle,rgba(83,51,94,1)_43%,rgba(16,18,16,1)_73%)] bg-fixed'>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App