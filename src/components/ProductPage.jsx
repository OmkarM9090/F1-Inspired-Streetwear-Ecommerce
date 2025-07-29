import React, { useState } from "react";
import "./ProductPage.css";
import { useParams, useNavigate } from "react-router-dom";

// Import all 6 product images (make sure these exist in /assets)
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

const images = [product1, product2, product3, product4, product5, product6];

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: `F1 Tee ${i + 1}`,
  price: `$${30 + i * 5}`,
  image: images[i]
}));

function ProductPage({ dabba }) {
  const [query, setQuery] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={dabba ? "productpage dark-productpage" : "productpage"}>
      <button className="back-btn" onClick={() => navigate("/")}>← Back to Home</button>

      <h1 className="productpage-title">Product Search</h1>
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="product-search"
      />

      {filtered.length === 0 ? (
        <p className="empty-msg">No products found.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
