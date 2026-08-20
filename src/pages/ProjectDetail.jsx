import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetail() {
const { id } = useParams();
const project = projectsData.find(p => p.id === parseInt(id));

if (!project) return <h2>Project not found!</h2>;

return (
    <div className='container'>
        <Link to='/projects'>← Back</Link>
        <h1>{project.title}</h1>
        <p>{project.longDesc}</p>
    </div>
);


}
export default ProjectDetail;