import React,{useState}from 'react'
import './MobileNav.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FcAbout, FcBiotech, FcReadingEbook, FcPortraitMode, FcContacts } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const MobileNav = () => {
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open)
    }
    const handleMenuClick=()=>{
        setOpen(false)
    }
  return (
    <>
      <div className='mobile-nav'>
        <div className='mobile-nav-header'>
 
<RxHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen}/>
<span className='mobile-nav-title'>Ayush Rai</span>
        </div>
        {open?(  <div className='mobile-nav-menu'>
        <div className="nav-items">
            <Fade left><div className="nav-item">
              <Link to="home" smooth={true} duration={500} className='nav-link' onClick={handleMenuClick}>
                <IoHome /> Home
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="about" smooth={true} duration={500} className='nav-link' onClick={handleMenuClick}>
                <FcAbout /> About
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="techstack" smooth={true} duration={500} className='nav-link' onClick={handleMenuClick}>
                <FcBiotech /> Tech Stack
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="education" smooth={true} duration={500} className='nav-link' onClick={handleMenuClick}>
                <FcReadingEbook /> Education
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="projects" smooth={true} duration={500} className='nav-link' onClick={handleMenuClick}>
                <AiFillProject /> Projects
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="testimonial" smooth={true} duration={500} className='nav-link' onClick={handleMenuClick}>
                <FcPortraitMode /> Testimonial
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="contact" smooth={true} duration={500} className='nav-link' onClick={handleMenuClick}>
                <FcContacts /> Contact
              </Link>
            </div></Fade>
          </div>
        </div>):""}
      
      </div>
    </>
  )
}

export default MobileNav


