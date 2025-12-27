import React from 'react';
import './CV.css';

const CV = () => {
    return (
        <section id="cv" className="section cv">
            <div className="container">
                <div className="cv-content">
                    <h2 className="section-title">Download My CV</h2>
                    <p className="section-subtitle">
                        Get a comprehensive overview of my professional experience, skills, and achievements.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1EAzp8ndQs07xCBSXGGTwE17c_S-jQ8-8/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg cv-button"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CV;
