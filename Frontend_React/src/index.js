// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QRCodeCreationPage from './pages/QRCodeCreationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QRCodeCreationPage />
  </React.StrictMode>
);
