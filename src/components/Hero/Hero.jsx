import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
}

function Hero() {
    const greeting = getGreeting();

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>{greeting}, I'm <span className="highlight">Rakesh K R</span> 👋</h1>
                <p className="tagline">I build beautiful, fast, accessible websites. And deploy it on vercel.</p>
                
                <div className="hero-buttons">
                    <Link to="/projects" className="btn btn-primary">View My Work</Link>
                    <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
                </div>
            </div>
        </section>
    );
}
export default Hero