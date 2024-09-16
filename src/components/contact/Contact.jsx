import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "../contact/contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k6477dd', 'template_htvinuq', form.current, {
        publicKey: 'cz3VDgLYZ8BBIG86i',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <section id='contact' className='h-[100vh]'>
      <div className='text-center mb-16 mt-0'>
        <h5 className='text-colorLight'>Get in Touch</h5>
        <h2 className='text-primary text-3xl font-medium'>Contact Me</h2>
      </div>
      <div className="container contact_container grid grid-cols-2">
        <div className="contact_options grid grid-cols-1 w-[70%] my-6">
          <article className="contact_option my-3 bg-backroundVariant p-5 text-center rounded-3xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent ">
          <MdOutlineEmail  className='text-center m-auto text-2xl mb-3'/>
          <h4>Email</h4>
          <h5 className='text-colorLight'>vinayreddykoukuntla@gmail.com</h5>
          <a href="mailto:vinayreddykoukuntla@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option my-3 bg-backroundVariant p-5 text-center rounded-3xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent ">
          <FaLinkedin className='text-center m-auto text-2xl mb-3'/>
          <h4>Linkedin</h4>
          <h5 className='text-colorLight'>Koukuntla Vinay Reddy</h5>
          <a href="https://www.linkedin.com/in/koukuntla-vinay-reddy-b606871b0/" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option my-3 bg-backroundVariant p-5 text-center rounded-3xl border-[1px] border-solid border-transparent transition-transitionProp hover:border-primaryVariant hover:bg-transparent ">
          <FaWhatsapp className='text-center m-auto text-2xl mb-3'/>
          <h4>WhatsApp</h4>
          <h5 className='text-colorLight'>+91 9398055892</h5>
          <a href="https://api.whatsapp.com/send?phone=9398055892" target='_blank'>Send a Message</a>
          </article>
        </div >
        <form ref={form} onSubmit={sendEmail} className='w-4/5 my-10 flex flex-col gap-5'>
        <input type="text" name='name' placeholder='Enter Your Name' required className='p-4 text-colorWhite'/>
        <input type="email" name="email" placeholder='Your Email' required className='p-4 text-colorWhite'/>
        <textarea name="message" id="" rows="7" placeholder='Your Message' required className='p-4 text-colorWhite resize-none'></textarea>
        <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact