import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext"; // ✅ import

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Children from "./pages/Children";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <CartProvider> {/* ✅ Wrap EVERYTHING */}
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/children" element={<Children />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="/orders" element={<Orders />} />
<Route path="/checkout" element={<Checkout />} />
        </Routes>

      </Router>
    </CartProvider>
  );
}

export default App;
