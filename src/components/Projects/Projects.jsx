import React from 'react'
import {FaGithub} from "react-icons/fa"
import {Link } from 'react-router-dom'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import "./projects.css"
import dataProject from "./dataProject.js"

const projects = () => {
  return (


    <section id='project'>
        <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <Swiper className="container project-container"
            breakpoints={{
                1024: {
                width: 1024,
                slidesPerView: 3,
              },
              350: {
                width: 350,
                slidesPerView: 1,
              },
            }}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            navigation
            >
        {
            dataProject.map(({id, image,title,github,demo}) => {
            return(
              <SwiperSlide key={id} className='project-item'>
          <div className="project-item-img">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='project-item-cta'>
            <Link to ={github} className='btn' target='_blank'><FaGithub/> Github</Link>
            <Link to ={demo} className='btn btn-primary' target='_blank'> Live Demo</Link>
          </div>
          </SwiperSlide>
        
            )
          })
        }
        
      </Swiper>

    </section>
  )
}

export default projects