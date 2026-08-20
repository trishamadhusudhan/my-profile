import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-body">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tech.map((t, index) => (
            <span key={index} className="tag">
              {t}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="btn btn-primary"
        >
          View Project
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;