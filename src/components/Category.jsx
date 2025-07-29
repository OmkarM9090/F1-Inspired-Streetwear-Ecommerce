import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import 4 different images
import tee1 from "../assets/product1.png";
import tee2 from "../assets/product2.png";
import tee3 from "../assets/product3.png";
import tee4 from "../assets/product4.png";

const images = [tee1, tee2, tee3, tee4];

const tees = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 101,
  name: `Tees ${i + 1}`,
  price: `$${25 + i * 4}`,
  image: images[i]
}));

function Category({ dabba }) {
  const navigate = useNavigate();

  return (
    <div className={dabba ? "category dark-category" : "category"}>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <h1 className="category-heading">Tees Collection</h1>
      <div className="category-grid">
        {tees.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="category-card"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Category;
