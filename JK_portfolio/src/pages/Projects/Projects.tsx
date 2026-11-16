import React from 'react';
import './Projects.css';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A brief description of what this project does, the problem it solves, and the impact it had.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'Another showcase project highlighting your skills and the technologies you used.',
    techStack: ['React', 'Redux', 'Express', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'A third project demonstrating a different aspect of your technical capabilities.',
    techStack: ['Next.js', 'Tailwind CSS', 'Prisma'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__stack">
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card__links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="project-card__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="project-card__link project-card__link--muted"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
