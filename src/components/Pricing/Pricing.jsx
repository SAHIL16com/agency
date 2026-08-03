import React from 'react';
import './Pricing.css';

function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Base Plan',
      desc: 'Essentials for small businesses establishing their digital footprint.',
      price: '₹6,999',
      period: ' / project',
      popular: false,
      dark: false,
      btnText: 'Start with Base →',
      features: [
        'Custom Domain Integration',
        'Up to 5 Core Pages',
        'Responsive Mobile Design',
        'Basic Contact Form'
      ]
    },
    {
      id: 2,
      name: 'Standard Plan',
      badge: 'MOST POPULAR',
      desc: 'Advanced features for growing brands seeking competitive advantage.',
      price: '₹9,999 - 19,999',
      period: 'BASED ON COMPLEXITY',
      popular: true,
      dark: false,
      btnText: 'Choose Standard →',
      featuresIntro: 'Everything in Base, plus:',
      features: [
        'Custom CMS Integration',
        'Advanced SEO Setup',
        'Google Analytics Dashboard',
        'Up to 15 Core Pages'
      ]
    },
    {
      id: 3,
      name: 'Enterprise Plan',
      desc: 'Customized, large-scale solutions tailored for complex organizational needs.',
      price: 'Custom',
      period: ' Pricing',
      popular: false,
      dark: true,
      btnText: 'Contact Sales →',
      features: [
        'Bespoke Architecture',
        'Dedicated Account Manager',
        'Advanced Security Audits',
        'Unlimited Revisions Scope',
        'API & 3rd Party Integrations'
      ]
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="badge">PRICING PLANS</span>
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">
            Choose the plan that fits your business goals. No hidden fees.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div 
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular-card' : ''} ${plan.dark ? 'dark-card' : ''}`}
              onClick={() => {
                const url = plan.dark 
                  ? "#contact" 
                  : "https://wa.me/917827881336?text=Hi%20Petra%20Web,%20I%20want%20to%20know%20more%20about%20the%20" + encodeURIComponent(plan.name);
                if (plan.dark) {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {plan.popular && plan.badge && (
                <div className="card-badge-wrapper">
                  <span className="card-badge">{plan.badge}</span>
                </div>
              )}
              
              <div className="card-main-content">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                
                <div className="plan-price-wrapper">
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>

                <div className="features-container">
                  {plan.featuresIntro && <p className="features-intro">{plan.featuresIntro}</p>}
                  <ul className="plan-features-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-action-wrapper">
                <button 
                  type="button"
                  className={`plan-btn ${plan.popular ? 'popular-btn' : plan.dark ? 'dark-btn' : 'base-btn'}`}
                >
                  {plan.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
