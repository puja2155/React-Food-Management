import React, { useEffect, useState } from 'react';
import OneFood from './OneFood';

const FoodCart = ({cart=[],setCart}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Safeguard: Ensure cart is an array before reducing
    if (Array.isArray(cart)) {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price || 0), 0));
    }
  }, [cart]);

  return (
    <div>
      <h1>Cart Value: Rs. {total} /-</h1>
      {/* Safeguard: Ensure cart is an array */}
      {Array.isArray(cart) &&
        cart.map((item) => (
          <OneFood
            key={item.id}
            item={item}
            cart={cart}
            setCart={setCart}
          />
        ))}
    </div>
  );
};

export default FoodCart;
