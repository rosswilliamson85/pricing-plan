import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/reset.css';
import './css/main.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
 <Home />
   
  </React.StrictMode>
);


reportWebVitals();
