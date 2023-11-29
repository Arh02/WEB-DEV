import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import {IoLogoTwitter} from "react-icons/io"
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "react-share"


const Footer = () => {
  return (
    <footer>
    <a href="#home" className='footer-logo'>Arham Akhtar Khan</a>
    <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#blogs'>Blogs</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#cv'>CV</a></li>
        <li><a href='#contact'>Contacts</a></li>
    </ul>

    <div className='share'>Share via</div>

    <div className="footer-socials">
      <button className='share-icon'><FacebookShareButton  url={"https://arhamakhtarkhan.netlify.app/"} quote={'Check out the portfolio'} hashtag={"#React"} className='social-icon'><FaFacebookF/></FacebookShareButton></button>
      <button className='share-icon'><WhatsappShareButton url={"https://arhamakhtarkhan.netlify.app/"} quote={'Check out the portfolio'} hashtag={"#React"} className='social-icon'><BsWhatsapp/></WhatsappShareButton></button>
      <button className='share-icon'><TwitterShareButton url={"https://arhamakhtarkhan.netlify.app/"} quote={'Check out the portfolio'} hashtag={"#React"} className='social-icon'><IoLogoTwitter/></TwitterShareButton></button>

    </div>

    <div className="footer-copyright">
      <small> &copy; Arham Akhtar Khan. All rights reserved. </small>
    </div>

    </footer>
  )
}

export default Footer