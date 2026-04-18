import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '2rem 0',
      textAlign: 'center',
      marginTop: 'auto',
      background: 'rgba(13, 15, 20, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Mit Suthar. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Designed & Built with React, Vite & Vanilla CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
