import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#hero" className="footer-logo">Vineeth</a>
                    </div>

                    <nav className="footer-nav">
                        <a href="#about" className="footer-link">About</a>
                        <a href="#projects" className="footer-link">My Projects</a>
                        <a href="https://wa.me/919989520792" className="footer-link" target="_blank" rel="noopener noreferrer">Contact Me</a>
                    </nav>

                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Vineeth. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
