import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">To-Do List App</h5>
                <p className="card-text">Built with React and Bootstrap, deployed on Netlify.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="../../images/" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">Responsive and modern portfolio built with React and Bootstrap.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="project3.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Chatbot for DTE</h5>
                <p className="card-text">An AI chatbot for student query resolution using Dialogflow and Flask.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
