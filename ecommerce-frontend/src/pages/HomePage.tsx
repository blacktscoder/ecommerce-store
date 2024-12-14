// pages/HomePage.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';

type HomePageProps = {
  addToCart: (product: any) => void;
};

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 200, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 300, image: '/images/product3.jpg' },
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around', // Distribute items with space between them
      gap: '20px', // Add some space between items
      padding: '20px'
    }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: '50px', 
            textAlign: 'center',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box', // Include padding/border in width
          }}
        >
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
