import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {FaMicroblog} from "react-icons/fa"
import {BiMessageDetail} from "react-icons/bi"
import {RiPagesLine} from "react-icons/ri"
import {AiOutlineProject} from "react-icons/ai"
import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><AiOutlineHome /><h5>Home</h5></a>
      <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""}><AiOutlineProject /><h5>Projects</h5></a>
      <a href="#blogs" onClick={() => setActiveNav("#blogs")} className={activeNav === "#blogs" ? "active" : ""}><FaMicroblog /><h5>Blogs</h5></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /><h5>About</h5></a>
      <a href="#cv" onClick={() => setActiveNav("#cv")} className={activeNav === "#cv" ? "active" : ""}><RiPagesLine  /><h5>CV</h5></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageDetail /><h5>Contact</h5></a>
    </nav>
  )
}

export default Nav