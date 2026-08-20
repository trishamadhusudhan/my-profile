import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Project not found!</h2>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <Link to="/projects" className="btn btn-secondary">
        ← Back to Projects
      </Link>

      <section style={{ padding: '50px 0' }}>
        <h1>{project.title}</h1>

        <p style={{ margin: '20px 0', lineHeight: '1.8' }}>
          {project.longDesc}
        </p>

        <div className="project-tags">
          {project.tech.map((tech, index) => (
            <span key={index} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {project.id === 1 && (
          <a
            href="https://pawtrace-2aa9a.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '25px' }}
          >
            View Live Project
          </a>
        )}
      </section>
    </div>
  );
}

export default ProjectDetail;