import React from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

function Header({ toggleTheme }) {
    return (
        <header className="header">
            <div className="logo">Portfolio</div>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/projects">PROJECTS</a></li>
                    <li><a href="/resume">RESUME</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </nav>
            <ThemeToggle toggleTheme={toggleTheme} />
        </header>

    );
}

export default Header;
