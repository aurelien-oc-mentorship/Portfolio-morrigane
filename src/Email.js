document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('contactForm');
  const validationMessage = document.getElementById('validationMessage');

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Empêche l'envoi réel du formulaire

      // Récupère les données du formulaire
      const formData = new FormData(form);

      // Utilise EmailJS pour envoyer l'email
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
      })
      .then(() => {
          validationMessage.style.display = 'block';
          form.reset();
      }, (error) => {
          console.error('Échec de l\'envoi du message:', error);
      });
  });
});
