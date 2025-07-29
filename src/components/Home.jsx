import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home(props) {
  const navigate = useNavigate();

  const categories = [
    { name: "Tees", link: "/category/tees", functional: true },
    { name: "Jackets", functional: false },
    { name: "Caps", functional: false },
    { name: "Accessories", functional: false },
    { name: "Limited", functional: false },
  ];

  return (
    <div className={props.dabba ? "home dark-home" : "home"}>
      <div className="hero-section">
        <h1>Throttle Theory</h1>
        <p>F1-Inspired Streetwear for Speed Enthusiasts</p>
        <button onClick={() => navigate("/products")}>View All Products</button>
      </div>

      <div className="category-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="category-card"
              onClick={() => cat.functional && navigate(cat.link)}
            >
              <p className="cat-name">{cat.name}</p>
              {!cat.functional && <p className="coming-soon">(Coming Soon)</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
