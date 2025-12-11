import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            Shareat<span className="text-accent">Foods</span>
                        </Link>
                        <p className="footer-desc">
                            Premium Micro Pellets Manufacturer & Global Exporter from India.
                            Supplying fry-ready snack micro pellets to global FMCG brands.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Our Products</Link></li>
                            <li><Link to="/applications">Applications</Link></li>
                            <li><Link to="/quality">Quality & Certifications</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <MapPin size={20} className="text-accent" />
                            <span>Block No. 212/2, <br />A Innovative Road,<br /> B/H Intas Pharma Unit 2,<br />Matoda Patia, Ahmedabad, Gujarat 382213</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="text-accent" />
                            <a href="mailto:food@agroup.in">food@agroup.in</a>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="text-accent" />
                            <span>+91 9909999247</span>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/a-innovative-food-products-limited-shareat/" className="social-icon"><Linkedin size={24} /></a>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Shareat Foods. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
