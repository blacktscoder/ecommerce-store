import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
  cart: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (item: string) => setCart([...cart, item]);
  const removeFromCart = (item: string) => setCart(cart.filter(cartItem => cartItem !== item));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
