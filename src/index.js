import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot depuis "react-dom/client"
import App from './App'; // Assurez-vous d'importer le composant App depuis le bon chemin

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
