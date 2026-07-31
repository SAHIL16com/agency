import React, { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const reviews = [
    {
      id: 0,
      quote: "Petra Web completely transformed our online presence. The new site is not only gorgeous but has increased our inbound leads by over 40% in just two months. Absolute professionals.",
      author: "Sarah Jenkins",
      role: "CMO at TechFlow",
      img: "/images/client_1.png",
      rating: 5
    },
    {
      id: 1,
      quote: "Their attention to detail and ability to translate our messy ideas into a clean, functional web app was astonishing. Highly recommend the Petra Web team.",
      author: "Marcus Reed",
      role: "Founder of Elevate",
      img: "/images/client_2.png",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="badge">TESTIMONIALS</span>
          <h2 className="testimonials-title">Client Success Stories</h2>
        </div>

        <div className="testimonials-slider-container">
          <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous testimonial">
            ←
          </button>
          
          <div className="testimonial-slide-window">
            {reviews.map((review, idx) => (
              <div 
                className={`testimonial-slide ${idx === activeIndex ? 'active' : 'inactive'}`} 
                key={review.id}
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`
                }}
              >
                <div className="testimonial-card">
                  <div className="star-graphic">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="testimonial-quote">"{review.quote}"</p>
                  <div className="testimonial-author">
                    <img 
                      src={review.img} 
                      alt={review.author} 
                      className="author-avatar" 
                      loading="lazy"
                    />
                    <div className="author-details">
                      <h4 className="author-name">{review.author}</h4>
                      <p className="author-role">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow next" onClick={handleNext} aria-label="Next testimonial">
            →
          </button>
        </div>

        <div className="slider-dots">
          {reviews.map((_, idx) => (
            <button 
              key={idx}
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
