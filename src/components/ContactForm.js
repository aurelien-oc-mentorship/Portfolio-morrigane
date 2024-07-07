import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setConfirmationMessage('Votre message a bien été envoyé.');
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <div>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
        
        <input type="submit" value="Envoyer" className="submit-button" />
      </form>
      
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
}

export default ContactForm;
