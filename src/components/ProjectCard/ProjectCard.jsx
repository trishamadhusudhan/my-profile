import React from 'react'
import './ProjectCard.css'
function ProjectCard({ project }) {
  return (
      <article className="project-card">
        <div className="project-card-body">
            <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {/* We map over the array of tech to create span tags */}
                {project.tech.map((t, index) => (
                  <span key={index} className='tag'>{t}</span>
                ))}
              </div>
              <button className='btn btn-primary'>View Project</button>
        </div>
      </article>
  )
}

export default ProjectCard
