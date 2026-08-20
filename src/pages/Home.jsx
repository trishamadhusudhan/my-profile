import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';

function Home() {
  const featured = projectsData.filter(p => p.featured);

  return (
    <div className='home-page'>
      <Hero />
      <AboutSection />

      <section className='featured-section container' id='projects'>
        <h2>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    </div>
  );
}
export default Home;