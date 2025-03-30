import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  easing: 'ease-out',
  offset: 50
});

// Check if the environment is set up correctly
const checkEnvironment = () => {
  try {
    // Log initialization
    console.log('Application initializing...');
    
    // Check if running in browser environment
    if (typeof window === 'undefined') {
      console.error('Application requires a browser environment');
      return false;
    }
    
    // Check if root element exists
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error('Root element not found, check your HTML template');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Environment check failed:', error);
    return false;
  }
};

// Initialize app with error handling
const initializeApp = () => {
  if (!checkEnvironment()) {
    // Display a basic error message if environment checks fail
    const errorDiv = document.createElement('div');
    errorDiv.style.padding = '20px';
    errorDiv.style.maxWidth = '600px';
    errorDiv.style.margin = '40px auto';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.fontFamily = 'sans-serif';
    errorDiv.innerHTML = `
      <h1 style="color: #d32f2f;">App Failed to Load</h1>
      <p>There was a problem initializing the application. Please check your connection and reload the page.</p>
      <button 
        style="background: #2962ff; color: white; border: none; padding: 10px 20px; margin-top: 20px; cursor: pointer; border-radius: 4px;"
        onclick="window.location.reload()"
      >
        Reload Page
      </button>
    `;
    document.body.appendChild(errorDiv);
    return;
  }

  try {
    // Initialize the app
    const root = createRoot(document.getElementById('root')!);
    root.render(
      <StrictMode>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </StrictMode>
    );
  } catch (error) {
    console.error('Failed to render application:', error);
    // If rendering fails, show error
    const errorDiv = document.createElement('div');
    errorDiv.style.padding = '20px';
    errorDiv.style.maxWidth = '600px';
    errorDiv.style.margin = '40px auto';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.fontFamily = 'sans-serif';
    errorDiv.innerHTML = `
      <h1 style="color: #d32f2f;">App Failed to Render</h1>
      <p>There was a problem rendering the application. Please check your connection and reload the page.</p>
      <button 
        style="background: #2962ff; color: white; border: none; padding: 10px 20px; margin-top: 20px; cursor: pointer; border-radius: 4px;"
        onclick="window.location.reload()"
      >
        Reload Page
      </button>
    `;
    document.body.appendChild(errorDiv);
  }
};

// Start the application
initializeApp();