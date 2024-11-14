import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Tech, Works} from "./components"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <Tech/>
        <About/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
