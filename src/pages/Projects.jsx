import { projectsData, } from '../data/projects';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';

function Projects() {
  return (
    <div className="projects-page container">
      <div className="projects-header">
        <h1>My Project</h1>
      </div>

      <ProjectGrid projects={projectsData} />
    </div>
  );
}

export default Projects;
