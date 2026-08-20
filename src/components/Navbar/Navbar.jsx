import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
function Navbar({ theme, toggleTheme }) {
    // State for the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="site-header">
            <nav className="navbar">
                <div className="logo">RKR</div>
                
                <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
                    <li>
                      <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                        Contact
                      </NavLink>
                    </li>
                </ul>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>

                    <button 
                        className="menu-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>
                </div>
            </nav>
        </header>
    );
}


export default Navbar
