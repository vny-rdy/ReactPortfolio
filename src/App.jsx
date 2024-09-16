import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header/Header'
import About from './components/about/About'

import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'


import Skills from './components/skills/Skills'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='mx-0 my-auto' >
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
    
      <Contact />
      
    </div>
    </>
  )
}

export default App
