import React from 'react';
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="text-lg font-semibold mt-2">{product.name}</div>
      <div className="text-gray-700 font-medium">${product.price}</div>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
