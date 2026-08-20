import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div className='contact-page container'>
      <section id='contact' className='contact-section' style={{ padding: '40px 0' }}>
        <h1>Contact Me</h1>
        <p>If you'd like to work together, feel free to reach out using the form below.</p>
        <ContactForm />
        <div style={{ marginTop: '30px' }}>
          <Link to='/' className='btn btn-secondary'>Back to Home</Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;

