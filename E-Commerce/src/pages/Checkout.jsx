import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "COD",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`✅ Order placed successfully!\nThank you, ${formData.name}!`);
    setCart([]); // 🧹 Clear the cart
    navigate("/"); // 🔁 Redirect to Home
  };

  return (
    <section className="page-section">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Delivery Address</label>
          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Payment Method</label>
          <select name="payment" value={formData.payment} onChange={handleChange}>
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Card">Credit/Debit Card</option>
          </select>

          <h3>Total: ₹{total.toLocaleString()}</h3>
          <button type="submit" className="checkout-btn">
            Confirm Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
