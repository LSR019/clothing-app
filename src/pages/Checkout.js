import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const { cart, placeOrder } = useCart();

const handleOrder = () => {
  if (!user.name || !user.address || !user.phone) {
    alert("Please fill all details ❌");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty 🛒");
    return;
  }

  // ✅ Save order
  placeOrder();

  // ✅ Success message
  alert("🎉 Your order is placed successfully!");

  // ✅ Redirect
  navigate("/orders");
};

const Checkout = () => {
  const { cart } = useCart();

  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      background: "#f8f9fa",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "30px",
    },
    layout: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    form: {
      flex: "1",
      minWidth: "300px",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    summary: {
      flex: "1",
      minWidth: "300px",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    total: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginTop: "20px",
    },
    button: {
      marginTop: "20px",
      width: "100%",
      padding: "12px",
      background: "#ff3f6c",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
    },
  };

  const handleOrder = () => {
    if (!user.name || !user.address || !user.phone) {
      alert("Please fill all details ❌");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty 🛒");
      return;
    }

    alert("Order Placed Successfully 🎉");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout 🧾</h2>

      <div style={styles.layout}>
        
        {/* LEFT: USER FORM */}
        <div style={styles.form}>
          <h3>Shipping Details</h3>

          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Address"
            style={styles.input}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />

          <input
            type="number"
            placeholder="Phone Number"
            style={styles.input}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />

          <button style={styles.button} onClick={handleOrder}>
            Place Order
          </button>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div style={styles.summary}>
          <h3>Order Summary</h3>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={styles.item}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))
          )}

          <div style={styles.total}>Total: ₹{total}</div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;

