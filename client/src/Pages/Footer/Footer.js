import React from 'react';
import './Footer.css';
import { IoLogoGithub } from "react-icons/io5";
import { TfiTwitter } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>About Me</h5>
            <p>
            I am a motivated full-stack developer with experience in web and Android development, proficient in the MERN stack and Java. I have worked on impactful projects such as a grievance cell application and an e-commerce platform. Passionate about creating user-friendly solutions, I continuously seek opportunities to expand my skills in software development.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:ayushrai803@gmain.com">ayushrai803@gmain.com</a></li>
              <li>Phone: +91 8318542040</li>
              <li>Location: Varanasi, Uttar Pradesh, India</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Follow Me</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://x.com/AyushRa36652420" target="_blank" rel="noopener noreferrer" className="social-link"><TfiTwitter/></a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com/in/ayush-rai-7109202b6" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin/></a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/ayush123-bit" target="_blank" rel="noopener noreferrer" className="social-link"><IoLogoGithub/></a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-muted">&copy; {new Date().getFullYear()} Ayush Rai. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
