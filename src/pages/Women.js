import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // ✅ IMPORT

const Women = () => {
  const [search, setSearch] = useState("");

  const { addToCart } = useCart(); // ✅ GET FUNCTION

  const products = [
    {
      name: "Floral Dress",
      price: 1500,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Summer Top",
      price: 700,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Elegant Saree",
      price: 2500,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Stylish Handbag",
      price: 1800,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      background: "#fff5f7",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "10px",
      color: "#d63384",
    },
    subtitle: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#555",
    },
    searchBar: {
      display: "block",
      margin: "0 auto 30px",
      padding: "12px",
      width: "300px",
      borderRadius: "20px",
      border: "1px solid #f8cdda",
      outline: "none",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "25px",
    },
    card: {
      width: "230px",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      background: "white",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    image: {
      width: "100%",
      height: "260px",
      objectFit: "cover",
    },
    content: {
      padding: "12px",
      textAlign: "center",
    },
    price: {
      color: "#d63384",
      fontWeight: "bold",
    },
    button: {
      marginTop: "10px",
      padding: "8px 15px",
      background: "#d63384",
      color: "white",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Women's Collection</h2>
      <p style={styles.subtitle}>Elegance meets modern fashion</p>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search for styles..."
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
                (e.currentTarget.style.transform = "scale(1.05)")
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

export default Women;
