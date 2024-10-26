import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <h1>Devraj</h1>
            <p>Designer / Developer</p>
            <Link to="/contact">
                <button className="contact-btn">Contact</button>
            </Link>
        </div>
    );
}

export default HomePage;
