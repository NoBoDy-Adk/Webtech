import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ProductDetails = ({ addToCart, cart, increaseQty, decreaseQty }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedQty, setSelectedQty] = useState(1);

  if (!product) {
    return (
      <div className="page-section">
        <h2>Product Not Found</h2>
        <Link to="/products" className="back-link">← Back to Products</Link>
      </div>
    );
  }

  const inCart = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedQty);
  };

  return (
    <section className="page-section product-details">
      <img src={product.image} alt={product.name} className="detail-img" />
      <h2>{product.name}</h2>

      {/* Rating */}
      <div className="rating">
        {"★".repeat(Math.floor(product.rating))}
        {"☆".repeat(5 - Math.floor(product.rating))}
      </div>

      <p className="price">₹{product.price}</p>
      <p>{product.description}</p>

      {/* Quantity Selector */}
      {!inCart ? (
        <div>
          <div className="quantity-section">
            <label>Quantity:</label>
            <select
              value={selectedQty}
              onChange={(e) => setSelectedQty(Number(e.target.value))}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <div className="qty-controls">
          <button onClick={() => decreaseQty(product.id)}>-</button>
          <span>{inCart.qty}</span>
          <button onClick={() => increaseQty(product.id)}>+</button>
        </div>
      )}

      {/* Customer Reviews */}
      <h3 style={{ marginTop: "30px" }}>Customer Reviews</h3>
      <ul className="reviews">
        {product.reviews.map((r, index) => (
          <li key={index}>💬 {r}</li>
        ))}
      </ul>

      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>
    </section>
  );
};

export default ProductDetails;
