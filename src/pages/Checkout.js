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

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const styles = {
    container: {
      padding: "40px",
      background: "#f8f9fa",
      minHeight: "100vh",
      fontFamily: "Arial",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    layout: {
      display: "flex",
      gap: "30px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    box: {
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      width: "400px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    item: {
      display: "flex",
      gap: "15px",
      marginBottom: "15px",
      alignItems: "center",
    },
    img: {
      width: "60px",
      height: "80px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    total: {
      marginTop: "15px",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
    button: {
      width: "100%",
      marginTop: "20px",
      padding: "14px",
      background: "#ff3f6c",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  const handleOrder = () => {
    if (!user.name || !user.address || !user.phone) {
      alert("Fill all details ❌");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty 🛒");
      return;
    }

    placeOrder();
    alert("🎉 Your order is placed!");

    navigate("/orders");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout 🧾</h2>

      <div style={styles.layout}>
        
        {/* LEFT: USER DETAILS */}
        <div style={styles.box}>
          <h3>Shipping Details</h3>

          <input
            style={styles.input}
            placeholder="Full Name"
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <input
            style={styles.input}
            placeholder="Address"
            onChange={(e) =>
              setUser({ ...user, address: e.target.value })
            }
          />

          <input
            style={styles.input}
            placeholder="Phone Number"
            onChange={(e) =>
              setUser({ ...user, phone: e.target.value })
            }
          />

          <button style={styles.button} onClick={handleOrder}>
            🚀 Place Order
          </button>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div style={styles.box}>
          <h3>Order Summary</h3>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={styles.item}>
                <img src={item.image} alt="" style={styles.img} />

                <div>
                  <p style={{ fontWeight: "bold" }}>
                    {item.name}
                  </p>
                  <p>₹{item.price}</p>
                  <p>Qty: {item.qty || 1}</p>
                </div>
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
