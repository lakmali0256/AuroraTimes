import React from "react";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Citizen Axiom",
      price: 350,
      quantity: 1,
      image: "./upload/x1.webp",
    },
    {
      id: 2,
      name: "Citizen Eco-Drive",
      price: 400,
      quantity: 2,
      image: "./upload/x2.webp",
    },
    {
      id: 3,
      name: "Citizen Promaster",
      price: 450,
      quantity: 1,
      image: "./upload/x3.webp",
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="item-total">
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total Items: {cartItems.length}</p>
        <h3>Total Price: ${calculateTotal()}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
