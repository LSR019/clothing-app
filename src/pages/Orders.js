import React from "react";
import { useCart } from "../context/CartContext";

const Orders = () => {
  const { orders } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Order History 🧾</h2>

      {!orders || orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h4>Order {i + 1}</h4>

            {/* FIX DATE CRASH */}
            <p>
              Date:{" "}
              {order.date
                ? new Date(order.date).toLocaleString()
                : "No date"}
            </p>

            {/* FIX ITEMS CRASH */}
            {order.items && order.items.length > 0 ? (
              order.items.map((item, j) => (
                <p key={j}>
                  {item.name} (x{item.qty})
                </p>
              ))
            ) : (
              <p>No items</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
