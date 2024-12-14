// src/pages/ProductPage.tsx (Page)
import React from 'react';
import styled from 'styled-components';

const ProductPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductPage: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', image: '/images/product1.jpg' },
    { id: 3, name: 'Product 3', image: '/images/product1.jpg' },
  ];

  return (
    <ProductPageWrapper>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </ProductCard>
      ))}
    </ProductPageWrapper>
  );
};

export default ProductPage;
