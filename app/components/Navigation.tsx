'use client';

import { useEffect } from 'react';

export default function Navigation() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div>
          <div className="logo">VisualVaastu</div>
          <div className="tagline">Where Energy Meets Design</div>
        </div>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>About</a></li>
          <li><a href="#founders" onClick={(e) => handleClick(e, '#founders')}>Founders</a></li>
          <li><a href="#services" onClick={(e) => handleClick(e, '#services')}>Services</a></li>
          <li><a href="#testimonials" onClick={(e) => handleClick(e, '#testimonials')}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
