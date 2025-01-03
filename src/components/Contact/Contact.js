import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;