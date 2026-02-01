import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Projects.css';


const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        delay: index * 0.2,
        clearProps: 'all',   // important: GSAP inline styles remove karega
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%'
        }
      }
    );
  }, cardRef);

  return () => ctx.revert();
}, [index]);


    return (
        <div className="project-card glass" ref={cardRef}>
            <div className="project-img-container">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                    <a href={project.link} className="btn-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                    </a>
                </div>
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "University Management System",
            description: "A desktop based application which is maintain all records of student in a School.",
            image: 'images/university management.jpg',
            tags: ["Core java", "Swing", "JDBC", "OOPS", "MySQL"],
            link: "#"
        },
        {
            title: "Smart Contact Manager",
            description: "This is Spring boot based Web Application which used for saved contact on cloud and access from any where by using username and password.",
            image: 'images/contact-profile.png',
            tags: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Spring MVC", "MySQL", "Thymeleaf", "HTML / CSS"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section container">
            <h2 className="section-title">Selected Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
