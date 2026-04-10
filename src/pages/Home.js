import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const navigate = useNavigate(); // ✅ routing
  const { addToCart } = useCart(); // ✅ cart

  const styles = {
    hero: {
      position: "relative",
      height: "90vh",
      overflow: "hidden",
    },
    heroImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(60%)",
    },
    heroText: {
      position: "absolute",
      top: "50%",
      left: "10%",
      transform: "translateY(-50%)",
      color: "white",
    },
    button: {
      marginTop: "15px",
      padding: "10px 20px",
      background: "black",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    sectionTitle: {
      textAlign: "center",
      margin: "40px 0 20px",
      fontSize: "2rem",
    },
    flexRow: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      width: "220px",
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
    },
    productCard: {
      width: "220px",
      textAlign: "center",
    },
  };

  // ✅ Trending products data
  const trending = [
    {
      name: "Stylish Jacket",
      price: 2200,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    },
    {
      name: "Casual T-Shirt",
      price: 800,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      name: "Denim Jeans",
      price: 1500,
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <div style={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="fashion"
          style={styles.heroImg}
        />
        <div style={styles.heroText}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Style That Defines You
          </h1>
          <p>Discover the latest trends in fashion</p>

          {/* ✅ GO TO WOMEN PAGE */}
          <button
            style={styles.button}
            onClick={() => navigate("/women")}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* CATEGORY */}
      <h2 style={styles.sectionTitle}>Shop By Category</h2>
      <div style={styles.flexRow}>
        <div style={styles.card} onClick={() => navigate("/men")}>
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="men"
            style={styles.image}
          />
          <h3>Men</h3>
        </div>

        <div style={styles.card} onClick={() => navigate("/women")}>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="women"
            style={styles.image}
          />
          <h3>Women</h3>
        </div>

        <div style={styles.card} onClick={() => navigate("/children")}>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            alt="kids"
            style={styles.image}
          />
          <h3>Kids</h3>
        </div>
      </div>

      {/* TRENDING */}
      <h2 style={styles.sectionTitle}>Trending Now</h2>
      <div style={styles.flexRow}>
        {trending.map((item, i) => (
          <div key={i} style={styles.productCard}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <p>{item.name}</p>
            <p>₹{item.price}</p>

            {/* ✅ ADD TO CART WORKING */}
            <button
              style={styles.button}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
