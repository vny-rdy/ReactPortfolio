import React from 'react'
import ActionLinks from './ActionLinks'
import me from '../../assets/me.jpg'
import Socials from '../../components/header/Socials.jsx'
const Header = () => {
  return (
    <header className='h-[105vh] pt-28 overflow-hidden max-sm:pt-9'>
      <div className="container header_container text-center h-[100%] relative">
        <h5>Hello, I'm</h5>
        <h1>Vinay Reddy Koukuntla</h1>
        <h5 className='text-colorLight mb-12'>Fullstack Developer</h5>
      <ActionLinks/>
      <Socials />
      <div className='me'>
        <img src={me} className='bg-primary rounded-t-full w-[35%] h-[100%] mx-[15%]  max-sm:w-[73%] mt-12 absolute md:mx-[32.5%] ' alt="me" />
      </div>
      
      <a href="#contact" className='scroll_down left-0 absolute right-[-90%] top-[85%] rotate-90 font-normal text-md max-sm:hidden'>Scroll Down</a>
      </div>
    
    </header>
    
  )
}
export default Header
