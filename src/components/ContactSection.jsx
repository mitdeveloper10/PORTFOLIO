import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        setFormData({ name: '', email: '', message: '' });
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
    <section id="contact" className="section container" style={{ position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="heading-secondary">
          <span className="heading-primary" style={{ fontSize: '2.5rem' }}>Let's Connect</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
          I'll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required disabled={status === 'loading'} style={{
                width: '100%', padding: '1rem', background: 'var(--bg-color-light)', 
                border: '1px solid var(--border-color)', borderRadius: '8px', 
                color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
              }} 
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-secondary)'} 
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required disabled={status === 'loading'} style={{
                width: '100%', padding: '1rem', background: 'var(--bg-color-light)', 
                border: '1px solid var(--border-color)', borderRadius: '8px', 
                color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-secondary)'} 
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
            <textarea id="message" rows="5" value={formData.message} onChange={handleChange} required disabled={status === 'loading'} style={{
              width: '100%', padding: '1rem', background: 'var(--bg-color-light)', 
              border: '1px solid var(--border-color)', borderRadius: '8px', 
              color: 'var(--text-primary)', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-secondary)'} 
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            ></textarea>
          </div>

          {status === 'success' && (
            <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
               Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
               An error occurred. Please try again later.
            </div>
          )}

          <button type="submit" disabled={status === 'loading' || status === 'success'} className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 2.5rem', fontSize: '1.1rem', opacity: status === 'loading' ? 0.7 : 1 }}>
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
