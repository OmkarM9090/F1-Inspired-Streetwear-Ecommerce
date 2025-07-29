import React from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function Signup({ dabba }) {
  const navigate = useNavigate();

  return (
    <div className={dabba ? "form-container dark-form" : "form-container"}>
      <h2>Sign Up</h2>

      <form
        name="signup-form"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbxcSnkdW0IVreCgseXQY151vW92RrE6txXTOw7iFFiPkiyPRB6xQBjNzq_K9BfjeJBQ6Q/exec"
        target="_blank"
        onSubmit={() => {
          alert("Form submitted! Account created (dummy), redirected to login.");
          setTimeout(() => {
            navigate("/login");
          }, 100);
        }}
      >
        <input name="Name" type="text" placeholder="Name" required />
        <input name="Email" type="email" placeholder="Email" required />
        <input name="Password" type="password" placeholder="Password" required />

        <button type="submit">Create Account</button>

        <p onClick={() => navigate("/login")} className="form-link">
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}

export default Signup;
