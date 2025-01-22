import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
);
