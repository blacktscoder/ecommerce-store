import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description:string;
}

interface HomePageProps {
  addToCart: (product: Product) => void; 
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/path/to/your/hero-image.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Welcome to Our Shop</h1>
          <p className="text-xl sm:text-2xl">Explore our exclusive collection of products</p>
        </div>
      </section>

      {/* Products Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                <div className="text-xl font-bold text-blue-600 mb-4">${product.price}</div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Shop. All rights reserved.</p>
          <p className="text-sm mt-2">Follow us on social media</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
