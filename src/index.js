import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context/AppContext';
import './index.css';

// Using HashRouter for GitHub Pages compatibility
// URLs will look like: https://username.github.io/edusuite-app/#/students
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>
  </React.StrictMode>
);
