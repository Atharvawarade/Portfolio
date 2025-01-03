import React from "react";
import Lottie from "lottie-react";
import animationData from "../../images/P9CI0w8jnT.json";
import "./Hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Create, Innovate, Elevate</h1>
        <p>
          Discover a platform designed to empower your creativity with
          cutting-edge tools and aesthetic designs. Let's build the future
          together!
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-animation">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};



export default HeroSection;
