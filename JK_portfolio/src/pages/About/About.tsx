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
              I'm Jayakrishna Kaimal, a Design Manager with 10+ years across three
              companies and 40+ designers led. I work at the intersection of user
              empathy, business outcomes, and engineering feasibility.
            </p>
            <p>
              I build reusable thinking, not one-off solutions: systems before
              screens, and clarity over cleverness. Every decision I make should
              reduce friction for users or for the teams building the product.
            </p>
            <p>
              I influence through evidence. I equip teams with research, data, and
              narrative so design earns a seat at every table.
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
