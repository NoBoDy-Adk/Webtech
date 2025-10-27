import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopEase</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart ({cartCount > 0 && <span className="cart-badge">{cartCount}</span>})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
