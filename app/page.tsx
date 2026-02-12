'use client';

import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Founders from './components/Founders';
import Mission from './components/Mission';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    const elements = document.querySelectorAll('.service-card, .founder-card, .testimonial-card, .philosophy-card, .stat-card');
    elements.forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Experience />

      <Founders />
      <Mission />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
