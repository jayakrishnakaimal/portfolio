import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              Hello! I'm Jayakrishna Kaimal, a passionate Full Stack Developer
              who loves turning ideas into beautiful and functional web applications.
            </p>
            <p>
              I specialize in building modern web experiences using React, TypeScript,
              and Node.js. I care deeply about clean code, performance, and accessibility.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open source, or enjoying a good book.
            </p>
            <div className="about__details">
              <div className="about__detail-item">
                <span className="about__detail-label">Location</span>
                <span>India</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Email</span>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Availability</span>
                <span className="about__badge">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
