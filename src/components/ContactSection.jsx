import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="section container reveal">
      <div className="cta-section glass-panel">
        <div className="section-head">
          <h2 className="section-title">Interested in Impact?</h2>
          <p className="section-subtitle">I'm currently looking for new opportunities to solve complex engineering problems.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Mit Suthar" 
                required 
                value={formData.name} 
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="mitsuthar11@gmail.com" 
                required 
                value={formData.email} 
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="Project Inquiry" 
              required 
              value={formData.subject} 
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Let's build something great together..." 
              required 
              value={formData.message} 
              onChange={handleChange}
              disabled={status === 'loading'}
            ></textarea>
          </div>
          
          {status === 'success' && (
            <div style={{ color: '#10b981', textAlign: 'center', fontWeight: '500' }}>
              Message sent successfully! I will get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div style={{ color: '#ef4444', textAlign: 'center', fontWeight: '500' }}>
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          <button type="submit" className="btn btn-primary form-submit" disabled={status === 'loading' || status === 'success'}>
            <span className="btn-text">{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>

        <div className="contact-socials">
          <p>Or find me on:</p>
          <div className="hero-btns" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <a href="mailto:mitsuthar11@gmail.com" className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-envelope"></i> Email
            </a>
            <a href="https://www.linkedin.com/in/mit-suthar10/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
