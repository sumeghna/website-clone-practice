import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Payment() {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const handlePayment = () => {
        alert("Payment Successful!");
        clearCart();
        navigate("/order-success");
    };

    return (
        <div style={{
            maxWidth: "400px",
            margin: "40px auto",
            padding: "30px",
            border: "1px solid #ccc"
        }}>
            <h2 style={{ marginBottom: "20px" }}>Payment Details</h2>

            <input placeholder="Card Number" style={{ width: "100%", marginBottom: "10px" }} />
            <input placeholder="Card Holder Name" style={{ width: "100%", marginBottom: "10px" }} />

            <div style={{ display: "flex", gap: "10px" }}>
                <input placeholder="MM/YY" style={{ flex: 1 }} />
                <input placeholder="CVV" style={{ flex: 1 }} />
            </div>

            <button
                onClick={handlePayment}
                style={{
                    marginTop: "20px",
                    width: "100%",
                    padding: "10px",
                    background: "black",
                    color: "white"
                }}
            >
                Pay Now
            </button>
        </div>
    );
}

export default Payment;
