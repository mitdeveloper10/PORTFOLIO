import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px' }}>
          <p style={{
            color: 'var(--accent-secondary)',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Welcome to my universe
          </p>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}>
            Hi, I'm <span style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-color))' }}>Mit Suthar</span>
            <br />
            <span style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', display: 'inline-block', marginTop: '0.5rem' }}>
              A{' '}
              <TypeAnimation
                sequence={[
                  'Computer Engineer',
                  2000,
                  'Software Developer',
                  2000,
                  'Creative Web Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}
              />
            </span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '600px'
          }}>
            Final-year Computer Engineering student with hands-on experience in developing dynamic web applications. A quick learner constantly seeking to craft beautiful, responsive websites.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="/Mit_Suthar_CV.pdf" download="Mit_Suthar_CV.pdf" className="btn btn-outline">
              Download my CV
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
            <a href="https://github.com/Mitdeveloper10" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/Mit-Suthar" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:mitsuthar11@gmail.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ea4335'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
