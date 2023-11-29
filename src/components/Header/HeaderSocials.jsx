import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {Link } from 'react-router-dom'
const HeaderSocials = () => {
  return (
    <div className='socials-head'>
        <Link to ='https://www.linkedin.com/in/arhamakhtarkhan/' target='_blank'><BsLinkedin/></Link>
        <Link to ='https://github.com/Arh02' target='_blank'><FaGithub/></Link>
    </div>
    
  )
}

export default HeaderSocials