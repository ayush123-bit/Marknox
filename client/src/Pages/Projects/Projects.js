import React, { useEffect, useState } from 'react';
import './Projects.css';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from the server
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolioback-81am.onrender.com/project');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className='container projects'>
      <h1 className='col-12 mt-3 mb-1 text-center'>Projects</h1>   
      <hr/>
      <p className='pb-3 text-center'>
        👉 A Collection of My Best Work: Real-World Solutions and Innovative Projects
      </p>
      
      {loading ? ( // Show loader if data is still loading
        <div className="text-center my-5">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className='row'>
          {projects.map((project) => (
            <div key={project._id} className='col-12 col-md-6 col-lg-4 mb-4'>
              <Fade right>
                <div className="card h-100">
                  <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.category}</p>
                    <p className="card-text"><small className="text-muted">Date: {new Date(project.date).toLocaleDateString()}</small></p>
                    <div className="d-flex justify-content-around mt-3">
                      {project.deployedLink && (
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">GitHub</a>
                      )}
                      {project.youtubeLink && (
                        <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-sm">YouTube</a>
                      )}
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
