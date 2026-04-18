import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1 className="main-title">
          I'm Mit Suthar, a <br />
          <span className="gradient-text dynamic-text">
            <TypeAnimation
              sequence={[
                'Computer Engineer',
                2000,
                'Software Developer',
                2000,
                'Web Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="hero-desc">
          Final-year Computer Engineering student with hands-on experience in developing dynamic web applications. 
          Practiced in building scalable solutions and crafting exceptional digital experiences.
        </p>
        <div className="hero-btns">
          <a href="/Mit_Suthar_CV.pdf" className="btn btn-secondary" target="_blank">
            <i className="fa-solid fa-file-pdf"></i> Check out my Resume
          </a>
          <a href="mailto:mitsuthar11@gmail.com" className="btn btn-outline" style={{ border: 'none' }}>
            <i className="fa-solid fa-envelope" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
