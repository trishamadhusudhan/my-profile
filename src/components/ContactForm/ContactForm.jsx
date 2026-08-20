import React, { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
    const [fields, setFields] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', or 'success'

    function handleChange(event) {
        const { name, value } = event.target;
        setFields(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    }

    function validateForm() {
        const newErrors = {};

        if (!fields.name.trim()) {
            newErrors.name = 'Name is required !';
        }

        if (!fields.email.includes('@')) {
            newErrors.email = 'Enter a valid email !';
        }

        if (fields.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters !';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 3000));

        setStatus('success');
        setFields({ name: '', email: '', message: '' });

        setTimeout(() => {
            setStatus('idle');
        }, 3000);
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className='contact-form' noValidate>
          <div className={"form-group" + (errors.name ? ' invalid' : '')}>
              <label>Name</label>
              <input
                name='name'
                type='text'
                value={fields.name}
                onChange={handleChange}
              />
              {errors.name && <p className='form-error'>{errors.name}</p>}
          </div>
          <div className={"form-group" + (errors.email ? ' invalid' : '')}>
              <label>Email</label>
              <input
                name='email'
                type='email'
                value={fields.email}
                onChange={handleChange}
              />
              {errors.email && <p className='form-error'>{errors.email}</p>}
          </div>
          <div className={"form-group" + (errors.message ? ' invalid' : '')}>
              <label>Message</label>
              <textarea
                name='message'
                rows='5'
                value={fields.message}
                onChange={handleChange}
              />
              {errors.message && <p className='form-error'>{errors.message}</p>}
          </div>
          <button type="submit" disabled={status === 'sending'} className="btn btn-primary">
              {status === 'sending'
                ? 'Sending...'
                : status === 'success'
                ? '✅ Message Sent !'
                : 'Send Message 🚀'}
          </button>
          {status === 'success' && <p className='form-success'>Your message has been sent.</p>}
        </form>
      </div>
    )
}

export default ContactForm
