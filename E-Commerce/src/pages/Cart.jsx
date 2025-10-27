import { useNavigate } from "react-router-dom";
import React from "react";

const Cart = ({ cart, increaseQty, decreaseQty, removeFromCart }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <section className="page-section">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="cart-actions">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="cart-total">Total: ₹{totalPrice.toLocaleString()}</h3>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
