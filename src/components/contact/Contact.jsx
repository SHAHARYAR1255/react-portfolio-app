import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { contactConfig } from '../../data';

// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.coknfig()

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form, process.env.YOUR_PUBLIC_KEY);
    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form, process.env.YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }).catch((error) => {
        console.log(error.text);
      })
  };


  return (
    <section id="contact">
      <h5>Let's build Something</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' ></MdOutlineEmail>
            <h4>Email</h4>
            <h5>shaharyar.malik2000</h5>
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`} rel="noreferrer" target="_blank">Send an Email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Shaharyar Malik</h5>
            <a href={contactConfig.YOUR_MESSENGER} target="_blank" rel="noreferrer" >Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+923172039912</h5>
            <a href={`https://api.whatsapp.com/send?phone=${contactConfig.YOUR_PHONE}`} rel="noreferrer" target="_blank">Send a Message</a>
          </article>
        </div>
        <form action={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='emaiil' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact