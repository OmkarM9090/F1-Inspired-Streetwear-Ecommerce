import React, { useState } from "react";
import "./Form.css";

function ForgotPassword({ dabba }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPass, setNewPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else {
      alert("Password reset successful (dummy)");
    }
  };

  return (
    <div className={dabba ? "form-container dark-form" : "form-container"}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {step === 2 && (
          <input
            type="text"
            placeholder="Enter OTP"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
        {step === 3 && (
          <input
            type="password"
            placeholder="New Password"
            required
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        )}
        <button type="submit">
          {step === 1 ? "Send OTP" : step === 2 ? "Verify OTP" : "Reset Password"}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
