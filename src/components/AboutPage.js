// AboutPage.js
import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-page">
            <section className="about-intro">
                <h1>About Me</h1>
                <p>I'm Devraj, a passionate software developer currently studying Computer Science at Dalhousie University.</p>
            </section>

            <section className="about-details">
                <div className="about-section">
                    <h2><i className="fas fa-graduation-cap"></i> Education</h2>
                    <p>Currently, Dalhousie University, B.Sc in Computer Science.</p>
                    <p>Graduated from Sheridan College in Computer Systems Technician-Software Engineering</p>
                </div>
                <div className="about-section">
                    <h2><i className="fas fa-code"></i> Core Skills</h2>
                    <p>Proficient in React, JavaScript, Node.js</p>
                    <p>Skilled in backend development with Java and Spring Boot, creating scalable and robust
                        applications.</p>
                    <p>Proficient in MySQL and NoSQL databases, with hands-on experience in MongoDB, MySQL Workbench, and Neo4J.</p>
                    <p>Experienced in Agile methodologies, including Kanban and Waterfall, for efficient and adaptive project management.</p>
                    <p>Currently pursuing a Computer Science degree at Dalhousie University, continuously expanding my technical knowledge.</p>
                    <p>Passionate about designing user-centered, impactful applications that bridge innovation with functionality.</p>
                </div>
                <div className="about-section">
                    <h2><i className="fas fa-project-diagram"></i> Projects</h2>
                    <p>Worked on a recipe-sharing platform and various other applications that emphasize user experience and responsive design.</p>
                </div>
                <div className="about-section">
                    <h2><i className="fas fa-heart"></i> Values</h2>
                    <p>Committed to continuous learning, innovation, and collaboration. I value diversity in tech and believe in creating solutions that make a difference.</p>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
