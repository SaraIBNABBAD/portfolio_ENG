import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './componant/NAV/nav';
import Portfolio from './componant/portfolio';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Portfolio/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

