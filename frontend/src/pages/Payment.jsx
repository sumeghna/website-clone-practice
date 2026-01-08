import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Payment() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const validatePayment = () => {
    // Check card number (must be 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
      setError("Invalid Card Number (must be 16 digits)");
      return false;
    }

    // Check card holder name
    if (cardName.trim().length < 3) {
      setError("Enter a valid Card Holder Name");
      return false;
    }

    // Check expiry (MM/YY format & valid future date)
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setError("Expiry must be in MM/YY format");
      return false;
    }

    const [mm, yy] = expiry.split("/").map(Number);
    if (mm < 1 || mm > 12) {
      setError("Invalid expiry month");
      return false;
    }
    const currentYear = Number(String(new Date().getFullYear()).slice(2));
    const currentMonth = new Date().getMonth() + 1;
    if (yy < currentYear || (yy === currentYear && mm < currentMonth)) {
      setError("Card has expired");
      return false;
    }

    // Check CVV (3 digits)
    if (!/^\d{3}$/.test(cvv)) {
      setError("Invalid CVV (3 digits)");
      return false;
    }

    setError("");
    return true;
  };

  const handlePayment = () => {
    if (!validatePayment()) return;

    alert("Payment Successful!");
    clearCart();
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>No items to checkout</h2>;
  }

  return (
    <div style={{
      width: "400px",
      margin: "40px auto",
      border: "1px solid #ddd",
      padding: "25px",
      borderRadius: "6px"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Payment Details</h2>

      {error && (
        <p style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>
          {error}
        </p>
      )}

      <input
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value.replace(/\s+/g, ''))}
        maxLength="16"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        placeholder="Card Holder Name"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          maxLength="5"
          style={{ flex: 1, padding: "10px" }}
        />
        <input
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
          maxLength="3"
          style={{ flex: 1, padding: "10px" }}
        />
      </div>

      <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>

      <button
        onClick={handlePayment}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "12px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px"
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
