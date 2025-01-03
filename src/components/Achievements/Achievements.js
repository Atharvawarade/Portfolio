import React from "react";

const Achievements = () => {
  return (
    <section id="achievements" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Achievements</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Smart India Hackathon 2024:</strong> Finalist in AI-powered Student Chatbot Development.
          </li>
          <li className="list-group-item">
            <strong>Full Stack Web Development:</strong> Created multiple scalable projects using MERN stack.
          </li>
          <li className="list-group-item">
            <strong>Open Source Contributions:</strong> Contributed to various repositories on GitHub.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
