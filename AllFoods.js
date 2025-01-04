import React, { useState } from 'react';
import FoodInfo from './FoodInfo';
import './AllFoods.css'; // Import the CSS file for the page

const AllFoods = ({ cart = [], setCart }) => { // Default cart to an empty array
  const [items] = useState(FoodInfo);
  const [clickedCard, setClickedCard] = useState(null); // Track clicked card to apply tilt effect

  // Handle clicking a food item
  const handleClick = (id) => {
    setClickedCard(id); // Set the clicked card to apply the tilt effect
  };

  return (
    <div className="main-content">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Food Menu</h1>
        <ul className="navbar-links">
          <li>
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li>
            <a href="/AllFoods" className="navbar-link">All Foods</a>
          </li>
          <li>
            <a href="/FoodCart" className="navbar-link">FoodCart</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="food-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`food-item ${clickedCard === item.id ? 'tilt' : ''}`} // Apply 'tilt' class on click
            onClick={() => handleClick(item.id)}
          >
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p>Rs. {item.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the tilt effect
                // Ensure cart is an array before adding item
                if (Array.isArray(cart) && !cart.some((c) => c.id === item.id)) {
                  setCart([...cart, item]); // Add item to cart
                }
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 FoodMenu App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AllFoods;
