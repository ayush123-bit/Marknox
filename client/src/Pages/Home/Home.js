import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assests/docs/ay.pdf';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container home-content'>
          <Fade right>
            <h2>Hi, I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'MERN Stack Developer',
                    'Software Developer',
                    'Machine Learning Developer',
                    'Android App Developer'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className='home-buttons'>
              <a href="mailto:ayushrai803@gmail.com" className='btn btn-hire'>
                Hire Me
              </a>
              <a className='btn btn-cv' href={Resume} download="Ayush_Rai.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
