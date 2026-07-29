import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-main-title">About <span className="highlight-text">Petra Web</span></h2>
          <div className="accent-bar"></div>
          <p className="about-subtitle">
            We are a team of passionate tech experts dedicated to delivering high-quality digital solutions.
          </p>
        </div>

        {/* Section Grid */}
        <div className="about-grid-layout">
          
          {/* Left Column: Vision & Grid */}
          <div className="about-left-col">
            <h3 className="about-vision-title">Your Vision, Our Expertise</h3>
            <p className="about-vision-desc">
              At Petra Web, we bridge the gap between innovative ideas and functional technology. Our team of experienced developers and designers work together to create solutions that not only look great but also deliver exceptional user experiences.
            </p>

            <div className="about-features-2x2">
              <div className="about-feature-card">
                <div className="feature-icon-wrapper check-blue">
                  <span>🛡️</span>
                </div>
                <h4 className="feature-card-title">5+ Years Experience</h4>
                <p className="feature-card-text">
                  With over 5 years in the industry, we've helped businesses of all sizes succeed online.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-wrapper light-purple">
                  <span>⚡</span>
                </div>
                <h4 className="feature-card-title">Fast Turnaround</h4>
                <p className="feature-card-text">
                  We deliver high-quality work within tight deadlines without compromising on quality.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-wrapper group-pink">
                  <span>👥</span>
                </div>
                <h4 className="feature-card-title">Expert Team</h4>
                <p className="feature-card-text">
                  Our team consists of skilled professionals with diverse expertise in different technologies.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-wrapper green-shield">
                  <span>📞</span>
                </div>
                <h4 className="feature-card-title">24/7 Support</h4>
                <p className="feature-card-text">
                  We provide round-the-clock support to ensure your digital presence is always at its best.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Team Gradient Card */}
          <div className="about-right-col">
            <div className="about-decorations">
              <div className="decor-circle"></div>
              <div className="decor-square"></div>
            </div>
            <div className="team-gradient-card">
              <div className="team-card-icon">
                <span>👥</span>
              </div>
              <h3 className="team-card-title">Our Team</h3>
              <p className="team-card-desc">
                A group of passionate developers, designers, and strategists dedicated to your success.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
