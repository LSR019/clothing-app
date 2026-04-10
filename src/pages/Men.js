import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // ✅ IMPORT

const Men = () => {
  const [search, setSearch] = useState("");

  const { addToCart } = useCart(); // ✅ GET FUNCTION

  const products = [
    {
      name: "Classic T-Shirt",
      price: 500,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      name: "Denim Jeans",
      price: 1200,
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
    {
      name: "Leather Jacket",
      price: 2500,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    },
    {
      name: "Formal Shirt",
      price: 900,
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
    },
  ];

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    searchBar: {
      display: "block",
      margin: "0 auto 30px",
      padding: "10px",
      width: "300px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    card: {
      width: "220px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      cursor: "pointer",
      transition: "transform 0.3s",
      background: "#fff",
    },
    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },
    content: {
      padding: "10px",
      textAlign: "center",
    },
    button: {
      marginTop: "10px",
      padding: "8px 15px",
      background: "black",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Men's Collection</h2>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search for clothing..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchBar}
      />

      {/* PRODUCT GRID */}
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
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img src={p.image} alt={p.name} style={styles.image} />

              <div style={styles.content}>
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>

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

export default Men;
