import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Skills.css';

const Skills = () => {
    const skillsRef = useRef(null);
    const skills = [
        'Java Developer', 'Spring Boot', 'Hibernate', 'React JS', 'MySQL',
        'REST APIs', 'Git & Github', 'Spring Data JPA', 'Collection', 
        'Swing', 'Multithreading', 'JDBC', 'HTML / CSS & JavaScript'
    ];

    useEffect(() => {
        // Horizontal scrolling ticker animation
        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: 'none' }
        });

        const skillItems = skillsRef.current.querySelectorAll('.skill-item');
        const totalWidth = skillsRef.current.scrollWidth / 2;

        gsap.to(skillsRef.current, {
            x: -totalWidth,
            duration: 20,
            ease: 'none',
            repeat: -1
        });
    }, []);

    return (
        <div className="skills-ticker-container glass">
            <div className="skills-ticker" ref={skillsRef}>
                {/* Double the skills for seamless loop */}
                {[...skills, ...skills].map((skill, index) => (
                    <span key={index} className="skill-item">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
