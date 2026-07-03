import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="App">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Bring Nature Into Your Home</p>
          <button className="get-started-btn" onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
