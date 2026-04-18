import React from 'react';
import { BookOpen, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Ganpat University, Mehsana, Gujarat",
      year: "2023 - 2026"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Ganpat University, Mehsana, Gujarat",
      year: "2020 - 2023"
    },
    {
      degree: "10th Grade",
      institution: "Ratnamani School, Bechraji",
      year: "2020"
    }
  ];

  const certifications = [
    {
      title: "Full Stack Development Training",
      issuer: "The Special Character"
    },
    {
      title: "Cyber Security and Ethical Hacking",
      issuer: "Ganpat University"
    }
  ];

  return (
    <section id="education" className="section container">
      <h2 className="heading-secondary">
        <span className="heading-primary" style={{ fontSize: '2.5rem' }}>Background</span>
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Education Column */}
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <BookOpen size={28} color="var(--accent-secondary)" />
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((item, index) => (
              <div key={index} style={{ borderLeft: '2px solid var(--accent-color-glow)', paddingLeft: '1.5rem', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', 
                  borderRadius: '50%', background: 'var(--accent-secondary)' 
                }}></div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{item.degree}</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{item.institution}</p>
                <span style={{ 
                  display: 'inline-block', fontSize: '0.85rem', color: 'var(--accent-secondary)', 
                  background: 'rgba(59, 130, 246, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 500 
                }}>{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <Award size={28} color="var(--accent-secondary)" />
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>Certifications</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {certifications.map((item, index) => (
              <div key={index} style={{ borderBottom: index !== certifications.length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: index !== certifications.length - 1 ? '1.5rem' : '0' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-secondary)' }}></span>
                  {item.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
