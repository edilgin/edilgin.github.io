import React from 'react';
import "./Contact.css";
import { useRef } from 'react';
import {MdEmail} from "react-icons/md";
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const send = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5yq8wst', 'template_x7zfzdc', form.current, "S76IoXbBzBu-ngaaY")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }

  return (
    <section id="contact">
      <h2>Contact Me!</h2>
      <div className='container'>
        <form ref={form}  onSubmit={send}>
          <MdEmail className='icon'/>
          <input type="text" name='name' placeholder='Your name' required></input>
          <input type="text" name="email" placeholder='Your email' required></input>
          <textarea type="text" name="message" placeholder="Your message" required rows="10" ></textarea>
          <button type='submit' className='btn'>Send Email</button>
        </form>
      </div>
    </section>
  )
}

export default Contact