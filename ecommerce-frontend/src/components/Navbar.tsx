// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
      <Link to="/cart" style={{ color: '#fff' }}>Cart</Link>
    </nav>
  );
};

export default Navbar;
