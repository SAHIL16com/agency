import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const faqs = [
    {
      id: 1,
      q: "How long does it take to build a website?",
      a: "Typically, a standard corporate website takes 4-6 weeks from initial discovery to final launch, while complex web apps or eCommerce stores may take 8-12 weeks."
    },
    {
      id: 2,
      q: "Do you offer ongoing maintenance?",
      a: "Yes! We offer monthly retainer packages to keep your website updated, secure, and running at optimal speeds."
    },
    {
      id: 3,
      q: "What is your pricing structure?",
      a: "We price on a per-project basis depending on scope and complexity. Contact us for a free discovery call, and we will provide a detailed, transparent proposal."
    }
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <div className="faq-header">
          <span className="badge">QUESTIONS</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map(faq => (
            <div 
              className={`faq-item ${openId === faq.id ? 'open' : ''}`} 
              key={faq.id}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span className="faq-question-text">{faq.q}</span>
                <span className="faq-toggle-icon">{openId === faq.id ? '−' : '+'}</span>
              </button>
              <div 
                className="faq-answer-panel"
                style={{
                  maxHeight: openId === faq.id ? '200px' : '0px'
                }}
              >
                <div className="faq-answer-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
