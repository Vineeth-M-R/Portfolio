import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title fade-in">
                            Hey there, I'm <span className="text-gradient">Vineeth</span>
                        </h1>
                        <p className="hero-subtitle fade-in">
                            A Product Manager with expertise in end-to-end product discovery, strategy, execuction and digital transformation.
                        </p>
                    </div>

                    <div className="hero-visual">
                        <div className="stat-left">
                            <svg className="curved-arrow" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 10 70 Q 40 10, 110 40" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                                    </marker>
                                </defs>
                            </svg>
                            <div className="stat-text">
                                <strong>5+ years</strong>
                                <span>of impact</span>
                            </div>
                        </div>

                        <div className="profile-image-wrapper">
                            <img src="/profile.jpg" alt="Vineeth" className="profile-image" />
                        </div>

                        <div className="stat-right">
                            <svg className="curved-arrow" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 110 70 Q 80 10, 10 40" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
                                <defs>
                                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                                    </marker>
                                </defs>
                            </svg>
                            <div className="stat-text">
                                <strong>15+ digital</strong>
                                <span>products launched</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
