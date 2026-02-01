import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-animate', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about-section container" ref={sectionRef}>
            <div className="about-grid">
                <div className="about-services about-animate">
                    <div className="service-item">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                        </div>
                        <h3>Website Development</h3>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                        </div>
                        <h3>App Development</h3>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        </div>
                        <h3>UI/UX Design</h3>
                    </div>
                </div>

                <div className="about-content about-animate">
                    <h2 className="section-title">About me</h2>
                    <p className="about-text">
                        Hi, I am a Student of B.Tech in computer Science & Engineering, i have strong practical knowledge of java and its frameworks like spring boot, hibernate, collection. i have hands on experience develop enterprise web application. i am focusing on become a Software Engineer and getting opportunity in a reputed organization where i contribute with working professional team members and integrating multiple technologies and developed robust and scalable software applications.
                    </p>
                    <p className="about-text">
                        My main focus these days is building accessible, inclusive products and digital experiences at Upwork for a variety of clients.
                    </p>
                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat-num">04+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">50+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
