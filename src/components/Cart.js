import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

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
    link: {
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Cart 🛍️</h2>

      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty 😢</p>
      ) : (
        <div style={styles.layout}>
          {/* LEFT: ITEMS */}
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
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: SUMMARY */}
          <div style={styles.summarySection}>
            <h3>Price Details</h3>
            <p>Total Items: {cart.length}</p>
            <h2 style={{ marginTop: "10px" }}>₹{total}</h2>

            <Link to="/checkout" style={styles.link}>
              <button style={styles.button}>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
