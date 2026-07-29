import React from 'react';
import './USPs.css';

function USPs() {
  const usps = [
    {
      num: '01',
      title: 'Uncompromising Quality',
      desc: 'Every line of code and every pixel is crafted with precision to ensure a flawless end product.'
    },
    {
      num: '02',
      title: 'Data-Driven Strategy',
      desc: "We don't guess. We use analytics, user research, and industry best practices to guide our design decisions."
    },
    {
      num: '03',
      title: 'Dedicated Support',
      desc: 'Launching is just the beginning. We provide ongoing maintenance and proactive support to keep your site at peak performance.'
    }
  ];

  return (
    <section className="usps-section">
      <div className="container">
        <div className="usps-header">
          <span className="badge-dark">WHY PETRA WEB</span>
          <h2 className="usps-headline">The Petra Web Advantage</h2>
        </div>
        <div className="usps-grid">
          {usps.map((usp, index) => (
            <div className="usp-column" key={index}>
              <div className="usp-watermark">{usp.num}</div>
              <div className="usp-content">
                <h3 className="usp-title">{usp.title}</h3>
                <p className="usp-desc">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default USPs;
