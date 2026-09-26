
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './styles/global.css';

const showRuntimeError = (title, error) => {
  const existing = document.getElementById('runtime-error-overlay');

  if (existing) {
    existing.remove();
  }

  const overlay = document.createElement('div');

  overlay.id = 'runtime-error-overlay';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 999999;
    padding: 24px;
    overflow: auto;
    background: #111;
    color: #ff6b6b;
    font-family: monospace;
    font-size: 14px;
    line-height: 1.6;
    white-space: pre-wrap;
  `;

  overlay.textContent = `${title}\n\n${
    error?.stack || error?.message || String(error)
  }`;

  document.body.appendChild(overlay);
};

window.addEventListener('error', (event) => {
  showRuntimeError('JavaScript Runtime Error', event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  showRuntimeError('Unhandled Promise Error', event.reason);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

