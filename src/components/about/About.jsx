import React from 'react'
import "./About.css"
import mewithcat from "../../images/mewithcat2.jpg"
import {DiPython} from "react-icons/di"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BiCodeAlt} from "react-icons/bi"

const About = () => {
  return (
    
    <section id = "about">
      <div className="container about_container">
        <div className='about_me'>
          <div >
            <img id="me" src={mewithcat} className='about_me_image' xalt='me with a cat'></img>
          </div>
        </div>

      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <DiPython className='about_icon'></DiPython>
            <h3>AI</h3>
            <h5>Python</h5>
            <h5>Numpy</h5>
            <h5>OpenCV</h5>
            <h5>Pytorch</h5>
            <h5>Matplotlib</h5>
            
          </article>

          <article className="about_card">
            <AiOutlineFundProjectionScreen className="about_icon"></AiOutlineFundProjectionScreen>
            <h3>Projects</h3>
            <h5>DeepForSpeed</h5>
            <h5>EvolvingSnakes</h5>
            <h5>DeepTitanic</h5>
            <h5>Covid19App</h5>
            <h5>TPRS</h5>
          </article>

          <article className="about_card">
            <BiCodeAlt className='about_icon'></BiCodeAlt>
            <h3>Coding</h3>
            <h5>C, C++</h5>
            <h5>SQL</h5>
            <h5>WPF</h5>
            <h5>HTML, CSS, JS and React</h5>
          </article>
        </div>
        <br></br>
        <h2>Who am I?</h2>
          <p> Hello i'm Fehim Örnek and currently I am majoring in computer science. I've always been a person that liked learning even
            the most unrelated things. I like literally everything: philosophy, plants, sky, algorithms, maths (although i can't claim that
            i know much about them LoL). Other than these I've been using python for 3+ Years now and i build most of my products using
            it and its modules. So if you want to work with a diverse person with good communication skills just click the button below:
          </p>
        <a href='#contact' className='btn'>Send me a message</a>
      </div>
      </div>

    </section>

  )
}

export default About