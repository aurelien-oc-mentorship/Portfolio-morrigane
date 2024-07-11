import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App'; // Assurez-vous d'importer le composant App depuis le bon chemin

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);