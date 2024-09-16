import React from 'react'
import resume from '../../assets/resume.pdf'
const ActionLinks = () => {
  return (
    <div className="actionlinks space-x-4">
      <a className='btn max-sm:hidden' download={resume} href={resume}>Download Resume</a>
      <a className='btn sm:hidden' download={resume} href={resume}>Resume</a>
      <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default ActionLinks