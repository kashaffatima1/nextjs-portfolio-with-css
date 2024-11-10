import React from 'react';
import '../Component/Contact.css';

const ContactForm: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-title-wrapper">
          <h1 className="contact-title">Contact</h1>
        </div>
        <form className="contact-form">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input type="text" id="name" name="name" className="contact-input" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input type="email" id="email" name="email" className="contact-input" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea id="message" name="message" className="contact-textarea" rows={5}></textarea>
          </div>
          <button type="submit" className="contact-btn duration-300">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
