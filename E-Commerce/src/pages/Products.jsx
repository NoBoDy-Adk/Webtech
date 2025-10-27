import React, { useState } from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

const Products = ({ addToCart, cart }) => {
  const [selectedQty, setSelectedQty] = useState({});

  const handleQtyChange = (id, qty) => {
    setSelectedQty({ ...selectedQty, [id]: Number(qty) });
  };

  return (
    <section className="page-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => {
          const inCart = cart.find((item) => item.id === p.id);
          const qty = selectedQty[p.id] || 1;

          return (
            <div className="product-card" key={p.id}>
              <Link to={`/products/${p.id}`}>
                <img src={p.image} alt={p.name} className="product-img" />
              </Link>

              <h3>{p.name}</h3>

              {/* Star Rating */}
              <div className="rating">
                {"★".repeat(Math.floor(p.rating))}
                {"☆".repeat(5 - Math.floor(p.rating))}
              </div>

              <p className="product-price">₹{p.price}</p>

              {/* Quantity Dropdown */}
              <div className="quantity-dropdown">
                <label>Qty:</label>
                <select
                  value={qty}
                  onChange={(e) => handleQtyChange(p.id, e.target.value)}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add to Cart / Quantity Controls */}
              {!inCart ? (
                <button onClick={() => addToCart(p, qty)}>Add to Cart</button>
              ) : (
                <div className="qty-controls">
                  <button onClick={() => addToCart(p, -1)}>-</button>
                  <span>{inCart.qty}</span>
                  <button onClick={() => addToCart(p, 1)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
