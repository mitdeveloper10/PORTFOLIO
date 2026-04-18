import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      background: isScrolled ? 'rgba(15, 17, 21, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-primary)' }}>
          Portfolio<span style={{ color: 'var(--accent-secondary)' }}>.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li>
            <a href="/Mit_Suthar_CV.pdf" download="Mit_Suthar_CV.pdf" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Download my CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle - CSS would handle hiding/showing typically, but we do basic inline here */}
        <style dangerouslySetInnerHTML={{__html: `
          .nav-link { font-weight: 500; transition: color 0.3s ease; }
          .nav-link:hover { color: var(--accent-secondary); }
          .mobile-menu-btn { display: none; background: transparent; border: none; color: white; cursor: pointer; }
          @media (max-width: 768px) {
            .nav-links { display: ${menuOpen ? 'flex' : 'none'} !important; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%; background: var(--bg-color-light); padding: 2rem; border-bottom: 1px solid var(--border-color); }
            .mobile-menu-btn { display: block; }
          }
        `}} />

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
