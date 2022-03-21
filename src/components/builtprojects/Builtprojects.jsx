import React from 'react';
import Carousel from "react-elastic-carousel";
import deepforspeed from "../../images/deepforspeed.png"
import evolvingsnakes from "../../images/evolvingsnake.png"
import deeptitanic from "../../images/deeptitanic.png"
import fehimornek from "../../images/fehimornek.png"
import covid19app from "../../images/covid19app.png"
import "./Builtprojects.css";

const Builtprojects = () => {
  return (
    <section id = "builtprojects">
        <h2 className='title'>Projects</h2>
        <Carousel>
            <div className='item_container'>
              <a href='https://github.com/edilgin/DeepForSpeed' target="_blank" className='links'>
                <img src={deepforspeed} className="slide_image"></img>
              <h1>DeepForSpeed</h1>
              <p>I built a Self-driving car using a CNN algorithm inside Need For Speed</p>
              <p>Nvidia's research paper on self driving cars inspired me on this project</p>
              <p>Project has 150+ likes on github</p>
              <br></br>
              </a>
            </div>
            <div className='item_container'>
              <a href='https://github.com/edilgin/EvolvingSnakes' target="_blank" className='links'>
                <img src={evolvingsnakes} className="slide_image"></img>
              <h1>EvolvingSnakes</h1>
              <p>I built neural network swarms and optimised them with genetic algorithms.</p>
              <p>I learned how to train Neural Networks using only genetic algortihms</p>
              <br></br>
              </a>
            </div>
            <div className='item_container'>
              <a href='https://github.com/edilgin/deep-titanic' target="_blank" className='links'>
                <img src={deeptitanic} className="slide_image"></img>
              <h1>DeepTitanic</h1>
              <p>I built an entire neural network from scratch and used it to classify titanic dataset</p>
              <p>Adam optimizer, RMSprop, Xavier Initialization, Backpropagation </p>
              <p>and many more core concepts are implemented from scratch</p>
              <br></br>
              </a>
            </div >
            <div className='item_container'>
              <a href='https://github.com/edilgin/DeepForSpeed' target="_blank" className='links'>
                <img src={fehimornek} className="slide_image"></img>
              <h1>This Website :)</h1>
              <p>I wanted to build my website because it is such a common need these days</p>
              <p>I learned responsive desing, HTML, CSS, JS and react while building it</p>
              <br></br>
              </a>
            </div>
            <div className='item_container'>
              <a href='https://github.com/edilgin/deep-titanic' target="_blank" className='links'>
                <img src={covid19app} className="slide_image"></img>
              <h1>Covid19App</h1>
              <p>I built this app during lockdowns and wanted to track covid 19 cases</p>
              <p>I used API's to get the data from and then used matplotlib to plot them</p>
              <br></br>
              </a>
            </div>
        </Carousel>
    </section>
  )
}

export default Builtprojects