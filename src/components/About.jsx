import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">Who am I?</h2>
                <p className="section-subtitle">
                    MBA from <b>IIM Ahmedabad</b> & B.Tech from <b>IIT Kharagpur</b>. I am currently a <b>Vice President</b> of Product Management for Consumer Lending at an US Bank.
                </p>

                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-number">5+</div>
                        <div className="metric-label">Years of Experience</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-number">10+</div>
                        <div className="metric-label">End to End Full Stack Applications</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-number">25+</div>
                        <div className="metric-label">Digital Applications Launched</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
