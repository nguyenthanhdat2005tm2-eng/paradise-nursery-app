import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      {cartItems.map((item, index) => (
        <div key={index} style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #ccc', padding: '10px' }}>
          <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <div>
              <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1}>-</button>
              <span> {item.quantity} </span>
              <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
            </div>
            <button onClick={() => dispatch(removeItem(item.name))} style={{ color: 'red', marginTop: '10px' }}>Delete</button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <button onClick={onContinueShopping}>Continue Shopping</button>
        <button onClick={() => alert('Coming Soon')} style={{ marginLeft: '10px' }}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
