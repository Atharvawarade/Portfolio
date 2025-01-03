import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="about_card">
            <div className="imgBx">
              <img
                src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="profile"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 details">
          <h2>ABOUT ME</h2>
          <p>
            Hello! I am <strong>Atharva</strong>, a passionate and dedicated
            developer with a knack for creating innovative and user-friendly
            solutions. With expertise in modern web development technologies, I
            aim to bring ideas to life with precision and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
