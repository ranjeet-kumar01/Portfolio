import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
        );
    }, []);

    const reloadWindow = () =>{
        window.location.reload();
    }

    return (
        <nav className="navbar glass" ref={navRef}>
            <div className="container nav-container">
                <div className="logo">
                    <img src='logo/nav-logo.png' alt="code logo" srcset="" onClick={reloadWindow}/> 
                </div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>

                <div className="nav-actions">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
