import './AboutSection.css';
import photo from '../../assets/photo.jpeg';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src={photo} alt="Trisha" />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Trisha M, a computer science engineering student with a growing interest in cybersecurity, artificial intelligence and software development.
            I enjoy exploring new technologies and building secure, intelligent solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
