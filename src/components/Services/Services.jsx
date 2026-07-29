import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Custom Web Development',
      desc: 'We engineer fast, secure, and scalable websites tailored to your unique business logic.'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'UI/UX Design',
      desc: 'We design intuitive, user-centric interfaces that engage your audience and drive conversions.'
    },
    {
      id: 3,
      icon: '🛒',
      title: 'eCommerce Solutions',
      desc: 'We build robust online stores optimized for seamless checkout and maximized sales.'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'SEO & Performance Optimization',
      desc: 'We ensure your site ranks high and loads fast, capturing traffic and keeping users engaged.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="badge">OUR SERVICE AREAS</span>
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle">
            We blend strategic thinking with state-of-the-art engineering to help your business stand out and scale.
          </p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon-box">
                <span className="service-icon-glyph">{service.icon}</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
