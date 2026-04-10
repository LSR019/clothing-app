import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Men = () => {
  const [search, setSearch] = useState("");

  const products = [
    { name: "T-Shirt", price: 500 },
    { name: "Jeans", price: 1200 },
  ];

  return (
    <div>
      <h2>Men Clothing</h2>
      <SearchBar onSearch={setSearch} />

      {products
        .filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
    </div>
  );
};

export default Men;