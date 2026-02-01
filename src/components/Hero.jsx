import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';
import useTypewriter from './TypeWriter';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);
    const circleRef = useRef(null);

      const skills = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "Spring Data JPA",
    "Spring Security",
    "HTML / CSS & JavaScript",
    "React.js",
    "Microservices",
    "REST APIs",
    "MySQL",
    "Git & Github",
    "Maven"
  ];

  
  const typedText = useTypewriter(skills);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.8 })
            .fromTo('.hero-title-main', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
            .fromTo('.hero-title-role', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
            .fromTo('.hero-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .fromTo(imgRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5 }, "-=1.2")
            .fromTo(circleRef.current, { scale: 0.5, opacity: 0, rotate: -45 }, { scale: 1, opacity: 1, rotate: 0, duration: 2 }, "-=1.5");

        // Continuous subtle pulse for the circle ring
        gsap.to(circleRef.current, {
            boxShadow: '0 0 40px var(--accent-glow)',
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'sine.inOut'
        });
    }, []);


    return (
        <section id="home" className="hero-section container" ref={heroRef}>
            <div className="hero-content">
                <div className="hero-text" ref={textRef}>
                    <h4 className="hero-subtitle">Hello <span className="dot">.</span></h4>
                    <h2 className="hero-title-main">I'm Ranjeet Kumar</h2>
                    <h2 className="hero-title-main">Specialize in 👇</h2>

                    <h1 className="hero-title-role"> <span>{typedText}</span> </h1>
                    <div className="hero-btns">
                        <button className="btn btn-primary">Got a project?</button>
                        <a href="/pdf/FULL_STACK_DEV.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline">My resume</button>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="profile-container">
                        <div className="glow-circle" ref={circleRef}></div>
                        <div className="profile-img-wrapper" ref={imgRef}>
                            <img
                                src='images/bg.jpeg'
                                alt="Jensen Omega"
                                className="profile-img"
                            />
                        </div>
                        {/* Added decorative elements like in the reference image */}
                        <div className="decor-arrow arrow-left">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
                        </div>
                        <div className="decor-arrow arrow-right">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
