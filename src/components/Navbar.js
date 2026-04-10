import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "black",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
    links: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "1rem",
      padding: "6px 12px",
      borderRadius: "5px",
      transition: "all 0.3s ease",
    },
    cartBadge: {
      background: "#ff3f6c",
      borderRadius: "50%",
      padding: "3px 8px",
      fontSize: "0.8rem",
      marginLeft: "5px",
    },
  };

  const handleHover = (e) => {
    e.currentTarget.style.background = "white";
    e.currentTarget.style.color = "black";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "white";
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Clothing Store</h2>

      <div style={styles.links}>
        {/* ✅ Apply same styling everywhere */}
        <Link
          to="/login"
          style={styles.link}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Login
        </Link>

        <Link
          to="/signup"
          style={styles.link}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Signup
        </Link>

        <Link
          to="/"
          style={styles.link}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Home
        </Link>

        <Link
          to="/men"
          style={styles.link}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Men
        </Link>

        <Link
          to="/women"
          style={styles.link}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Women
        </Link>

        <Link
          to="/children"
          style={styles.link}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Children
        </Link>

        {/* 🛒 Cart */}
        <Link
          to="/cart"
          style={styles.link}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Cart
          {cart.length > 0 && (
            <span style={styles.cartBadge}>{cart.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
