import React from 'react'  
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import Blogs from "./components/Blogs/Blogs"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import CV from "./components/CV/CV"
import Timeline from "./components/About/Timeline"
import Fade  from 'react-reveal/Fade'

const App = () => {
  return (
        <>
       
        <Header/> 
        <Nav/>  
        <Fade right>
        <Projects/></Fade>
        <Fade left>
        <Blogs/></Fade>
        <Fade right>
        <About/></Fade>
        <Timeline/>
        <Fade left>
        <CV/> </Fade>
        <Fade right>
        <Contact/></Fade>
        <Footer/>
       
        </>
       
  )
}

export default App
