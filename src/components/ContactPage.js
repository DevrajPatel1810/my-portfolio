import React from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p className="contact-description">
                Please reach me out for Tech opportunities.
            </p>
            <div className="contact-details">
                <div className="contact-item">
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:devraj@example.com">devraj@example.com</a>
                    </p>
                </div>
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
