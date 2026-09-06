import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Projects'
import Learning from './components/Learning'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
