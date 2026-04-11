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

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial",
      background: "#f8f9fa",
      minHeight: "100vh",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      textAlign: "center",
    },
    card: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    image: {
      width: "100px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    details: {
      flex: 1,
    },
    name: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    price: {
      color: "#555",
      margin: "5px 0",
    },
    qtyBox: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "10px",
    },
    btn: {
      padding: "5px 10px",
      border: "none",
      background: "#ddd",
      cursor: "pointer",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    removeBtn: {
      background: "#ff4d4d",
      color: "white",
      border: "none",
      padding: "6px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    total: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "20px",
    },
    checkout: {
      display: "block",
      margin: "20px auto",
      padding: "12px 20px",
      background: "#ff3f6c",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty 😢</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} style={styles.card}>
              
              {/* ✅ IMAGE */}
              <img src={item.image} alt={item.name} style={styles.image} />

              {/* DETAILS */}
              <div style={styles.details}>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.price}>₹{item.price}</div>

                {/* QUANTITY */}
                <div style={styles.qtyBox}>
                  <button
                    style={styles.btn}
                    onClick={() => decreaseQty(item.name)}
                  >
                    ➖
                  </button>

                  <span>{item.qty}</span>

                  <button
                    style={styles.btn}
                    onClick={() => increaseQty(item.name)}
                  >
                    ➕
                  </button>
                </div>
              </div>

              {/* REMOVE */}
              <button
                style={styles.removeBtn}
                onClick={() => removeFromCart(item.name)}
              >
                🗑
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div style={styles.total}>Total: ₹{total}</div>

          <Link to="/checkout">
            <button style={styles.checkout}>
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
