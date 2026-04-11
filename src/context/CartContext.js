import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  // 🛒 ADD TO CART (with quantity)
  const addToCart = (item) => {
    const exist = cart.find((i) => i.name === item.name);

    if (exist) {
      setCart(
        cart.map((i) =>
          i.name === item.name
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  // ➕ INCREASE QTY
  const increaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ❤️ WISHLIST
  const addToWishlist = (item) => {
    if (!wishlist.find((i) => i.name === item.name)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (name) => {
    setWishlist(wishlist.filter((i) => i.name !== name));
  };

  // 🧾 PLACE ORDER
const placeOrder = () => {
  setOrders((prev) => [
    ...prev,
    {
      items: cart,
      date: new Date().toISOString(), // ✅ SAFE DATE
    },
  ]);

  setCart([]);
};

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        orders,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        addToWishlist,
        removeFromWishlist,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
