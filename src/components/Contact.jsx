import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-content">
                    <h2 className="contact-title">Let's make something amazing together</h2>
                    <a href="http://calendly.com/yourusername" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
