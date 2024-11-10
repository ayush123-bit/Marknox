import React from 'react';
import './Menus.css';
import { IoHome } from "react-icons/io5";
import { FcAbout, FcBiotech, FcReadingEbook, FcPortraitMode, FcContacts } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navbar-profile-pic'>
            <Zoom>
              <img src='images/Ayushraia.jpeg' alt='profile pic' />
            </Zoom>
          </div>
          <div className="nav-items">
            <Fade left><div className="nav-item">
              <Link to="home" smooth={true} duration={500} className='nav-link'>
                <IoHome /> Home
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="about" smooth={true} duration={500} className='nav-link'>
                <FcAbout /> About
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="techstack" smooth={true} duration={500} className='nav-link'>
                <FcBiotech /> Tech Stack
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="education" smooth={true} duration={500} className='nav-link'>
                <FcReadingEbook /> Education
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="projects" smooth={true} duration={500} className='nav-link'>
                <AiFillProject /> Projects
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="testimonial" smooth={true} duration={500} className='nav-link'>
                <FcPortraitMode /> Testimonial
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="contact" smooth={true} duration={500} className='nav-link'>
                <FcContacts /> Contact
              </Link>
            </div></Fade>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <Fade left><div className="nav-item">
              <Link to="home" smooth={true} duration={500} className='nav-link'>
                <IoHome title='Home' />
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="about" smooth={true} duration={500} className='nav-link'>
                <FcAbout title='About' />
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="techstack" smooth={true} duration={500} className='nav-link'>
                <FcBiotech title='Tech Stack' />
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="education" smooth={true} duration={500} className='nav-link'>
                <FcReadingEbook title='Education' />
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="projects" smooth={true} duration={500} className='nav-link'>
                <AiFillProject title='Projects' />
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="testimonial" smooth={true} duration={500} className='nav-link'>
                <FcPortraitMode title='Testimonial' />
              </Link>
            </div></Fade>
            <Fade left><div className="nav-item">
              <Link to="contact" smooth={true} duration={500} className='nav-link'>
                <FcContacts title='Contact' />
              </Link>
            </div></Fade>
          </div>
        </>
      )}
    </>
  );
}

export default Menus;
