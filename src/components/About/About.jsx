import React from 'react'
import "./about.css"
import ME from "../../assests/myPic.jpg"
import {FiAward} from "react-icons/fi"
import aboutData from "./aboutData"
import ButtonTimeline from '../About/ButtonTimeline'

const About = () => {
  return (
    <section id='about' className='about-section'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about-container">

      <div className="about-me">
        <div className="about-me-img">
          <img src={ME} alt="About" />
        </div>
      </div>
      <div   className="about-content">
      <div className="about-cards">
     {
        aboutData.map(({id, title, Description}) => {
          return(
            <>
           <article  key={id}  className='about-card'>
                <FiAward className='about-icon'/>
                <h5>{title}</h5>
                <h4>{Description}</h4>
           </article>
            
          </>
          )
        })}
        

     </div>
     <p>Hi! I am a passionate learner, focusing on cyber-security and front-end with experience in academic work.</p>
     
     {

      

     }
     
     <ButtonTimeline/>
     </div>
            
          
              
              </div>
        
    

    </section>
    
  )
}

export default About