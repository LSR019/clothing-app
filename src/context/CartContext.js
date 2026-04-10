import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add to cart
  const addToCart = (item) => {
    console.log("Adding:", item);
    setCart((prev) => [...prev, item]);
  };

  // ✅ Remove from cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart, // ✅ IMPORTANT: include this
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom hook
export const useCart = () => useContext(CartContext);
