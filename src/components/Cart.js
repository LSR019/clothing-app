import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))
      )}
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;