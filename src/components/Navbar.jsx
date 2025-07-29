import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ dabba, changetheme }) {
  return (
    <div className={dabba ? "navbar dark-navbar" : "navbar"}>
      <Link to="/" className="nav-logo">Throttle Theory</Link>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/category/tees">Tees</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <button className="theme-btn" onClick={changetheme}>
          {dabba ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
