import React from 'react';

const AboutSection = () => {
  const skills = [
    "HTML/CSS/JS", "PHP", "MySQL", "Java", "Python", 
    "React", "UI/UX Design", "Responsive Design", 
    "Git/GitHub", "Figma", "Canva", "Video Editing"
  ];

  return (
    <section id="about" className="section container">
      <h2 className="heading-secondary">
        <span className="heading-primary" style={{ fontSize: '2.5rem' }}>About Me</span>
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Get to know me!</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Hi, I'm Mit Suthar, a final-year B.Tech Computer Engineering student at Ganpat University. I am a passionate web developer with hands-on experience in building dynamic web applications. 
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Through my academic journey (Diploma and B.Tech) and personal projects, I have developed expertise in front-end and back-end technologies. I am a quick learner who loves tackling new challenges and finding efficient solutions. I am currently seeking a job opportunity where I can contribute my skills and grow professionally.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>My Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {skills.map((skill, index) => (
              <span key={index} style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: 'var(--accent-secondary)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
