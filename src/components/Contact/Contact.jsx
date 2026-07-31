import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '<$5k',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "e3af8b16-15b7-4976-971f-ed9d47bc84b2",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          details: formData.details,
          subject: "New Lead Submission from Petra Web Form",
          from_name: "Petra Web Agency"
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '<$5k',
          details: ''
        });
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-grid">
            
            {/* Form Column */}
            <div className="contact-form-col">
              <h2 className="contact-headline">Let's build something great together.</h2>
              {submitted ? (
                <div className="submission-success">
                  <span className="success-icon">✓</span>
                  <h3>Thank you for your message!</h3>
                  <p>Our team will review your project details and get back to you with a detailed proposal within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary btn-sm">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="lead-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="enter name" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="sahilkumar55126@gmail.com" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        placeholder="petra web" 
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select 
                      id="budget" 
                      name="budget" 
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="<$5k">&lt;5k</option>
                      <option value="$5k-$10k">5k - 10k</option>
                      <option value="$10k+">10k+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="details">Project Details</label>
                    <textarea 
                      id="details" 
                      name="details" 
                      rows="4" 
                      placeholder="Tell us about your project, goals, and timeline..." 
                      value={formData.details}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  {errorMessage && <p className="error-message-text" style={{ color: '#E11D48', fontSize: '14px', marginBottom: '16px', fontWeight: '500' }}>{errorMessage}</p>}
                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info Column */}
            <div className="contact-info-col">
              <div className="info-prompt">
                <h3>Prefer direct contact?</h3>
                <p>Feel free to reach out to us directly. We are always up for coffee or a quick video call.</p>
              </div>
              <div className="contact-details-list">
                <div className="detail-item">
                  <span className="detail-icon">✉</span>
                  <div className="detail-content">
                    <span className="detail-label">Email us</span>
                    <a href="mailto:petraweb00@gmail.com" className="detail-value">petraweb00@gmail.com</a>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">☎</span>
                  <div className="detail-content">
                    <span className="detail-label">Call us</span>
                    <a href="tel:+919582352683" className="detail-value">+91 9582352683</a>
                    <a href="tel:+917827881336" className="detail-value" style={{ display: 'block', marginTop: '4px' }}>+91 7827881336</a>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div className="detail-content">
                    <span className="detail-label">Visit us</span>
                    <span className="detail-value">Alpha-1 greater noida Near Pari-Chowk</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
