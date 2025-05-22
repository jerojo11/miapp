import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ruta corregida: App.jsx está en el mismo directorio que main.jsx

// Crea un contenedor raíz para tu aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente principal de la aplicación dentro del contenedor raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
