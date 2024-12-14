const fetch = require('node-fetch');  // Old version works with require

module.exports.getProducts = async (event) => {
  try {
    // Fetch product data from the Fake Store API
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.error('Error fetching products:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch products' }),
    };
  }
};

module.exports.getProductById = async (event) => {
  const { id } = event.pathParameters;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
};
module.exports.createProduct = async (event) => {
  const newProduct = JSON.parse(event.body);  // Get product data from request body
  // In a real app, you'd save this to a database, e.g., DynamoDB
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProduct),
  });

  const createdProduct = await response.json();

  return {
    statusCode: 201,
    body: JSON.stringify(createdProduct),
  };
};
