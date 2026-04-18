import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">
          <a href="#home" className="logo-text">MIT<span className="logo-dot"></span>SUTHAR</a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Impact</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact" className="btn btn-secondary btn-sm nav-cta">Let's Talk</a></li>
        </ul>

        {/* Basic Mobile Menu Placeholder - In a real app we'd add a toggle state */}
        <div className="mobile-menu-btn" style={{ display: 'none' }}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
