import React from 'react';
import './Works.css';

const Works = () => {
    const projects = [
        {
            id: 1,
            title: 'Chat Room',
            tags: ['React', 'Python', 'Full Stack'],
            image: '/images/project-1.jpg',
            url: 'https://chat-room-g9m9.vercel.app/'
        },
        {
            id: 2,
            title: 'Event Manager',
            tags: ['Machine Learning', 'NLP', 'Research'],
            image: '/images/project-2.jpg',
            url: 'https://event-manager-jet-gamma.vercel.app/'
        },
        {
            id: 3,
            title: 'Reminder List',
            tags: ['Product Management', 'Competition'],
            image: '/images/project-3.jpg',
            url: 'https://reminder-list-six.vercel.app/'
        },
        {
            id: 4,
            title: 'Inbox Manager',
            tags: ['Leadership', 'Event Management'],
            image: '/images/project-4.jpg',
            url: 'https://inbox-manager-one.vercel.app/'
        },
        {
            id: 5,
            title: 'Github Portfolio',
            tags: ['Leadership', 'Event Management'],
            image: '/images/project-5.jpg',
            url: 'https://github.com/Vineeth-M-R'
        },
        {
            id: 6,
            title: 'My CV',
            tags: ['Resume', 'Professional'],
            image: '/images/project-6.jpg',
            url: 'https://drive.google.com/file/d/1EAzp8ndQs07xCBSXGGTwE17c_S-jQ8-8/view?usp=sharing'
        }
    ];

    return (
        <section id="projects" className="section works">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">
                    A selection of projects highlighting Product Management, Machine Learning, and Full-Stack Development
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-link"
                        >
                            <div className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-overlay-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <div className="project-tags">
                                                {project.tags.map((tag, index) => (
                                                    <span key={index} className="project-tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
