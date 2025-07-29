import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

const images = [product1, product2, product3, product4, product5, product6];

const mockProducts = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: `F1 Tee ${i + 1}`,
  price: `$${30 + i * 5}`,
  image: images[i]
}));

function Product({ dabba }) {
  const navigate = useNavigate();
  return (
    <div className={dabba ? "products dark-products" : "products"}>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h1 className="product-heading">All Products</h1>
      <div className="product-grid">
        {mockProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Product;
