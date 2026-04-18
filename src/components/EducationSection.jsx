import React from 'react';

const EducationSection = () => {
  const education = [
    {
      year: "2023 — 2026",
      degree: "B.Tech in Computer Engineering",
      institution: "Ganpat University",
      achievements: [
        { label: "Specialization", value: "Focused on Full Stack Architecture, Scalable Systems, and Modern Web Tech." },
        { label: "Academic Focus", value: "Advanced Software Engineering, Cloud Computing, and Database Management." }
      ]
    },
    {
      year: "2020 — 2023",
      degree: "Diploma in Computer Engineering",
      institution: "Ganpat University",
      achievements: [
        { label: "Foundations", value: "Core programming fundamentals, data structures, and system security basics." }
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container reveal">
        <div className="section-head">
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">My educational background and academic focus.</p>
        </div>

        <div className="exp-list">
          {education.map((item, index) => (
            <div key={index} className="exp-item glass-panel">
              <div className="exp-left">
                <span className="exp-year">{item.year}</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="exp-right">
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{item.degree}</h3>
                <span className="exp-company">
                  <i className="fa-solid fa-building-columns" style={{ marginRight: '0.5rem' }}></i> {item.institution}
                </span>
                <ul className="exp-achievements">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx}>
                      <strong>{ach.label}:</strong> {ach.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
