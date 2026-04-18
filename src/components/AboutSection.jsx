import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container reveal">
        <div className="section-head">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">Categorized skills for a quick overview of my tech stack.</p>
        </div>
        
        <div className="skills-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Frontend */}
          <div className="skill-category glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <i className="fa-solid fa-laptop-code" style={{ color: 'var(--accent-primary)' }}></i> Frontend
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML5 & CSS3</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">UI/UX Design</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <i className="fa-solid fa-server" style={{ color: 'var(--accent-primary)' }}></i> Backend
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">Python (Django)</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <i className="fa-solid fa-screwdriver-wrench" style={{ color: 'var(--accent-primary)' }}></i> Tools & Others
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Figma & Canva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
