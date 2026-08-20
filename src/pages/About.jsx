import './AboutPage.css';
import AboutSection from '../components/AboutSection/AboutSection';
import GitHubStats from '../components/GitHubStats/GitHubStats';
import SkillCard from '../components/SkillCard/SkillCard';

const SKILLS = [
  { name: 'Java', level: 'Intermediate', icon: '☕' },
  { name: 'C', level: 'Intermediate', icon: 'C' },
  { name: 'Python', level: 'Intermediate', icon: '🐍' },
  { name: 'JavaScript', level: 'Intermediate', icon: '⚡' },
  { name: 'React', level: 'Intermediate', icon: '⚛️' },
  { name: 'HTML', level: 'Advanced', icon: '🌐' }
];

function About() {
  return (
    <div className="about-page container">
      <AboutSection />

      <section
        id="skills"
        className="skills-section"
        style={{ marginTop: '40px' }}
      >
        <h2>Skills</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}
        >
          {SKILLS.map(skill => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>GitHub Activity</h2>
        <GitHubStats username="trishamadhusudhan" />
      </section>
    </div>
  );
}

export default About;