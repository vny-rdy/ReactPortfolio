import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
const Nav = () => {
  const[activeNave,setActiveNave]=useState('#') 
  return (

      <nav className='flex gap-5 bg-[rgba(0,0,0,0.3)] w-max p-2 mt-2 rounded-full m-auto z-10 fixed top-[90%] self-center ml-[10%] transition sm:ml-[28%]
      md:ml-[39%] fill-transparent'>
<a 
  onClick={() => setActiveNave('#')} 
  className={`p-2 ${activeNave === '#' ? 'active' : 'bg-background rounded-full '}`} 
  href="#"
>
  <AiOutlineHome />
</a>
      <a
       onClick={() => setActiveNave('#about')} 
       className={`p-2 ${activeNave ==='#about'?'active': 'bg-background rounded-full'}`} href="#about"><BiBook /></a>
      <a onClick={() => setActiveNave('#skills')} 
      className={`p-2 ${activeNave ==='#skills'?'active': 'bg-background rounded-full'}`} href="#skills"><AiOutlineUser /></a>
      <a onClick={() => setActiveNave('#portfolio')} 
      className={`p-2 ${activeNave ==='#portfolio'?'active':'bg-background rounded-full'}`} href="#portfolio"><GrProjects /></a>
      <a onClick={() => setActiveNave('#contact')} 
      className={`p-2 ${activeNave ==='#contact'?'active':'bg-background rounded-full'}`} href="#contact"><MdOutlineMessage /></a>
      </nav>

  )
}

export default Nav