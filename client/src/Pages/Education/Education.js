import React from 'react';
import './Education.css';
import Fade from 'react-reveal/Fade';

const Education = () => {
  return (
    <>
      <div className='container education'>
        <h1 className='col-12 mt-3 mb-1 text-center'>Education</h1>
        <hr />
        <p className='pb-3 text-center'>👉 Empowering Knowledge: My Academic Journey and Achievements</p>
        
        <div className="row">
          <Fade left>
            <div className="col-12 mb-4"> {/* Full-width card */}
              <div className="education-card h-100">
                <div className="card-body">
                  <h5 className="card-title">United College of Engineering and Research Prayagraj, Naini</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Bachelor of Technology (B.Tech) in Computer Science</h6>
                  <p className="card-text">2022 – 2026</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="col-12 mb-4"> {/* Full-width card */}
              <div className="education-card h-100">
                <div className="card-body">
                  <h5 className="card-title">St. Francis School Ramnagar, Varanasi</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Intermediate</h6>
                  <p className="card-text">Scored: <strong>91.2%</strong> - 2021</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="col-12 mb-4"> {/* Full-width card */}
              <div className="education-card h-100">
                <div className="card-body">
                  <h5 className="card-title">St. Francis School Ramnagar, Varanasi</h5>
                  <h6 className="card-subtitle mb-2 text-muted">High School</h6>
                  <p className="card-text">Scored: <strong>91.4%</strong> - 2019</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Education;
