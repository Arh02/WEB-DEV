import React from 'react'
import "./header.css"
import me from "../../assests/myPic.jpg"
import HeaderSocials from "./HeaderSocials.jsx"
import DarkMode from "../DarkMode/DarkMode"
import Fade  from 'react-reveal/Fade'

const header = () => {
  
  return (
    <header id='home'>
      
      <div className="container header_container">
      <Fade left>
      <DarkMode/> 
      <h5>Hello! I'm,</h5>
      <h1>Arham Akhtar Khan</h1>
      
      <h5 className="text-light">Life Long learner</h5>
      </Fade>
      <div className='btn-top'>
      <a href='#project' className='btn btn-primary'>View my Projects</a>
      <a href="#blogs" className='btn'>Read my Blogs</a>
      </div>
      <h5 className="text-light scroll-down">Scroll Down</h5>
      <HeaderSocials/>
      <div className="me">
        <img src={me} alt="me" />
      </div>
      </div>
    </header>
  )
}

export default header