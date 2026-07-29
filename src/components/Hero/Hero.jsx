import React from 'react';
import './Hero.css';

function Hero() {
  const splitText = (text) => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="char-space">&nbsp;</span>;
      }
      return (
        <span key={index} className="char-item" style={{ animationDelay: `${index * 0.03}s` }}>
          {char}
        </span>
      );
    });
  };

  const splitTextLine2 = (text, startDelay = 0.3) => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="char-space">&nbsp;</span>;
      }
      return (
        <span key={index} className="char-item" style={{ animationDelay: `${startDelay + index * 0.03}s` }}>
          {char}
        </span>
      );
    });
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Main Content Area */}
        <div className="hero-top-layout">
          
          {/* Headline and Left side */}
          <div className="hero-text-area">
            <span className="hero-badge">CREATIVE TECH & MARKETING AGENCY</span>
            <h1 className="hero-title">
              <span className="title-row">
                {splitText("Building ")} 
                <span className="script-text hero-title-script">Experiences</span>
              </span>
              <br />
              <span className="title-row">
                {splitTextLine2("That Move The World", 0.45)}
              </span>
            </h1>
            <p className="hero-tagline">On Time | On Budget | Never Settle</p>
            
            <div className="hero-actions">
              <a href="https://wa.me/919582352683?text=Hi%20Petra%20Web,%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="btn-primary">Start Your Project</a>
              <a href="#work" className="btn-secondary">View Our Work</a>
            </div>
          </div>

          {/* Testimonial Widget Right Side */}
          <div className="hero-testimonial-widget">
            <div className="star-rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span className="star-muted">★</span>
            </div>
            <p className="widget-quote">
              "The website is simply stunning! Working with Petra Web has been so easy, they've been incredibly patient and have made us something we're truly proud of!"
            </p>
            <p className="widget-author">Joey Christianson | Grace Fishers</p>
          </div>

        </div>

        {/* Bottom Trusted Brands Strip */}
        <div className="hero-trusted-strip">
          <span className="trusted-title">TRUSTED BY</span>
          <div className="trusted-logos">
            <span className="logo-item brand-amazon">amazon</span>
            <span className="logo-item brand-selfbook">selfbook</span>
            <span className="logo-item brand-harvard">HARVARD <span className="light-sub">UNIVERSITY</span></span>
            <span className="logo-item brand-oura">ŌURA</span>
            <span className="logo-item brand-urban">urban mattress</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
