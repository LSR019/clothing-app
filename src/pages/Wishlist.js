import React from "react";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Wishlist ❤️</h2>

      {wishlist.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <button onClick={() => removeFromWishlist(item.name)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
