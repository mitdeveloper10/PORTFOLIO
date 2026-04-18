import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-text">MIT<span className="logo-dot"></span>SUTHAR</span>
          </div>
          <p className="footer-tagline">Engineering efficient digital solutions with a focus on impact and scalability.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mit-suthar10/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Mitdeveloper10" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:mitsuthar11@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Technical Expertise</a></li>
            <li><a href="#projects">Recent Work</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p><i className="fa-solid fa-location-dot"></i> Gujarat, India</p>
          <p><i className="fa-solid fa-envelope"></i> mitsuthar11@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> +91-7096374806</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mit Suthar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
