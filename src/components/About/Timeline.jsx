import React from 'react'
import {HiAcademicCap} from "react-icons/hi" 
import {IoIosToday} from 'react-icons/io'
import timelineElements from "./timelineElements.js"
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const Timeline = () => {
    let schoolIconStyles = {background: "black"}
    let onlineIconStyles = {background: "grey"}
    return (
    <div> 
        <h2 className='title'>Timeline</h2>
        
    <VerticalTimeline>
    {
        timelineElements.map((element) => {
            let isSchoolIcon = element.icon === "school";
            
            return(

                <VerticalTimelineElement 
                key={element.key}
                date={element.date}
                dateClassName='date'
                iconStyle={isSchoolIcon ? schoolIconStyles : onlineIconStyles}
                icon={isSchoolIcon ? <HiAcademicCap/> : <IoIosToday/>}
                >
                <h3 className='vertical-timeline-element-title'>
                    {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                     {element.location}
                </h5>
              <p id="description">
                {element.description}</p>

                <h5>{element.buttonText}</h5> 
              
                   
                </VerticalTimelineElement>
            )
        })
    }
    </VerticalTimeline>
   </div> 
  )
}



export default Timeline