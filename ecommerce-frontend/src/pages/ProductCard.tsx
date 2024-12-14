// components/ProductCard.tsx
import React from 'react';

type ProductCardProps = {
  product: { id: number; name: string; price: number; image: string };
  addToCart: (product: any) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '50px',  
          height: '50px', // Set height to 500px
          objectFit: 'cover',  // Ensure the image covers the container without distortion
          borderRadius: '8px',
        }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
