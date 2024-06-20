const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Pour gérer les variables d'environnement

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Configurez le transporteur de nodemailer
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Remplacez par votre serveur SMTP
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Adresse email
      pass: process.env.EMAIL_PASS, // Mot de passe
    },
  });

  // Contenu de l'email
  let mailOptions = {
    from: `${name} <${email}>`,
    to: 'morriganegb@gmail.com', // Adresse email de destination
    subject: 'Nouveau message de votre portfolio',
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erreur lors de l\'envoi du message');
    }
    res.status(200).send('Message envoyé avec succès');
  });
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
