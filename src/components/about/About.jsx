import React from 'react'
import '../about/about.css'
import ME from '../../assets/avatar2.jpg'
import { LiaUniversitySolid } from "react-icons/lia";
const About = () => {
  return (
    <section id='about'>
      <div className='m-auto text-center mb-16'>
        <h5 className='text-colorLight'>Get To Know</h5>
        <h2 className='text-primary font-medium text-3xl'>About Me</h2>
      </div>

      <div className="container about_container grid grid-cols-2">
        <div className="about__me w-9/12 h-fit">
          <div className="about__me-image hover:-rotate-12">
            <img className='aspect-square rounded-md ' src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content w-full">
          <div className="about__cards w-full  gap-4">
            <article  className='bg-backroundVariant p-6 w-3/4  border-[1px] border-transparent border-solid rounded-md text-center transition-transitionProp hover:bg-transparent hover:border-[1px] hover:border-primaryVariant'>
            <LiaUniversitySolid className='text-center m-auto text-primary text-2xl mb-2 '/>
              <h2 className='pb-1'>Btech</h2>
              <h5 className='text-colorLight text-xs pb-2'>Vardhaman College of Engineering</h5>
              <h5 className='text-colorLight text-xs'>Computer Science of Engineering<br/>(Artificial Intelligence & Machine Learning)</h5>
            </article>

            {/* <article className='bg-backroundVariant p-6  border-[1px] border-transparent border-solid rounded-md text-center transition-transitionProp hover:bg-transparent hover:border-[1px] hover:border-primaryVariant'>
            <LiaUniversitySolid className='text-center m-auto text-primary text-2xl mb-3 '/>
              <h2>Education</h2>
              <h5 className='text-colorLight text-xs'>Btech</h5>
            </article>

            <article className='bg-backroundVariant p-6  border-[1px] border-transparent border-solid rounded-md text-center transition-transitionProp hover:bg-transparent hover:border-[1px] hover:border-primaryVariant'>
            <LiaUniversitySolid className='text-center m-auto text-primary text-2xl mb-3 '/>
              <h2>Education</h2>
              <h5 className='text-colorLight text-xs'>Btech</h5>
            </article> */}

          </div>
          <p className='my-6 mb-8 text-justify text-colorLight'>A motivated and organized Computer Science and Engineering graduate with strong communication, problem-solving, and leadership abilities. Passionate about exploring new opportunities in the field and committed to developing high-quality, efficient projects. Thrives on tackling challenges with creativity and precision.</p>
          <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About