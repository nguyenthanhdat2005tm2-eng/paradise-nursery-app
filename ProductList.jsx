import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plants = [
  { category: 'Air Purifying', name: 'Snake Plant', price: 15, image: 'url_to_image' },
  { category: 'Air Purifying', name: 'Spider Plant', price: 12, image: 'url_to_image' },
  { category: 'Low Maintenance', name: 'ZZ Plant', price: 18, image: 'url_to_image' },
  { category: 'Low Maintenance', name: 'Pothos', price: 10, image: 'url_to_image' },
  { category: 'Pet Friendly', name: 'Boston Fern', price: 14, image: 'url_to_image' },
  { category: 'Pet Friendly', name: 'Parlor Palm', price: 16, image: 'url_to_image' },
];

const ProductList = () => {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee' }}>
        <div>Paradise Nursery</div>
        <div>
          <button onClick={() => setShowCart(false)}>Plants</button>
          <button onClick={() => setShowCart(true)}>Cart ({totalCartItems})</button>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-list">
          <h2>Our Plants</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {plants.map((plant, index) => {
              const isAdded = cartItems.some(item => item.name === plant.name);
              return (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
                  <img src={plant.image} alt={plant.name} style={{ width: '100px', height: '100px' }} />
                  <h3>{plant.name}</h3>
                  <p>Category: {plant.category}</p>
                  <p>${plant.price}</p>
                  <button disabled={isAdded} onClick={() => handleAddToCart(plant)}>
                    {isAdded ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
