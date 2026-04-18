import React from 'react';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

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
      issuer: "The Special Character",
      pdfLink: "/fullstack_certificate.pdf"
    },
    {
      title: "Cyber Security and Ethical Hacking",
      issuer: "Ganpat University",
      pdfLink: "/cybersecurity_certificate.pdf"
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
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {certifications.map((item, index) => (
              <a href={item.pdfLink} target="_blank" rel="noreferrer" key={index} className="glass-panel" style={{ 
                padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', background: 'rgba(15, 17, 21, 0.4)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-secondary)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-secondary)' }}></span>
                    {item.issuer}
                  </p>
                </div>
                <div style={{ color: 'var(--accent-secondary)', background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignContent: 'center' }}>
                  <ExternalLink size={18} />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
