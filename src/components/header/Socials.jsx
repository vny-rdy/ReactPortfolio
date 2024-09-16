import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='header_socials absolute bottom-[5%] grid grid-cols-1 gap-8 mb-8'>
        <a className="cursor-pointer" href="https://www.linkedin.com/in/koukuntla-vinay-reddy-b606871b0/"><FaLinkedin/></a>
        <a className="cursor-pointer" href="https://github.com/vny-rdy"><FaGithub/></a>
        <a className="cursor-pointer" href="https://www.instagram.com/_vny_rdy_koukuntla?igsh=eHN5YmE5MWU5bWNx&utm_source=qr"><FaSquareInstagram/></a>
        <a className='h-8 w-[1px] bg-primary m-auto'></a>
    </div>
  )
}

export default Socials