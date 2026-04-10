import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // ✅ IMPORT

const Children = () => {
  const [search, setSearch] = useState("");

  const { addToCart } = useCart(); // ✅ GET FUNCTION

  const products = [
    {
      name: "Kids T-Shirt",
      price: 400,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Cute Dress",
      price: 900,
      image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Kids Hoodie",
      price: 1200,
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Denim Shorts",
      price: 700,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Comic Sans MS, cursive",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "10px",
      color: "#ff6f61",
    },
    subtitle: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#444",
    },
    searchBar: {
      display: "block",
      margin: "0 auto 30px",
      padding: "12px",
      width: "300px",
      borderRadius: "25px",
      border: "2px solid #ff6f61",
      outline: "none",
      fontSize: "1rem",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "25px",
    },
    card: {
      width: "220px",
      borderRadius: "20px",
      overflow: "hidden",
      background: "white",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    image: {
      width: "100%",
      height: "240px",
      objectFit: "cover",
    },
    content: {
      padding: "12px",
      textAlign: "center",
    },
    price: {
      color: "#ff6f61",
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
    button: {
      marginTop: "10px",
      padding: "8px 15px",
      background: "#ff6f61",
      color: "white",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Kids Collection 🎈</h2>
      <p style={styles.subtitle}>Fun, colorful & comfy styles for kids</p>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search fun outfits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchBar}
      />

      {/* PRODUCTS */}
      <div style={styles.grid}>
        {products
          .filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((p, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img src={p.image} alt={p.name} style={styles.image} />

              <div style={styles.content}>
                <h3>{p.name}</h3>
                <p style={styles.price}>₹{p.price}</p>

                {/* ✅ FIXED BUTTON */}
                <button
                  style={styles.button}
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Children;
