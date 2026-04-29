import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Services/>
      <About/>
      <Projects/> 
      <Contact/>
      <Footer/>
      <Navbar/>
      
    </>
  )
}

export default App
