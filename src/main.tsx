import React from 'react';

import App from '@/App.tsx';
import ReactDOM from 'react-dom/client';

import '@/styles/index.css';
import '@/libs/preline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
