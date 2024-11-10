import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='row'>
          <Fade left>
            <div className='col-md-6 col-lg-6 col-xs-12 about-img'>
              <img alt='profile_pic' src='images/Ayushraib.jpeg' />
            </div>
          </Fade>
          <Fade right>
            <div className='col-md-6 about-content'>
              <h1>About Me</h1>
              <p>
                I am an aspiring full-stack developer with a strong foundation in both web and Android development. Skilled in the MERN stack, I have worked on several impactful projects, including a grievance cell application, a resource management system, and e-commerce solutions like ShopEasy. My experience extends to Android apps, where I've developed a Notes app using a local database, a news app, and a chat application integrated with Firebase. Proficient in JavaScript, Java, and database management, I am also exploring machine learning, creating models for applications like diabetes prediction and spam detection. I am passionate about delivering user-friendly solutions and am eager to bring my technical expertise and creativity to dynamic development teams.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
