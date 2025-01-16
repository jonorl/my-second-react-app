import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import TellTime from './Clock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TellTime />
    <App />
  </React.StrictMode>,
);
