import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import './index.css';
import App from "./App.js"
import { BrowserRouter as Router } from 'react-router-dom';
// import serve from 'serve';


// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root');
render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>  , root
);
