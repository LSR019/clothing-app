import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, placeOrder } = useCart();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
  });

const handleOrder = () => {
  console.log("ORDER CLICKED");

  if (!user.name || !user.address || !user.phone) {
    alert("Fill all details ❌");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty 🛒");
    return;
  }

placeOrder();

alert("🎉 Your order is placed successfully!");

navigate("/orders");
};

  return (
    <div style={{ padding: "30px" }}>
      <h2>Checkout</h2>

      <input
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br />

      <input
        placeholder="Address"
        onChange={(e) => setUser({ ...user, address: e.target.value })}
      />
      <br />

      <input
        placeholder="Phone"
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <br />

      <button
        onClick={() => {
          console.log("CLICKED");
          handleOrder();
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;

