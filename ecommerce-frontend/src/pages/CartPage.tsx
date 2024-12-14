import React from 'react';

type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartPageProps = {
  cartItems: CartItemType[];
  removeFromCart: (id: number) => void;
};

const CartPage: React.FC<CartPageProps> = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              border: '1px solid #ddd',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            <div>{item.name}</div>
            <div>
              ${item.price} x {item.quantity}
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <div>
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default CartPage;
