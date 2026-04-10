import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext"; // ✅ import

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Children from "./pages/Children";
import Cart from "./pages/Cart";

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
        </Routes>

      </Router>
    </CartProvider>
  );
}

export default App;
