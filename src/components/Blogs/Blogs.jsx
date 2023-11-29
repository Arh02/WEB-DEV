import React from 'react'
import "./blogs.css"
import dataBlogs from "./dataBlogs.js"
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const blogs = () => {
  return (
    <section id='blogs'>
      <h5>Blogs about various topics</h5>
        <h2>Blogs</h2>
        
          <Swiper className="container container-blogs"
            breakpoints={{
              1024: {
              width: 1024,
              slidesPerView: 2,
            },
            350: {
              width: 350,
              slidesPerView: 1,
            },
          }}
            modules={[ Navigation]}
            spaceBetween={40}
            slidesPerView={2}
            navigation
            
            >
            
            {
              dataBlogs.map(({thumbnail, title, content,Publish_date},index) =>{
              return(
                <SwiperSlide key={index} className='blog'>
                  <div className="blog-thumbnail">
                    <img src={thumbnail} alt=''/>
                   </div>
                   <h5>{title}</h5>
                   <small className='blog-content'>{content}</small>
                   <h5 className='P-date'>{Publish_date}</h5>
                </SwiperSlide>
              )
              })
            }
        
      </Swiper>
    </section>

  )
}

export default blogs