import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Furniture Rental System",
      description: "A comprehensive rental marketplace for furniture booking and management. Featuring secure cart operations and role-based dashboards.",
      result: "Engineered a scalable E-commerce architecture with specialized Admin, User, and Owner control panels.",
      tech: [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Django", icon: "fa-solid fa-code" },
        { name: "CSS", icon: "fa-brands fa-css3-alt" }
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
    },
    {
      title: "SHRI NIVAS",
      description: "A complete rental management platform connecting tenants and landlords for easy property searches and secure bookings.",
      result: "Successfully deployed a multi-user rental ecosystem on a live hosting environment with real-time feedback.",
      tech: [
        { name: "JS", icon: "fa-brands fa-js" },
        { name: "MySQL", icon: "fa-solid fa-database" },
        { name: "PHP", icon: "fa-brands fa-php" }
      ],
      liveLink: "https://shrinivas.wuaze.com/",
      githubLink: "https://github.com/mitdeveloper10/shrinivas-rental-app",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
      title: "EASY CHAT",
      description: "A real-time communication platform allowing multiple users to connect to a central server for instant messaging.",
      result: "Developed a responsive chat engine optimized for high-concurrency and smooth data broadcasting.",
      tech: [
        { name: "PHP", icon: "fa-brands fa-php" },
        { name: "MySQL", icon: "fa-solid fa-database" },
        { name: "JS", icon: "fa-brands fa-js" }
      ],
      liveLink: "#",
      githubLink: "#",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container reveal">
        <div className="section-head">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A selection of projects that demonstrate my problem-solving capabilities.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-image-wrapper" style={{ background: project.gradient }}>
                <div style={{ color: 'white', fontSize: '2rem', fontWeight: 800 }}>{project.title}</div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tag">
                      <i className={t.icon}></i> {t.name}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.description}</p>
                <div className="project-contribution">
                  <strong>Key Result:</strong> {project.result}
                </div>
                <div className="project-actions">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    <i className="fa-solid fa-eye"></i> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    <i className="fa-brands fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
