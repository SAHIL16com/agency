import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import USPs from './components/USPs/USPs';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px -10% 0px -10%', // Trigger slightly inside the viewport
      threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main style={{ overflow: 'hidden' }}>
        <Hero />
        <div className="reveal-on-scroll"><About /></div>
        <div className="reveal-on-scroll"><Services /></div>
        <div className="reveal-on-scroll"><Pricing /></div>
        <div className="reveal-on-scroll"><USPs /></div>
        <div className="reveal-on-scroll"><Testimonials /></div>
        <div className="reveal-on-scroll"><FAQ /></div>
        <div className="reveal-on-scroll"><Contact /></div>      </main>
      <Footer />
    </>
  );
}

export default App;
