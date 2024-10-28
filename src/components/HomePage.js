import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <div className="intro-text">
                <h1>Hello,  I'm Devraj</h1>
                <h2>Aspiring Software Developer</h2>
                <p>
                    Currently pursuing a Computer Science degree at Dalhousie University,
                    I’m passionate about creating impactful and user-friendly applications.
                    From designing intuitive interfaces to building robust backend solutions,
                    I love turning ideas into real-world applications. Looking forward to bringing
                    my skills to an innovative team as a co-op student!
                </p>
                <Link to="/contact">
                    <button className="contact-btn">Contact</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
