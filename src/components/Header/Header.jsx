import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('color-scheme') || 'system';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      localStorage.removeItem('color-scheme');
    } else {
      root.setAttribute('data-theme', theme);
      localStorage.setItem('color-scheme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="site-header">
      {/* Drawer Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="drawer-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <div className="header-container">
        
        {/* Logo */}
        <a href="#" className="logo-link">
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
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#services" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#faq" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          
          {/* Mobile Theme Toggle inside drawer */}
          <button 
            className="theme-toggle mobile-only-toggle" 
            onClick={() => {
              toggleTheme();
              setIsMobileMenuOpen(false);
            }}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </nav>

        {/* Actions & Hamburger Toggle */}
        <div className="header-actions">
          <button 
            className="theme-toggle desktop-only-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          <a 
            href="https://wa.me/919582352683?text=Hi%20Petra%20Web,%20I'd%20like%20to%20discuss%20a%20project." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-btn header-cta"
          >
            WhatsApp
          </a>

          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu link"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
