'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check on mount
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="hero">
            <div className="hero-image-container">
                <Image
                    src={isMobile ? "/images/HeroMobile.png" : "/images/Hero.png"}
                    alt="VisualVaastu Hero"
                    fill
                    priority
                    sizes="100vw"
                    className="hero-image"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </div>

            <div className="hero-content">
                <h1>VisualVaastu</h1>
                <p className="subtitle">Where Energy Meets Design</p>
                <p>Every structure is more than bricks and blueprints — it is a living space of energy, emotion, and intention.</p>
                <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <a href="#services" className="cta-button">Explore Our Services</a>
                    <a href="#contact" className="cta-button secondary">Book a Consultation</a>
                </div>
            </div>
        </section>
    );
}
