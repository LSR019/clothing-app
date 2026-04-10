import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Clothing Store</h2>
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/children">Children</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;