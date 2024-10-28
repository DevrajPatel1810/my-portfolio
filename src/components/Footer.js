import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com/DevrajPatel1810" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://instagram.com/devvvpatel_" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/devrajpatel5" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon"/>
                </a>
            </div>
            <p>&copy; 2024 Devraj. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
