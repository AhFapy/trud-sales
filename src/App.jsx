import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Tech, Works} from "./components"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CursorShadow from './CursorShadow'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        {/* <About/> */}
        <Tech/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
        </div>
                {/* Componente de sombra de cursor */}
                <CursorShadow />
      </div>
    </BrowserRouter>
  )
}

export default App
