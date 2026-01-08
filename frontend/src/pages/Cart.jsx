import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/category.css"; // reuse product-card styles

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px 60px" }}>
      <h2 style={{ marginBottom: "30px" }}>Your Cart</h2>

      {/* CART GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {cart.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>

            <h3 className="product-name">{item.name}</h3>

            <p className="price">Rs. {item.price}</p>

            <button
              className="add-to-cart"
              style={{ background: "#777" }}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* CART SUMMARY */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #eee",
          paddingTop: "20px",
        }}
      >
        <h3>Total: Rs. {total}</h3>

        <button
          onClick={() => navigate("/payment")}
          style={{
            padding: "14px 32px",
            background: "#d4141e",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Cart;
