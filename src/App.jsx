import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Products from './components/Products';
import Cart from './components/Cart';
import CollectionDetails from './components/CollectionDetails';

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory">
      <section id="home" className="snap-start">
        <Hero />
      </section>
      <section id="collections" className="snap-start">
        <Collections />
      </section>
      <section id="products" className="snap-start">
        <Products />
      </section>
    </div>
  );
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <CartProvider>
      <div className="antialiased bg-[#0A0A0A] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection/:slug" element={<CollectionDetails />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
