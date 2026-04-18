import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    { 
      title: "Full Stack Development", 
      issuer: "The Special Character", 
      link: "/fullstack_certificate.pdf",
      icon: "fa-solid fa-code"
    },
    { 
      title: "Cyber Security & Ethical Hacking", 
      issuer: "Ganpat University", 
      link: "/cybersecurity_certificate.pdf",
      icon: "fa-solid fa-shield-halved"
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container reveal">
        <div className="section-head">
          <h2 className="section-title">Professional Certifications</h2>
          <p className="section-subtitle">A collection of my academic and professional credentials.</p>
        </div>

        <div className="cert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          {certifications.map((cert, index) => (
            <a href={cert.link} target="_blank" rel="noreferrer" key={index} className="glass-panel" style={{ 
              padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', textDecoration: 'none', 
              transition: 'all 0.3s ease', cursor: 'pointer' 
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--bg-card)'; }}
            >
              <div style={{ 
                width: '60px', height: '60px', borderRadius: '15px', background: 'var(--gradient-main)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 
              }}>
                <i className={cert.icon} style={{ color: 'white' }}></i>
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>{cert.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginTop: '1rem', display: 'block', fontWeight: 600 }}>
                  View Certificate <i className="fa-solid fa-external-link" style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
