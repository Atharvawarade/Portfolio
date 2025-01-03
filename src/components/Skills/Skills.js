import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-code-slash display-4 text-primary"></i>
            <h4 className="mt-2">Frontend Development</h4>
            <p>HTML, CSS, JavaScript, React, Bootstrap</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-server display-4 text-primary"></i>
            <h4 className="mt-2">Backend Development</h4>
            <p>Node.js, Express.js, MongoDB</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-gear display-4 text-primary"></i>
            <h4 className="mt-2">Tools</h4>
            <p>Git, Webpack, VS Code, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
