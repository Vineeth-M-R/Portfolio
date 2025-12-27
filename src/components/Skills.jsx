import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('strategy');

    const capabilities = {
        strategy: [
            'Product vision & roadmap',
            'OKRs & success metrics',
            'User research & insights',
            'Problem framing (JTBD)',
            'PRDs & product briefs',
            'Competitive analysis'
        ],
        agile: [
            'Scrum & Kanban',
            'Jira & Confluence',
            'Backlog management',
            'Sprint planning & retrospectives',
            'Stakeholder management',
            'Release planning',
            'PSPO / CSPO'
        ],
        analytics: [
            'SQL (MySQL / PostgreSQL)',
            'Excel / Google Sheets (advanced)',
            'Power BI / Tableau',
            'Funnel & cohort analysis',
            'A/B testing',
            'Metric definition (North Star, KPIs)',
            'Data-driven decision making'
        ],
        ai: [
            'LLM fundamentals (GPT, Claude)',
            'Prompt engineering',
            'RAG systems',
            'NLP basics',
            'LangChain / LlamaIndex',
            'Model evaluation & bias',
            'AI-powered product workflows'
        ],
        technical: [
            'API & system design basics',
            'HTML, CSS, JavaScript (literacy)',
            'Figma & prototyping',
            'User flows & IA',
            'Accessibility basics',
            'Engineering collaboration',
            'Tech feasibility & trade-offs'
        ]
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">
                    Comprehensive skill set across product strategy, agile delivery, data analytics, AI/LLM, and technical collaboration.
                </p>

                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'strategy' ? 'active' : ''}`}
                        onClick={() => setActiveTab('strategy')}
                    >
                        Product Strategy & Discovery
                    </button>
                    <button
                        className={`tab ${activeTab === 'agile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('agile')}
                    >
                        Agile Delivery & Execution
                    </button>
                    <button
                        className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        Data Analytics & Experimentation
                    </button>
                    <button
                        className={`tab ${activeTab === 'ai' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ai')}
                    >
                        AI / LLM & Automation
                    </button>
                    <button
                        className={`tab ${activeTab === 'technical' ? 'active' : ''}`}
                        onClick={() => setActiveTab('technical')}
                    >
                        Technical & UX Collaboration
                    </button>
                </div>

                <div className="tab-content">
                    <div className="tech-grid">
                        {capabilities[activeTab].map((tech, index) => (
                            <div key={index} className="tech-item">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
