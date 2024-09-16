import React from 'react'
import { SiTicktick } from "react-icons/si";
import '../skills/skills.css'
const Skills = () => {
  return (
    <section id='skills'>
      <div className="skills_heading text-center mb-16 mt-0">
        <h5 className='text-colorLight'>What Skills I Have</h5>
        <h2 className='text-primary text-3xl font-medium'>My Skills</h2>
      </div>
      <div className="container skills_container grid grid-cols-2 gap-4">
        <div className='bg-backroundVariant rounded-3xl hover:bg-transparent hover:border-primary hover:border-[1px] hover:border-solid transition-transitionProp'>
      <h5 className='text-center text-primary text-2xl mt-6'>Frontend Development</h5>
        <div className='frontend_skills  p-4 pl-14'>
          
          <div className=" grid grid-cols-2">

            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> HTML</div>
              <h5 className='ml-6'>Experienced</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> CSS</div>
              <h5 className='ml-6'>Experienced</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> React Js</div>
              <h5 className='ml-6'>Experienced</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> Taiwind CSS</div>
              <h5 className='ml-6'>Experienced</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> Java Script</div>
              <h5 className='ml-6'>Intermediate</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> Next Js</div>
              <h5 className='ml-6'>Intermediate</h5>
            </div>
          </div>
        </div>
        </div>
        <div className='bg-backroundVariant rounded-3xl hover:bg-transparent hover:border-primary hover:border-[1px] hover:border-solid transition-transitionProp'>
      <h5 className='text-center text-primary text-2xl mt-6'>Backend Development</h5>
        <div className='backend_skills  p-4 pl-14'>
          
          <div className=" grid grid-cols-2">

            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> Node Js</div>
              <h5 className='ml-6'>Intermediate</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> Express Js</div>
              <h5 className='ml-6'>Intermediate</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> C++</div>
              <h5 className='ml-6'>Experienced</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> Java</div>
              <h5 className='ml-6'>Intermediate</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> Python</div>
              <h5 className='ml-6'>Intermediate</h5>
            </div>
            <div className='program'>
              <div className=" flex items-center gap-2">
                <SiTicktick className='text-primary'/> C</div>
              <h5 className='ml-6'>Experienced</h5>
            </div>
          </div>
        </div>
        </div>

        
      </div>
    </section>
  )
}

export default Skills