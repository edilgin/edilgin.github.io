import React from 'react';
import "./Header.css";
import Socials from './Socials';
import {BsChevronDoubleDown} from "react-icons/bs"

const Header = () => {
  return (
    <div>
      <div className='screen'>
        <ul className='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="context">
          <h2>Welcome</h2>
          <h1>It's <b>Fehim</b></h1>
          <h2 className>Your Friendly <b>Deep Learning</b> Engineer</h2>
          <Socials/>
          <a href='#about' className="scroll"><BsChevronDoubleDown/></a>
        </div>
      </div>
    </div>

  )
}

export default Header