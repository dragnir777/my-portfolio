import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

console.log('main.jsx loading...');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log('Root created, rendering App...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App rendered successfully');
} else {
  console.error('Root element not found!');
}