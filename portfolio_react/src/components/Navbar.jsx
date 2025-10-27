import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Aadhithya V M</div>
    <ul>
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/skills">Skills</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/education">Education</NavLink></li>
      <li><NavLink to="/experience">Experience</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
