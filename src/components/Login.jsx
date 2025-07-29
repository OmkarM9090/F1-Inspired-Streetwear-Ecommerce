import React from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Login({ dabba }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful (dummy)");
    navigate("/");
  };

  return (
    <div className={dabba ? "form-container dark-form" : "form-container"}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p onClick={() => navigate("/forgot-password")} className="form-link">Forgot Password?</p>
        <p onClick={() => navigate("/signup")} className="form-link">Don't have an account? Sign Up</p>
      </form>
    </div>
  );
}

export default Login;
