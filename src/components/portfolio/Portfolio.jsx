import React from 'react'
import IMG1 from '../../assets/project1.jpeg'
import IMG2 from '../../assets/project2.jpeg'
import IMG3 from '../../assets/project3.jpeg'
import IMG4 from '../../assets/project4.jpeg'
import IMG5 from '../../assets/project5.jpeg'
import IMG7 from '../../assets/project7.jpeg'
import IMG8 from '../../assets/project8.jpeg'
import IMG9 from '../../assets/project9.jpeg'
import IMG10 from '../../assets/project10.jpeg'
import IMG11 from '../../assets/project11.jpeg'
import IMG12 from '../../assets/project12.jpeg'
import '../portfolio/portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio' className='h-[200vh]'>
      <div className='m-auto text-center mb-16'>
        <h5 className='text-colorLight'>My Recent Work</h5>
        <h2 className='text-primary font-medium text-3xl'>Projects</h2>
      </div>
      <div className="container projects_cotainer grid grid-cols-3 gap-4 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:grid">
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG1} alt="project1" />
          </div>
          <h3 className='m-1'>Todo-List using ReactJS</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/TodoList.git" className="btn" target='_blank'>GitHub</a>
            </div>
        </article>
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG2} alt="project1" />
          </div>
          <h3 className='m-1'>Landing Page using HTML,CSS</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/Mobilicis-web-dev-assignment.git" className="btn" target='_blank'>GitHub</a>
            <a href="https://vny-rdy.github.io/Mobilicis-web-dev-assignment/" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG8} alt="project1" />
          </div>
          <h3 className='m-1'>Food Order Website-ReactJs</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/ReactFoodPage.git" className="btn" target='_blank'>GitHub</a>
           
            </div>
        </article>
        
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG5} alt="project1" />
          </div>
          <h3 className='m-1'>Netflix Clone Using HTML,CSS</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/NetflixCone.git" className="btn" target='_blank'>GitHub</a>
            <a href="https://vny-rdy.github.io/NetflixCone/" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG3} alt="project1" />
          </div>
          <h3 className='m-1'>Landing Page using HTML,CSS</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/Landing-Page.git" className="btn" target='_blank'>GitHub</a>
            <a href="https://vny-rdy.github.io/Landing-Page/" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG7} alt="project1" />
          </div>
          <h3 className='m-1'>X clone using Tailwind CSS</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/TwitterClone.git" className="btn" target='_blank'>GitHub</a>
            <a href="https://vny-rdy.github.io/TwitterClone/" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG4} alt="project1" />
          </div>
          <h3 className='m-1'>Weather Prediction</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/Weather-Prediction.git" className="btn" target='_blank'>GitHub</a>
            <a href="https://vny-rdy.github.io/Weather-Prediction/" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
        </article>
       
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG10} alt="project1" />
          </div>
          <h3 className='m-1'>Dice Game using ReactJs</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/React-DiceGame.git" className="btn" target='_blank'>GitHub</a>
         
            </div>
        </article>
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG9} alt="project1" />
          </div>
          <h3 className='m-1'>Contact Page using ReactJs</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/React-ContactPage.git" className="btn" target='_blank'>GitHub</a>
           
            </div>
        </article>
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG11} alt="project1" />
          </div>
          <h3 className='m-1'>Tic-Tac-Toe using ReactJs</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/React-Tic-Tac-Toe.git" className="btn" target='_blank'>GitHub</a>
            
            </div>
        </article>
        <article className='project_item bg-backroundVariant p-5 rounded-2xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent'>                     
          <div className="project_image">
            <img className='rounded-2xl overflow-hidden'src={IMG12} alt="project1" />
          </div>
          <h3 className='m-1'>Brand Page using ReactJs</h3>
          <div className='cta flex gap-4 mb-1'>
            <a href="https://github.com/vny-rdy/React-brandPage.git" className="btn" target='_blank'>GitHub</a>
            
            </div>
        </article>

      </div>
    </section>
    
  )
}

export default Portfolio