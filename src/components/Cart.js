import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} style={{ marginBottom: "15px" }}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button onClick={() => decreaseQty(item.name)}>➖</button>
              <span> {item.qty} </span>
              <button onClick={() => increaseQty(item.name)}>➕</button>

              <button onClick={() => removeFromCart(item.name)}>
                🗑 Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
