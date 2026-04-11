import React from "react";
import { useCart } from "../context/CartContext";

const Orders = () => {
  const { orders } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Order History 🧾</h2>

      {orders.map((order, i) => (
        <div key={i}>
          <p>Date: {order.date.toString()}</p>
          {order.items.map((item, j) => (
            <p key={j}>{item.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;
