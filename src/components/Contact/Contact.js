import React, { useRef } from 'react';
import './contact.css';
import Facebook from "../../assets/facebook-icon.png";
import LinkedIn from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import Instagram from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phhgejh', 'template_j7ht75h', form.current, 'mzfUFYAu3ug2HCxLn')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('email sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <section id="contact">
    <h1 className='contactHeading'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form beow to discuss any work opportunities</span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
    <input type='text' className='name' placeholder='Your Name' name='from_name'/>
    <input type='email' className='email' placeholder='Your Email' name='from_email'/>
    <textarea rows="5" name='message' placeholder='Your message' className='msg'></textarea>
    <button type="submit" className='submit' value='send'>Submit</button>
    
    </form>
    <div className='links'>
        <img src={Facebook} className='contactImg' alt='Facebook'/>
        <img src={LinkedIn} className='contactImg' alt='LinkedIn'/>
        <img src={Instagram} className='contactImg' alt='Instagram'/>
        <img src={Youtube} className='contactImg' alt='Youtube'/>
    </div>
    </section>
    
  )
}

export default Contact;
