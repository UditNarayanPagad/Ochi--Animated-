import React from 'react'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=''>
      <Nav />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default App