/* 가장 바깥 index.js */
import 'styles/global.css'; // 기본 css
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
