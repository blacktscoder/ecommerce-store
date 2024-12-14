import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import Navbar from '../components/Navbar';

const AppRouter: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
