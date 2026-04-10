import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      background: "#f5f5f6",
      minHeight: "100vh",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    layout: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
    },
    itemsSection: {
      flex: 2,
    },
    summarySection: {
      flex: 1,
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      height: "fit-content",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    card: {
      display: "flex",
      gap: "15px",
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      alignItems: "center",
    },
    image: {
      width: "100px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    details: {
      flex: 1,
    },
    name: {
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
    price: {
      color: "#ff3f6c",
      marginTop: "5px",
      fontWeight: "bold",
    },
    removeBtn: {
      marginTop: "8px",
      padding: "6px 10px",
      background: "#333",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
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
    empty: {
      textAlign: "center",
      marginTop: "50px",
      fontSize: "1.2rem",
    },

    // ✅ POPUP STYLES
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    popup: {
      background: "white",
      padding: "25px",
      borderRadius: "10px",
      textAlign: "center",
      width: "300px",
    },
    popupBtn: {
      marginTop: "15px",
      padding: "8px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      background: "#ff3f6c",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Cart 🛍️</h2>

      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty 😢</p>
      ) : (
        <div style={styles.layout}>
          <div style={styles.itemsSection}>
            {cart.map((item, index) => (
              <div key={index} style={styles.card}>
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/100x120?text=Product"
                  }
                  alt={item.name}
                  style={styles.image}
                />

                <div style={styles.details}>
                  <p style={styles.name}>{item.name}</p>
                  <p style={styles.price}>₹{item.price}</p>

                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summarySection}>
            <h3>Price Details</h3>
            <p>Total Items: {cart.length}</p>
            <h2 style={{ marginTop: "10px" }}>₹{total}</h2>

            {/* ✅ POPUP TRIGGER */}
            <button
              style={styles.button}
              onClick={() => setShowPopup(true)}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* ✅ POPUP UI */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h3>Order Placed 🎉</h3>
            <p>Your order has been successfully placed.</p>

            <button
              style={styles.popupBtn}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
