import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface HomePageProps {
  addToCart: (product: Product) => void; // Define the addToCart prop here
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://s1ke6bwshb.execute-api.us-east-1.amazonaws.com/dev/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '10px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '500px', height: '500px', objectFit: 'cover' }}
            />
            <div>{product.name}</div>
            <div>${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
