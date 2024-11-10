import React from 'react';
import './Techstack.css';
import { TechstackList } from '../../utils/Techstacklist';
import Zoom from 'react-reveal/Zoom';

const Techstack = () => {
  return (
    <>
      <div className='container techstack'>
        <h1 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h1>   
        <hr/>
        <p className='pb-3 text-center'>👉 including programming languages, frameworks, databases, front-end and back-end tools, and APIs</p>
        <div className='row'>
          {TechstackList.map((tech) => (
            <div key={tech._id} className='col-md-3 mb-4'>
              <Zoom>
                <div className="card text-center">
                  <div className="card-body">
                    <tech.icon className="tech-icon mb-3" size={40} />
                    <h5 className="card-title">{tech.name}</h5>
                  </div>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
