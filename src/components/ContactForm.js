import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire au backend
    fetch('http://localhost:3000/send_mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(error => {
      console.error('There was an error!', error);

    });
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
      <input type="submit" value="Send" className="submit-button" />
    </form>
  );
}

export default ContactForm;
