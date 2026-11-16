import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Jayakrishna Kaimal</h1>
        <h2 className="hero__role">Full Stack Developer</h2>
        <p className="hero__tagline">
          I build clean, fast, and accessible web experiences.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View My Work</a>
          <a href="#contact" className="btn btn--outline">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
