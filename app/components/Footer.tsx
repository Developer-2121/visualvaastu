import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id="contact">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>VisualVaastu</h3>
                    <p>Where Energy Meets Design</p>
                    <p style={{ marginTop: '1rem', lineHeight: 1.8 }}>
                        Bringing ancient Vastu wisdom together with modern design thinking to create spaces that support your growth, peace, and prosperity.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>📞 Phone: +91 [Your Phone Number]</p>
                    <p>📧 Email: info@visualvaastu.com</p>
                    <p>📍 Address:<br />[Your Business Address]<br />[City, State, PIN Code]</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <a href="#about">About Us</a>
                    <a href="#founders">Our Founders</a>
                    <a href="#services">Services</a>
                    <a href="#testimonials">Testimonials</a>
                </div>

                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="https://instagram.com/visualvaastu" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com/visualvaastu" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://youtube.com/visualvaastu" target="_blank" rel="noopener noreferrer" title="YouTube">
                            <FaYoutube />
                        </a>
                    </div>
                    <p style={{ marginTop: '1.5rem' }}>Follow us for daily insights, tips, and energy wisdom.</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 VisualVaastu. All rights reserved. | Designed with energy & intention</p>
            </div>
        </footer>
    );
}
