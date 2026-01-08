import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for shopping with us.</p>

      <Link to="/">
        <button style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px"
        }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;
