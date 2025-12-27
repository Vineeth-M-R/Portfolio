import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="section testimonials">
            <div className="container">
                <div className="testimonial-card">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">
                        Vineeth is an exceptional product manager who combines technical expertise with strategic thinking.
                        His ability to drive cross-functional teams and deliver measurable results is impressive.
                        Working with him on the credit card product launch was a game-changer for our organization.
                        His data-driven approach and innovative solutions consistently exceed expectations.
                    </p>
                    <div className="testimonial-author">
                        <p className="author-name">Product Leadership Team</p>
                        <p className="author-role">Wells Fargo</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
