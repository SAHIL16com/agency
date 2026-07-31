import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-col brand-col">
            <div className="logo-link footer-logo">
              <svg viewBox="0 0 120 120" className="logo-icon-svg" aria-hidden="true">
                <g fill="currentColor">
                  <path d="M 28 35.5 L 37.5 26 L 37.5 68.5 L 28 78 Z" />
                  <path d="M 37.5 26 L 47 16.5 L 72.5 16.5 A 23.5 23.5 0 0 1 96 40 A 23.5 23.5 0 0 1 72.5 63.5 L 65 63.5 L 76 74.5 L 85.5 65 L 95 74.5 L 107.5 62 L 107.5 75.5 L 95 88 L 85.5 78.5 L 76 88 L 51.5 63.5 L 58 54 L 72.5 54 A 14 14 0 0 0 86.5 40 A 14 14 0 0 0 72.5 26 Z" />
                </g>
              </svg>
              <div className="logo-text">
                <span className="brand-name">PETRΛ WEB</span>
                <span className="brand-tagline">WE DESIGN. YOU GROW.</span>
              </div>
            </div>
            <p className="brand-desc">
              We craft exceptional digital experiences that help businesses thrive in the modern digital landscape. Our team of experts is dedicated to delivering high-quality solutions.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/petra_web.12/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.svg" alt="Instagram" className="social-icon-img" />
              </a>
              <a href="https://wa.me/919582352683" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <img src="/images/whatsapp.svg" alt="WhatsApp" className="social-icon-img" />
              </a>
              <a href="https://www.linkedin.com/in/petra-web-636018426/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <img src="/images/linkedin.svg" alt="LinkedIn" className="social-icon-img" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">SEO Services</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <span className="contact-icon-glyph">📍</span>
                <span className="contact-text-value">
                  Alpha-1 greater noida Near Pari-Chowk, Uttar Pradesh 201310
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="contact-icon-glyph">📞</span>
                <span className="contact-text-value">
                  <a href="tel:+919582352683" style={{ color: 'inherit' }}>+91 9582352683</a>
                  <span style={{ display: 'block', marginTop: '4px' }}>
                    <a href="tel:+917827881336" style={{ color: 'inherit' }}>+91 7827881336</a>
                  </span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Large Premium Watermark Signature */}
        <div className="footer-watermark">PETRΛ WEB</div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">© 2026 Petra Web. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
