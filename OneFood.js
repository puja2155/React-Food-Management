import React from 'react';

const OneFood = ({item,cart,setCart}) => {
  const {id,name,image,price} = item;

  // Safeguard: Ensure cart is an array before calling .some
  const isInCart = Array.isArray(cart) && cart.some((c) => c.id === id);

  return (
    <div>
      <h1>
        {id} - {name}
      </h1>
      <h3>Rs. {price}</h3>
      <img height={150} width={150} src={image} alt="Food Item" />

      {isInCart ? (
        <button
          onClick={() => {
            if (Array.isArray(cart)) {
              setCart(cart.filter((c) => c.id !== id)); // Remove item from cart
            }
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => {
            if (Array.isArray(cart)) {
              setCart([...cart,item]); // Add item to cart
            }
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default OneFood;
