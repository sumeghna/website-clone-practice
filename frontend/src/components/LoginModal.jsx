import { useState } from "react";
import axios from "axios";
import "./LoginModal.css";

const LoginModal = ({ onClose }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔴 REQUIRED

    if (phone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        phone,
      });

      console.log(res.data);
      alert("Login success");

      onClose(); // close modal after success
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="login-left">
          <h1>CAMPUS</h1>
          <p>move your way</p>
          <h3>Login now to avail best offers!</h3>

          <div className="features">
            <span>⭐ Customer-first</span>
            <span>⭐ Transparent</span>
            <span>⭐ Innovative</span>
          </div>
        </div>

        <div className="login-right">
          <h2>Login / SignUp</h2>

          {/* 🔴 FORM IS MANDATORY */}
          <form onSubmit={handleSubmit}>
            <div className="phone-input">
              <span>+91</span>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <label className="checkbox">
              <input type="checkbox" />
              Notify me with offers & updates
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Submit"}
            </button>

            <p className="terms">
              I accept the Privacy Policy & T&Cs
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
