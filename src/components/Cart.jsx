import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const initialCart = [
  { id: 1, name: "F1 Tee 1", price: 30, qty: 1 },
  { id: 2, name: "F1 Tee 2", price: 35, qty: 2 }
];

function Cart({ dabba }) {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const updateQty = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className={dabba ? "cart dark-cart" : "cart"}>
      <div style={{ padding: "20px" }}>
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      </div>
      <h1 className="cart-title">Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <div className="cart-controls">
            <button onClick={() => updateQty(item.id, -1)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, 1)}>+</button>
          </div>
          <span>${item.price * item.qty}</span>
        </div>
      ))}
      <hr />
      <div className="subtotal">Subtotal: ${subtotal}</div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;