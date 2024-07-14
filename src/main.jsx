import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import { BasketContextProvider } from './context/BasketContext.jsx';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BasketContextProvider>
      <App />
    </BasketContextProvider>
  </BrowserRouter>
);
