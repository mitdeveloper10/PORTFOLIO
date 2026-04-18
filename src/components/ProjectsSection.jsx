import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Furniture Rental System",
      description: "A rental website for furniture booking, listing, and cart/checkout operations. Features comprehensive admin, user, and owner dashboards for managing products and orders.",
      tech: ["HTML", "CSS", "Python", "Django"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "SHRI NIVAS",
      description: "A complete rental management platform connecting tenants and landlords for easy property searches, bookings, and secure rental transactions.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      liveLink: "https://shrinivas.wuaze.com/",
      githubLink: "https://github.com/mitdeveloper10/shrinivas-rental-app",
    },
    {
      title: "EASY CHAT",
      description: "A real-time chat application allowing multiple users to connect to a server, featuring broadcasted messages and a responsive UI across all devices.",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      liveLink: "#",
      githubLink: "#",
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="heading-secondary">
        <span className="heading-primary" style={{ fontSize: '2.5rem' }}>Featured Projects</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-panel" style={{
            display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'transform 0.3s ease'
          }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Project Image Placeholder */}
            <div style={{
              height: '200px',
              width: '100%',
              background: `linear-gradient(${135 + index * 45}deg, var(--accent-color), var(--accent-secondary))`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 700,
              fontSize: '1.5rem',
              letterSpacing: '1px'
            }}>
              {project.title}
            </div>

            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    color: 'var(--accent-secondary)',
                    fontSize: '0.85rem',
                    fontWeight: 500
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.githubLink} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center' }} className="btn btn-outline">
                  <FaGithub size={18} /> Code
                </a>
                <a href={project.liveLink} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center' }} className="btn btn-primary">
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
