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
                    <p className="flex items-center gap-2">
                        <span>📞 Phone:</span>
                        <a href="tel:+919175566186" className="hover:underline">
                            +91 9175566186
                        </a>
                        ,
                        <a href="tel:+919637311920" className="hover:underline">
                            +91 9637311920
                        </a>
                    </p>

                    <p>Email: <a href="mailto:visualvaastu06@gmail.com">visualvaastu06@gmail.com</a>
                    </p>
                    <p>
                        <span>📍 Address:</span> Pune, Maharashtra 411037
                    </p>

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
                <p>&copy; 2024 VisualVaastu. All rights reserved. | Designed with energy & intention</p>
            </div>
        </footer>
    );
}
