import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    const experiences = [
        {
            id: 1,
            company: 'Wells Fargo',
            role: 'Senior Product Manager / Product Owner',
            period: 'May 2023 - Present',
            shortDesc: 'Leading product strategy and digital transformation initiatives',
            fullDesc: `● Market Analysis: Executed a comprehensive analysis through surveys and secondary research across target customer segments, resulting in an 8% increase in credit card applications within the first three months.

● Go-To Marketing: Implemented a multi-channel go to marketing strategy, utilizing digital advertising and direct mail, which led to a 6% increase in revenue generated from 10,000+ new credit card holders.

● Management: Led & Managed digital scrum team of 10+ with external stakeholders and vendors (Expedia Group) while working closely with engineering user experience PRDs for the new credit card product (Key*), resulting in a 28% increase in user satisfaction ratings.

● Collaboration & Compliance: Collaborated with cross-functional teams including finance, legal, UX, Marketing etc. to ensure compliance with regulatory inputs to identify potential solutions which reduced credit card fraud by 10%.

● Innovation: Won the Shark Tank Events (2023&24) held across US to solve a consumer lending business problem.`
        },
        {
            id: 2,
            company: 'PayU',
            role: 'Software Engineer',
            period: 'Jan 2019 - Jun 2021',
            shortDesc: 'Developed ML models and payment solutions for fintech platform',
            fullDesc: `● Machine Learning & Risk Management: Improved 15% in Customer Rating by isolating risky merchant accounts through Sentiment Analysis & developed recommendation engine to predict payment preferences.

● Initiatives: Conceptualized Mobile Intents using custom Deep links from NPCI to invoke Mobile PSP apps and have received appreciation by CEO for development of PoC which led to 10% bump in the success Rate.

● Business & Revenue: Implemented Results driven initiatives which resulted in a Success Rate bump by 20% and Gross Monthly Volume by |500 Cr by integrating 15+ payment methods which processes 17Lakh+ transactions per day.`
        }
    ];
    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">My work experience</h2>

                <div className="experience-list">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card">
                            <div className="experience-header">
                                <div className="experience-info">
                                    <h3 className="experience-company">{exp.company}</h3>
                                    <p className="experience-role">{exp.role}</p>
                                    <p className="experience-period">{exp.period}</p>
                                </div>
                            </div>

                            <div className="experience-content">
                                <p className="experience-short">{exp.shortDesc}</p>

                                {expandedId === exp.id && (
                                    <div className="experience-full">
                                        {exp.fullDesc.split('\n').map((line, index) => (
                                            <p key={index} className="experience-detail">{line}</p>
                                        ))}
                                    </div>
                                )}

                                <button
                                    className="expand-btn"
                                    onClick={() => toggleExpand(exp.id)}
                                >
                                    {expandedId === exp.id ? 'Hide' : 'Read more...'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
