import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {Link } from 'react-router-dom'
import {useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_15l049w', 'template_g4glth6', form.current, 'qlPrUfCaD04qxwNow')
    

    e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
      <div className="contact-options">
        <article className='contact-option'>
        <MdOutlineEmail className='contact-icon'/>
        <h4>Email</h4>
        <h5>arhamakhtar30@gmail.com</h5>
        <Link to="mailto:arhamakhtar30@gmail.com" target='_blank'>Send a message</Link>
        </article>

        <article className='contact-option'>
        <BsWhatsapp className='contact-icon'/>
        <h4>WhatsApp</h4>
        <h5>+968 99999999</h5>
        <Link to="https://api.whatsapp.com/send?phone=" target='_blank'>Send a message</Link>
        </article>

      </div>


      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact