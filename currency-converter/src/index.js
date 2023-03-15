import React from 'react';
import ReactDOM from 'react-dom/client';
/*import './index.css';*/
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const main = ReactDOM.createRoot(document.getElementById('my-main'));
main.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>

);

const footer = ReactDOM.createRoot(document.getElementById('my-footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
