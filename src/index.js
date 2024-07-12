import React from 'react';
import App from './App'; // Assurez-vous que le chemin est correct
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
