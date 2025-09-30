import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css'; // Import global CSS with Tailwind
import App from './App';

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);