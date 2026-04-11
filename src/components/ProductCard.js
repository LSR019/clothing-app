import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

import { useCart } from "../context/CartContext";

const { addToWishlist } = useCart();

<button onClick={() => addToWishlist(p)}>
  ❤️ Wishlist
</button>

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
