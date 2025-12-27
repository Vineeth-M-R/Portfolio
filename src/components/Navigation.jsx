import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <div className="nav-content">
                    <a href="#hero" className="nav-logo">
                        Vineeth
                    </a>

                    <div className="nav-links">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#projects" className="nav-link">My Projects</a>
                        <a href="#experience" className="nav-link">Experience</a>
                        <a href="https://wa.me/919989520792" className="nav-link nav-contact" target="_blank" rel="noopener noreferrer">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
